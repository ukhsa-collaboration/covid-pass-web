import React, { useEffect } from 'react'
import BackButton from 'components/buttons/BackButton'
import { useRouter } from 'next/router'
import { trackPageView } from 'helpers/appInsights'
import { NO_RECORDS, INDEX_PAGE, UNVERIFIED } from 'constants/routes'
import { noRecordsPageStrings, timeoutAlertStrings } from 'localization/translations'
import TimeoutAlert from 'components/Alerts/TimeoutAlert'
import Head from 'next/head'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getUserToken } from 'helpers/cookieHelper'
import { getIdentityProofingLevel, getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'

const NoRecords = () => {
    const router = useRouter()
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)

    noRecordsPageStrings.setLanguage(getLanguage(user))
    timeoutAlertStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        if (['P5', 'P5Plus'].includes(getIdentityProofingLevel(user))) {
            router.push(UNVERIFIED)
        }
    }, [user, router])

    useEffect(() => {
        trackPageView('No Test Results', NO_RECORDS)
    }, [])

    useEffect(() => {
        if (!getUserToken(cookies)) {
            router.push(INDEX_PAGE).then(() => window.location.reload())
        }
    }, [cookies, router])

    return (
        <div>
            <Head>
                <title>{noRecordsPageStrings.head}</title>
            </Head>
            <BackButton id="noRecords-backbutton" />
            <div className="nhsuk-u-reading-width">
                <h1 className="nhsuk-heading-xl" id="noRecords-header-one">
                    {noRecordsPageStrings.heading1}
                </h1>
                <p className="nhsuk-body" id="details-body-one">
                    {noRecordsPageStrings.body1}
                </p>
                <p className="nhsuk-u-font-weight-bold" id="details-body-one">
                    {noRecordsPageStrings.body2}
                </p>
            </div>
            <div className="nhsuk-u-reading-width">
                <h2 className="nhsuk-heading-l">{noRecordsPageStrings.heading2}</h2>
                <p className="nhsuk-body" id="details-body-one">
                    {noRecordsPageStrings.body3}
                </p>
                <p className="nhsuk-body" id="details-body-one">
                    {noRecordsPageStrings.body4}
                </p>
                <ul>
                    <li>{noRecordsPageStrings.body5}</li>
                    <li>{noRecordsPageStrings.body6}</li>
                </ul>
                <h2 className="nhsuk-heading-l">{noRecordsPageStrings.heading3}</h2>
                <p className="nhsuk-body" id="details-body-one">
                    {noRecordsPageStrings.body7}
                </p>
            </div>
            <TimeoutAlert
                headerText={timeoutAlertStrings.alertHeader1}
                bodyText={timeoutAlertStrings.alertBody1}
            />
        </div>
    )
}

export default NoRecords
