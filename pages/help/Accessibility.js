import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_ACCESSIBILITY } from 'constants/routes'
import Accessibility from 'components/HelpPages/Accessibility'

const AccessibilityPage = () => {
    useEffect(() => {
        trackPageView('Help - Accessibility', HELP_ACCESSIBILITY)
    }, [])

    return <Accessibility />
}

export default AccessibilityPage
