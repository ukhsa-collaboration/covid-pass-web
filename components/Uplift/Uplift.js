import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import nhsStatusCodes from 'api/nhsStatusCodes'
import { trackEvent } from 'helpers/appInsights'
import { isNhsAppNative, goToNhsUplift } from 'helpers/isNhsApp'
import { upliftUrl, checkCacheUnixTime, uuidCookieReduxNotMatching } from 'helpers/auth'
import { getNhsLoginRedirectUri } from 'helpers/index'
import { getUserToken, getUserTokenId, getUserTokenIdUnixExpiry } from 'helpers/cookieHelper'
import { ERROR_500, SESSION_EXPIRED, TIMEOUT_ERROR } from 'constants/routes'
import { FetchAssertedLoginIdentity } from 'actions/userActions'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import useEndUserSession from 'hooks/useEndUserSession'

const Uplift = ({ elements, page }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { routeThenEndSession, mismatchedUuidEndSession } = useEndUserSession()

    const user = useSelector((state) => state.userReducer.user)
    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])

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
            mismatchedUuidEndSession()
            return
        }

        if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
            try {
                const res = await dispatch(
                    FetchAssertedLoginIdentity(getUserToken(cookies), getUserTokenId(cookies))
                )

                if (res.status === nhsStatusCodes.Success) {
                    if (window.location) {
                        const redirectUri = getNhsLoginRedirectUri()
                        const assertedLoginIdentity = res.data
                        let redirectLink = upliftUrl(assertedLoginIdentity, redirectUri)
                        window.location.href = redirectLink
                    }
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
                    case nhsStatusCodes.wafErrorError:
                    default:
                        routeThenEndSession(ERROR_500)
                        break
                }
            }
        } else {
            routeThenEndSession(SESSION_EXPIRED)
            trackEvent('uplift - Id token session expired')
        }
    }

    return (
        <span
            onClick={(e) => handleUpliftClick(e)}
            onKeyDown={(e) => {
                e.key === 'Enter' && handleUpliftClick(e)
            }}
            role="button"
            tabIndex={0}
            data-testid="uplift-click-container"
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
