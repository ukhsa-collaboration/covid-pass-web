import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { domesticPageStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import QrCode from 'components/QrCode/QrCode'
import { getFormattedDateTimeEuropeLondon } from 'helpers/dateHelper'
import DomesticWalletIntegration from 'components/Status/domesticComponents/domesticValid/domesticValidComponents/DomesticWalletIntegration'
import ExternalLink from 'components/contentPresentation/ExternalLink'
import { LANGUAGE_CODES } from 'constants/index'

const DomesticValidStatusTypeMandatoryVoluntary = ({ type }) => {
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    domesticPageStrings.setLanguage(getLanguage(user))

    return (
        <div className="qr-code-container">
            <div>
                {userApiCache.certificate.domestic.qrCodeTokens &&
                    userApiCache.certificate.domestic.qrCodeTokens.map((qrToken, index) => {
                        return <QrCode qrString={qrToken} key={index} />
                    })}

                {type}
            </div>

            <h1
                className="nhsuk-heading-s nhsuk-u-margin-bottom-1"
                id="covid-records-domestic-valid-subheading">
                {domesticPageStrings.validCertificate.mandatoryVoluntary.subHeading1}
            </h1>
            <ExternalLink
                href={domesticPageStrings.validCertificate.mandatoryVoluntary.href}
                text={domesticPageStrings.validCertificate.mandatoryVoluntary.linkText}
            />

            <p
                className="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold"
                id="covid-records-domestic-valid-expiry">
                <strong>
                    {domesticPageStrings.validCertificate.mandatoryVoluntary.expires}
                    &nbsp;
                    {getFormattedDateTimeEuropeLondon(
                        userApiCache.certificate.domestic.expiryDate,
                        getLanguage(user)
                    )}
                    {getLanguage(user) === LANGUAGE_CODES.cy ? (
                        <span className="bilingual-text">
                            <span className="bilingual-text__block">
                                {getFormattedDateTimeEuropeLondon(
                                    userApiCache.certificate.domestic.expiryDate,
                                    LANGUAGE_CODES.en
                                )}
                            </span>
                        </span>
                    ) : null}
                </strong>
            </p>

            <DomesticWalletIntegration />
        </div>
    )
}

DomesticValidStatusTypeMandatoryVoluntary.propTypes = {
    type: PropTypes.element.isRequired
}

export default DomesticValidStatusTypeMandatoryVoluntary
