import { trackEvent } from 'helpers/appInsights'

export const isNhsAppNative = () => {
    return typeof navigator == 'object' ? -1 !== navigator.userAgent.indexOf('nhsapp') : null
}

export const isNhsAppDesktop = (nhsApp) => {
    return nhsApp.isNhsAppDesktop
}

export const gotoHomepage = () => {
    window.nhsappNative.goToHomepage
        ? window.nhsappNative.goToHomepage()
        : window.nhsappNative.goToPage('homePage')
    trackEvent('NHS App Back Button click - Back to NHS Home')
}

export const goToNhsUplift = () => {
    goToPage('uplift')
}

export const goToPage = (page) => {
    window.nhsappNative.goToPage(page)
}

export const nhsAppDownloadFromBytes = (base64data, filename, mimeType) => {
    window.nhsappNative.startDownloadFromJson
        ? window.nhsappNative.startDownloadFromJson(
              JSON.stringify({ base64Data: base64data, fileName: filename, mimeType: mimeType })
          )
        : window.nhsappNative.downloadFromBytes(base64data, filename, mimeType)
}

export const isNhsAppIos = () => {
    return getNhsAppPlatform() === 'ios'
}

export const isNhsAppAndroid = () => {
    return getNhsAppPlatform() === 'android'
}

export const getNhsAppPlatform = () => {
    return typeof navigator == 'object'
        ? -1 !== navigator.userAgent.indexOf('nhsapp-android')
            ? 'android'
            : -1 !== navigator.userAgent.indexOf('nhsapp-ios')
            ? 'ios'
            : 'none'
        : null
}
