import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { trackPageView, trackEvent } from 'helpers/appInsights'
import { gotoHomepage, isNhsAppNative } from 'helpers/isNhsApp'
import { INDEX_PAGE, DETAILS, COVID_STATUS } from 'constants/routes'
import { removeSlashFromRoute, getInternalHref } from 'helpers/index'
import { fiveHundredErrorPageStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import Head from 'next/head'

const Custom500 = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)
    const [errorMsg, setErrorMsg] = React.useState(null)

    fiveHundredErrorPageStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('500', '/500')
    }, [])

    useEffect(() => {
        switch (router.query.page) {
            case removeSlashFromRoute(DETAILS):
                setErrorMsg(fiveHundredErrorPageStrings.covidRecordsText)
                break
            case removeSlashFromRoute(COVID_STATUS):
                setErrorMsg(fiveHundredErrorPageStrings.covidStatusText)
                break
        }
    }, [router])

    const handleClick = (e) => {
        e.preventDefault()
        if (isNhsAppNative()) {
            gotoHomepage()
        } else {
            router.push(INDEX_PAGE)
            trackEvent('500 page - Back to Index')
        }
    }

    return (
        <div>
            <Head>
                <title>{fiveHundredErrorPageStrings.head}</title>
            </Head>
            <h1 className="nhsuk-heading-xl" id="fiveHundredError-heading-one">
                {fiveHundredErrorPageStrings.heading1}
            </h1>
            <p>{errorMsg}</p>
            <p className="nhsuk-body" id="fiveHundredError-body-one">
                {fiveHundredErrorPageStrings.body1}
            </p>

            <a
                className="nhsuk-link nhsuk-link--no-visited-state"
                data-testid="five-hundred-error-href"
                id="five-hundred-error-href"
                onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
                onClick={handleClick}
                href={getInternalHref(INDEX_PAGE)}>
                {fiveHundredErrorPageStrings.linkText1}
            </a>
        </div>
    )
}

export default Custom500
