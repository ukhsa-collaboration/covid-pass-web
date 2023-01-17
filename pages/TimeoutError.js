import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { trackPageView } from 'helpers/appInsights'
import { SELECTED_FLOW, TIMEOUT_ERROR } from 'constants/routes'
import { logoutErrorPageStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import Head from 'next/head'

const TimeoutError = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)

    logoutErrorPageStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('Timeout Error', TIMEOUT_ERROR)
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        router.push(SELECTED_FLOW)
    }

    return (
        <div>
            <Head>
                <title>{logoutErrorPageStrings.head}</title>
            </Head>
            <h1 className="nhsuk-heading-xl" id="Timeout-header-one">
                {logoutErrorPageStrings.heading1}
            </h1>

            <a
                className="nhsuk-link nhsuk-link--no-visited-state"
                href={SELECTED_FLOW}
                id="Timeout-href"
                onKeyPress={(e) => e.key === 'Enter' && handleClick(e)}
                onClick={handleClick}>
                {logoutErrorPageStrings.linkText1}
            </a>
        </div>
    )
}

export default TimeoutError
