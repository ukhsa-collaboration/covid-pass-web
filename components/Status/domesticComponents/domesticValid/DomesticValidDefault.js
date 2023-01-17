import React from 'react'
import { useSelector } from 'react-redux'
import { domesticPageStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import TickIcon from 'components/icons/TickIcon'
import QrCode from 'components/QrCode/QrCode'
import { getFormattedDateTimeEuropeLondon } from 'helpers/dateHelper'
import DomesticWalletIntegration from 'components/Status/domesticComponents/domesticValid/domesticValidComponents/DomesticWalletIntegration'
import { LANGUAGE_CODES } from 'constants/index'

const DomesticValidDefault = () => {
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    domesticPageStrings.setLanguage(getLanguage(user))

    return (
        <div className="qr-code-container">
            <p className="nhsuk-u-margin-bottom-0" id="covid-records-domestic-details-expiry-text">
                {domesticPageStrings.validCertificate.default.attendUntil}
                {getLanguage(user) === LANGUAGE_CODES.cy ? (
                    <span className="nhsuk-hint bilingual-text">
                        {domesticPageStrings.validCertificate.default.attendUntil__bilingual}
                    </span>
                ) : null}
            </p>
            <p className="nhsuk-u-margin-bottom-0" id="covid-records-domestic-details-expiry-date">
                <span className="nhsuk-u-font-weight-bold">
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
                </span>
            </p>
            <div>
                {userApiCache.certificate.domestic.qrCodeTokens &&
                    userApiCache.certificate.domestic.qrCodeTokens.map((qrToken, index) => {
                        return <QrCode qrString={qrToken} key={index} />
                    })}

                <div className="status-verified status-verified-default">
                    <div>
                        <TickIcon className="status-icon tick-icon " aria-hidden="true" />
                    </div>
                    <div>
                        <p className="status-verified__valid-location nhsuk-u-margin-bottom-0">
                            {domesticPageStrings.validCertificate.default.verifiedStatus}
                            {getLanguage(user) === LANGUAGE_CODES.cy ? (
                                <span className="bilingual-text">
                                    <span className="bilingual-text__block bilingual-text__white-text">
                                        {
                                            domesticPageStrings.validCertificate.default
                                                .verifiedStatus__bilingual
                                        }
                                    </span>
                                </span>
                            ) : null}
                        </p>
                    </div>
                </div>
            </div>
            <DomesticWalletIntegration />
        </div>
    )
}

export default DomesticValidDefault
