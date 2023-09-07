import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { helpPrivacyNoticeChildFriendly } from 'localization/privacyNoticeChildFriendlyTranslations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { HELP_PRIVACY_NOTICE_5_to_11 } from 'constants/routes'
import BackButton from 'components/buttons/BackButton'
import TimeoutAlert from 'components/Alerts/TimeoutAlert'
import { getUserToken } from 'helpers/cookieHelper'
import { timeoutAlertStrings } from 'localization/translations'
import useIsLetterServiceUrlQuery from 'hooks/useIsLetterServiceUrlQuery'
import { addInternalRouteWithExternalResourceLetter, getInternalHref } from 'helpers/index'

const PrivacyNoticeChildFriendly = ({ showBackButton = true }) => {
    const router = useRouter()
    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const isLetterService = useIsLetterServiceUrlQuery()

    helpPrivacyNoticeChildFriendly.setLanguage(getLanguage(user))

    const onClickPrivacyNoticeChild5To11 = (event) => {
        event.preventDefault()
        router
            .push(
                HELP_PRIVACY_NOTICE_5_to_11 +
                    addInternalRouteWithExternalResourceLetter(isLetterService)
            )
            .then(() => window.scrollTo(0, 0))
    }

    return (
        <div id="privacy-notice-child-friendly" className="nhsuk-u-reading-width">
            {showBackButton && <BackButton />}
            <h1 className="nhsuk-heading-xl">{helpPrivacyNoticeChildFriendly.title}</h1>
            <div className="nhsuk-card">
                <img
                    src={getInternalHref(
                        '/PrivacyNoticeChildFriendly/PrivacyNoticeChildFriendlyCard1.jpg'
                    )}
                    className="nhsuk-card__img"
                    alt="Smiling children holding up vaccination cards"
                />
                <div className="nhsuk-card__content ">
                    <h3 className="nhsuk-card__heading">
                        {helpPrivacyNoticeChildFriendly.card1.title}
                    </h3>
                    <p className="nhsuk-card__description">
                        {helpPrivacyNoticeChildFriendly.card1.text1}
                    </p>
                </div>
            </div>

            <div className="nhsuk-card">
                <img
                    src={getInternalHref(
                        '/PrivacyNoticeChildFriendly/PrivacyNoticeChildFriendlyCard2.jpg'
                    )}
                    className="nhsuk-card__img"
                    alt="Boy wearing mask receiving a vaccine"
                />
                <div className="nhsuk-card__content ">
                    <h3 className="nhsuk-card__heading">
                        {helpPrivacyNoticeChildFriendly.card2.title}
                    </h3>
                    <p className="nhsuk-card__description">
                        {helpPrivacyNoticeChildFriendly.card2.text1}
                    </p>
                </div>
            </div>

            <div className="nhsuk-card">
                <img
                    src={getInternalHref(
                        '/PrivacyNoticeChildFriendly/PrivacyNoticeChildFriendlyCard3.jpg'
                    )}
                    className="nhsuk-card__img"
                    alt="Two adults and two children in summer clothing with suitcases"
                />
                <div className="nhsuk-card__content ">
                    <h3 className="nhsuk-card__heading">
                        {helpPrivacyNoticeChildFriendly.card3.title}
                    </h3>
                    <p className="nhsuk-card__description">
                        {helpPrivacyNoticeChildFriendly.card3.text1}
                    </p>
                </div>
            </div>
            <div className="nhsuk-card">
                <img
                    src={getInternalHref(
                        '/PrivacyNoticeChildFriendly/PrivacyNoticeChildFriendlyCard4.jpg'
                    )}
                    className="nhsuk-card__img"
                    alt="Modern, multistory office building"
                />
                <div className="nhsuk-card__content ">
                    <h3 className="nhsuk-card__heading">
                        {helpPrivacyNoticeChildFriendly.card4.title}
                    </h3>
                    <p className="nhsuk-card__description">
                        {helpPrivacyNoticeChildFriendly.card4.text1}
                    </p>
                </div>
            </div>
            <div className="nhsuk-card">
                <img
                    src={getInternalHref(
                        '/PrivacyNoticeChildFriendly/PrivacyNoticeChildFriendlyCard5.jpg'
                    )}
                    className="nhsuk-card__img"
                    alt="Profile cards with pictures of faces"
                />
                <div className="nhsuk-card__content ">
                    <h3 className="nhsuk-card__heading">
                        {helpPrivacyNoticeChildFriendly.card5.title}
                    </h3>
                    <ul>
                        <li>{helpPrivacyNoticeChildFriendly.card5.list.item1}</li>
                        <li>{helpPrivacyNoticeChildFriendly.card5.list.item2}</li>
                        <li>{helpPrivacyNoticeChildFriendly.card5.list.item3}</li>
                    </ul>
                </div>
            </div>
            <div className="nhsuk-card">
                <img
                    src={getInternalHref(
                        '/PrivacyNoticeChildFriendly/PrivacyNoticeChildFriendlyCard6.jpg'
                    )}
                    className="nhsuk-card__img"
                    alt="Computer screen with a chain and padlock around it"
                />
                <div className="nhsuk-card__content ">
                    <h3 className="nhsuk-card__heading">
                        {helpPrivacyNoticeChildFriendly.card6.title}
                    </h3>

                    <p className="nhsuk-card__description">
                        {helpPrivacyNoticeChildFriendly.card6.text1}
                    </p>
                </div>
            </div>

            <div className="nhsuk-card">
                <img
                    src={getInternalHref(
                        '/PrivacyNoticeChildFriendly/PrivacyNoticeChildFriendlyCard7.jpg'
                    )}
                    className="nhsuk-card__img"
                    alt="Calendar with one day highlighted"
                />
                <div className="nhsuk-card__content ">
                    <h3 className="nhsuk-card__heading">
                        {helpPrivacyNoticeChildFriendly.card7.title}
                    </h3>
                    <p className="nhsuk-card__description">
                        {helpPrivacyNoticeChildFriendly.card7.text1}
                    </p>
                </div>
            </div>

            <div className="nhsuk-card">
                <img
                    src={getInternalHref(
                        '/PrivacyNoticeChildFriendly/PrivacyNoticeChildFriendlyCard8.jpg'
                    )}
                    className="nhsuk-card__img"
                    alt="Smiling boy with raised hand, holding a large question mark"
                />
                <div className="nhsuk-card__content ">
                    <h3 className="nhsuk-card__heading">
                        {helpPrivacyNoticeChildFriendly.card8.title}
                    </h3>
                    <p className="nhsuk-card__description nhsuk-u-margin-bottom-1">
                        {helpPrivacyNoticeChildFriendly.card8.text1}
                    </p>
                    <ul>
                        <li>{helpPrivacyNoticeChildFriendly.card8.list.item1}</li>
                        <li>{helpPrivacyNoticeChildFriendly.card8.list.item2}</li>
                        <li>{helpPrivacyNoticeChildFriendly.card8.list.item3}</li>
                        <li>{helpPrivacyNoticeChildFriendly.card8.list.item4}</li>
                        <li>{helpPrivacyNoticeChildFriendly.card8.list.item5}</li>
                    </ul>
                    <p className="nhsuk-card__description">
                        {helpPrivacyNoticeChildFriendly.card8.text2}
                    </p>
                </div>
            </div>

            <div className="nhsuk-inset-text">
                <p className="nhsuk-body">
                    {helpPrivacyNoticeChildFriendly.inset.text1}
                    {helpPrivacyNoticeChildFriendly.inset.text2}
                    <a
                        className="nhsuk-link nhsuk-link--no-visited-state-link"
                        href={helpPrivacyNoticeChildFriendly.inset.link1.href}>
                        {helpPrivacyNoticeChildFriendly.inset.link1.text}
                    </a>
                    {helpPrivacyNoticeChildFriendly.inset.text3}
                </p>
                <p id="data-protection-officer-address">
                    <span>{helpPrivacyNoticeChildFriendly.inset.text4}</span>
                    <br />
                    <span>{helpPrivacyNoticeChildFriendly.inset.text5}</span>
                    <br />
                    <span>{helpPrivacyNoticeChildFriendly.inset.text6}</span>
                    <br />
                    <span>{helpPrivacyNoticeChildFriendly.inset.text7}</span>
                    <br />
                    <span>{helpPrivacyNoticeChildFriendly.inset.text8}</span>
                </p>

                <p className="nhsuk-body">
                    {helpPrivacyNoticeChildFriendly.inset.text9}
                    <a
                        className="nhsuk-link nhsuk-link--no-visited-state-link"
                        data-testid="privacy-notice-child-friendly-5-11-privacy-notice-link"
                        id="privacy-notice-child-friendly-5-11-privacy-notice-link"
                        onClick={(e) => onClickPrivacyNoticeChild5To11(e)}
                        href={getInternalHref(HELP_PRIVACY_NOTICE_5_to_11)}>
                        {helpPrivacyNoticeChildFriendly.inset.link2.text}
                    </a>
                </p>
            </div>
            {getUserToken(cookies) ? (
                <TimeoutAlert
                    id="privacy-notice-child-friendly-timeoutalert"
                    headerText={timeoutAlertStrings.alertHeader1}
                    bodyText={timeoutAlertStrings.alertBody1}
                />
            ) : null}
        </div>
    )
}

PrivacyNoticeChildFriendly.propTypes = {
    showBackButton: PropTypes.bool
}

export default PrivacyNoticeChildFriendly
