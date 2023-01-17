import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_LETTER_PRIVACY_NOTICE } from 'constants/routes'
import PrivacyNotice from 'components/HelpPages/PrivacyNotice'

const PrivacyNoticePageLetter = () => {
    useEffect(() => {
        trackPageView('Help letter - Privacy Notice', HELP_LETTER_PRIVACY_NOTICE)
    }, [])

    return <PrivacyNotice showBackButton={false} />
}

export default PrivacyNoticePageLetter
