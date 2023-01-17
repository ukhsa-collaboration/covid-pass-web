import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_PRIVACY_NOTICE_5_to_11 } from 'constants/routes'
import PrivacyNoticeFiveToEleven from 'components/HelpPages/PrivacyNoticeFiveToEleven'

const PrivacyNoticeFiveToElevenPage = () => {
    useEffect(() => {
        trackPageView('Help - Privacy Notice 5 to 11', HELP_PRIVACY_NOTICE_5_to_11)
    }, [])

    return <PrivacyNoticeFiveToEleven />
}

export default PrivacyNoticeFiveToElevenPage
