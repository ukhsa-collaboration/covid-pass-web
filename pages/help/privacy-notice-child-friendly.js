import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_PRIVACY_NOTICE_CHILD_FRIENDLY } from 'constants/routes'
import PrivacyNoticeChildFriendly from 'components/HelpPages/PrivacyNoticeChildFriendly'

const PrivacyNoticeChildFriendlyPage = () => {
    useEffect(() => {
        trackPageView('Help - Privacy Notice Child Friendly', HELP_PRIVACY_NOTICE_CHILD_FRIENDLY)
    }, [])

    return <PrivacyNoticeChildFriendly />
}

export default PrivacyNoticeChildFriendlyPage
