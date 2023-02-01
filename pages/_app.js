import 'styles/globals.scss'
import 'styles/nhs-uk.scss'
import 'styles/PolicyPages.scss'
import 'styles/Details.scss'
import 'styles/CertificateGeneration.scss'
import 'styles/Status.scss'
import 'styles/SelectedFlow.scss'
import 'styles/Identifer.scss'
import 'styles/CustomBootstrap.scss'
import 'styles/components/Buttons.scss'
import 'styles/components/LoadingSpinner.scss'
import 'styles/components/Header.scss'
import 'styles/components/Footer.scss'
import 'styles/components/LoadingPage.scss'
import 'styles/components/Records.scss'
import 'styles/components/Icons.scss'
import 'styles/components/Carousel.scss'
import 'styles/components/GracePeriod.scss'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import Head from 'components/layout/Head'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { useStore } from 'store/store'
import StandardAlert from 'components/Alerts/StandardAlert'
import {
    REFRESH_SSO_TMP_NHS_USER_TOKEN,
    REMOVE_USER,
    ADD_USER_CONFIGURATION,
    UPDATE_APPLE_WALLET_TOGGLE,
    UPDATE_GOOGLE_WALLET_TOGGLE,
    UPDATE_SHOW_PDF_DOWNLOAD,
    UPDATE_DOMESTIC_TOGGLE
} from 'actions/types'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { showAppleWallet, showGoogleWallet } from 'helpers/walletHelper'
import { isNhsAppNative } from 'helpers/isNhsApp'
import {
    reauthenticate,
    getUserConfiguration,
    GetWalletTypes,
    getPdfDownloadToggles,
    getDomesticEndpointStatusToggle
} from 'actions/userActions'
import {
    getUserToken,
    getUserRefreshToken,
    removeUserCookie,
    getCookieExpiry,
    getUserTokenId,
    getUserExpiresInUnix,
    getUserTokenIdUnixExpiry,
    getCookieUuid
} from 'helpers/cookieHelper'
import { getLanguage } from 'helpers/userHelper'
import { getDomesticFeatureToggle } from 'helpers/featureToggleHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import nhsStatusCodes from 'api/nhsStatusCodes'
import { ERROR_500, SESSION_EXPIRED, TIMEOUT_ERROR } from 'constants/routes'
import { trackError, forceTrackEvent, trackEvent } from 'helpers/appInsights'
import LoadingPage from 'components/LoadingSpinner/LoadingPage'
import { checkCacheUnixTime, checkCacheUnixTimeLoadSpinnerBuffer } from 'helpers/auth'
import { getPdfDownloadToggleDomestic, getPdfDownloadToggleInternational } from 'helpers/index'
import WindowCookieReduxMatchHandler from 'components/Auth/WindowCookieReduxMatchHandler'
import { expiredTimeoutAlertStrings } from 'localization/translations'
import useEndUserSession from 'hooks/useEndUserSession'

const AppWrapper = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <CovidPassApp Component={Component} pageProps={pageProps} />
        </Provider>
    )
}

const CovidPassApp = ({ Component, pageProps }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    var unload = require('unload')
    const { routeThenEndSession } = useEndUserSession()

    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])

    const user = useSelector((state) => state.userReducer.user)
    const nhsApp = useSelector((state) => state.nhsAppReducer.nhsApp)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)

    const [mount, setMount] = useState(false)
    const [currentPath, setCurrentPath] = useState(null)
    const [alertOpenSessionEnded, setAlertOpenSessionEnded] = useState(false)
    const [refreshAfterReturn, setRefreshAfterReturn] = useState(null)

    // Loading states
    const [loadingUserConfiguration, setLoadingUserConfiguration] = useState(false)
    const [loadingWalletFeatureToggle, setLoadingWalletFeatureToggle] = useState(false)
    const [loadingRefreshToken, setLoadingRefreshToken] = useState(false)
    const [loadingRefreshTokenNegativeTime, setLoadingRefreshTokeNegativeTime] = useState(false)
    const [loadingPdfDownloadFeatureToggle, setLoadingPdfDownloadFeatureToggle] = useState(false)
    const [loadingDomesticFeatureToggle, setLoadingDomesticFeatureToggle] = useState(false)

    expiredTimeoutAlertStrings.setLanguage(getLanguage(user))

    /*
     * Hooks for confirm components have mounted before rendering
     */
    useEffect(() => {
        setMount(true)
    }, [])
    /* End of confirming if components have mounted before rendering */

    /*
     * Hooks and functions for session end popup
     */
    const setEndedSession = (open) => {
        if (!open) {
            removeUserCookie(setCookie)
            dispatch({ type: REMOVE_USER })
        }
    }

    useEffect(() => {
        setAlertOpenSessionEnded(user.sessionEnded)
    }, [user])
    /* End of session end popup */

    /*
     * Hooks and functions for tracking what page a user leaves on
     */
    useEffect(() => {
        if (currentPath != router.pathname) {
            removeTrackerEvent()
            setCurrentPath(router.pathname)
        }
        trackUserWhenLeavingPage()
    }, [router.pathname, currentPath])

    const trackUserWhenLeavingPage = () => {
        if (router.pathname == '/Status') {
            unload.add(() =>
                forceTrackEvent(
                    'User left app at page: ' + router.pathname + ' ' + nhsApp.selectedFlow
                )
            )
        } else unload.add(() => forceTrackEvent('User left app at page: ' + router.pathname))
    }

    const removeTrackerEvent = () => {
        unload.removeAll()
    }
    /* End of user page leave tracking */

    /*
     * Background refresh hooks and functions
     */
    const remainingUnixRefreshTime = (expiresInUnix) => {
        return expiresInUnix - Math.round(new Date().getTime() / 1000)
    }

    useEffect(() => {
        if (!getUserRefreshToken(cookies) || !getUserExpiresInUnix(cookies)) return
        const interval = setInterval(() => {
            getRefreshTokenRes(getUserRefreshToken(cookies))
        }, remainingUnixRefreshTime(getUserExpiresInUnix(cookies)) * 1000)

        return () => clearInterval(interval)
    }, [cookies])

    var loadingRefreshTokenPrevValue = null
    const getRefreshTokenRes = async (refreshToken) => {
        const remainingUnix = remainingUnixRefreshTime(getUserExpiresInUnix(cookies))
        if (!loadingRefreshToken && loadingRefreshTokenPrevValue !== remainingUnix) {
            loadingRefreshTokenPrevValue = remainingUnix < 0 ? remainingUnix : null
            setLoadingRefreshTokeNegativeTime(remainingUnix < 0)
            try {
                setLoadingRefreshToken(true)
                const refreshTokenRes = await dispatch(reauthenticate(refreshToken))

                if (refreshTokenRes.status === 200) {
                    const data = {
                        ...cookies.covidStatus,
                        token: refreshTokenRes.data.accessToken,
                        refreshToken: refreshTokenRes.data.refreshToken,
                        expiresIn: refreshTokenRes.data.expiresIn,
                        expiresInUnix: Math.round(new Date().getTime() / 1000) + 60 * 4 // sets the expiry to 4 minutes from the current unix time
                    }
                    const expiry = getCookieExpiry(cookies)
                    setLoadingRefreshToken(false)
                    setLoadingRefreshTokeNegativeTime(false)
                    setCookie(COOKIE_USER_TOKEN_KEY, JSON.stringify(data), {
                        path: '/',
                        expires: new Date(expiry),
                        sameSite: 'lax',
                        secure: true
                    })

                    if (refreshAfterReturn === null) {
                        setRefreshAfterReturn(true)
                    }
                }
            } catch (err) {
                setLoadingRefreshToken(false)

                switch (err?.response?.status) {
                    case nhsStatusCodes.RequestTimeout:
                        router.push(TIMEOUT_ERROR)
                        break
                    case nhsStatusCodes.AuthTokenIncorrect:
                    case nhsStatusCodes.WrongRequest:
                        routeThenEndSession(SESSION_EXPIRED)
                        break
                    case nhsStatusCodes.ServerError:
                    case nhsStatusCodes.wafErrorError:
                    default:
                        routeThenEndSession(ERROR_500)
                        break
                }
            }
        }
    }
    /* End of background refresh */

    /*
     * refresh token for when the user is in a TMP state while in the SSO process
     */
    var tmpSsoInterval

    useEffect(() => {
        if (nhsApp.tmpUserToken) {
            if (!nhsApp.tmpUserToken.refreshToken || !nhsApp.tmpUserToken.expiresIn) return
            tmpSsoInterval = setInterval(() => {
                tmpStateGetRefreshTokenRes(nhsApp.tmpUserToken.refreshToken)
            }, (nhsApp.tmpUserToken.expiresIn - 60) * 1000)

            return () => clearInterval(tmpSsoInterval)
        } else if (nhsApp.tmpUserToken === null) {
            return () => clearInterval(tmpSsoInterval)
        }
    }, [nhsApp.tmpUserToken])

    const tmpStateGetRefreshTokenRes = async (refreshToken) => {
        try {
            const res = await dispatch(reauthenticate(refreshToken))

            dispatch({
                type: REFRESH_SSO_TMP_NHS_USER_TOKEN,
                payload: res.data
            })
        } catch (err) {
            trackError('API - TMP SSO Refresh Token Error', err)
        }
    }
    /* End of refresh token when in SSO flow */

    /*
     * Hooks/API calls for getting User configuration
     */
    useEffect(() => {
        if (
            getUserRefreshToken(cookies) !== null &&
            user.userConfiguration === null &&
            !loadingUserConfiguration &&
            !loadingRefreshToken &&
            !router.pathname.includes('covid-status-sso')
        ) {
            setLoadingUserConfiguration(true)
            if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
                if (
                    checkCacheUnixTime(getUserExpiresInUnix(cookies)) ||
                    refreshAfterReturn === true
                ) {
                    userConfiguration()
                } else {
                    // if the refresh after negative return has not taken place set loading back to false to allow the useEffect to rerun
                    setLoadingUserConfiguration(false)
                }
            } else {
                routeThenEndSession(SESSION_EXPIRED)
                trackEvent('_app.js - Id token session expired')
            }
        }
    }, [
        cookies,
        user,
        userApiCache,
        refreshAfterReturn,
        loadingRefreshToken,
        loadingUserConfiguration,
        router,
        dispatch,
        setCookie
    ])

    const userConfiguration = async () => {
        setLoadingUserConfiguration(true)
        try {
            const res = await dispatch(
                getUserConfiguration(getUserToken(cookies), getUserTokenId(cookies))
            )
            if (res.status === nhsStatusCodes.Success) {
                const userInfoRes = res.data.userInfo
                const userInfo = {
                    email: true,
                    destination: { countryCode: '', value: userInfoRes.email },
                    name: userInfoRes.given_name,
                    lastName: userInfoRes.family_name,
                    dateOfBirth: new Date(userInfoRes.birthdate),
                    uuid: getCookieUuid(cookies),
                    identityProofingLevel: userInfoRes.identity_proofing_level
                }

                const userConfigurationData = {
                    ...userInfo,
                    userConfiguration: res.data.userConfiguration
                }
                dispatch({ type: ADD_USER_CONFIGURATION, payload: userConfigurationData })
            }
            setLoadingUserConfiguration(false)
        } catch (err) {
            switch (err?.response?.status) {
                case nhsStatusCodes.RequestTimeout:
                    router.push(TIMEOUT_ERROR)
                    break
                case nhsStatusCodes.WrongRequest:
                case nhsStatusCodes.ServerError:
                    routeThenEndSession(ERROR_500)
                    break
                case nhsStatusCodes.AuthTokenIncorrect:
                    routeThenEndSession(SESSION_EXPIRED)
                    break
            }
            setLoadingUserConfiguration(false)
            trackError('API - Get user configuration', err)
        }
    }
    /* End of Hook/API calls for getting user configuration */

    /*
     * Functions to get Apple and Google wallet toggle values in the background of the application
     */
    const checkNeedForToggleValueApple = () => {
        return (
            featureToggle.appleWallet === null &&
            showAppleWallet() &&
            getUserToken(cookies) !== null
        )
    }

    const checkNeedForToggleValueGoogle = () => {
        return (
            featureToggle.googleWallet === null &&
            showGoogleWallet() &&
            getUserToken(cookies) !== null
        )
    }
    // loadingWalletFeatureToggle, setLoadingWalletFeatureToggle
    useEffect(() => {
        if (!loadingWalletFeatureToggle) {
            if (checkNeedForToggleValueApple()) {
                getWalletToggleValues('Apple')
            }
            if (checkNeedForToggleValueGoogle()) {
                getWalletToggleValues('Google')
            }
        }
    }, [loadingWalletFeatureToggle, featureToggle, cookies]) // not all dependencies are called direct in the useEffect but used within logical functions called from the useEffect

    const getWalletToggleValues = async (device) => {
        try {
            setLoadingWalletFeatureToggle(true)
            const res = await dispatch(
                GetWalletTypes(getUserToken(cookies), getUserTokenId(cookies), device)
            )

            if (res.status === nhsStatusCodes.Success) {
                const data = res.data === '' ? 'none' : res.data.toLocaleLowerCase() // if no pass types are turn on then an empty string is returned
                if (device === 'Apple') {
                    dispatch({ type: UPDATE_APPLE_WALLET_TOGGLE, payload: data })
                }
                if (device === 'Google') {
                    dispatch({ type: UPDATE_GOOGLE_WALLET_TOGGLE, payload: data })
                }

                setLoadingWalletFeatureToggle(false)
            }
        } catch (err) {
            setLoadingWalletFeatureToggle(false)

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
            trackError('API - Get Wallet Types ', err)
        }
    }
    /* End of functions needed for wallet pass toggles */

    const missingPdfDownloadToggles = () => {
        return (
            (getPdfDownloadToggleDomestic(featureToggle) === null ||
                getPdfDownloadToggleInternational(featureToggle) === null) &&
            getUserToken(cookies) !== null &&
            !router.pathname.includes('covid-status-sso')
        )
    }

    useEffect(() => {
        if (
            !loadingPdfDownloadFeatureToggle &&
            missingPdfDownloadToggles() &&
            getUserToken(cookies) !== null
        ) {
            getPdfDownloadToggleApi()
        }
    }, [loadingPdfDownloadFeatureToggle, featureToggle, cookies, router]) // not all dependencies are called direct in the useEffect but used within logical functions called from the useEffect

    const getPdfDownloadToggleApi = async () => {
        try {
            const res = await dispatch(
                getPdfDownloadToggles(getUserToken(cookies), getUserTokenId(cookies))
            )

            if (res.status === nhsStatusCodes.Success) {
                dispatch({ type: UPDATE_SHOW_PDF_DOWNLOAD, payload: res.data })

                setLoadingPdfDownloadFeatureToggle(true)
            }
        } catch (err) {
            setLoadingPdfDownloadFeatureToggle(true)

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

            trackError('API - Get Wallet Types ', err)
        }
    }

    /*
     * Functions to get domestic toggle value and loading state
     */
    const missingDomesticToggle = () => {
        return (
            getDomesticFeatureToggle(featureToggle) === null &&
            getUserToken(cookies) !== null &&
            !router.pathname.includes('covid-status-sso')
        )
    }

    useEffect(() => {
        if (!loadingDomesticFeatureToggle && missingDomesticToggle()) {
            getDomesticToggleApi()
        }
    }, [featureToggle, cookies, loadingDomesticFeatureToggle])

    const getDomesticToggleApi = async () => {
        setLoadingDomesticFeatureToggle(true)
        try {
            const res = await dispatch(
                getDomesticEndpointStatusToggle(getUserToken(cookies), getUserTokenId(cookies))
            )
            if (res.status === nhsStatusCodes.Success) {
                dispatch({ type: UPDATE_DOMESTIC_TOGGLE, payload: res.data })
                setLoadingDomesticFeatureToggle(false)
            }
        } catch (err) {
            setLoadingDomesticFeatureToggle(false)

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

            trackError('API - Get Domestic toggle ', err)
        }
    }
    /* End of functions to get domestic toggle value and loading state */

    return (
        mount && (
            <>
                <Head />
                {isNhsAppNative() ? null : <Header />}
                <div className="nhsuk-width-container">
                    <main
                        className={
                            'nhsuk-main-wrapper ' +
                            (isNhsAppNative() ? 'remove-main-wrapper-top' : '')
                        }
                        id="main-content">
                        <div className="nhsuk-grid-row">
                            <div className="nhsuk-grid-column-full">
                                {loadingUserConfiguration ||
                                (getUserToken(cookies) &&
                                    !router.pathname.includes('covid-status-sso') &&
                                    user.userConfiguration === null) ||
                                (getUserToken(cookies) &&
                                    !router.pathname.includes('covid-status-sso') &&
                                    !checkCacheUnixTimeLoadSpinnerBuffer(
                                        getUserExpiresInUnix(cookies)
                                    )) /* Checks for if the user token has expired */ ||
                                (loadingRefreshToken &&
                                    loadingRefreshTokenNegativeTime) /* Only need to show loading if the refresh if dependent on a new token (expired - negative unix time) */ ||
                                missingPdfDownloadToggles() ||
                                checkNeedForToggleValueApple() ||
                                checkNeedForToggleValueGoogle() ||
                                missingDomesticToggle() ? (
                                    <LoadingPage />
                                ) : (
                                    <Component {...pageProps} />
                                )}
                            </div>
                        </div>
                        <StandardAlert
                            headerText={expiredTimeoutAlertStrings.head}
                            bodyText={expiredTimeoutAlertStrings.body}
                            buttonText={expiredTimeoutAlertStrings.okButtonText}
                            openState={alertOpenSessionEnded}
                            setState={setEndedSession}
                        />
                        <WindowCookieReduxMatchHandler />
                    </main>
                </div>
                {nhsApp.showFooter ? <Footer /> : null}
            </>
        )
    )
}

AppWrapper.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired
}

CovidPassApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired
}

export default AppWrapper
