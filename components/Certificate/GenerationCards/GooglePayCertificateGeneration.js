import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { trackEvent, trackError } from 'helpers/appInsights'
import { walletPassGoogle } from 'actions/userActions'
import nhsStatusCodes from 'api/nhsStatusCodes'
import { useRouter } from 'next/router'
import GooglePayButton from 'components/buttons/GooglePayButton'
import { showGoogleWallet } from 'helpers/walletHelper'
import { checkCacheUnixTime, uuidCookieReduxNotMatching } from 'helpers/auth'
import { ERROR_500, SESSION_EXPIRED, TIMEOUT_ERROR } from 'constants/routes'
import { CACHE_GOOGLE_WALLET_DOMESTIC_URL } from 'actions/types'
import { getUserToken, getUserTokenId, getUserTokenIdUnixExpiry } from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getLanguage } from 'helpers/userHelper'
import { certificateTypeToText } from 'helpers/certificateHelper'
import useEndUserSession from 'hooks/useEndUserSession'

const GooglePayCertificateGeneration = ({ QRType, DoseNumber = null }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { routeThenEndSession, mismatchedUuidEndSession } = useEndUserSession()

    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)

    const handleClick = async () => {
        trackEvent('Google Wallet - button click')

        if (uuidCookieReduxNotMatching(cookies, user)) {
            mismatchedUuidEndSession()
            return
        }

        if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
            trackEvent(
                `Trying to call Google Wallet API: QRType: ${QRType}, DoseNumber: ${
                    DoseNumber !== null ? DoseNumber : '-'
                }`
            )
            try {
                const res = await dispatch(
                    walletPassGoogle(
                        getUserToken(cookies),
                        getUserTokenId(cookies),
                        QRType,
                        DoseNumber,
                        getLanguage(user)
                    )
                )

                if (res.status === nhsStatusCodes.Success) {
                    const jwt = res.data
                    const url = 'https://pay.google.com/gp/v/save/' + jwt
                    openGooglePassUrl(url)

                    if (QRType === 0) {
                        trackEvent(
                            `Certificate - Google Wallet - Domestic ${certificateTypeToText(
                                userApiCache.certificate.domestic.certificateType
                            )}`
                        )
                    }

                    dispatch({
                        type: CACHE_GOOGLE_WALLET_DOMESTIC_URL,
                        payload: {
                            url: url,
                            cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15
                        }
                    })
                }
            } catch (err) {
                switch (err?.response?.status) {
                    case nhsStatusCodes.AuthTokenIncorrect:
                        routeThenEndSession(SESSION_EXPIRED)
                        break
                    case nhsStatusCodes.RequestTimeout:
                        router.push(TIMEOUT_ERROR)
                        break
                    case nhsStatusCodes.WrongRequest:
                    case nhsStatusCodes.ServerError:
                    default:
                        routeThenEndSession(ERROR_500)
                        break
                }

                trackError('API - Google Wallet', err)
            }
        } else {
            routeThenEndSession(SESSION_EXPIRED)
            trackEvent('Google Wallet - Id token session expired')
        }
    }

    const openGooglePassUrl = (url) => {
        window.open(url, '_blank')
    }

    return showGoogleWallet() ? (
        <div className="button-row">
            <GooglePayButton onClick={handleClick} />
        </div>
    ) : null
}

GooglePayCertificateGeneration.propTypes = {
    QRType: PropTypes.number.isRequired,
    DoseNumber: PropTypes.number
}

export default GooglePayCertificateGeneration
