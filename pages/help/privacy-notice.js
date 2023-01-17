import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_PRIVACY_NOTICE } from 'constants/routes'
import PrivacyNotice from 'components/HelpPages/PrivacyNotice'

const PrivacyNoticePage = () => {
    useEffect(() => {
        trackPageView('Help - Privacy Notice', HELP_PRIVACY_NOTICE)
    }, [])

    return <PrivacyNotice />
}

export default PrivacyNoticePage
