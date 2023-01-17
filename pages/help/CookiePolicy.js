import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_COOKIE_POLICY } from 'constants/routes'
import CookiePolicy from 'components/HelpPages/CookiePolicy'

const CookiePolicyPage = () => {
    useEffect(() => {
        trackPageView('Help - Cookie Policy', HELP_COOKIE_POLICY)
    }, [])

    return <CookiePolicy />
}

export default CookiePolicyPage
