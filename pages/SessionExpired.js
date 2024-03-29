import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { trackPageView, trackEvent } from 'helpers/appInsights'
import { gotoHomepage, isNhsAppNative } from 'helpers/isNhsApp'
import { getInternalHref } from 'helpers/index'
import { INDEX_PAGE, SESSION_EXPIRED } from 'constants/routes'
import { SessionExpiredStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import Head from 'next/head'

const SessionExpired = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)

    SessionExpiredStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('Session Expired', SESSION_EXPIRED)
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        if (isNhsAppNative()) {
            gotoHomepage()
        } else {
            router.push(INDEX_PAGE)
            trackEvent('Session Expired page - Back to Index')
        }
    }

    return (
        <div>
            <Head>
                <title>{SessionExpiredStrings.head}</title>
            </Head>
            <h1 className="nhsuk-heading-xl" id="SessionExpired-heading-one">
                {SessionExpiredStrings.heading}
            </h1>
            <p className="nhsuk-body" id="SessionExpired-body-one">
                {SessionExpiredStrings.body1}
                <a
                    className="nhsuk-link nhsuk-link--no-visited-state"
                    data-testid="session-expired-error-href"
                    id="session-expired-error-href"
                    onClick={(e) => handleClick(e)}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
                    href={getInternalHref(INDEX_PAGE)}>
                    {SessionExpiredStrings.linkText}
                </a>
                &nbsp;{SessionExpiredStrings.body2}
            </p>
        </div>
    )
}

export default SessionExpired
