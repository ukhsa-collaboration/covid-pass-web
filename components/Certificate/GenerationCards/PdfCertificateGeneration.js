import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { trackEvent, trackError } from 'helpers/appInsights'
import { isIOS, isChrome } from 'react-device-detect'
import { useDispatch, useSelector } from 'react-redux'
import nhsStatusCodes from 'api/nhsStatusCodes'
import { pdfDirectDownload, GetInternationalPDF } from 'actions/userActions'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import {
    CACHE_INTERNATIONAL_CERTIFICATE_PDF_BLOB_EN,
    CACHE_INTERNATIONAL_CERTIFICATE_PDF_BLOB_CY,
    CACHE_DOMESTIC_CERTIFICATE_PDF_BLOB_EN,
    CACHE_DOMESTIC_CERTIFICATE_PDF_BLOB_CY,
    CACHE_PDF_DOMESTIC_DOWNLOAD_LIMIT_EXPIRY,
    CACHE_PDF_INTERNATIONAL_DOWNLOAD_LIMIT_EXPIRY
} from 'actions/types'
import { ERROR_500, SESSION_EXPIRED, TIMEOUT_ERROR } from 'constants/routes'
import { isNhsAppNative, nhsAppDownloadFromBytes } from 'helpers/isNhsApp'
import DownloadIcon from 'components/icons/DownloadIcon'
import { checkCacheUnixTime, uuidCookieReduxNotMatching } from 'helpers/auth'
import {
    getUserToken,
    getUserTokenId,
    getUserTokenIdUnixExpiry,
    getUserPreferenceSelectedFlow
} from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY, LANGUAGE_CODES } from 'constants/index'
import { pdfCertificateGenerationPageStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { certificateTypeToText } from 'helpers/certificateHelper'
import useEndUserSession from 'hooks/useEndUserSession'

const PdfCertificateGeneration = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { routeThenEndSession, mismatchedUuidEndSession } = useEndUserSession()

    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    const [loading, setLoading] = React.useState(false)
    const [spamError, setSpamError] = React.useState({
        showError: false,
        errorMessage: ''
    })
    const [pdfDownloaded, setPdfDownloaded] = React.useState(false) //This is used to make sure that the PDF limiter error message is not shown on the first render when the limit is has been reached

    pdfCertificateGenerationPageStrings.setLanguage(getLanguage(user))

    const fetchPdf = () => {
        if (uuidCookieReduxNotMatching(cookies, user)) {
            mismatchedUuidEndSession()
            return
        }

        setSpamError({
            showError: false,
            errorMessage: ''
        })
        getUserPreferenceSelectedFlow(cookies) === 'international'
            ? fetchInternationalPdf()
            : fetchDomesticPdf()
        trackEvent(
            getUserPreferenceSelectedFlow(cookies) +
                ' Certificate - Certificate PDF Download Button Click'
        )
    }

    const fetchInternationalPdf = async () => {
        if (!loading) {
            setPdfDownloaded(true)
            setLoading(true)
            if (
                userApiCache.certificatePdfBlob.international[getLanguage(user)].blob &&
                checkCacheUnixTime(
                    userApiCache.certificatePdfBlob.international[getLanguage(user)].cacheExpiry
                )
            ) {
                downloadPdf(userApiCache.certificatePdfBlob.international[getLanguage(user)].blob)
            } else if (pdfDownloadLimitReached(userApiCache.pdfDownloadLimitExpiry.international)) {
                setSpamError({
                    showError: true,
                    errorMessage: constructPdfLimiterErrorMessage()
                })
                setLoading(false)
            } else {
                if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
                    try {
                        const res = await dispatch(
                            GetInternationalPDF(
                                getUserToken(cookies),
                                getUserTokenId(cookies),
                                getLanguage(user)
                            )
                        )
                        if (res.status === nhsStatusCodes.Success) {
                            downloadPdf(res.data)
                            dispatch({
                                type:
                                    getLanguage(user) === LANGUAGE_CODES.en
                                        ? CACHE_INTERNATIONAL_CERTIFICATE_PDF_BLOB_EN
                                        : CACHE_INTERNATIONAL_CERTIFICATE_PDF_BLOB_CY,
                                payload: {
                                    blob: res.data,
                                    cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15
                                }
                            })
                        }
                    } catch (err) {
                        switch (err?.response?.status) {
                            case nhsStatusCodes.AuthTokenIncorrect:
                                routeThenEndSession(SESSION_EXPIRED)
                                break
                            case nhsStatusCodes.ShareCodeLimitReached:
                                dispatch({
                                    type: CACHE_PDF_INTERNATIONAL_DOWNLOAD_LIMIT_EXPIRY,
                                    payload:
                                        Math.round(new Date().getTime() / 1000) +
                                        parseInt(err.response.headers['retry-after'])
                                })
                                break
                            case nhsStatusCodes.RequestTimeout:
                                router.push(TIMEOUT_ERROR)
                                break
                            case nhsStatusCodes.WrongRequest:
                            case nhsStatusCodes.ServerError:
                            case nhsStatusCodes.wafErrorError:
                            default:
                                routeThenEndSession(ERROR_500)
                                break
                        }
                        trackError('API - Certificate International PDF Download', err)
                        setLoading(false)
                    }
                } else {
                    routeThenEndSession(SESSION_EXPIRED)
                    trackEvent('PDF Download - Id token session expired')
                }
            }
        }
    }

    const fetchDomesticPdf = async () => {
        if (!loading) {
            setPdfDownloaded(true)
            setLoading(true)
            if (
                userApiCache.certificatePdfBlob.domestic[getLanguage(user)].blob &&
                checkCacheUnixTime(
                    userApiCache.certificatePdfBlob.domestic[getLanguage(user)].cacheExpiry
                )
            ) {
                downloadPdf(userApiCache.certificatePdfBlob.domestic[getLanguage(user)].blob)
            } else if (pdfDownloadLimitReached(userApiCache.pdfDownloadLimitExpiry.domestic)) {
                setSpamError({
                    showError: true,
                    errorMessage: constructPdfLimiterErrorMessage()
                })
                setLoading(false)
            } else {
                if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
                    try {
                        const res = await dispatch(
                            pdfDirectDownload(
                                getUserToken(cookies),
                                getUserTokenId(cookies),
                                getLanguage(user)
                            )
                        )
                        if (res.status === nhsStatusCodes.Success) {
                            downloadPdf(res.data)
                            dispatch({
                                type:
                                    getLanguage(user) === LANGUAGE_CODES.en
                                        ? CACHE_DOMESTIC_CERTIFICATE_PDF_BLOB_EN
                                        : CACHE_DOMESTIC_CERTIFICATE_PDF_BLOB_CY,
                                payload: {
                                    blob: res.data,
                                    cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15
                                }
                            })
                        }
                    } catch (err) {
                        switch (err?.response?.status) {
                            case nhsStatusCodes.AuthTokenIncorrect:
                                routeThenEndSession(SESSION_EXPIRED)
                                break
                            case nhsStatusCodes.ShareCodeLimitReached:
                                dispatch({
                                    type: CACHE_PDF_DOMESTIC_DOWNLOAD_LIMIT_EXPIRY,
                                    payload:
                                        Math.round(new Date().getTime() / 1000) +
                                        parseInt(err.response.headers['retry-after'])
                                })
                                break
                            case nhsStatusCodes.RequestTimeout:
                                router.push(TIMEOUT_ERROR)
                                break
                            case nhsStatusCodes.WrongRequest:
                            case nhsStatusCodes.ServerError:
                            case nhsStatusCodes.wafErrorError:
                            default:
                                routeThenEndSession(ERROR_500)
                                break
                        }
                        trackError('API - Certificate Domestic PDF Download', err)
                        setLoading(false)
                    }
                } else {
                    routeThenEndSession(SESSION_EXPIRED)
                    trackEvent('PDF Download - Id token session expired')
                }
            }
        }
    }

    useEffect(() => {
        const expiry = userApiCache.pdfDownloadLimitExpiry
        if (pdfDownloaded && (expiry.domestic || expiry.international)) {
            setSpamError({
                showError: true,
                errorMessage: constructPdfLimiterErrorMessage()
            })
        }
    }, [userApiCache.pdfDownloadLimitExpiry, pdfDownloaded])

    useEffect(() => {
        if (spamError.showError) {
            const interval = setInterval(() => {
                const errorMessage = constructPdfLimiterErrorMessage()
                if (errorMessage) {
                    setSpamError({
                        showError: true,
                        errorMessage: errorMessage
                    })
                } else {
                    setSpamError({
                        showError: false,
                        errorMessage: ''
                    })
                }
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [spamError])

    const pdfDownloadLimitReached = (pdfDownloadLimitExpiry) => {
        return checkCacheUnixTime(pdfDownloadLimitExpiry)
    }

    const getTimeLeft = () => {
        const pdfDownloadLimitExpiry =
            getUserPreferenceSelectedFlow(cookies) === 'international'
                ? userApiCache.pdfDownloadLimitExpiry.international
                : userApiCache.pdfDownloadLimitExpiry.domestic
        const secondsUntilNextDownload =
            pdfDownloadLimitExpiry - Math.round(new Date().getTime() / 1000)
        const hours = Math.floor(secondsUntilNextDownload / 3600)
        const minutes = Math.floor((secondsUntilNextDownload % 3600) / 60)
        const seconds = Math.floor((secondsUntilNextDownload % 3600) % 60)

        return {
            hours: parseInt(hours),
            minutes: parseInt(minutes),
            seconds: parseInt(seconds)
        }
    }

    const constructPdfLimiterErrorMessage = () => {
        const timeLeft = getTimeLeft()
        let hours, minutes

        if (timeLeft.minutes === 59) {
            //When there is e.g. 59m & 26s left we'd like to show 1hr rather than 60min
            timeLeft.hours += 1
        }

        switch (true) {
            case timeLeft.hours > 1:
                hours = timeLeft.hours + ' ' + pdfCertificateGenerationPageStrings.pdfLimit.hours
                break
            case timeLeft.hours === 1:
                hours = timeLeft.hours + ' ' + pdfCertificateGenerationPageStrings.pdfLimit.hour
                break
            default:
                hours = ''
        }

        switch (true) {
            case timeLeft.minutes === 0:
                minutes = '1 ' + pdfCertificateGenerationPageStrings.pdfLimit.minute
                break
            case timeLeft.minutes > 0:
                if (timeLeft.minutes === 59) {
                    //When there is e.g. 59m & 26s left we'd like to show 1hr rather than 60min
                    minutes = ''
                } else {
                    minutes =
                        timeLeft.minutes +
                        1 +
                        ' ' +
                        pdfCertificateGenerationPageStrings.pdfLimit.minutes
                }
                break
        }

        return timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
            ? false
            : pdfCertificateGenerationPageStrings.pdfLimit.text + ' ' + hours + ' ' + minutes
    }

    const downloadPdf = async (blob) => {
        const fileName = pdfCertificateGenerationPageStrings.fileName + '.pdf'
        // Set the blob type to final pdf - https://developer.mozilla.org/en-US/docs/Web/API/Blob

        if (isNhsAppNative()) {
            const blobFile = new Blob([blob], {
                type: 'application/pdf'
            })
            downloadNhsPdf(blobFile, fileName)
        } else {
            /*
             * This check is needed based on a bug found within iOS
             * If future bugs are reported with iOS please check this feed, or around this topic area
             * https://discussions.apple.com/thread/252247740
             */
            const blobFile =
                isIOS && !isChrome
                    ? new Blob([blob])
                    : new Blob([blob], {
                          type: 'application/pdf'
                      })
            const fileURL = URL.createObjectURL(blobFile)

            if (window.navigator.msSaveOrOpenBlob) {
                /* Support of IE
                 * IE doesn't allow using a blob object directly as link href
                 * Instead it is necessary to use msSaveOrOpenBlob
                 */
                window.navigator.msSaveOrOpenBlob(blobFile, fileName)
            } else if (isIOS && isChrome) {
                window.open(fileURL, '_blank')
            } else {
                const link = document.createElement('a')
                link.href = fileURL
                link.target = '_blank'
                link.download = fileName
                link.click()
            }

            setLoading(false)
        }
        trackEvent(
            getUserPreferenceSelectedFlow(cookies) +
                ' Certificate - Certificate PDF Download success'
        )
        if (getUserPreferenceSelectedFlow(cookies) === 'domestic') {
            trackEvent(
                `Certificate - Certificate PDF Download - Domestic ${certificateTypeToText(
                    userApiCache.certificate.domestic.certificateType
                )}`
            )
        }
    }

    const downloadNhsPdf = async (blob, fileName) => {
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = function () {
            const base64data = reader.result
            nhsAppDownloadFromBytes(base64data, fileName, 'application/pdf')
        }
        setLoading(false)
    }

    return (
        <div className="pdf-generation link-bar">
            <div
                className={
                    'link-bar_div non-decoration-link-text ' + (loading ? 'is-disabled' : null)
                }
                role="button"
                tabIndex={0}
                onClick={fetchPdf}
                onKeyDown={(e) => {
                    e.key === 'Enter' && fetchPdf()
                }}
                target="_blank">
                <span className="hover-text-container">
                    <div className="link-bar-flex-container">
                        <DownloadIcon className="card-link-icon" />
                        <div className="text">
                            {loading
                                ? pdfCertificateGenerationPageStrings.downloading
                                : pdfCertificateGenerationPageStrings.download}
                            {getLanguage(user) === LANGUAGE_CODES.cy ? (
                                <span className="bilingual-text">
                                    <span className="bilingual-text__block">
                                        {loading
                                            ? pdfCertificateGenerationPageStrings.downloading__bilingual
                                            : pdfCertificateGenerationPageStrings.download__bilingual}
                                    </span>
                                </span>
                            ) : null}
                        </div>
                    </div>
                </span>
            </div>

            {loading && (
                <div className="nhsuk-u-padding-top-3">
                    <LoadingSpinner size="small" certificateLoader />
                </div>
            )}

            {spamError.showError && (
                <div id="certificate-generation-pdf">
                    <span
                        className="nhsuk-error-message"
                        role="alert"
                        aria-describedby="email_limit_error">
                        <span className="nhsuk-u-visually-hidden">
                            {pdfCertificateGenerationPageStrings.hiddenError}
                        </span>
                        {spamError['errorMessage']}
                    </span>
                </div>
            )}
        </div>
    )
}

export default PdfCertificateGeneration
