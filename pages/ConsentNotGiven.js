import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { INDEX_PAGE } from 'constants/routes'
import { noConsentStrings } from 'localization/translations'
import { isNhsAppNative } from 'helpers/isNhsApp'
import NHSBackButton from 'components/buttons/nhsBackButton'
import BackButton from 'components/buttons/BackButton'
import { trackPageView, trackEvent } from 'helpers/appInsights'
import { CONSENT_NOT_GIVEN } from 'constants/routes'
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
                    id="consent-not-given-home-href"
                    className="nhsuk-link nhsuk-link--no-visited-state"
                    href={INDEX_PAGE}
                    onKeyPress={(e) => e.key === 'Enter' && handleClick(e)}
                    onClick={handleClick}>
                    {noConsentStrings.linkText1}
                </a>
            )}
        </div>
    )
}

export default ConsentNotGiven
