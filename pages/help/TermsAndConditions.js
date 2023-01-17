import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_TERMS_AND_CONDITIONS } from 'constants/routes'
import TermsAndConditions from 'components/HelpPages/TermsAndConditions'

const TermsAndConditionsPage = () => {
    useEffect(() => {
        trackPageView('Help - Terms And Conditions', HELP_TERMS_AND_CONDITIONS)
    }, [])
    return <TermsAndConditions />
}

export default TermsAndConditionsPage
