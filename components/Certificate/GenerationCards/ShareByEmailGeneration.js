import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import nhsStatusCodes from 'api/nhsStatusCodes'
import { sendCertificate, sendInternationalEmail } from 'actions/userActions'
import { trackEvent, trackError } from 'helpers/appInsights'
import { emailValid } from 'helpers/validations'
import { shareByEmailGenerationPageStrings } from 'localization/translations'
import { EMAIL_LIMIT } from 'actions/types'
import EmailIcon from 'components/icons/EmailIcon'
import ArrowIcon from 'components/icons/ArrowIcon'
import { useRouter } from 'next/router'
import { COVID_STATUS, ERROR_500, SESSION_EXPIRED, TIMEOUT_ERROR } from 'constants/routes'
import { removeSlashFromRoute } from 'helpers/index'
import {
    getUserToken,
    getUserTokenId,
    getUserTokenIdUnixExpiry,
    getUserPreferenceSelectedFlow
} from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY, LANGUAGE_CODES } from 'constants/index'
import { checkCacheUnixTime, uuidCookieReduxNotMatching } from 'helpers/auth'
import PrimaryButton from 'components/buttons/PrimaryButton'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { getLanguage } from 'helpers/userHelper'
import { certificateTypeToText } from 'helpers/certificateHelper'
import useEndUserSession from 'hooks/useEndUserSession'

const ShareByEmailGeneration = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { routeThenEndSession, mismatchedUuidEndSession } = useEndUserSession()

    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    const [error, setError] = React.useState({
        showError: false,
        errorMessage: ''
    })
    const [spamError, setSpamError] = React.useState({
        showError: false,
        errorMessage: ''
    })
    const [emailSent, setEmailSent] = React.useState(false)
    const [sharingCert, setSharingCert] = React.useState(false)
    const [emailInputValue, setEmailInputValue] = React.useState('')
    const [showMore, setShowMore] = React.useState(false)
    const [disableButton, setDisableButton] = React.useState(false)
    const [backendLimitReached, setBackendLimitReached] = React.useState(false)

    const maxEmailsLimit = 5

    shareByEmailGenerationPageStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        if (user.email) {
            setEmailInputValue(user.destination.value)
        }
    }, [user.email, user.destination.value])

    useEffect(() => {
        if (userApiCache.emailSentCount > maxEmailsLimit) {
            setDisableButton(true)
            setSpamError({
                showError: true,
                errorMessage: shareByEmailGenerationPageStrings.emailLimit.error3
            })
        }
    }, [userApiCache, cookies, user])

    let buttonTimeout

    const handleSendClick = async () => {
        setEmailSent(false)
        setError({
            showError: false,
            errorMessage: ''
        })

        if (uuidCookieReduxNotMatching(cookies, user)) {
            mismatchedUuidEndSession()
            return
        }

        if (emailLimit()) {
            const validation = emailValid(emailInputValue)
            if (validation.status) {
                shareCertificate()
                trackEvent(
                    getUserPreferenceSelectedFlow(cookies) +
                        ' Certificate - Certificate Email Button Click'
                )
                // Set disable button to true
                setDisableButton(true)
                // 10 seconds count down until it's enabled again, only if the limit is less than {MaxEmailsLimit} && if the backend limit has not been reached already
                if (userApiCache.emailSentCount < maxEmailsLimit && !backendLimitReached) {
                    buttonTimeout = setTimeout(() => {
                        setDisableButton(false)
                    }, 1000 * 10) // this equals 10 seconds in milliseconds (10000)
                }
            } else {
                setError({
                    showError: true,
                    errorMessage: validation.msg
                })
            }
        } else {
            setDisableButton(true)
        }
    }

    const emailLimit = () => {
        userApiCache.emailSentCount > 2 ? setDisableButton(true) : null
        if (userApiCache.emailSentCount >= 7 && userApiCache.emailSentCount <= maxEmailsLimit) {
            setSpamError({
                showError: true,
                errorMessage:
                    shareByEmailGenerationPageStrings.emailLimit.error1 +
                    (maxEmailsLimit - userApiCache.emailSentCount) +
                    shareByEmailGenerationPageStrings.emailLimit.error2
            })
            return true
        }
        if (userApiCache.emailSentCount >= maxEmailsLimit) {
            setSpamError({
                showError: true,
                errorMessage: shareByEmailGenerationPageStrings.emailLimit.error3
            })
            setDisableButton(true)
            return false
        }
        return true
    }

    const shareCertificate = async () => {
        if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
            try {
                setSharingCert(true)
                const res = await dispatch(
                    getUserPreferenceSelectedFlow(cookies) === 'international'
                        ? sendInternationalEmail(
                              getUserToken(cookies),
                              getUserTokenId(cookies),
                              emailInputValue,
                              getLanguage(user)
                          )
                        : sendCertificate(
                              getUserToken(cookies),
                              getUserTokenId(cookies),
                              emailInputValue,
                              getLanguage(user)
                          )
                )
                if (res.status === nhsStatusCodes.Success) {
                    setSharingCert(false)
                    setEmailSent(true)
                    dispatch({ type: EMAIL_LIMIT, payload: userApiCache.emailSentCount + 1 })
                    trackEvent('Certificate - Certificate Email has been successfully sent')
                    if (getUserPreferenceSelectedFlow(cookies) === 'domestic') {
                        trackEvent(
                            `Certificate - Certificate Email - Domestic ${certificateTypeToText(
                                userApiCache.certificate.domestic.certificateType
                            )}`
                        )
                    }
                }
            } catch (err) {
                switch (err?.response?.status) {
                    case nhsStatusCodes.ShareCodeLimitReached:
                        setSpamError({
                            showError: true,
                            errorMessage: shareByEmailGenerationPageStrings.emailLimit.error4
                        })
                        setDisableButton(true)
                        trackEvent(
                            'Certificate - Certificate Email has reached limit for daily emails'
                        )
                        setBackendLimitReached(true)

                        break
                    case nhsStatusCodes.AuthTokenIncorrect:
                        routeThenEndSession(SESSION_EXPIRED)
                        break
                    case nhsStatusCodes.RequestTimeout:
                        router.push(TIMEOUT_ERROR)
                        break
                    case nhsStatusCodes.WrongRequest:
                    case nhsStatusCodes.ServerError:
                    case nhsStatusCodes.wafErrorError:
                    default:
                        routeThenEndSession(
                            ERROR_500 + '?page=' + removeSlashFromRoute(COVID_STATUS)
                        )

                        break
                }
                setSharingCert(false)
                trackError('API - Certificate Share', err)
            }
        } else {
            routeThenEndSession(SESSION_EXPIRED)
            trackEvent('Status - Id token session expired')
        }
    }

    const emailInputOnChange = (event) => {
        setEmailInputValue(event.target.value)
        if (userApiCache.emailSentCount < maxEmailsLimit && !backendLimitReached) {
            clearInterval(buttonTimeout)
        }
    }

    return (
        <div className="pdf-share link-bar">
            <div
                className="link-bar_div non-decoration-link-text"
                data-testid="pdf-share-expander-bar"
                id="pdf-share-expander-bar"
                role="button"
                aria-label={shareByEmailGenerationPageStrings.accessibilityExpanderText1}
                tabIndex={0}
                aria-expanded={showMore}
                onClick={() => setShowMore(!showMore)}
                onKeyDown={(e) => {
                    e.key === 'Enter' && setShowMore(!showMore)
                }}>
                <span className="hover-text-container">
                    <div className="link-bar-flex-container">
                        <EmailIcon className="card-link-icon" />
                        <div className="text">
                            {shareByEmailGenerationPageStrings.linkText1}
                            {getLanguage(user) === LANGUAGE_CODES.cy ? (
                                <span className="bilingual-text">
                                    <span className="bilingual-text__block">
                                        {shareByEmailGenerationPageStrings.linkText1__bilingual}
                                    </span>
                                </span>
                            ) : null}
                        </div>
                    </div>
                </span>
                <ArrowIcon
                    className={
                        'status-card-expander-icon ' +
                        (showMore ? 'icon-arrow-up' : 'icon-arrow-down')
                    }
                />
            </div>
            {showMore ? (
                <div
                    className={error['showError'] ? 'nhsuk-form-group--error' : ''}
                    id="certificate-generation-email">
                    <p className="nhsuk-hint nhsuk-u-margin-bottom-1">
                        {shareByEmailGenerationPageStrings.body1}
                        {getLanguage(user) === LANGUAGE_CODES.cy ? (
                            <span className="bilingual-text">
                                <span className="bilingual-text__block">
                                    {shareByEmailGenerationPageStrings.body1__bilingual}
                                </span>
                            </span>
                        ) : null}
                    </p>

                    <span className="font-italic nhsuk-u-font-size-16 nhsuk-hint">
                        {shareByEmailGenerationPageStrings.emailTooLargeWarning}
                    </span>

                    {error['showError'] && (
                        <span
                            className="nhsuk-error-message"
                            role="alert"
                            aria-describedby={
                                shareByEmailGenerationPageStrings.inputErrorAriaDescribedby
                            }>
                            <span className="nhsuk-u-visually-hidden">
                                {shareByEmailGenerationPageStrings.hiddenError}
                            </span>
                            {error['errorMessage']}
                        </span>
                    )}
                    {spamError['showError'] && (
                        <span
                            className="nhsuk-error-message"
                            role="alert"
                            aria-describedby="email_limit_error">
                            <span className="nhsuk-u-visually-hidden">
                                {userApiCache.emailSentCount >= maxEmailsLimit
                                    ? shareByEmailGenerationPageStrings.error.error1
                                    : shareByEmailGenerationPageStrings.error.error2}
                            </span>
                            {spamError['errorMessage']}
                        </span>
                    )}
                    <input
                        className={
                            'nhsuk-input nhsuk-input--width-20 nhsuk-u-margin-bottom-3 ' +
                            (error['showError'] ? 'nhsuk-input--error' : '')
                        }
                        id="emailInput"
                        name="emailInputCertificateGeneration"
                        type="email"
                        aria-label={shareByEmailGenerationPageStrings.emailInputAriaLabel}
                        aria-required="true"
                        value={emailInputValue}
                        autoComplete="email"
                        onChange={(e) => emailInputOnChange(e)}
                        onKeyDown={(e) => {
                            e.key === 'Enter' && !disableButton && handleSendClick()
                        }}
                    />

                    <div className="button-spinner-row">
                        <PrimaryButton
                            onClickAction={handleSendClick}
                            text={shareByEmailGenerationPageStrings.buttonText1}
                            extraClasses="initiate-button"
                            dataTestId={`email-initiate-button__${
                                disableButton ? 'disabled' : 'enabled'
                            }`}
                            disabledBtn={disableButton}
                        />
                        {sharingCert && <LoadingSpinner size="small" certificateLoader />}
                    </div>
                    {emailSent && (
                        <p
                            className="nhsuk-hint nhsuk-u-margin-bottom-1 nhsuk-u-margin-top-2"
                            role="alert">
                            {shareByEmailGenerationPageStrings.successfullySent}
                        </p>
                    )}
                </div>
            ) : null}
        </div>
    )
}

export default ShareByEmailGeneration
