import { getUserUuid } from 'helpers/userHelper'
import { getCookieUuid } from 'helpers/cookieHelper'
import { v4 as uuidv4 } from 'uuid'
import { SELECTED_FLOW, UNVERIFIED, GRACE_PERIOD } from 'constants/routes'
import { NO_USER_PREFERENCE_STRING } from 'constants/index'

const authSettings = {
    authority: process.env.NEXT_PUBLIC_NHS_AUTH_URL,
    clientId: 'healthrecords',
    responseType: 'code',
    monitorSession: true,
    scope: 'openid email profile phone profile_extended gp_registration_details',
    loadUserInfo: false,
    vtr: '["P5.Cp.Cd", "P5.Cp.Ck", "P5.Cm"]'
}

export const uriBuilder = (url, queries) => {
    let newUrl = url
    queries = queries || []
    for (let i = 0; i < queries.length; i++) {
        newUrl = newUrl + (i === 0 ? '?' : '&')
        newUrl =
            newUrl + encodeURIComponent(queries[i].key) + '=' + encodeURIComponent(queries[i].value)
    }
    return newUrl
}

export const getRedirectLink = (redirectUri) => {
    let redirectLink = uriBuilder(authSettings.authority + '/authorize', [
        { key: 'client_id', value: authSettings.clientId },
        { key: 'scope', value: authSettings.scope },
        { key: 'response_type', value: authSettings.responseType },
        { key: 'redirect_uri', value: redirectUri },
        { key: 'vtr', value: authSettings.vtr }
    ])
    return redirectLink
}

export const getSSOUrl = (assertedLoginIdentity, redirectUri) => {
    let ssoLink = uriBuilder(authSettings.authority + '/authorize', [
        { key: 'client_id', value: authSettings.clientId },
        { key: 'scope', value: authSettings.scope },
        { key: 'response_type', value: authSettings.responseType },
        { key: 'asserted_login_identity', value: assertedLoginIdentity },
        { key: 'redirect_uri', value: redirectUri },
        { key: 'prompt', value: 'none' },
        { key: 'vtr', value: authSettings.vtr }
    ])
    return ssoLink
}

export const upliftUrl = (assertedLoginIdentity, redirectUri) => {
    let upliftUrl = uriBuilder(authSettings.authority + '/authorize', [
        { key: 'client_id', value: authSettings.clientId },
        { key: 'scope', value: authSettings.scope },
        { key: 'response_type', value: authSettings.responseType },
        { key: 'asserted_login_identity', value: assertedLoginIdentity },
        { key: 'redirect_uri', value: redirectUri },
        { key: 'prompt', value: 'none' }
    ])
    return upliftUrl
}

export const checkCacheUnixTime = (cacheUnixTime) => {
    return cacheUnixTime > Math.round(new Date().getTime() / 1000)
}

/* Buffer time is added for the load spinner as if the user is on an active session there is no need for the loading spinner to show,
 * only if they are a returning user with 0 unix time remaining out of the 5 mins.
 * Adding 20 seconds onto the 4 mins unix cache will not affect the users api logic
 */
export const checkCacheUnixTimeLoadSpinnerBuffer = (cacheUnixTime) => {
    return checkCacheUnixTime(cacheUnixTime + 20)
}

export const createUuid = () => uuidv4()

export const uuidCookieReduxNotMatching = (cookies, user) => {
    return getUserUuid(user) !== getCookieUuid(cookies)
}

export const getLoginRoute = (
    userPLevel,
    domesticToggledOn,
    userHasGracePeriod,
    userGracePeriodIsActive
) => {
    if (!domesticToggledOn) {
        return SELECTED_FLOW
    }

    if (userPLevel === 'P5') {
        return UNVERIFIED
    }

    if (userPLevel === 'P5Plus' && userHasGracePeriod) {
        return userGracePeriodIsActive ? GRACE_PERIOD : UNVERIFIED
    }

    return SELECTED_FLOW
}

export const checkUserAcceptedLastTc = (data) => {
    if (!data) return null

    if (data?.acceptedLatestTC === true) return true

    if (data?.acceptedLatestTC === false || data === NO_USER_PREFERENCE_STRING) return false

    return false
}
