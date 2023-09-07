import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_SELECTED_FLOW } from 'actions/types'
import { SELECTED_FLOW, COVID_STATUS, INDEX_PAGE, UNVERIFIED } from 'constants/routes'
import { trackPageView, trackEvent } from 'helpers/appInsights'
import { selectedFlowStrings, timeoutAlertStrings } from 'localization/translations'
import Head from 'next/head'
import TimeoutAlert from 'components/Alerts/TimeoutAlert'
import { getUserToken } from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY, COOKIE_USER_PREFERENCE_KEY } from 'constants/index'
import { getIdentityProofingLevel, getLanguage } from 'helpers/userHelper'
import { uuidCookieReduxNotMatching } from 'helpers/auth'
import DomesticButton from 'components/SelectedFlow/DomesticButton'
import InternationalButton from 'components/SelectedFlow/InternationalButton'
import InternationalUpliftCard from 'components/SelectedFlow/InternationalUpliftCard'
import { getDomesticFeatureToggle } from 'helpers/featureToggleHelper'
import useEndUserSession from 'hooks/useEndUserSession'

const SelectedFlow = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { mismatchedUuidEndSession } = useEndUserSession()

    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)
    selectedFlowStrings.setLanguage(getLanguage(user))
    timeoutAlertStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        const domesticToggledOn = getDomesticFeatureToggle(featureToggle)

        if (getIdentityProofingLevel(user) === 'P5' && domesticToggledOn) {
            router.push(UNVERIFIED)
        }
    }, [featureToggle, router, user])

    useEffect(() => {
        trackPageView('Selected Flow', SELECTED_FLOW)
    }, [])

    useEffect(() => {
        if (!getUserToken(cookies)) {
            router.push(INDEX_PAGE).then(() => window.location.reload())
        }
    }, [cookies, router])

    const onClick = async (event, flow) => {
        if (uuidCookieReduxNotMatching(cookies, user)) {
            mismatchedUuidEndSession()
            return
        }

        await dispatch({
            type: UPDATE_SELECTED_FLOW,
            payload: flow
        })
        const data = {
            SelectedFlow: flow
        }
        setCookie(COOKIE_USER_PREFERENCE_KEY, JSON.stringify(data), {
            path: '/',
            sameSite: 'lax',
            secure: true
        })
        router.push(COVID_STATUS)
        trackEvent('Selected Flow - ' + flow + 'Button Click')
    }
    return (
        <div>
            <Head>
                <title>{selectedFlowStrings.head}</title>
            </Head>
            <h1 className="nhsuk-heading-xl" id="selectedFlow-header-one">
                {selectedFlowStrings.title}
            </h1>
            <p className="nhsuk-body">{selectedFlowStrings.body1}</p>
            <div className="selected-flow-container" id="selectedFlow-body-one">
                <DomesticButton onClick={onClick} />

                <InternationalButton onClick={onClick} />
            </div>
            <InternationalUpliftCard />

            <TimeoutAlert
                id="status-timeoutalert"
                headerText={timeoutAlertStrings.alertHeader1}
                bodyText={timeoutAlertStrings.alertBody1}
            />
        </div>
    )
}

export default SelectedFlow
