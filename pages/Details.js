import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { trackPageView } from 'helpers/appInsights'
import { DETAILS, INDEX_PAGE, SELECTED_FLOW, COVID_STATUS, UNVERIFIED } from 'constants/routes'
import {
    covidRecordsPageStrings,
    timeoutAlertStrings,
    detailsStrings
} from 'localization/translations'
import TimeoutAlert from 'components/Alerts/TimeoutAlert'
import BackButton from 'components/buttons/BackButton'
import { getName, getDateFormattedDOB } from 'helpers/userHelper'
import Head from 'next/head'
import { getUserToken, getUserPreferenceSelectedFlow } from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY, LANGUAGE_CODES } from 'constants/index'
import Carousel from 'components/Carousel/Carousel'
import { getIdentityProofingLevel, getLanguage } from 'helpers/userHelper'

const Details = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)

    detailsStrings.setLanguage(getLanguage(user))
    timeoutAlertStrings.setLanguage(getLanguage(user))
    covidRecordsPageStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        if (['P5', 'P5Plus'].includes(getIdentityProofingLevel(user))) {
            router.push(UNVERIFIED)
        }
    }, [featureToggle, router, user])

    useEffect(() => {
        trackPageView('Covid Details', DETAILS)
    }, [])

    useEffect(() => {
        if (
            userApiCache.certificate.international.status == null ||
            userApiCache.certificate.recovery.status == null
        ) {
            router.push(COVID_STATUS)
        }
    }, [router, userApiCache.certificate])

    useEffect(() => {
        if (!getUserToken(cookies)) {
            router.push(INDEX_PAGE).then(() => window.location.reload())
        } else if (!getUserPreferenceSelectedFlow(cookies)) {
            router.push(SELECTED_FLOW)
        } else if (
            getUserPreferenceSelectedFlow(cookies) === 'international' &&
            getIdentityProofingLevel(user) === 'P5'
        ) {
            router.push(SELECTED_FLOW)
        }
    }, [cookies, user, router])

    return (
        <div>
            <Head>
                <title>{covidRecordsPageStrings.head}</title>
            </Head>
            <BackButton id="covid-records-back-button-details" />
            <div className="nhsuk-u-reading-width">
                <h1 className="nhsuk-heading-xl break-word-wrap" id="covid-records-heading-one">
                    {getUserPreferenceSelectedFlow(cookies) === 'domestic'
                        ? covidRecordsPageStrings.headingBeta
                        : covidRecordsPageStrings.heading1}
                </h1>
                <p
                    className="nhsuk-u-margin-bottom-2 break-word-wrap"
                    id="covid-records-international-details-name">
                    <span className="nhsuk-u-font-weight-bold">{detailsStrings.name}</span>&nbsp;
                    {getName(user)}
                    {getLanguage(user) === LANGUAGE_CODES.cy ? (
                        <span className="nhsuk-hint bilingual-text">
                            {detailsStrings.name__bilingual}
                        </span>
                    ) : null}
                </p>
                <p
                    className="nhsuk-u-margin-bottom-2 break-word-wrap"
                    id="covid-records-international-details-dob">
                    <span className="nhsuk-u-font-weight-bold">{detailsStrings.date}</span>&nbsp;
                    {getDateFormattedDOB(user, getLanguage(user))}
                    {getLanguage(user) === LANGUAGE_CODES.cy ? (
                        <span className="nhsuk-hint bilingual-text">
                            {detailsStrings.date__bilingual}&nbsp;
                            {getDateFormattedDOB(user, LANGUAGE_CODES.en)}
                        </span>
                    ) : null}
                </p>
                <Carousel
                    internationalQR={userApiCache.certificate.international}
                    recoveryQR={userApiCache.certificate.recovery}
                />
                <TimeoutAlert
                    id="covidRecords-timeoutalert"
                    headerText={timeoutAlertStrings.alertHeader1}
                    bodyText={timeoutAlertStrings.alertBody1}
                />
            </div>
        </div>
    )
}

export default Details
