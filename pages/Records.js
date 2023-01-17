import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BackButton from 'components/buttons/BackButton'
import { useRouter } from 'next/router'
import { trackPageView } from 'helpers/appInsights'
import { RECORDS, INDEX_PAGE, UNVERIFIED } from 'constants/routes'
import { recordsPageStrings, timeoutAlertStrings } from 'localization/translations'
import TimeoutAlert from 'components/Alerts/TimeoutAlert'
import Head from 'next/head'
import Result from 'components/Results/Results'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getUserToken } from 'helpers/cookieHelper'
import { getIdentityProofingLevel, getLanguage } from 'helpers/userHelper'

const Records = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)

    recordsPageStrings.setLanguage(getLanguage(user))
    timeoutAlertStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        if (getIdentityProofingLevel(user) === 'P5') {
            router.push(UNVERIFIED)
        }
    }, [router, user])

    useEffect(() => {
        trackPageView('Records page', RECORDS)
    }, [])

    useEffect(() => {
        if (!getUserToken(cookies)) {
            router.push(INDEX_PAGE).then(() => window.location.reload())
        }
    }, [user, router, cookies])

    return (
        <div>
            <Head>
                <title>{recordsPageStrings.head}</title>
            </Head>
            <BackButton id="records-backbutton" />
            <div className="nhsuk-u-reading-width">
                <h1 className="nhsuk-heading-xl break-word-wrap" id="records-header-one">
                    {recordsPageStrings.heading1}
                </h1>
                {userApiCache.certificate.domestic.certificateType != '4' ? (
                    <Result
                        showTestResults={true}
                        showVaccinationResults={true}
                        showExemptionResults={true}
                    />
                ) : (
                    <p className="nhsuk-body">{recordsPageStrings.exemptUserMsg}</p>
                )}
            </div>
            <TimeoutAlert
                headerText={timeoutAlertStrings.alertHeader1}
                bodyText={timeoutAlertStrings.alertBody1}
            />
        </div>
    )
}

export default Records
