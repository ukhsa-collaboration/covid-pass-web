import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getCertificate, getInternationalQR } from 'actions/userActions'
import nhsStatusCodes from 'api/nhsStatusCodes'
import { trackPageView, trackError, trackEvent } from 'helpers/appInsights'
import {
    COVID_STATUS,
    INDEX_PAGE,
    ERROR_500,
    SELECTED_FLOW,
    SESSION_EXPIRED,
    SESSION_ENDED,
    TIMEOUT_ERROR
} from 'constants/routes'
import LoadingPage from 'components/LoadingSpinner/LoadingPage'
import {
    REMOVE_ALL_REDUX,
    CACHE_DOMESTIC_CERTIFICATE_VALUES,
    CACHE_INTERNATIONAL_RECOVERY_VALUES,
    CACHE_INTERNATIONAL_CERTIFICATE_VALUES,
    CACHE_RECOVERY_TEST_RESULTS,
    CACHE_VACCINATION_RESULTS
} from 'actions/types'
import { removeSlashFromRoute } from 'helpers/index'
import DomesticPage from 'components/Status/DomesticPage'
import InternationalPage from 'components/Status/InternationalPage'
import { statusStrings, timeoutAlertStrings, carouselStrings } from 'localization/translations'
import TimeoutAlert from 'components/Alerts/TimeoutAlert'
import BackButton from 'components/buttons/BackButton'
import Head from 'next/head'
import { checkCacheUnixTime, uuidCookieReduxNotMatching } from 'helpers/auth'
import {
    getUserToken,
    getUserTokenId,
    getUserTokenIdUnixExpiry,
    getUserPreferenceSelectedFlow
} from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getIdentityProofingLevel, getLanguage } from 'helpers/userHelper'
import { expectedDataForGetCertificate } from 'helpers/validations'
import { logCertificateGeneration } from 'helpers/certificateHelper'
import { getDomesticFeatureToggle } from 'helpers/featureToggleHelper'
import useEndUserSession from 'hooks/useEndUserSession'

const Status = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { routeThenEndSession, mismatchedUuidEndSession } = useEndUserSession()

    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const nhsApp = useSelector((state) => state.nhsAppReducer.nhsApp)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)
    const [loading, setLoading] = React.useState(true)
    const [internationalQrApiLoading, setInternationalQrApiLoading] = React.useState(false)

    const pageHeadTitle =
        getUserPreferenceSelectedFlow(cookies) === 'international'
            ? statusStrings.internationalStatusHead
            : statusStrings.domesticStatusHead

    statusStrings.setLanguage(getLanguage(user))
    carouselStrings.setLanguage(getLanguage(user))
    timeoutAlertStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('Status', COVID_STATUS)
    }, [])

    useEffect(() => {
        if (!getUserToken(cookies)) {
            router.push(INDEX_PAGE).then(() => window.location.reload())
            return
        } else if (!getUserPreferenceSelectedFlow(cookies)) {
            router.push(SELECTED_FLOW)
            return
        } else if (
            getUserPreferenceSelectedFlow(cookies) === 'international' &&
            getIdentityProofingLevel(user) === 'P5Plus'
        ) {
            router.push(SELECTED_FLOW)
            return
        } else if (
            getUserPreferenceSelectedFlow(cookies) === 'domestic' &&
            !getDomesticFeatureToggle(featureToggle)
        ) {
            router.push(SELECTED_FLOW)
            return
        }

        if (getUserToken(cookies)) {
            {
                if (uuidCookieReduxNotMatching(cookies, user)) {
                    mismatchedUuidEndSession()
                }

                // Check to ensure valid id-token unix time
                if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
                    determineStatusToFetch()
                } else {
                    routeThenEndSession(SESSION_EXPIRED)
                    trackEvent('Status - Id token session expired')
                }
            }
        }
    }, [user, nhsApp, cookies, featureToggle, router, setCookie, dispatch])

    // Sets the status based on both the international & recovery cache status
    useEffect(() => {
        const international = userApiCache.certificate.international
        const recovery = userApiCache.certificate.recovery

        if (
            international.status !== null &&
            recovery.status !== null &&
            getUserPreferenceSelectedFlow(cookies) === 'international'
        ) {
            setLoading(false)
        }
    }, [userApiCache.certificate.international, userApiCache.certificate.recovery, cookies])

    const determineStatusToFetch = () => {
        if (getUserPreferenceSelectedFlow(cookies) === 'international') {
            // checking for a null or expired api cache, if so call the api
            if (
                ((userApiCache.certificate.international.status === null ||
                    !checkCacheUnixTime(userApiCache.certificate.international.cacheExpiry)) &&
                    !internationalQrApiLoading) ||
                ((userApiCache.certificate.recovery.status === null ||
                    !checkCacheUnixTime(userApiCache.certificate.recovery.cacheExpiry)) &&
                    !internationalQrApiLoading)
            ) {
                fetchVaccineAndRecoveryStatus()
            }
        } else if (
            getUserPreferenceSelectedFlow(cookies) === 'domestic' &&
            getDomesticFeatureToggle(featureToggle)
        ) {
            // checking for a null or expired api cache, if so call the api, else set the cache status for domestic
            if (
                userApiCache.certificate.domestic.status === null ||
                !checkCacheUnixTime(userApiCache.certificate.domestic.cacheExpiry)
            ) {
                fetchDomesticStatus()
            } else {
                setLoading(false)
            }
        }
    }

    const fetchDomesticStatus = async () => {
        var error = false
        fetchDomesticStatusBreak: try {
            const res = await dispatch(
                getCertificate(getUserToken(cookies), getUserTokenId(cookies))
            )
            if (
                res.status === nhsStatusCodes.Success &&
                res.data.certificate != null &&
                expectedDataForGetCertificate(res.data)
            ) {
                const dispatchData = {
                    status: true,
                    qrCodeTokens: res.data.certificate.qrCodeTokens,
                    certificateScenario: res.data.certificate.certificateScenario,
                    certificateType: res.data.certificate.certificateType,
                    expiryDate: res.data.certificate.validityEndDate,
                    eligibilityPeriod: res.data.certificate.eligibilityEndDate,
                    cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15,
                    certificateEverExisted: res.data.certificateEverExisted,
                    twoPassStatus: res.data.twoPassStatus,
                    errorCode: res.data.errorCode,
                    waitPeriod: res.data.waitPeriod
                }
                await dispatch({
                    type: CACHE_DOMESTIC_CERTIFICATE_VALUES,
                    payload: dispatchData
                })
                logCertificateGeneration(res.data)
                trackEvent('Domestic Certificate - valid Certificate')
            } else if (res.status === nhsStatusCodes.Success || res.data.certificate === null) {
                // Status Code: 204 No Content
                // invalid certificate
                await dispatch({
                    type: CACHE_DOMESTIC_CERTIFICATE_VALUES,
                    payload: {
                        status: false,
                        qrCode: null,
                        expiryDate: null,
                        eligibilityPeriod: null,
                        cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15,
                        certificateEverExisted: res.data.certificateEverExisted,
                        twoPassStatus: res.data.twoPassStatus,
                        errorCode: res.data.errorCode,
                        waitPeriod: res.data.waitPeriod
                    }
                })
                logCertificateGeneration(res.data)
                trackEvent('Domestic Certificate - invalid Certificate')
            } else {
                error = true
                break fetchDomesticStatusBreak
            }
            setLoading(false)
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
                    routeThenEndSession(ERROR_500 + '?page=' + removeSlashFromRoute(COVID_STATUS))
                    break
            }

            trackError('API - Domestic Certificate', err)
        } finally {
            if (error) {
                trackEvent('Domestic Certificate - data error fields not as expected')
                routeThenEndSession(ERROR_500 + '?page=' + removeSlashFromRoute(COVID_STATUS))
            }
        }
    }

    const dispatchInvalidCert = async (type) => {
        await dispatch({
            type: type,
            payload: {
                status: false,
                qrCode: null,
                expiryDate: null,
                cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15
            }
        })
    }

    const fetchVaccineAndRecoveryStatus = async () => {
        try {
            setInternationalQrApiLoading(true)
            const res = await dispatch(
                getInternationalQR(getUserToken(cookies), getUserTokenId(cookies))
            )
            if (res.status === nhsStatusCodes.Success) {
                var vaccinationResData = res.data?.vaccinationQrResponse
                if (vaccinationResData) {
                    const dispatchData = {
                        status: true,
                        expiryDate: vaccinationResData.validityEndDate,
                        cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15,
                        header: carouselStrings.vaccineHead,
                        resultData: vaccinationResData.resultData,
                        tag: 'vaccination'
                    }

                    await dispatch({
                        type: CACHE_INTERNATIONAL_CERTIFICATE_VALUES,
                        payload: dispatchData
                    })

                    await dispatch({
                        type: CACHE_VACCINATION_RESULTS,
                        payload: {
                            data: vaccinationResData.resultData.map((value) => {
                                value['api'] = 'vaccination'
                                value['sortDate'] = value.dateTimeOfTest
                                return value
                            }),
                            cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15
                        }
                    })
                    setInternationalQrApiLoading(false)
                    trackEvent('International Certificate - valid Vaccination Certificate')
                } else {
                    // No Vaccination based cert returned
                    // invalid certificate
                    await dispatchInvalidCert(CACHE_INTERNATIONAL_CERTIFICATE_VALUES)
                    setInternationalQrApiLoading(false)
                    trackEvent('International Certificate - invalid Vaccination Certificate')
                }

                const recoveryResData = res.data?.recoveryQrResponse

                if (recoveryResData) {
                    const dispatchData = {
                        status: true,
                        expiryDate: recoveryResData.validityEndDate,
                        cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15,
                        header: carouselStrings.recoveredHead,
                        resultData: recoveryResData.resultData,
                        tag: 'recovery'
                    }

                    await dispatch({
                        type: CACHE_INTERNATIONAL_RECOVERY_VALUES,
                        payload: dispatchData
                    })

                    const recoveryTestData = recoveryResData.resultData.map((value) => {
                        value['api'] = 'recovery'
                        return value
                    })
                    await dispatch({
                        type: CACHE_RECOVERY_TEST_RESULTS,
                        payload: {
                            data: recoveryTestData
                        }
                    })

                    setInternationalQrApiLoading(false)
                    trackEvent('International Certificate - valid Recovery Certificate')
                } else {
                    // No recovery based certificate
                    // invalid certificate
                    await dispatchInvalidCert(CACHE_INTERNATIONAL_RECOVERY_VALUES)

                    setInternationalQrApiLoading(false)
                    trackEvent('International Certificate - invalid Recovery Certificate')
                }
            } else if (res.status === nhsStatusCodes.NotEligibleForCertificate || res.data === '') {
                // Status Code: 204 No Content
                // invalid certificate
                await dispatchInvalidCert(CACHE_INTERNATIONAL_CERTIFICATE_VALUES)
                await dispatchInvalidCert(CACHE_INTERNATIONAL_RECOVERY_VALUES)

                setInternationalQrApiLoading(false)
                trackEvent('International Certificate - invalid Vaccination & Recovery Certificate')
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
                    routeThenEndSession(ERROR_500 + '?page=' + removeSlashFromRoute(COVID_STATUS))
                    break
            }
            setInternationalQrApiLoading(false)
            trackError('API - International Recovery/Vaccination Certificate', err)
        }
    }

    return loading ? (
        <LoadingPage headTitle={pageHeadTitle} />
    ) : (
        <div>
            <Head>
                <title>{pageHeadTitle}</title>
            </Head>
            <BackButton backOverRide={SELECTED_FLOW} />
            {getUserPreferenceSelectedFlow(cookies) === 'international' ? (
                <InternationalPage />
            ) : (
                <DomesticPage />
            )}
            <TimeoutAlert
                id="status-timeoutalert"
                headerText={timeoutAlertStrings.alertHeader1}
                bodyText={timeoutAlertStrings.alertBody1}
            />
        </div>
    )
}

export default Status
