import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { timeoutAlertStrings } from 'localization/translations'
import { helpPrivacyNoticeFiveToEleven } from 'localization/privacyNoticeFiveToElevenTranslations'
import { HELP_PRIVACY_NOTICE, HELP_PRIVACY_NOTICE_CHILD_FRIENDLY } from 'constants/routes'
import BackButton from 'components/buttons/BackButton'
import TimeoutAlert from 'components/Alerts/TimeoutAlert'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getUserToken } from 'helpers/cookieHelper'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import ExternalLink from 'components/contentPresentation/ExternalLink'
import useIsLetterServiceUrlQuery from 'hooks/useIsLetterServiceUrlQuery'
import { addInternalRouteWithExternalResourceLetter, getInternalHref } from 'helpers/index'

const PrivacyNoticeFiveToEleven = ({ showBackButton = true }) => {
    const router = useRouter()
    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const isLetterService = useIsLetterServiceUrlQuery()

    timeoutAlertStrings.setLanguage(getLanguage(user))
    helpPrivacyNoticeFiveToEleven.setLanguage(getLanguage(user))

    const onClickPrivacyNotice = (event) => {
        event.preventDefault()
        router
            .push(HELP_PRIVACY_NOTICE + addInternalRouteWithExternalResourceLetter(isLetterService))
            .then(() => window.scrollTo(0, 0))
    }

    const onClickPrivacyNoticeChildFriendly = (event) => {
        event.preventDefault()
        router
            .push(
                HELP_PRIVACY_NOTICE_CHILD_FRIENDLY +
                    addInternalRouteWithExternalResourceLetter(isLetterService)
            )
            .then(() => window.scrollTo(0, 0))
    }

    return (
        <div id="privacy-notice-5-to-11" className="nhsuk-u-reading-width">
            <Head>
                <title>{helpPrivacyNoticeFiveToEleven.head}</title>
            </Head>
            {showBackButton && <BackButton />}
            <h1 className="nhsuk-heading-xl">{helpPrivacyNoticeFiveToEleven.title}</h1>
            <p className="nhsuk-body">
                <a
                    className="nhsuk-link nhsuk-link--no-visited-state-link"
                    data-testid="privacy-notice-5-11-privacy-notice-child-friendly-link"
                    id="privacy-notice-5-11-privacy-notice-child-friendly-link"
                    onClick={(e) => onClickPrivacyNoticeChildFriendly(e)}
                    href={getInternalHref(HELP_PRIVACY_NOTICE_CHILD_FRIENDLY)}
                    target="_blank">
                    {helpPrivacyNoticeFiveToEleven.linkToChildFriendly.text}
                </a>
            </p>
            {/* What is a Privacy Notice? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeFiveToEleven.whatIsPrivacyNotice.heading}
            </h2>
            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.whatIsPrivacyNotice.textGroup1.text1}
            </p>

            {/* Why do you need an NHS COVID Pass travel letter? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeFiveToEleven.whyDoYouNeedAnNhsCovidPassLetter.heading}
            </h2>
            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.whyDoYouNeedAnNhsCovidPassLetter.textGroup1.text1}
            </p>
            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.whyDoYouNeedAnNhsCovidPassLetter.textGroup2.text1}
            </p>

            {/* Who are we? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeFiveToEleven.whoWeAre.heading}
            </h2>
            <p className="nhsuk-body">{helpPrivacyNoticeFiveToEleven.whoWeAre.textGroup1.text1}</p>
            <p className="nhsuk-body">{helpPrivacyNoticeFiveToEleven.whoWeAre.textGroup1a.text1}</p>
            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.whoWeAre.textGroup2.text1}
                <span className="nhsuk-u-font-weight-bold">
                    {helpPrivacyNoticeFiveToEleven.whoWeAre.textGroup2.boldText1}
                </span>
            </p>
            <p className="nhsuk-body">{helpPrivacyNoticeFiveToEleven.whoWeAre.textGroup3.text1}</p>
            <p className="nhsuk-body">{helpPrivacyNoticeFiveToEleven.whoWeAre.textGroup4.text1}</p>
            <p className="nhsuk-body">{helpPrivacyNoticeFiveToEleven.whoWeAre.textGroup5.text1}</p>

            {/* How can I get the digital NHS COVID Pass for a child aged 5-11 year olds? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeFiveToEleven.howToGetDigitalPassFor5To11.heading}
            </h2>
            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.howToGetDigitalPassFor5To11.textGroup1.text1}
            </p>
            <ul>
                <li>
                    {
                        helpPrivacyNoticeFiveToEleven.howToGetDigitalPassFor5To11.textGroup1.list1
                            .listItem1
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeFiveToEleven.howToGetDigitalPassFor5To11.textGroup1.list1
                            .listItem2
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeFiveToEleven.howToGetDigitalPassFor5To11.textGroup1.list1
                            .listItem3
                    }
                </li>
            </ul>
            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.howToGetDigitalPassFor5To11.textGroup2.text1}
            </p>
            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.howToGetDigitalPassFor5To11.textGroup3.text1}
            </p>

            {/* What is the NHS COVID Pass travel letter, and can I apply for one? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.heading}
            </h2>
            <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                {helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.textGroup1.text1}
            </p>
            <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                {helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.textGroup1.text2}
                <span className="nhsuk-u-font-weight-bold">
                    {helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.textGroup1.boldText1}
                </span>
                {helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.textGroup1.text3}
            </p>
            <ul>
                <li>
                    {helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.textGroup1.list1.listItem1}
                </li>
                <li>
                    {
                        helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.textGroup1.list1.listItem2
                            .text1
                    }
                    <span className="nhsuk-u-font-weight-bold">
                        {
                            helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.textGroup1.list1
                                .listItem2.boldText1
                        }
                    </span>
                    {
                        helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.textGroup1.list1.listItem2
                            .text2
                    }
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.textGroup1.list1.listItem3}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.textGroup1.list1.listItem4}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.whatIsTravelLetter.textGroup1.list1.listItem5}
                </li>
            </ul>

            {/* What does the letter say? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeFiveToEleven.whatDoesTheLetterSay.heading}
            </h2>
            <ul>
                <li>
                    {helpPrivacyNoticeFiveToEleven.whatDoesTheLetterSay.textGroup1.list1.listItem1}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.whatDoesTheLetterSay.textGroup1.list1.listItem2}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.whatDoesTheLetterSay.textGroup1.list1.listItem3}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.whatDoesTheLetterSay.textGroup1.list1.listItem4}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.whatDoesTheLetterSay.textGroup1.list1.listItem5}
                </li>
            </ul>

            {/* How can I get the NHS COVID Pass travel letter? What information do I need? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.heading}
            </h2>
            <ul>
                <li>
                    {helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1.listItem1}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1.listItem2}
                </li>
                <li>
                    {
                        helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1
                            .listItem3.text1
                    }
                    <ul>
                        <li>
                            {
                                helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1
                                    .listItem3.subList1.listItem1
                            }
                        </li>
                        <li>
                            {
                                helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1
                                    .listItem3.subList1.listItem2
                            }
                        </li>
                        <li>
                            {
                                helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1
                                    .listItem3.subList1.listItem3
                            }
                        </li>
                    </ul>
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1.listItem4}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1.listItem4b}
                </li>
                <li>
                    {
                        helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1
                            .listItem5.text1
                    }
                    <span className="nhsuk-u-font-weight-bold">
                        {
                            helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1
                                .listItem5.boldText1
                        }
                    </span>
                    {
                        helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1
                            .listItem5.text2
                    }
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1.listItem5b}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1.listItem6}
                </li>
                <li className="nhsuk-u-font-weight-bold">
                    {helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.textGroup1.list1.listItem7}
                </li>
            </ul>

            <h3 className="nhsuk-heading-s nhsuk-u-margin-bottom-1">
                {helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.keepingAddressUpdated.heading}
            </h3>
            <p className="nhsuk-body font-italic">
                {helpPrivacyNoticeFiveToEleven.howCanIGetTravelPass.keepingAddressUpdated.text1}
            </p>

            {/* What are your rights when it comes to your information? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeFiveToEleven.yourRightsToYourInfo.heading}
            </h2>
            <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                {helpPrivacyNoticeFiveToEleven.yourRightsToYourInfo.textGroup1.text1}
            </p>
            <ul>
                <li>
                    {helpPrivacyNoticeFiveToEleven.yourRightsToYourInfo.textGroup1.list1.listItem1}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.yourRightsToYourInfo.textGroup1.list1.listItem2}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.yourRightsToYourInfo.textGroup1.list1.listItem3}
                </li>
            </ul>

            <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                {helpPrivacyNoticeFiveToEleven.yourRightsToYourInfo.textGroup2.text1}
            </p>
            <ul>
                <li>
                    {helpPrivacyNoticeFiveToEleven.yourRightsToYourInfo.textGroup2.list1.listItem1}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.yourRightsToYourInfo.textGroup2.list1.listItem2}
                </li>
                <li>
                    {helpPrivacyNoticeFiveToEleven.yourRightsToYourInfo.textGroup2.list1.listItem3}
                </li>
            </ul>

            {/* Important Contact Details */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeFiveToEleven.importantContactDetails.heading}
            </h2>
            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.importantContactDetails.textGroup1.text1}
            </p>
            <p className="nhsuk-body">
                <a
                    target="_blank"
                    href={helpPrivacyNoticeFiveToEleven.importantContactDetails.email.href}
                    className="nhsuk-link nhsuk-link--no-visited-state-link">
                    {helpPrivacyNoticeFiveToEleven.importantContactDetails.email.text}
                </a>
                <br />
                {helpPrivacyNoticeFiveToEleven.importantContactDetails.address.line1}
                <br />
                {helpPrivacyNoticeFiveToEleven.importantContactDetails.address.line2}
                <br />
                {helpPrivacyNoticeFiveToEleven.importantContactDetails.address.line3}
                <br />
                {helpPrivacyNoticeFiveToEleven.importantContactDetails.address.line4}
            </p>
            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.importantContactDetails.textGroup2.text1}
            </p>
            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.importantContactDetails.textGroup3.text1}
            </p>
            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.importantContactDetails.ico.text1}
                <br />
                {helpPrivacyNoticeFiveToEleven.importantContactDetails.ico.telText1}
                <ExternalLink
                    href={helpPrivacyNoticeFiveToEleven.importantContactDetails.ico.link1.href}
                    text={helpPrivacyNoticeFiveToEleven.importantContactDetails.ico.link1.text}
                />
            </p>

            <p className="nhsuk-body">
                {helpPrivacyNoticeFiveToEleven.importantContactDetails.textGroup4.text1}
                <a
                    onClick={(e) => onClickPrivacyNotice(e)}
                    target="_blank"
                    href={getInternalHref(HELP_PRIVACY_NOTICE)}
                    id="privacy-notice-5-11-normal-privacy-notice-link"
                    data-testid="privacy-notice-5-11-normal-privacy-notice-link"
                    className="nhsuk-link nhsuk-link--no-visited-state-link">
                    {helpPrivacyNoticeFiveToEleven.importantContactDetails.textGroup4.link1.text}
                </a>
            </p>

            {/* Changes to this Privacy Notice  */}
            <div>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNoticeFiveToEleven.changeToThisPn.boldText1}
                    </span>
                    {helpPrivacyNoticeFiveToEleven.changeToThisPn.text1}
                </p>
            </div>

            {getUserToken(cookies) ? (
                <TimeoutAlert
                    id="privacy-notice-5to11s-timeoutalert"
                    headerText={timeoutAlertStrings.alertHeader1}
                    bodyText={timeoutAlertStrings.alertBody1}
                />
            ) : null}
        </div>
    )
}

PrivacyNoticeFiveToEleven.propTypes = {
    showBackButton: PropTypes.bool
}

export default PrivacyNoticeFiveToEleven
