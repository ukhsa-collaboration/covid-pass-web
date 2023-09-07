import React from 'react'
import { useRouter } from 'next/router'
import {
    HELP_TERMS_AND_CONDITIONS,
    HELP_PRIVACY_NOTICE,
    HELP_COOKIE_POLICY,
    HELP_ACCESSIBILITY,
    HELP_PRIVACY_NOTICE_UNDER_SIXTEEN,
    HELP_PRIVACY_NOTICE_5_to_11
} from 'constants/routes'
import { RELEASE_VERSION } from 'constants/index'
import { trackEvent } from 'helpers/appInsights'
import { footerStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { getInternalHref } from 'helpers/index'
import { useSelector } from 'react-redux'
import useIsLetterServiceUrlQuery from 'hooks/useIsLetterServiceUrlQuery'

const Footer = () => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)
    footerStrings.setLanguage(getLanguage(user))
    const isLetterService = useIsLetterServiceUrlQuery()

    const onClickU16PrivacyNotice = (event) => {
        event.preventDefault()
        router.push(HELP_PRIVACY_NOTICE_UNDER_SIXTEEN).then(() => window.scrollTo(0, 0))
        trackEvent('Footer - Under 16s Privacy Notice')
    }

    const onClickPrivacyNotice5To11 = (event) => {
        event.preventDefault()
        router.push(HELP_PRIVACY_NOTICE_5_to_11).then(() => window.scrollTo(0, 0))
        trackEvent('Footer - Age 5 to 11 Privacy Notice')
    }

    const onClickPrivacyNotice = (event) => {
        event.preventDefault()
        router.push(HELP_PRIVACY_NOTICE).then(() => window.scrollTo(0, 0))
        trackEvent('Footer - Privacy Notice')
    }

    const onClickTermsAndConditions = (event) => {
        event.preventDefault()
        router.push(HELP_TERMS_AND_CONDITIONS).then(() => window.scrollTo(0, 0))
        trackEvent('Footer - Terms and Conditions')
    }
    const onCookiePolicy = (event) => {
        event.preventDefault()
        router.push(HELP_COOKIE_POLICY).then(() => window.scrollTo(0, 0))
        trackEvent('Footer - Cookie Policy')
    }

    const onClickAccessibilityStatement = (event) => {
        event.preventDefault()
        router.push(HELP_ACCESSIBILITY).then(() => window.scrollTo(0, 0))
        trackEvent('Footer - Accessibility statement')
    }

    return (
        <footer role="contentinfo">
            <div className="nhsuk-footer" id="nhsuk-footer">
                <div className="nhsuk-width-container">
                    {!isLetterService && (
                        <ul className="nhsuk-footer__list" aria-label={footerStrings.links}>
                            <li className="nhsuk-footer__list-item">
                                <a
                                    onClick={(e) => onClickAccessibilityStatement(e)}
                                    className="nhsuk-footer__list-item-link"
                                    data-testid="footer_accessibility-statement-link"
                                    href={getInternalHref(HELP_ACCESSIBILITY)}
                                    title={footerStrings.accessibilityLinkTitle}>
                                    {footerStrings.accessibilityLinkText}
                                </a>
                            </li>
                            <li className="nhsuk-footer__list-item">
                                <a
                                    onClick={(e) => onCookiePolicy(e)}
                                    className="nhsuk-footer__list-item-link"
                                    data-testid="footer_cookie-policy-link"
                                    href={getInternalHref(HELP_COOKIE_POLICY)}
                                    title={footerStrings.cookieLinkTitle}>
                                    {footerStrings.cookieLinkText}
                                </a>
                            </li>
                            <li className="nhsuk-footer__list-item">
                                <a
                                    onClick={(e) => onClickPrivacyNotice5To11(e)}
                                    className="nhsuk-footer__list-item-link"
                                    data-testid="footer_privacy-notice-5-to-11-link"
                                    href={getInternalHref(HELP_PRIVACY_NOTICE_5_to_11)}
                                    title={footerStrings.age5To11PrivacyLinkTextTitle}>
                                    {footerStrings.age5To11PrivacyLinkText}
                                </a>
                            </li>
                            <li className="nhsuk-footer__list-item">
                                <a
                                    onClick={(e) => onClickU16PrivacyNotice(e)}
                                    className="nhsuk-footer__list-item-link"
                                    data-testid="footer_privacy-notice-under-16-link"
                                    href={getInternalHref(HELP_PRIVACY_NOTICE_UNDER_SIXTEEN)}
                                    title={footerStrings.u16PrivacyLinkTitle}>
                                    {footerStrings.u16PrivacyLinkText}
                                </a>
                            </li>
                            <li className="nhsuk-footer__list-item">
                                <a
                                    onClick={(e) => onClickPrivacyNotice(e)}
                                    className="nhsuk-footer__list-item-link"
                                    data-testid="footer_privacy-notice-link"
                                    href={getInternalHref(HELP_PRIVACY_NOTICE)}
                                    title={footerStrings.privacyLinkTitle}>
                                    {footerStrings.privacyLinkText}
                                </a>
                            </li>
                            <li className="nhsuk-footer__list-item">
                                <a
                                    onClick={(e) => onClickTermsAndConditions(e)}
                                    className="nhsuk-footer__list-item-link"
                                    data-testid="footer_terms-conditions-link"
                                    href={getInternalHref(HELP_TERMS_AND_CONDITIONS)}
                                    title={footerStrings.tncLinkTitle}>
                                    {footerStrings.tncLinkText}
                                </a>
                            </li>
                        </ul>
                    )}
                    <p className="nhsuk-footer__copyright">
                        &copy;&nbsp;{footerStrings.crownCopyright}
                    </p>
                    {!isLetterService && (
                        <p
                            className="nhsuk-footer__copyright"
                            id="footer-version-number"
                            data-testid="footer-version-number">
                            <span className="nhsuk-u-visually-hidden">
                                {footerStrings.release}&nbsp;
                            </span>
                            {RELEASE_VERSION}
                        </p>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer
