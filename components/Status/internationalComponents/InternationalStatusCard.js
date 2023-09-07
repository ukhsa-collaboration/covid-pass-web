import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getName, getDateFormattedDOB, getLanguage } from 'helpers/userHelper'
import TickIcon from 'components/icons/TickIcon'
import { useRouter } from 'next/router'
import { DETAILS } from 'constants/routes'
import ArrowIcon from 'components/icons/ArrowIcon'
import { trackEvent } from 'helpers/appInsights'
import { statusCardStrings } from 'localization/translations'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY, LANGUAGE_CODES } from 'constants/index'
import { uuidCookieReduxNotMatching } from 'helpers/auth'
import { getInternalHref } from 'helpers/index'
import useEndUserSession from 'hooks/useEndUserSession'

const InternationalStatusCard = ({ certificateStatus }) => {
    const router = useRouter()
    const { mismatchedUuidEndSession } = useEndUserSession()

    const user = useSelector((state) => state.userReducer.user)
    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])

    statusCardStrings.setLanguage(getLanguage(user))

    const viewYourRecords = (event) => {
        event.preventDefault()
        if (uuidCookieReduxNotMatching(cookies, user)) {
            mismatchedUuidEndSession()
            return
        }

        router.push(DETAILS)
        trackEvent('Show details - Button click')
    }

    const internationalCard = () => {
        return (
            <div
                className={
                    'status ' + (certificateStatus ? 'status-verified' : 'status-not-verified')
                }
                data-testid={`status-card_${
                    certificateStatus ? 'status-verified' : 'status-not-verified'
                }`}>
                {certificateStatus ? (
                    <TickIcon className="status-icon tick-icon " aria-hidden="true" />
                ) : null}
                <div className="status__main-block">
                    {certificateStatus ? (
                        <>
                            <h3 className="nhsuk-heading-m nhsuk-u-margin-top-2">
                                {statusCardStrings.titleRecordFound}&nbsp;
                                {getLanguage(user) === LANGUAGE_CODES.cy ? (
                                    <span className="nhsuk-hint bilingual-text">
                                        <span className="bilingual-text__international-status-green">
                                            {statusCardStrings.titleRecordFound__bilingual}
                                        </span>
                                    </span>
                                ) : null}
                            </h3>
                            <a
                                className="non-decoration-link-text"
                                data-testid="international-view-your-records-link"
                                aria-label={statusCardStrings.ariaLabelShowDetailsButton}
                                onClick={(e) => viewYourRecords(e)}
                                onKeyDown={(e) => {
                                    e.key === 'Enter' && viewYourRecords(e)
                                }}
                                href={getInternalHref(DETAILS)}>
                                <span className="view-your-records-btn nhsuk-u-font-size-16 nhsuk-u-font-weight-bold">
                                    {statusCardStrings.details}&nbsp;
                                    <ArrowIcon className="view-records-icon icon-arrow-right" />
                                    {getLanguage(user) === LANGUAGE_CODES.cy ? (
                                        <>
                                            <br />
                                            <span className="nhs-hint bilingual-text">
                                                <span className="bilingual-text__international-status-green">
                                                    {statusCardStrings.details__bilingual}
                                                </span>
                                            </span>
                                        </>
                                    ) : null}
                                </span>
                            </a>
                        </>
                    ) : (
                        <>
                            <span className="status-no-records nhsuk-u-font-weight-bold">
                                {statusCardStrings.titleRecordNotFound}
                            </span>
                            {getLanguage(user) === LANGUAGE_CODES.cy ? (
                                <span className="nhsuk-hint bilingual-text">
                                    {statusCardStrings.titleRecordNotFound__bilingual}
                                </span>
                            ) : null}
                        </>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="nhsuk-card status-card">
            <div className="nhsuk-card__content status-card__content">
                <h2 className="nhsuk-heading-m nhsuk-card__heading nhsuk-u-margin-bottom-0 status-card__content__name break-word-wrap">
                    {getName(user)}
                </h2>
                <p className="status-card__content__dob">
                    {statusCardStrings.date}&nbsp;{getDateFormattedDOB(user, getLanguage(user))}
                    {getLanguage(user) === LANGUAGE_CODES.cy ? (
                        <span className="nhsuk-hint bilingual-text">
                            {statusCardStrings.date__bilingual}&nbsp;
                            {getDateFormattedDOB(user, LANGUAGE_CODES.en)}
                        </span>
                    ) : null}
                </p>
            </div>
            {internationalCard()}
        </div>
    )
}

InternationalStatusCard.propTypes = {
    certificateStatus: PropTypes.bool.isRequired
}

export default InternationalStatusCard
