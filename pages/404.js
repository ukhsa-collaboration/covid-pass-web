import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { trackPageView, trackEvent } from 'helpers/appInsights'
import { INDEX_PAGE } from 'constants/routes'
import { errorPageStrings } from 'localization/translations'
import { getInternalHref } from 'helpers/index'
import { useSelector } from 'react-redux'
import { getLanguage } from 'helpers/userHelper'
import Head from 'next/head'

const Custom404 = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)

    errorPageStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('404', '/404')
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        router.push(INDEX_PAGE)
        trackEvent('404 page - Back to Index')
    }

    return (
        <div>
            <Head>
                <title>{errorPageStrings.head}</title>
            </Head>
            <h1 className="nhsuk-heading-xl" id="fourHundredError-heading-one">
                {errorPageStrings.heading1}
            </h1>
            <p className="nhsuk-body" id="fourHundredError-body-one">
                {errorPageStrings.body1}
            </p>
            <a
                className="nhsuk-link nhsuk-link--no-visited-state"
                data-testid="four-hundred-error-href"
                id="four-hundred-error-href"
                onClick={(e) => handleClick(e)}
                onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
                href={getInternalHref(INDEX_PAGE)}>
                {errorPageStrings.linkText1}
            </a>
        </div>
    )
}

export default Custom404
