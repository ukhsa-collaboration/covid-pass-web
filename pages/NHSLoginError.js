import { NHS_LOGIN_ERROR, INDEX_PAGE } from 'constants/routes'
import { trackPageView, trackEvent } from 'helpers/appInsights'
import { gotoHomepage, isNhsAppNative } from 'helpers/isNhsApp'
import { getLanguage } from 'helpers/userHelper'
import { getInternalHref } from 'helpers/index'
import { nhsLoginFailedStrings } from 'localization/translations'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'

const NHSLoginError = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)

    nhsLoginFailedStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('NHS Login Error', NHS_LOGIN_ERROR)
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        if (isNhsAppNative()) {
            gotoHomepage()
        } else {
            router.push(INDEX_PAGE)
            trackEvent('NHS Login Error - Back to Terms and Conditions')
        }
    }

    return (
        <div>
            <Head>
                <title>{nhsLoginFailedStrings.head}</title>
            </Head>
            <div className="nhsuk-u-reading-width">
                <h1 className="nhsuk-heading-xl" id="NhsLoginError-heading-one">
                    {nhsLoginFailedStrings.nhsLoginErrorTitle}
                </h1>
            </div>
            <div className="nhsuk-u-reading-width">
                <p className="nhsuk-u-font-weight-regular" id="NhsLoginError-body-one">
                    {nhsLoginFailedStrings.nhsLoginErrorMessage}
                </p>
                <p
                    className="nhsuk-u-font-weight-regular nhsuk-u-margin-bottom-5"
                    id="NhsLoginError-body-two">
                    {nhsLoginFailedStrings.nhsLoginErrorGoBackMessage}
                </p>
                <p>
                    <a
                        className="nhsuk-link nhsuk-link--no-visited-state-link"
                        data-testid="nhs-login-error-btn"
                        id="nhs-login-error-btn"
                        role="button"
                        onClick={handleClick}
                        onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
                        href={getInternalHref(INDEX_PAGE)}>
                        {nhsLoginFailedStrings.nhsLoginErrorBackToStartLink}
                    </a>
                </p>
            </div>
        </div>
    )
}

export default NHSLoginError
