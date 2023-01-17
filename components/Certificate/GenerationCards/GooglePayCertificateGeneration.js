import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { trackEvent, trackError } from 'helpers/appInsights'
import { walletPassGoogle } from 'actions/userActions'
import nhsStatusCodes from 'api/nhsStatusCodes'
import { useRouter } from 'next/router'
import GooglePayButton from 'components/buttons/GooglePayButton'
import { showGoogleWallet } from 'helpers/walletHelper'
import { checkCacheUnixTime } from 'helpers/auth'
import { ERROR_500, SESSION_EXPIRED, SESSION_ENDED } from 'constants/routes'
import { CACHE_GOOGLE_WALLET_DOMESTIC_URL, REMOVE_ALL_REDUX } from 'actions/types'
import {
    getUserToken,
    getUserTokenId,
    removeUserCookie,
    getUserTokenIdUnixExpiry
} from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getLanguage } from 'helpers/userHelper'
import { certificateTypeToText } from 'helpers/certificateHelper'
import { uuidCookieReduxNotMatching } from 'helpers/auth'

const GooglePayCertificateGeneration = ({ QRType, DoseNumber = null }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)

    const handleClick = async () => {
        trackEvent('Google Wallet - button click')

        if (uuidCookieReduxNotMatching(cookies, user)) {
            router.push(SESSION_ENDED).then(() => {
                dispatch({ type: REMOVE_ALL_REDUX })
            })
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
                        router.push(SESSION_EXPIRED).then(() => {
                            removeUserCookie(setCookie)
                            dispatch({ type: REMOVE_ALL_REDUX })
                        })
                        break
                    case nhsStatusCodes.WrongRequest:
                    case nhsStatusCodes.ServerError:
                    default:
                        router.push(ERROR_500).then(() => {
                            removeUserCookie(setCookie)
                            dispatch({ type: REMOVE_ALL_REDUX })
                        })
                        break
                }

                trackError('API - Google Wallet', err)
            }
        } else {
            router.push(SESSION_EXPIRED).then(() => {
                removeUserCookie(setCookie)
                dispatch({ type: REMOVE_ALL_REDUX })
            })
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
