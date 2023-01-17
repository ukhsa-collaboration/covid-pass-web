import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_LETTER_PRIVACY_NOTICE_5_to_11 } from 'constants/routes'
import PrivacyNoticeFiveToEleven from 'components/HelpPages/PrivacyNoticeFiveToEleven'

const PrivacyNoticeFiveToElevenPageLetter = () => {
    useEffect(() => {
        trackPageView('Help letter - Privacy Notice 5 to 11', HELP_LETTER_PRIVACY_NOTICE_5_to_11)
    }, [])

    return <PrivacyNoticeFiveToEleven showBackButton={false} />
}

export default PrivacyNoticeFiveToElevenPageLetter
