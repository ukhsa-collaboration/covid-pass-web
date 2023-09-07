import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { INDEX_PAGE, CONSENT_NOT_GIVEN } from 'constants/routes'
import { noConsentStrings } from 'localization/translations'
import { isNhsAppNative } from 'helpers/isNhsApp'
import { getInternalHref } from 'helpers/index'
import NHSBackButton from 'components/buttons/nhsBackButton'
import BackButton from 'components/buttons/BackButton'
import { trackPageView, trackEvent } from 'helpers/appInsights'
import Head from 'next/head'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'

const ConsentNotGiven = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)
    noConsentStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('Consent not given', CONSENT_NOT_GIVEN)
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        router.push(INDEX_PAGE)
        trackEvent('Consent not given - Back to index page')
    }

    return (
        <div>
            <Head>
                <title>{noConsentStrings.head}</title>
            </Head>
            {isNhsAppNative() ? <NHSBackButton /> : <BackButton />}
            <h1 className="nhsuk-heading-xl">{noConsentStrings.heading1}</h1>
            <p className="nhsuk-body">{noConsentStrings.body1}</p>
            {isNhsAppNative() ? null : (
                <a
                    className="nhsuk-link nhsuk-link--no-visited-state"
                    data-testid="consent-not-given-home-href"
                    id="consent-not-given-home-href"
                    onClick={handleClick}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
                    href={getInternalHref(INDEX_PAGE)}>
                    {noConsentStrings.linkText1}
                </a>
            )}
        </div>
    )
}

export default ConsentNotGiven
