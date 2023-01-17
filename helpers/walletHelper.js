import { isIOS, isSafari, isAndroid, isMobileOnly } from 'react-device-detect'
import { isNhsAppNative, isNhsAppIos, isNhsAppAndroid } from 'helpers/isNhsApp'

export const showAppleWallet = () => {
    return isIOS && isMobileOnly && (isSafari || (isNhsAppIos() && isNhsAppNative()))
}

export const showGoogleWallet = () => {
    return isMobileOnly && (isAndroid || (isNhsAppAndroid() && isNhsAppNative()))
}
