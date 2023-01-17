import React from 'react'
import { useRouter } from 'next/router'
import RecordsIcon from 'components/icons/RecordsIcon'
import ArrowIcon from 'components/icons/ArrowIcon'
import { RECORDS } from 'constants/routes'
import { LANGUAGE_CODES } from 'constants/index'
import { button } from 'localization/translations'
import { trackEvent } from 'helpers/appInsights'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'

const ViewRecordsButton = () => {
    const user = useSelector((state) => state.userReducer.user)
    button.setLanguage(getLanguage(user))
    const router = useRouter()

    const handleClick = () => {
        router.push(RECORDS)
        trackEvent('Show records - Button click')
    }

    return (
        <div className="link-bar">
            <div
                className="link-bar_div non-decoration-link-text"
                id="view-records-button-link-bar"
                role="button"
                tabIndex={0}
                aria-label={button.viewCovidRecordsAriaLabel}
                onKeyPress={(e) => {
                    e.key === 'Enter' && handleClick()
                }}
                onClick={() => handleClick()}>
                <span className="hover-text-container">
                    <div className="link-bar-flex-container">
                        <RecordsIcon className="card-link-icon" />
                        <div className="text">
                            {button.viewCovidRecords}
                            {getLanguage(user) === LANGUAGE_CODES.cy ? (
                                <span className="bilingual-text">
                                    <span className="bilingual-text__block">
                                        {button.viewCovidRecords__bilingual}
                                    </span>
                                </span>
                            ) : null}
                        </div>
                    </div>
                </span>

                <ArrowIcon className={'status-card-expander-icon icon-arrow-right'} />
            </div>
        </div>
    )
}

export default ViewRecordsButton
