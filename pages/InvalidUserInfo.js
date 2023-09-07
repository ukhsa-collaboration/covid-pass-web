import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { trackPageView, trackEvent } from 'helpers/appInsights'
import { gotoHomepage, isNhsAppNative } from 'helpers/isNhsApp'
import { getInternalHref } from 'helpers/index'
import { INDEX_PAGE } from 'constants/routes'
import { invalidUserInfoStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import Head from 'next/head'

const InvalidUserInfo = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)

    invalidUserInfoStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('Invalid User Info', '/InvalidUserInfo')
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        if (isNhsAppNative()) {
            gotoHomepage()
        } else {
            router.push(INDEX_PAGE)
            trackEvent('Invalid User Info page - Back to Index')
        }
    }

    return (
        <div>
            <Head>
                <title>{invalidUserInfoStrings.head}</title>
            </Head>
            <h1 className="nhsuk-heading-xl">{invalidUserInfoStrings.heading1}</h1>
            <p className="nhsuk-body">{invalidUserInfoStrings.body1}</p>

            <a
                className="nhsuk-link nhsuk-link--no-visited-state"
                data-testid="invalid-user-info-href"
                id="invalid-user-info-href"
                onClick={handleClick}
                onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
                href={getInternalHref(INDEX_PAGE)}>
                {invalidUserInfoStrings.linkText1}
            </a>
        </div>
    )
}

export default InvalidUserInfo
