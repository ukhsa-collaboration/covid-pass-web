import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { trackPageView, trackEvent, trackError } from 'helpers/appInsights'
import { INDEX_PAGE, NHS_LOGIN_ERROR, CONSENT_NOT_GIVEN, INVALID_USER_INFO } from 'constants/routes'
import { NHS_LOGIN_CONSENT_NOT_GIVEN, COOKIE_USER_TOKEN_KEY } from 'constants/index'
import nhsStatusCodes from 'api/nhsStatusCodes'
import {
    ADD_TMP_USER_TOKEN,
    ADD_TMP_USER_CONFIGURATION,
    REMOVE_TMP_TOKEN_INFO,
    ADD_USER_CONFIGURATION,
    UPDATE_DOMESTIC_TOGGLE
} from 'actions/types'
import {
    validateNHSCode,
    updateTCAcceptance,
    getUserConfiguration,
    getDomesticEndpointStatusToggle
} from 'actions/userActions'
import LoadingPage from 'components/LoadingSpinner/LoadingPage'
import StartPage from 'components/StartPage/StartPage'
import { ageIsValid } from 'helpers/validations'
import { getNhsLoginRedirectUri } from 'helpers/index'
import { useCookies } from 'react-cookie'
import {
    getIdentityProofingLevel,
    isActiveGracePeriod,
    considerGracePeriod
} from 'helpers/userHelper'
import { getUserToken } from 'helpers/cookieHelper'
import { createUuid, getLoginRoute, checkUserAcceptedLastTc } from 'helpers/auth'
import { getDomesticFeatureToggle } from 'helpers/featureToggleHelper'

const Home = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const nhsApp = useSelector((state) => state.nhsAppReducer.nhsApp)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)
    const [code, setCode] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [loadingUserConfiguration, setLoadingUserConfiguration] = React.useState(false)
    const [loadingDomesticFeatureToggle, setLoadingDomesticFeatureToggle] = useState(false)

    useEffect(() => {
        if (router.query.code) {
            setCode(router.query.code)
        }

        if (router.query.error && router.query.error_description === NHS_LOGIN_CONSENT_NOT_GIVEN) {
            router.push(CONSENT_NOT_GIVEN)
        } else {
            setLoading(false)
        }
    }, [router])

    useEffect(() => {
        trackPageView('Landing', INDEX_PAGE)
    }, [])

    useEffect(() => {
        if (code && !nhsApp.tmpUserToken && !getUserToken(cookies)) {
            validateCode(code)
        }
    }, [code, cookies, nhsApp.tmpUserToken])

    const validateCode = async (nhsCode) => {
        if (window.location) {
            const redirectUri = getNhsLoginRedirectUri()
            try {
                const accessTokenRes = await dispatch(validateNHSCode(nhsCode, redirectUri))
                dispatch({
                    type: ADD_TMP_USER_TOKEN,
                    payload: accessTokenRes.data
                })
            } catch (err) {
                switch (err?.response?.status) {
                    case nhsStatusCodes.RequestTimeout:
                    case nhsStatusCodes.WrongRequest:
                    case nhsStatusCodes.AuthTokenIncorrect:
                    case nhsStatusCodes.ServerError:
                    case nhsStatusCodes.wafErrorError:
                    default:
                        router.push(NHS_LOGIN_ERROR).then(() => {
                            dispatch({ type: REMOVE_TMP_TOKEN_INFO })
                        })
                        break
                }
                trackError('API - NHS Login auth token', err)
            }
        }
    }

    useEffect(() => {
        if (nhsApp.tmpUserToken && !nhsApp.tmpUserConfiguration && !loadingUserConfiguration) {
            getUserConfig(nhsApp.tmpUserToken.accessToken, nhsApp.tmpUserToken.idToken)
        }
    }, [nhsApp, loadingUserConfiguration])

    const getUserConfig = async (token, idToken) => {
        try {
            setLoadingUserConfiguration(true)
            const res = await dispatch(getUserConfiguration(token, idToken))
            if (res.status === nhsStatusCodes.Success) {
                const userInfo = {
                    email: true,
                    destination: { countryCode: '', value: res.data.userInfo.email },
                    name: res.data.userInfo.given_name,
                    lastName: res.data.userInfo.family_name,
                    dateOfBirth: new Date(res.data.userInfo.birthdate),
                    identityProofingLevel: res.data.userInfo.identity_proofing_level,
                    uuid: createUuid()
                }
                if (ageIsValid(userInfo.dateOfBirth)) {
                    const userConfigurationData = {
                        ...userInfo,
                        userConfiguration: res.data.userConfiguration
                    }

                    dispatch({
                        type: ADD_TMP_USER_CONFIGURATION,
                        payload: userConfigurationData
                    })
                } else {
                    router.push(INVALID_USER_INFO).then(() => {
                        dispatch({ type: REMOVE_TMP_TOKEN_INFO })
                    })
                }
            }
        } catch (err) {
            switch (err?.response?.status) {
                case nhsStatusCodes.AuthTokenIncorrect:
                    trackError('Landing - Auth Token Incorrect', err)
                    router
                        .push(
                            err.response.data === 'The user is under 12 years old.'
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
            trackError('API - Get user configuration', err)
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
                    router
                        .push(NHS_LOGIN_ERROR)
                        .then(() => dispatch({ type: REMOVE_TMP_TOKEN_INFO }))
                    break
            }

            trackError('API - Get Domestic toggle ', err)
        }
    }

    useEffect(() => {
        if (
            nhsApp.tmpUserToken &&
            nhsApp.tmpUserConfiguration &&
            getDomesticFeatureToggle(featureToggle) !== null
        ) {
            const userCookieTmp = nhsApp.tmpUserToken
            const userReduxTmp = nhsApp.tmpUserConfiguration

            dispatch({ type: ADD_USER_CONFIGURATION, payload: userReduxTmp })

            if (!checkUserAcceptedLastTc(userReduxTmp.userConfiguration.preferences)) {
                updateTCAcceptanceCall(userCookieTmp.accessToken, userCookieTmp.idToken)
            }

            const data = {
                token: userCookieTmp.accessToken,
                tokenId: userCookieTmp.idToken,
                tokenIdUnixExpiry: Math.round(new Date().getTime() / 1000) + 60 * 55, // id-token has a exiry fixed to 1 hour, setting to 55 mins to give a buffer time period.
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

            const domesticToggledOn = getDomesticFeatureToggle(featureToggle)
            const userPLevel = getIdentityProofingLevel(userReduxTmp)
            const userHasGracePeriod = considerGracePeriod(userReduxTmp)
            const userGracePeriodIsActive = isActiveGracePeriod(userReduxTmp)

            dispatch({ type: REMOVE_TMP_TOKEN_INFO })
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
                    trackEvent('Landing - NHS login success')
                })
        }
    }, [
        nhsApp.tmpUserToken,
        nhsApp.tmpUserConfiguration,
        featureToggle,
        router,
        dispatch,
        setCookie
    ])

    const updateTCAcceptanceCall = async (token, idToken) => {
        try {
            dispatch(updateTCAcceptance(token, idToken))
        } catch (err) {
            trackError('API - NHS Login Update TC Acceptance', err)
        }
    }

    return code || loading ? <LoadingPage /> : <StartPage />
}

export default Home
