import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_PRIVACY_NOTICE_UNDER_SIXTEEN } from 'constants/routes'
import PrivacyNoticeUnderSixteen from 'components/HelpPages/PrivacyNoticeUnderSixteen'

const PrivacyNoticeUnderSixteenPage = () => {
    useEffect(() => {
        trackPageView('Help - Privacy Notice Under Sixteen', HELP_PRIVACY_NOTICE_UNDER_SIXTEEN)
    }, [])
    return <PrivacyNoticeUnderSixteen />
}

export default PrivacyNoticeUnderSixteenPage
