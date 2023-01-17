import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_LETTER_ACCESSIBILITY } from 'constants/routes'
import Accessibility from 'components/HelpPages/Accessibility'

const AccessibilityPageLetter = () => {
    useEffect(() => {
        trackPageView('Help letter - Accessibility', HELP_LETTER_ACCESSIBILITY)
    }, [])

    return <Accessibility showBackButton={false} />
}

export default AccessibilityPageLetter
