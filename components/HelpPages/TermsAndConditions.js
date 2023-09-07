import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import {
    HELP_PRIVACY_NOTICE,
    HELP_PRIVACY_NOTICE_UNDER_SIXTEEN,
    HELP_PRIVACY_NOTICE_5_to_11
} from 'constants/routes'
import { timeoutAlertStrings } from 'localization/translations'
import { helpTermsAndConditions } from 'localization/termsAndConditionsTranslations'
import BackButton from 'components/buttons/BackButton'
import Head from 'next/head'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getUserToken } from 'helpers/cookieHelper'
import TimeoutAlert from 'components/Alerts/TimeoutAlert'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import ExternalLink from 'components/contentPresentation/ExternalLink'
import useIsLetterServiceUrlQuery from 'hooks/useIsLetterServiceUrlQuery'
import { addInternalRouteWithExternalResourceLetter, getInternalHref } from 'helpers/index'

const TermsAndConditions = ({ showBackButton = true }) => {
    const router = useRouter()
    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const isLetterService = useIsLetterServiceUrlQuery()

    timeoutAlertStrings.setLanguage(getLanguage(user))
    helpTermsAndConditions.setLanguage(getLanguage(user))

    const onClickPrivacyNotice = (event) => {
        event.preventDefault()
        router
            .push(HELP_PRIVACY_NOTICE + addInternalRouteWithExternalResourceLetter(isLetterService))
            .then(() => window.scrollTo(0, 0))
    }

    const onClickPrivacyNoticeUnderSixteen = (event) => {
        event.preventDefault()
        router
            .push(
                HELP_PRIVACY_NOTICE_UNDER_SIXTEEN +
                    addInternalRouteWithExternalResourceLetter(isLetterService)
            )
            .then(() => window.scrollTo(0, 0))
    }

    const onClickPrivacyNotice5to11 = (event) => {
        event.preventDefault()
        router
            .push(
                HELP_PRIVACY_NOTICE_5_to_11 +
                    addInternalRouteWithExternalResourceLetter(isLetterService)
            )
            .then(() => window.scrollTo(0, 0))
    }

    return (
        <div>
            <Head>
                <title>{helpTermsAndConditions.main.head}</title>
            </Head>
            <div className="nhsuk-u-reading-width">
                {showBackButton && <BackButton />}
                <div>
                    <h1 className="nhsuk-heading-xl">{helpTermsAndConditions.main.title}</h1>
                    <p className="nhsuk-body">{helpTermsAndConditions.main.subTitle}</p>
                </div>
                <div className="terms-and-conditions-list">
                    <ol className="terms-and-conditions-list__overall-list">
                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list1.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list1.subListItem1.text1}
                                    <ul>
                                        <li>
                                            {
                                                helpTermsAndConditions.main.list1.subListItem1.list1
                                                    .item1
                                            }
                                        </li>
                                        <li>
                                            {
                                                helpTermsAndConditions.main.list1.subListItem1.list1
                                                    .item2.text1
                                            }
                                            <ul>
                                                <li>
                                                    {
                                                        helpTermsAndConditions.main.list1
                                                            .subListItem1.list1.item2.item1
                                                    }
                                                </li>
                                                <li>
                                                    {
                                                        helpTermsAndConditions.main.list1
                                                            .subListItem1.list1.item2.item2
                                                    }
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list1.subListItem2}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list1.subListItem3}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list1.subListItem4}
                                </li>
                            </ol>
                        </li>

                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list2.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list2.subListItem1.text1}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list2.subListItem2}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list2.subListItem3}
                                </li>
                            </ol>
                        </li>

                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list3.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list3.subListItem1}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    <p>
                                        {helpTermsAndConditions.main.list3.subListItem2Paragraph1}
                                    </p>
                                    <p>
                                        {helpTermsAndConditions.main.list3.subListItem2Paragraph2}
                                    </p>
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list3.subListItem3}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list3.subListItem4}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list3.subListItem5}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list3.subListItem6}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list3.subListItem7}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list3.subListItem8}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list3.subListItem9}
                                </li>
                            </ol>
                        </li>

                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list4.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list4.subListItem1.text1}
                                    <ExternalLink
                                        href={
                                            helpTermsAndConditions.main.list4.subListItem1.link1
                                                .href
                                        }
                                        text={
                                            helpTermsAndConditions.main.list4.subListItem1.link1
                                                .text
                                        }
                                    />
                                    {helpTermsAndConditions.main.list4.subListItem1.text2}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list4.subListItem2}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list4.subListItem3}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list4.subListItem4}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list4.subListItem5}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list4.subListItem6}
                                </li>
                            </ol>
                        </li>

                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list5.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list5.subListItem1}
                                </li>
                            </ol>
                        </li>

                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list6.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list6.subListItem1.text1}
                                    <a
                                        onClick={(e) => onClickPrivacyNotice(e)}
                                        href={getInternalHref(HELP_PRIVACY_NOTICE)}
                                        id="tc-link-to-privacy-notice-link"
                                        data-testid="tc-link-to-privacy-notice-link"
                                        className="nhsuk-link nhsuk-link--no-visited-state-link">
                                        {helpTermsAndConditions.main.list6.subListItem1.link1.text}
                                    </a>
                                    {helpTermsAndConditions.main.list6.subListItem1.text2}
                                    <a
                                        onClick={(e) => onClickPrivacyNoticeUnderSixteen(e)}
                                        href={getInternalHref(HELP_PRIVACY_NOTICE_UNDER_SIXTEEN)}
                                        id="tc-link-to-privacy-notice-under-16-link"
                                        data-testid="tc-link-to-privacy-notice-under-16-link"
                                        className="nhsuk-link nhsuk-link--no-visited-state-link">
                                        {helpTermsAndConditions.main.list6.subListItem1.link2.text}
                                    </a>
                                    {helpTermsAndConditions.main.list6.subListItem1.text2a}
                                    <a
                                        onClick={(e) => onClickPrivacyNotice5to11(e)}
                                        href={getInternalHref(HELP_PRIVACY_NOTICE_5_to_11)}
                                        id="tc-link-to-privacy-notice-5-11-link"
                                        data-testid="tc-link-to-privacy-notice-5-11-link"
                                        className="nhsuk-link nhsuk-link--no-visited-state-link">
                                        {helpTermsAndConditions.main.list6.subListItem1.link2a.text}
                                    </a>
                                    {helpTermsAndConditions.main.list6.subListItem1.text3}
                                    <ExternalLink
                                        href={
                                            helpTermsAndConditions.main.list6.subListItem1.email
                                                .href
                                        }
                                        text={
                                            helpTermsAndConditions.main.list6.subListItem1.email
                                                .text
                                        }
                                    />
                                </li>
                            </ol>
                        </li>

                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list7.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list7.subListItem1}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list7.subListItem2}
                                </li>
                            </ol>
                        </li>

                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list8.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list8.subListItem1}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list8.subListItem2}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list8.subListItem3.title}
                                    <ol>
                                        <li className="terms-and-conditions-list__list-item__sub-item">
                                            {helpTermsAndConditions.main.list8.subListItem3.item1}
                                        </li>
                                        <li className="terms-and-conditions-list__list-item__sub-item">
                                            {helpTermsAndConditions.main.list8.subListItem3.item2}
                                        </li>
                                        <li className="terms-and-conditions-list__list-item__sub-item">
                                            {helpTermsAndConditions.main.list8.subListItem3.item3}
                                        </li>
                                        <li className="terms-and-conditions-list__list-item__sub-item">
                                            {helpTermsAndConditions.main.list8.subListItem3.item4}
                                        </li>
                                        <li className="terms-and-conditions-list__list-item__sub-item">
                                            {helpTermsAndConditions.main.list8.subListItem3.item5}
                                        </li>
                                    </ol>
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list8.subListItem4}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list8.subListItem5}
                                </li>
                            </ol>
                        </li>

                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list9.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list9.subListItem1}
                                </li>
                            </ol>
                        </li>

                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list10.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list10.subListItem1.text1}
                                    <ExternalLink
                                        href={
                                            helpTermsAndConditions.main.list10.subListItem1.link1
                                                .href
                                        }
                                        text={
                                            helpTermsAndConditions.main.list10.subListItem1.link1
                                                .text
                                        }
                                    />
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list10.subListItem2.text1}
                                    <ExternalLink
                                        href={
                                            helpTermsAndConditions.main.list10.subListItem2.email
                                                .href
                                        }
                                        text={
                                            helpTermsAndConditions.main.list10.subListItem2.email
                                                .text
                                        }
                                    />
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list10.subListItem3}
                                </li>
                            </ol>
                        </li>

                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list11.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list11.subListItem1.text}
                                    <ExternalLink
                                        href={
                                            helpTermsAndConditions.main.list11.subListItem1.email
                                                .href
                                        }
                                        text={
                                            helpTermsAndConditions.main.list11.subListItem1.email
                                                .text
                                        }
                                    />
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list11.subListItem2.text}
                                    <ExternalLink
                                        href={
                                            helpTermsAndConditions.main.list11.subListItem2.email
                                                .href
                                        }
                                        text={
                                            helpTermsAndConditions.main.list11.subListItem2.email
                                                .text
                                        }
                                    />
                                </li>
                            </ol>
                        </li>

                        <li className="terms-and-conditions-list__list-item">
                            {helpTermsAndConditions.main.list12.title}
                            <ol>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list12.subListItem1}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list12.subListItem2}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list12.subListItem3}
                                </li>
                                <li className="terms-and-conditions-list__list-item__sub-item">
                                    {helpTermsAndConditions.main.list12.subListItem4}
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
                <p className="nhsuk-body nhsuk-u-margin-top-2">
                    {helpTermsAndConditions.main.lastUpdated}
                </p>
            </div>
            {getUserToken(cookies) ? (
                <TimeoutAlert
                    id="termsAndConditions-timeoutalert"
                    headerText={timeoutAlertStrings.alertHeader1}
                    bodyText={timeoutAlertStrings.alertBody1}
                />
            ) : null}
        </div>
    )
}

TermsAndConditions.propTypes = {
    showBackButton: PropTypes.bool
}

export default TermsAndConditions
