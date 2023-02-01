import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { trackPageView, trackEvent, trackError } from 'helpers/appInsights'
import {
    COVID_STATUS_SSO,
    NHS_LOGIN_ERROR,
    INVALID_USER_INFO,
    CONSENT_NOT_GIVEN
} from 'constants/routes'
import { getSSOUrl, createUuid, getLoginRoute, checkUserAcceptedLastTc } from 'helpers/auth'
import {
    validateNHSCode,
    reauthenticate,
    updateTCAcceptance,
    getUserConfiguration,
    getDomesticEndpointStatusToggle
} from 'actions/userActions'
import {
    ADD_USER_CONFIGURATION,
    UPDATE_NHS_APP_DESKTOP,
    TOGGLE_FOOTER,
    ADD_TMP_USER_TOKEN,
    ADD_TMP_USER_CONFIGURATION,
    REMOVE_TMP_TOKEN_INFO,
    REFRESH_SSO_TMP_NHS_USER_TOKEN,
    UPDATE_DOMESTIC_TOGGLE
} from 'actions/types'
import LoadingPage from 'components/LoadingSpinner/LoadingPage'
import nhsStatusCodes from 'api/nhsStatusCodes'
import { isNhsAppNative } from 'helpers/isNhsApp'
import { ageIsValid } from 'helpers/validations'
import { NHS_LOGIN_CONSENT_NOT_GIVEN, NO_USER_PREFERENCE_STRING } from 'constants/index'
import StartPage from 'components/StartPage/StartPage'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import {
    getIdentityProofingLevel,
    considerGracePeriod,
    isActiveGracePeriod
} from 'helpers/userHelper'
import { removeUserCookie, getUserToken } from 'helpers/cookieHelper'
import { getDomesticFeatureToggle } from 'helpers/featureToggleHelper'

const CovidStatusSSO = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const nhsApp = useSelector((state) => state.nhsAppReducer.nhsApp)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)
    const [assertedLoginIdentity, setAssertedLoginIdentity] = React.useState(null)
    const [code, setCode] = React.useState(null)
    const [nhsUserToken, setNhsUserToken] = React.useState(null)
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const [loadingUserConfiguration, setLoadingUserConfiguration] = React.useState(false)
    const [loadingDomesticFeatureToggle, setLoadingDomesticFeatureToggle] = useState(false)
    const [userPreferences, setUserPreferences] = React.useState(
        /* If TMP user config is in place already then set the state to the TMP value in redux. 
            If the user configuration exist but the preferences is null then it means the user hsa no user preferences 
        */
        nhsApp.tmpUserConfiguration
            ? nhsApp.tmpUserConfiguration.preferences
                ? nhsApp.tmpUserConfiguration.preferences
                : NO_USER_PREFERENCE_STRING
            : null
    )

    useEffect(() => {
        if (!isNhsAppNative()) {
            dispatch({
                type: UPDATE_NHS_APP_DESKTOP,
                payload: true
            })
        }
        dispatch({
            type: TOGGLE_FOOTER,
            payload: false
        })
    }, [dispatch])

    useEffect(() => {
        if (!nhsApp.tmpUserToken && !nhsApp.tmpUserConfiguration) {
            if (
                router.query.error &&
                router.query.error_description === NHS_LOGIN_CONSENT_NOT_GIVEN
            ) {
                router.push(CONSENT_NOT_GIVEN)
            } else {
                if (router.query.assertedLoginIdentity) {
                    setAssertedLoginIdentity(router.query.assertedLoginIdentity)
                    removeUserCookie(setCookie)
                }
                setCode(router.query.code)
            }

            if (router.query.code) {
                trackPageView('Covid Status SSO - Code', COVID_STATUS_SSO)
            } else if (router.query.assertedLoginIdentity) {
                trackPageView('Covid Status SSO - Asserted Login Identity', COVID_STATUS_SSO)
            }
        }
    }, [nhsApp.tmpUserToken, nhsApp.tmpUserConfiguration, router, setCookie])

    useEffect(() => {
        if (window.location && assertedLoginIdentity && !code) {
            const redirectUri = window.location.origin + COVID_STATUS_SSO + '/'
            let redirectLink = getSSOUrl(assertedLoginIdentity, redirectUri)
            trackEvent('Covid Status SSO - Direct User to NHS Auth Url')
            window.location.href = redirectLink
        }
    }, [assertedLoginIdentity, code])

    useEffect(() => {
        if (code && !nhsApp.tmpUserToken && !getUserToken(cookies)) {
            validateCode(code)
            trackEvent('Covid Status SSO - Validating Auth Code')
        }
    }, [code, cookies, nhsApp.tmpUserToken])

    const validateCode = async (code) => {
        if (window.location) {
            const redirectUri = window.location.origin + COVID_STATUS_SSO + '/'

            try {
                const accessTokenRes = await dispatch(validateNHSCode(code, redirectUri))
                dispatch({
                    type: ADD_TMP_USER_TOKEN,
                    payload: accessTokenRes.data
                })
                setNhsUserToken(accessTokenRes.data)
                trackEvent('Covid Status SSO - Successfully Obtained CovidPass Access Token')
            } catch (err) {
                switch (err?.response?.status) {
                    case nhsStatusCodes.RequestTimeout:
                    case nhsStatusCodes.WrongRequest:
                    case nhsStatusCodes.AuthTokenIncorrect:
                    case nhsStatusCodes.ServerError:
                    case nhsStatusCodes.wafErrorError:
                    default:
                        router.push(NHS_LOGIN_ERROR).then(() =>
                            dispatch({
                                type: TOGGLE_FOOTER,
                                payload: true
                            })
                        )
                        break
                }
                trackError('API - NHS auth token (SSO flow)', err)
            }
        }
    }

    useEffect(() => {
        if (nhsApp.tmpUserToken && !nhsApp.tmpUserConfiguration && !loadingUserConfiguration) {
            userConfiguration(nhsApp.tmpUserToken.accessToken, nhsApp.tmpUserToken.idToken)
        }
    }, [nhsApp.tmpUserToken, nhsApp.tmpUserConfiguration, loadingUserConfiguration])

    const userConfiguration = async (token, idToken) => {
        setLoadingUserConfiguration(true)
        try {
            trackEvent('Covid Status SSO - Setting User Configuration')
            const res = await dispatch(getUserConfiguration(token, idToken))
            if (res.status === nhsStatusCodes.Success) {
                const userInfoRes = res.data.userInfo
                const userInfo = {
                    email: true,
                    destination: { countryCode: '', value: userInfoRes.email },
                    name: userInfoRes.given_name,
                    lastName: userInfoRes.family_name,
                    dateOfBirth: new Date(userInfoRes.birthdate),
                    identityProofingLevel: userInfoRes.identity_proofing_level,
                    uuid: createUuid()
                }

                const userConfigurationData = {
                    ...userInfo,
                    userConfiguration: res.data.userConfiguration
                }

                if (ageIsValid(userInfo.dateOfBirth)) {
                    if (res.data.userConfiguration.preferences) {
                        setUserPreferences(res.data.userConfiguration.preferences)
                    } else {
                        setUserPreferences(NO_USER_PREFERENCE_STRING)
                    }
                    dispatch({
                        type: ADD_TMP_USER_CONFIGURATION,
                        payload: userConfigurationData
                    })
                    trackEvent('Identity proofing level ' + getIdentityProofingLevel(userInfo))
                } else {
                    trackEvent('Covid Status SSO - Invalid User Info (Under 16)')
                    router.push(INVALID_USER_INFO).then(() => {
                        dispatch({ type: REMOVE_TMP_TOKEN_INFO })
                        dispatch({
                            type: TOGGLE_FOOTER,
                            payload: true
                        })
                    })
                }
            }
        } catch (err) {
            switch (err?.response?.status) {
                case nhsStatusCodes.AuthTokenIncorrect:
                    trackError('Covid Status SSO - Auth Token Incorrect', err)
                    router
                        .push(
                            err.response.data === 'The user is under 16 years old.'
                                ? INVALID_USER_INFO
                                : NHS_LOGIN_ERROR
                        )
                        .then(() => {
                            dispatch({ type: REMOVE_TMP_TOKEN_INFO })
                        })
                    break
                case nhsStatusCodes.RequestTimeout:
                case nhsStatusCodes.WrongRequest:
                case nhsStatusCodes.ServerError:
                default:
                    router.push(NHS_LOGIN_ERROR).then(() => {
                        dispatch({ type: REMOVE_TMP_TOKEN_INFO })
                    })
                    break
            }
            setLoadingUserConfiguration(false)
            trackError('API - Get user configuration (SSO flow)', err)
        }
    }

    useEffect(() => {
        if (
            nhsApp.tmpUserToken &&
            !loadingDomesticFeatureToggle &&
            getDomesticFeatureToggle(featureToggle) === null
        ) {
            getDomesticToggleApi()
        }
    }, [featureToggle, nhsApp.tmpUserToken, loadingDomesticFeatureToggle])

    const getDomesticToggleApi = async () => {
        setLoadingDomesticFeatureToggle(true)

        try {
            const res = await dispatch(
                getDomesticEndpointStatusToggle(
                    nhsApp.tmpUserToken.accessToken,
                    nhsApp.tmpUserToken.idToken
                )
            )

            if (res.status === nhsStatusCodes.Success) {
                dispatch({ type: UPDATE_DOMESTIC_TOGGLE, payload: res.data })
                setLoadingDomesticFeatureToggle(false)
            }
        } catch (err) {
            setLoadingDomesticFeatureToggle(false)

            switch (err?.response?.status) {
                case nhsStatusCodes.RequestTimeout:
                case nhsStatusCodes.WrongRequest:
                case nhsStatusCodes.AuthTokenIncorrect:
                case nhsStatusCodes.ServerError:
                case nhsStatusCodes.wafErrorError:
                default:
                    router.push(NHS_LOGIN_ERROR).then(() =>
                        dispatch({
                            type: TOGGLE_FOOTER,
                            payload: true
                        })
                    )
                    break
            }

            trackError('API - Get Domestic toggle ', err)
        }
    }

    useEffect(() => {
        if (
            nhsApp.tmpUserToken &&
            nhsApp.tmpUserConfiguration &&
            checkUserAcceptedLastTc(userPreferences) &&
            getDomesticFeatureToggle(featureToggle) !== null
        ) {
            routeUserThroughSOO()
            trackEvent(
                'Covid Status SSO - Routing User Through Both tmp token & tmp user configuration'
            )
        }
    }, [nhsApp.tmpUserToken, nhsApp.tmpUserConfiguration, userPreferences, featureToggle])

    const handleAcceptClick = async () => {
        try {
            trackEvent('Covid Status SSO - User Accepted T&C Button Click')
            const res = await dispatch(reauthenticate(nhsApp.tmpUserToken.refreshToken))

            if (res.status === nhsStatusCodes.Success) {
                dispatch({
                    type: REFRESH_SSO_TMP_NHS_USER_TOKEN,
                    payload: res.data
                })

                routeUserThroughSOO()
            }
        } catch (err) {
            switch (err?.response?.status) {
                case nhsStatusCodes.RequestTimeout:
                case nhsStatusCodes.WrongRequest:
                case nhsStatusCodes.AuthTokenIncorrect:
                case nhsStatusCodes.ServerError:
                case nhsStatusCodes.wafErrorError:
                default:
                    router.push(NHS_LOGIN_ERROR).then(() =>
                        dispatch({
                            type: TOGGLE_FOOTER,
                            payload: true
                        })
                    )
                    break
            }
            trackError('API - Update last acceptance (SSO flow)', err)
        }
    }

    const routeUserThroughSOO = () => {
        const userCookieTmp = nhsApp.tmpUserToken
        const userReduxTmp = nhsApp.tmpUserConfiguration

        if (checkUserAcceptedLastTc(userPreferences) === false) {
            updateTCAcceptanceCall(userCookieTmp.accessToken, userCookieTmp.idToken)
        }

        dispatch({ type: ADD_USER_CONFIGURATION, payload: userReduxTmp })

        const data = {
            token: userCookieTmp.accessToken,
            tokenId: userCookieTmp.idToken,
            tokenIdUnixExpiry: Math.round(new Date().getTime() / 1000) + 60 * 55, // id-token has a expiry fixed to 1 hour, setting to 55 mins to give a buffer time period.
            refreshToken: userCookieTmp.refreshToken,
            expiresIn: userCookieTmp.expiresIn,
            expiresInUnix: Math.round(new Date().getTime() / 1000) + 60 * 4, // sets the expiry to 4 minutes from the current unix time
            cookieExpiry: new Date(Date.now() + 60 * 55 * 1000),
            uuid: userReduxTmp.uuid
        }
        setCookie(COOKIE_USER_TOKEN_KEY, JSON.stringify(data), {
            path: '/',
            expires: new Date(Date.now() + 60 * 55 * 1000),
            sameSite: 'lax',
            secure: true
        })
        trackEvent('Covid Status SSO - NHS login success')

        const domesticToggledOn = getDomesticFeatureToggle(featureToggle)
        const userPLevel = getIdentityProofingLevel(userReduxTmp)
        const userHasGracePeriod = considerGracePeriod(userReduxTmp)
        const userGracePeriodIsActive = isActiveGracePeriod(userReduxTmp)

        router
            .push(
                getLoginRoute(
                    userPLevel,
                    domesticToggledOn,
                    userHasGracePeriod,
                    userGracePeriodIsActive
                )
            )
            .then(() => {
                dispatch({ type: REMOVE_TMP_TOKEN_INFO })
                dispatch({
                    type: TOGGLE_FOOTER,
                    payload: true
                })
            })
    }

    const updateTCAcceptanceCall = async (token, idToken) => {
        try {
            dispatch(updateTCAcceptance(token, idToken))
        } catch (err) {
            trackError('API - NHS Login Update TC Acceptance', err)
        }
    }

    return nhsApp.tmpUserToken &&
        nhsApp.tmpUserConfiguration &&
        checkUserAcceptedLastTc(userPreferences) === false ? (
        <StartPage ssoLayout={true} handleContinueClick={handleAcceptClick} />
    ) : (
        <LoadingPage />
    )
}

export default CovidStatusSSO
