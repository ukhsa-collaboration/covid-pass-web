import { COOKIE_USER_TOKEN_KEY } from 'constants/index'

export const getUserToken = (cookie) => {
    return cookie ? (cookie.covidStatus ? cookie.covidStatus.token : null) : null
}

export const getUserTokenId = (cookie) => {
    return cookie ? (cookie.covidStatus ? cookie.covidStatus.tokenId : null) : null
}

export const getUserRefreshToken = (cookie) => {
    return cookie ? (cookie.covidStatus ? cookie.covidStatus.refreshToken : null) : null
}

export const getUserExpiresIn = (cookie) => {
    return cookie ? (cookie.covidStatus ? cookie.covidStatus.expiresIn : null) : null
}

export const getUserExpiresInUnix = (cookie) => {
    return cookie ? (cookie.covidStatus ? cookie.covidStatus.expiresInUnix : null) : null
}

export const getUserTokenIdUnixExpiry = (cookie) => {
    return cookie ? (cookie.covidStatus ? cookie.covidStatus.tokenIdUnixExpiry : null) : null
}

export const getCookieExpiry = (cookie) => {
    return cookie ? (cookie.covidStatus ? cookie.covidStatus.cookieExpiry : null) : null
}

export const getCookieUuid = (cookie) => {
    return cookie ? (cookie.covidStatus ? cookie.covidStatus.uuid : null) : null
}

/* user preference cookie helper functions */
export const getUserPreferenceSelectedFlow = (cookie) => {
    return cookie
        ? cookie.covidStatusUserPreference
            ? cookie.covidStatusUserPreference.SelectedFlow
            : null
        : null
}

export const removeUserCookie = (setCookie) => {
    setCookie(COOKIE_USER_TOKEN_KEY, null, {
        path: '/',
        expires: new Date('Thu, 01 Jan 1970 00:00:00 UTC')
    })
}
