import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { INDEX_PAGE, DECLINED_TERMS_AND_CONDITIONS } from 'constants/routes'
import { trackPageView } from 'helpers/appInsights'
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
                    id="declined-terms-conditions-href"
                    className="nhsuk-link nhsuk-link--no-visited-state"
                    href={INDEX_PAGE}
                    onKeyPress={(e) => e.key === 'Enter' && handleClick(e)}
                    onClick={handleClick}>
                    {declinedTermsAndConditionsStrings.linkText1}
                </a>
            )}
        </div>
    )
}

export default DeclinedTermsAndConditions
