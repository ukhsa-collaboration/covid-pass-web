import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { HELP_PRIVACY_NOTICE, HELP_PRIVACY_NOTICE_5_to_11 } from 'constants/routes'
import { timeoutAlertStrings } from 'localization/translations'
import { helpPrivacyNoticeUnderSixteen } from 'localization/privacyUnder16Translations'
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

const PrivacyNoticeUnderSixteen = ({ showBackButton = true }) => {
    const router = useRouter()
    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const isLetterService = useIsLetterServiceUrlQuery()

    timeoutAlertStrings.setLanguage(getLanguage(user))
    helpPrivacyNoticeUnderSixteen.setLanguage(getLanguage(user))

    const onClickPrivacyNotice = (event) => {
        event.preventDefault()
        router
            .push(HELP_PRIVACY_NOTICE + addInternalRouteWithExternalResourceLetter(isLetterService))
            .then(() => window.scrollTo(0, 0))
    }

    const onClickPrivacyNotice5To11 = (event) => {
        event.preventDefault()
        router
            .push(
                HELP_PRIVACY_NOTICE_5_to_11 +
                    addInternalRouteWithExternalResourceLetter(isLetterService)
            )
            .then(() => window.scrollTo(0, 0))
    }

    return (
        <div className="nhsuk-u-reading-width">
            <Head>
                <title>{helpPrivacyNoticeUnderSixteen.head}</title>
            </Head>
            {showBackButton && <BackButton />}
            <h1 className="nhsuk-heading-xl">{helpPrivacyNoticeUnderSixteen.heading}</h1>

            <p className="nhsuk-body">
                <a
                    onClick={(e) => onClickPrivacyNotice5To11(e)}
                    target="_blank"
                    href={getInternalHref(HELP_PRIVACY_NOTICE_5_to_11)}
                    id="privacy-notice-under-16-normal-privacy-notice-5-11-link"
                    data-testid="privacy-notice-under-16-normal-privacy-notice-5-11-link"
                    className="nhsuk-link nhsuk-link--no-visited-state-link">
                    {helpPrivacyNoticeUnderSixteen.age5To11Pn.text}
                </a>
            </p>

            {/* What is a Privacy Notice? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeUnderSixteen.whatIsAPrivacyNotice.heading}
            </h2>
            <p className="nhsuk-body">{helpPrivacyNoticeUnderSixteen.whatIsAPrivacyNotice.body1}</p>

            {/* Why do you need an NHS COVID Travel Pass Letter? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeUnderSixteen.whyDoYouNeedAnNhsCovidTravelPassLetter.heading}
            </h2>
            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.whyDoYouNeedAnNhsCovidTravelPassLetter.body1}
            </p>

            {/* Who are we? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeUnderSixteen.whoWeAre.heading}
            </h2>
            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.whoWeAre.body1.text1}
                <span className="nhsuk-u-font-weight-bold">
                    {helpPrivacyNoticeUnderSixteen.whoWeAre.body1.boldText1}
                </span>
                {helpPrivacyNoticeUnderSixteen.whoWeAre.body1.text2}
            </p>
            {/* How can I get an NHS COVID Travel Pass for a child aged 5-15 year old? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass.heading}
            </h2>
            <h3 className="nhsuk-heading-s nhsuk-u-padding-top-4">
                {
                    helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass.subsectionPdfVersion
                        .heading1
                }
            </h3>
            <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                {helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass.subsectionPdfVersion.text1}
            </p>
            <ul>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass.subsectionPdfVersion
                            .list.item1
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass.subsectionPdfVersion
                            .list.item2
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass.subsectionPdfVersion
                            .list.item3
                    }
                </li>
            </ul>
            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass.subsectionPdfVersion.text2}
            </p>
            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass.subsectionPdfVersion.text3}
            </p>
            <h3 className="nhsuk-heading-s nhsuk-u-padding-top-4">
                {
                    helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass.subsectionTravelLetter
                        .heading
                }
            </h3>
            <ul>
                <li>
                    <span className="nhsuk-u-font-weight-bold">
                        {
                            helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass
                                .subsectionTravelLetter.text1
                        }{' '}
                    </span>
                </li>
            </ul>
            <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                {
                    helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass.subsectionTravelLetter
                        .textGroup1.body1.text1
                }
                <span className="nhsuk-u-font-weight-bold">
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass
                            .subsectionTravelLetter.textGroup1.body1.boldText1
                    }
                </span>
                {
                    helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass.subsectionTravelLetter
                        .textGroup1.body1.text2
                }
            </p>
            <ul>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass
                            .subsectionTravelLetter.textGroup1.list1.listItem1
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass
                            .subsectionTravelLetter.textGroup1.list1.listItem2.text1
                    }
                    <span className="nhsuk-u-font-weight-bold">
                        {
                            helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass
                                .subsectionTravelLetter.textGroup1.list1.listItem2.boldText1
                        }
                    </span>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass
                            .subsectionTravelLetter.textGroup1.list1.listItem2.text2
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass
                            .subsectionTravelLetter.textGroup1.list1.listItem3
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetAnNhsCovidPass
                            .subsectionTravelLetter.textGroup1.list1.listItem4
                    }
                </li>
            </ul>

            {/* What does the letter say? */}
            <h2 className="nhsuk-heading-s nhsuk-u-padding-top-4">
                {helpPrivacyNoticeUnderSixteen.whatDoesTheLetterSay.heading}
            </h2>
            <ul>
                <li>{helpPrivacyNoticeUnderSixteen.whatDoesTheLetterSay.list1.listItem1}</li>
                <li>{helpPrivacyNoticeUnderSixteen.whatDoesTheLetterSay.list1.listItem2}</li>
                <li>{helpPrivacyNoticeUnderSixteen.whatDoesTheLetterSay.list1.listItem3}</li>
                <li>{helpPrivacyNoticeUnderSixteen.whatDoesTheLetterSay.list1.listItem4}</li>
                <li>{helpPrivacyNoticeUnderSixteen.whatDoesTheLetterSay.list1.listItem5}</li>
            </ul>

            {/* What information do I need when I call 119? */}
            <h2 className="nhsuk-heading-s nhsuk-u-padding-top-4">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.heading}
            </h2>
            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.text1}
            </p>
            <ul>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup1.list1
                            .listItem1
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup1.list1
                            .listItem2
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup1.list1
                            .listItem3
                    }
                </li>
            </ul>
            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup2.text1}
            </p>
            <ul>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup2.list1
                            .listItem1.text1
                    }
                    <span className="nhsuk-u-font-weight-bold">
                        {
                            helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup2.list1
                                .listItem1.boldText1
                        }
                    </span>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup2.list1
                            .listItem1.text2
                    }
                </li>
            </ul>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup3.text1}
            </p>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup4.text1}
            </p>
            {/* NHS COVID Digital Travel Pass via NHS App*/}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.heading}
            </h2>
            <ul>
                <li>
                    <span className="nhsuk-u-font-weight-bold">
                        {
                            helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.list1
                                .listItem1
                        }
                    </span>
                </li>
            </ul>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.text1}
            </p>
            <img
                src={getInternalHref('/NHS_icon.png')}
                className="app_icon"
                alt={helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.imgAltText}
            />

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.text2}
            </p>
            <ul>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.list2
                            .listItem1
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.list2
                            .listItem2
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.list2
                            .listItem3
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.list2
                            .listItem4
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.list2
                            .listItem5
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.list2
                            .listItem6
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.list2
                            .listItem7
                    }
                </li>
            </ul>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.text3.text1}
                <ExternalLink
                    href={
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.text3
                            .link1.href
                    }
                    text={
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.text3
                            .link1.text
                    }
                />
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.text3.text2}
            </p>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.text4}
            </p>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.text5}
            </p>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.text6}
            </p>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup5.text7}
            </p>

            <ul>
                <li>
                    <span className="nhsuk-u-font-weight-bold">
                        {
                            helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup6.list1
                                .listItem1
                        }
                    </span>
                </li>
            </ul>
            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup6.text1}
            </p>

            <ul>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup6.list2
                            .listItem1
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup6.list2
                            .listItem2
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup6.list2
                            .listItem3
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup6.list2
                            .listItem4
                    }
                </li>
            </ul>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup6.text2}
            </p>

            <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                {helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup7.text1}
            </p>

            <ul>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup7.list1
                            .listItem1
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup7.list1
                            .listItem2
                    }
                </li>
                <li>
                    {
                        helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup7.list1
                            .listItem3.text1
                    }
                    <ExternalLink
                        href={
                            helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup7.list1
                                .listItem3.link1.href
                        }
                        text={
                            helpPrivacyNoticeUnderSixteen.howCanIGetTheTravelLetter.textGroup7.list1
                                .listItem3.link1.text
                        }
                    />
                </li>
            </ul>

            {/* What do we do with your information? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeUnderSixteen.whatDoWeDoWithYourInfo.heading}
            </h2>
            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.whatDoWeDoWithYourInfo.textGroup1.text1}
            </p>
            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.whatDoWeDoWithYourInfo.textGroup2.text1}
                <a
                    onClick={(e) => onClickPrivacyNotice(e)}
                    target="_blank"
                    href={getInternalHref(HELP_PRIVACY_NOTICE)}
                    id="privacy-notice-under-sixteen-normal-privacy-notice-link"
                    data-testid="privacy-notice-under-sixteen-normal-privacy-notice-link"
                    className="nhsuk-link nhsuk-link--no-visited-state-link">
                    {helpPrivacyNoticeUnderSixteen.whatDoWeDoWithYourInfo.textGroup2.link1.text}
                </a>
            </p>

            {/* What are your rights when it comes to your information (data)? */}
            <h2 className="nhsuk-heading-m nhsuk-u-padding-top-4">
                {helpPrivacyNoticeUnderSixteen.whatAreYourRights.heading}
            </h2>
            <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup1.text1}
            </p>
            <ul>
                <li>
                    {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup1.list1.listItem1}
                </li>
                <li>
                    {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup1.list1.listItem2}
                </li>
                <li>
                    {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup1.list1.listItem3}
                </li>
            </ul>

            <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup2.text1}
            </p>
            <ul>
                <li>
                    {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup2.list1.listItem1}
                </li>
                <li>
                    {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup2.list1.listItem2}
                </li>
                <li>
                    {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup2.list1.listItem3}
                </li>
            </ul>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup3.text1}
            </p>

            <p className="nhsuk-body">
                <span className="nhsuk-u-font-weight-bold">
                    {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup4.body1.boldText1}
                </span>
                {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup4.body1.text1}
            </p>

            <p className="nhsuk-body">
                <ExternalLink
                    href={helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup5.email.href}
                    text={helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup5.email.text}
                />
                <br />
                {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup5.address.line1}
                <br />
                {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup5.address.line2}
                <br />
                {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup5.address.line3}
                <br />
                {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup5.address.line4}
            </p>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup6.text1}
            </p>

            <p className="nhsuk-body">
                {helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup7.body1.text1}
                <ExternalLink
                    href={
                        helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup7.body1.link1.href
                    }
                    text={
                        helpPrivacyNoticeUnderSixteen.whatAreYourRights.textGroup7.body1.link1.text
                    }
                />
            </p>

            {getUserToken(cookies) ? (
                <TimeoutAlert
                    id="privacy-notice-timeoutalert"
                    headerText={timeoutAlertStrings.alertHeader1}
                    bodyText={timeoutAlertStrings.alertBody1}
                />
            ) : null}
        </div>
    )
}

PrivacyNoticeUnderSixteen.propTypes = {
    showBackButton: PropTypes.bool
}

export default PrivacyNoticeUnderSixteen
