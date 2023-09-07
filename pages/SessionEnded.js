import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { gotoHomepage, isNhsAppNative } from 'helpers/isNhsApp'
import { SESSION_ENDED, INDEX_PAGE } from 'constants/routes'
import { trackEvent, trackPageView } from 'helpers/appInsights'
import { getInternalHref } from 'helpers/index'
import { useSelector } from 'react-redux'
import { getLanguage } from 'helpers/userHelper'
import { sessionEndedStrings } from 'localization/translations'

const SessionEnded = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)

    sessionEndedStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('Session Ended', SESSION_ENDED)
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        if (isNhsAppNative()) {
            gotoHomepage()
        } else {
            router.push(INDEX_PAGE)
            trackEvent('Session Ended page - Back to Index')
        }
    }

    return (
        <div>
            <h1 className="nhsuk-heading-xl" id="SessionExpired-heading-one">
                {sessionEndedStrings.heading}
            </h1>
            <p>{sessionEndedStrings.body1}</p>
            <p className="nhsuk-body" id="SessionExpired-body-one">
                <a
                    className="nhsuk-link nhsuk-link--no-visited-state"
                    data-testid="session-ended-error-href"
                    id="session-ended-error-href"
                    onClick={(e) => handleClick(e)}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
                    href={getInternalHref(INDEX_PAGE)}>
                    {sessionEndedStrings.linkText}
                </a>
            </p>
        </div>
    )
}

export default SessionEnded
