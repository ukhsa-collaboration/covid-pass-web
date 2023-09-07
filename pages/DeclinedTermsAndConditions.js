import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { INDEX_PAGE, DECLINED_TERMS_AND_CONDITIONS } from 'constants/routes'
import { trackPageView } from 'helpers/appInsights'
import { getInternalHref } from 'helpers/index'
import { declinedTermsAndConditionsStrings } from 'localization/translations'
import { isNhsAppDesktop, isNhsAppNative } from 'helpers/isNhsApp'
import BackButton from 'components/buttons/BackButton'
import { useSelector } from 'react-redux'
import { getLanguage } from 'helpers/userHelper'
import Head from 'next/head'

const DeclinedTermsAndConditions = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)
    const nhsApp = useSelector((state) => state.nhsAppReducer.nhsApp)

    declinedTermsAndConditionsStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('Declined Terms and Conditions', DECLINED_TERMS_AND_CONDITIONS)
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        router.push(INDEX_PAGE)
    }

    return (
        <div>
            <Head>
                <title>{declinedTermsAndConditionsStrings.head}</title>
            </Head>
            <BackButton />
            <h1 className="nhsuk-heading-xl">{declinedTermsAndConditionsStrings.heading1}</h1>
            <p className="nhsuk-body">{declinedTermsAndConditionsStrings.body1}</p>
            {isNhsAppDesktop(nhsApp) || isNhsAppNative() ? null : (
                <a
                    className="nhsuk-link nhsuk-link--no-visited-state"
                    data-testid="declined-terms-conditions-href"
                    id="declined-terms-conditions-href"
                    onClick={handleClick}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
                    href={getInternalHref(INDEX_PAGE)}>
                    {declinedTermsAndConditionsStrings.linkText1}
                </a>
            )}
        </div>
    )
}

export default DeclinedTermsAndConditions
