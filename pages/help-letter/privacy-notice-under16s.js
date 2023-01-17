import React, { useEffect } from 'react'
import { trackPageView } from 'helpers/appInsights'
import { HELP_LETTER_PRIVACY_NOTICE_UNDER_SIXTEEN } from 'constants/routes'
import PrivacyNoticeUnderSixteen from 'components/HelpPages/PrivacyNoticeUnderSixteen'

const PrivacyNoticeUnderSixteenPageLetter = () => {
    useEffect(() => {
        trackPageView(
            'Help letter - Privacy Notice Under Sixteen',
            HELP_LETTER_PRIVACY_NOTICE_UNDER_SIXTEEN
        )
    }, [])
    return <PrivacyNoticeUnderSixteen showBackButton={false} />
}

export default PrivacyNoticeUnderSixteenPageLetter
