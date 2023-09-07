import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { useCookies } from 'react-cookie'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { HELP_PRIVACY_NOTICE, HELP_TERMS_AND_CONDITIONS } from 'constants/routes'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { button, indexPageStrings } from 'localization/translations'
import { trackEvent } from 'helpers/appInsights'
import { getLanguage } from 'helpers/userHelper'
import { getRedirectLink } from 'helpers/auth'
import { getNhsLoginRedirectUri, getInternalHref } from 'helpers/index'
import { isNhsAppNative } from 'helpers/isNhsApp'
import { removeUserCookie } from 'helpers/cookieHelper'
import PrimaryButton from 'components/buttons/PrimaryButton'
import NHSBackButton from 'components/buttons/nhsBackButton'
import NhsLoginButton from 'components/buttons/NhsLoginButton'
import ExternalLink from 'components/contentPresentation/ExternalLink'

const StartPage = ({ handleContinueClick, ssoLayout = false }) => {
    const router = useRouter()
    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)

    indexPageStrings.setLanguage(getLanguage(user))
    button.setLanguage(getLanguage(user))

    const handleClick = (event) => {
        event.preventDefault()
        router.push(HELP_TERMS_AND_CONDITIONS)
    }

    const handleNHSLogin = () => {
        const redirectUri = getNhsLoginRedirectUri()
        let redirectLink = getRedirectLink(redirectUri)
        window.location.href = redirectLink
        removeUserCookie(setCookie)
        trackEvent('Landing - NHS Login Button Click')
    }

    const handlePrivacyPolicyClick = (event) => {
        event.preventDefault()
        router.push(HELP_PRIVACY_NOTICE)
    }

    return (
        <div>
            <Head>
                <title>{ssoLayout ? indexPageStrings.headSso : indexPageStrings.headLanding}</title>
            </Head>
            {isNhsAppNative() ? <NHSBackButton /> : null}
            <h1 className="nhsuk-heading-xl">{indexPageStrings.heading1}</h1>
            <div className="nhsuk-u-reading-width">
                <p className="nhsuk-body">
                    {indexPageStrings.body1}
                    <a
                        className="nhsuk-link nhsuk-link--no-visited-state"
                        data-testid="start-page-terms-conditions-link"
                        id="start-page-terms-conditions-link"
                        href={getInternalHref(HELP_TERMS_AND_CONDITIONS)}
                        onClick={handleClick}>
                        {indexPageStrings.termsAndConditionsLinkText}
                    </a>
                    &nbsp;{indexPageStrings.bindingTermsAndPrivacy}&nbsp;
                    <a
                        className="nhsuk-link nhsuk-link--no-visited-state"
                        data-testid="start-page-privacy-policy-link"
                        id="start-page-privacy-policy-link"
                        href={getInternalHref(HELP_PRIVACY_NOTICE)}
                        onClick={handlePrivacyPolicyClick}>
                        {indexPageStrings.privayPolicyLinkText}
                    </a>
                </p>
                {ssoLayout ? (
                    <>
                        <PrimaryButton
                            text={button.continue}
                            onClickAction={handleContinueClick}
                            dataTestId="start-page-primary-button"
                        />
                    </>
                ) : (
                    <NhsLoginButton onClickAction={handleNHSLogin} />
                )}
                <p className="nhsuk-u-margin-top-4">
                    {indexPageStrings.body3}
                    &nbsp;
                    <ExternalLink
                        href={indexPageStrings.serviceHref}
                        text={indexPageStrings.linkText1}
                    />
                    &nbsp;
                    {indexPageStrings.body4}
                    &nbsp;
                    <ExternalLink
                        href={indexPageStrings.coronavirusHref}
                        text={indexPageStrings.linkText2}
                    />
                </p>
            </div>
        </div>
    )
}

StartPage.propTypes = {
    handleContinueClick: PropTypes.func,
    ssoLayout: PropTypes.bool
}

export default StartPage
