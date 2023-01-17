import React from 'react'
import PropTypes from 'prop-types'
import { timeoutAlertStrings } from 'localization/translations'
import { helpAccessibility } from 'localization/accessibilityTranslations'
import BackButton from 'components/buttons/BackButton'
import TimeoutAlert from 'components/Alerts/TimeoutAlert'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getUserToken } from 'helpers/cookieHelper'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import ExternalLink from 'components/contentPresentation/ExternalLink'

const Accessibility = ({ showBackButton = true }) => {
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)

    timeoutAlertStrings.setLanguage(getLanguage(user))
    helpAccessibility.setLanguage(getLanguage(user))

    return (
        <div className="nhsuk-u-reading-width">
            <Head>
                <title>{helpAccessibility.head}</title>
            </Head>
            {showBackButton && <BackButton />}
            <div>
                <h1 className="nhsuk-heading-xl">{helpAccessibility.title}</h1>
                <p className="nhsuk-body">{helpAccessibility.subTitle1}</p>
                <p className="nhsuk-body">
                    {helpAccessibility.subTitle2}
                    <ExternalLink
                        href={helpAccessibility.subtitle2HrefLink}
                        text={helpAccessibility.subtitle2HrefText}
                    />
                    {helpAccessibility.subTitle3}
                </p>
            </div>

            <div>
                <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                    {helpAccessibility.textGroup1.heading}
                </h2>
                <p className="nhsuk-body">
                    {helpAccessibility.textGroup1.body1}
                    <ExternalLink
                        href={helpAccessibility.textGroup1.hrefLink}
                        text={helpAccessibility.textGroup1.hrefText}
                    />
                    {helpAccessibility.textGroup1.body2}
                </p>
            </div>

            <div>
                <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                    {helpAccessibility.textGroup2.heading}
                </h2>
                <p className="nhsuk-body">{helpAccessibility.textGroup2.body1}</p>
                <p className="nhsuk-body">{helpAccessibility.textGroup2.body2}</p>
                <p className="nhsuk-body">{helpAccessibility.textGroup2.body3}</p>
                <p className="nhsuk-body">{helpAccessibility.textGroup2.body4}</p>
            </div>

            <div>
                <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                    {helpAccessibility.textGroup3.heading}
                </h2>
                <p className="nhsuk-body">{helpAccessibility.textGroup3.body1}</p>
                <p className="nhsuk-body">
                    {helpAccessibility.textGroup3.body2}
                    <ExternalLink
                        href={helpAccessibility.textGroup3.hrefLink}
                        text={helpAccessibility.textGroup3.hrefText}
                    />
                </p>
                <p className="nhsuk-body">
                    {helpAccessibility.textGroup3.body3}
                    <ExternalLink
                        href={helpAccessibility.textGroup3.href2Text}
                        text={helpAccessibility.textGroup3.href2Link}
                    />
                </p>
            </div>

            <div>
                <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                    {helpAccessibility.textGroup4.heading}
                </h2>
                <p className="nhsuk-body">{helpAccessibility.textGroup4.body1}</p>
                <p className="nhsuk-body">
                    {helpAccessibility.textGroup4.body2}
                    <ExternalLink
                        href={helpAccessibility.textGroup4.hrefLink}
                        text={helpAccessibility.textGroup4.hrefText}
                    />
                </p>
            </div>

            {getUserToken(cookies) ? (
                <TimeoutAlert
                    id="accessibility-timeoutalert"
                    headerText={timeoutAlertStrings.alertHeader1}
                    bodyText={timeoutAlertStrings.alertBody1}
                />
            ) : null}
        </div>
    )
}

Accessibility.propTypes = {
    showBackButton: PropTypes.bool
}

export default Accessibility
