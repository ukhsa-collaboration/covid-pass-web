import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { trackEvent } from 'helpers/appInsights'
import nhsStatusCodes from 'api/nhsStatusCodes'
import { isNhsAppNative, goToNhsUplift } from 'helpers/isNhsApp'
import { upliftUrl, checkCacheUnixTime } from 'helpers/auth'
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
import { uuidCookieReduxNotMatching } from 'helpers/auth'

const Uplift = ({ elements, page }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])

    const handleUpliftClick = (event) => {
        event.preventDefault()
        if (isNhsAppNative()) {
            goToNhsUplift()
        } else {
            uppLiftStandalone()
        }
        trackEvent(page + ' - P5 Uplift Link Click')
    }

    const uppLiftStandalone = async () => {
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
                        const redirectUri = window.location.origin + '/'
                        const assertedLoginIdentity = res.data
                        let redirectLink = upliftUrl(assertedLoginIdentity, redirectUri)
                        window.location.href = redirectLink
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
            trackEvent('uplift - Id token session expired')
        }
    }

    return (
        <span
            onClick={(e) => handleUpliftClick(e)}
            onKeyPress={(e) => {
                e.code === 'Enter' && handleUpliftClick(e)
            }}
            role="button"
            tabIndex={0}
            id="uplift-click-container">
            {elements}
        </span>
    )
}

Uplift.propTypes = {
    elements: PropTypes.element.isRequired,
    page: PropTypes.string.isRequired
}

export default Uplift