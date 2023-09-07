import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { surveyBannerStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { isNhsAppNative } from 'helpers/isNhsApp'
import PropTypes from 'prop-types'
import { TOGGLE_SURVEY_BANNER } from 'actions/types'
import ReverseButton from 'components/buttons/ReverseButton'

const SurveyBanner = ({ hasCertificate }) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userReducer.user)
    const nhsApp = useSelector((state) => state.nhsAppReducer.nhsApp)

    surveyBannerStrings.setLanguage(getLanguage(user))

    const getSurveyUrl = () => {
        if (isNhsAppNative()) {
            return hasCertificate
                ? surveyBannerStrings.hasCertificateAppLink
                : surveyBannerStrings.noCertificateAppLink
        } else {
            return hasCertificate
                ? surveyBannerStrings.hasCertificateBrowserLink
                : surveyBannerStrings.noCertificateBrowserLink
        }
    }

    const launchSurvey = () => {
        window.open(getSurveyUrl(), '_blank')
        closeBanner()
    }

    const closeBanner = () => {
        dispatch({
            type: TOGGLE_SURVEY_BANNER,
            payload: false
        })
    }
    return nhsApp.isBannerOpen ? (
        <div id="survey-banner" className="survey-banner" data-testid="survey-banner">
            <div className="nhsuk-grid-column-two-thirds  nhsuk-u-padding-4">
                <h2 className="nhsuk-heading-s">{surveyBannerStrings.title}</h2>
                <p className="nhsuk-u-font-size-16">{surveyBannerStrings.text1}</p>
            </div>
            <div className="nhsuk-grid-column-one-third nhsuk-u-margin-top-4 nhsuk-u-margin-bottom-4">
                <ReverseButton
                    id="survey-yes-button"
                    text={surveyBannerStrings.yesButtonText}
                    extraClasses="survey-button survey-button-yes "
                    dataTestId="survey-button-yes"
                    onClickAction={launchSurvey}
                />
                <ReverseButton
                    id="survey-no-button"
                    text={surveyBannerStrings.noButtonText}
                    extraClasses="survey-button survey-button-no nhsuk-u-margin-left-4"
                    dataTestId="survey-button-no"
                    onClickAction={closeBanner}
                />
            </div>
        </div>
    ) : null
}

SurveyBanner.propTypes = {
    hasCertificate: PropTypes.bool.isRequired
}

export default SurveyBanner
