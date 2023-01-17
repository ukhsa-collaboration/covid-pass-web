import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { trackEvent } from 'helpers/appInsights'
import nhsStatusCodes from 'api/nhsStatusCodes'
import { isNhsAppNative } from 'helpers/isNhsApp'
import { checkCacheUnixTime } from 'helpers/auth'
import { ERROR_500, SESSION_EXPIRED, SESSION_ENDED } from 'constants/routes'
import { FetchAssertedLoginIdentity } from 'actions/userActions'
import { REMOVE_ALL_REDUX } from 'actions/types'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import {
    getUserToken,
    getUserTokenId,
    getUserTokenIdUnixExpiry,
    removeUserCookie
} from 'helpers/cookieHelper'
import { isIOS } from 'react-device-detect'
import { uuidCookieReduxNotMatching } from 'helpers/auth'

const ManageNHSLogin = ({ elements, page, ariaLabel }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])

    const handleManageNHSLogin = (event) => {
        event.preventDefault()
        if (isNhsAppNative()) {
            window.open(process.env.NEXT_PUBLIC_NHS_SETTINGS_URL, '_blank')
        } else {
            manageNHSLoginStandalone()
        }
        trackEvent(page + ' - Manage NHS')
    }

    const manageNHSLoginStandalone = async () => {
        if (uuidCookieReduxNotMatching(cookies, user)) {
            router.push(SESSION_ENDED).then(() => {
                dispatch({ type: REMOVE_ALL_REDUX })
            })
            return
        }

        if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
            try {
                const res = await dispatch(
                    FetchAssertedLoginIdentity(getUserToken(cookies), getUserTokenId(cookies))
                )

                if (res.status === nhsStatusCodes.Success) {
                    if (window.location) {
                        const assertedLoginIdentity = res.data
                        let redirectLink =
                            process.env.NEXT_PUBLIC_NHS_SETTINGS_URL +
                            '?asserted_login_identity=' +
                            assertedLoginIdentity
                        if (isIOS) {
                            /*  Window.open() is not supported on iOS and safari, meaning it will have to be opened in the same window. 
                                https://developer.mozilla.org/en-US/docs/Web/API/Window/open
                            */
                            window.location.href = redirectLink
                        } else {
                            window.open(redirectLink, '_blank')
                        }
                    }
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
                    case nhsStatusCodes.wafErrorError:
                    default:
                        router.push(ERROR_500).then(() => {
                            removeUserCookie(setCookie)
                            dispatch({ type: REMOVE_ALL_REDUX })
                        })
                        break
                }
            }
        } else {
            router.push(SESSION_EXPIRED).then(() => {
                removeUserCookie(setCookie)
                dispatch({ type: REMOVE_ALL_REDUX })
            })
            trackEvent('Manage NHS - Id token session expired')
        }
    }

    return (
        <span
            className="manage-nhs-login-click-container"
            onClick={(e) => handleManageNHSLogin(e)}
            onKeyPress={(e) => {
                e.key === 'Enter' && handleManageNHSLogin(e)
            }}
            role="button"
            aria-label={ariaLabel}
            tabIndex={0}>
            {elements}
        </span>
    )
}

ManageNHSLogin.propTypes = {
    elements: PropTypes.element.isRequired,
    page: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string
}

export default ManageNHSLogin
