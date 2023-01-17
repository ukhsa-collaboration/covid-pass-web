import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_LETTER_TERMS_AND_CONDITIONS } from 'constants/routes'
import TermsAndConditions from 'components/HelpPages/TermsAndConditions'

const TermsAndConditionsPageLetter = () => {
    useEffect(() => {
        trackPageView('Help letter - Terms And Conditions', HELP_LETTER_TERMS_AND_CONDITIONS)
    }, [])
    return <TermsAndConditions showBackButton={false} />
}

export default TermsAndConditionsPageLetter
