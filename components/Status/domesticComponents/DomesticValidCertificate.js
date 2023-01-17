import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PdfCertificateGeneration from 'components/Certificate/GenerationCards/PdfCertificateGeneration'
import ShareByEmailGeneration from 'components/Certificate/GenerationCards/ShareByEmailGeneration'
import { domesticPageStrings } from 'localization/translations'
import ViewRecordsButton from 'components/buttons/ViewRecordsButton'
import { getName, getDateFormattedDOB, getLanguage } from 'helpers/userHelper'
import { getIdentityProofingLevel } from 'helpers/userHelper'
import { trackEvent } from 'helpers/appInsights'
import DomesticValidStatusTypeCalculation from 'components/Status/domesticComponents/domesticValid/domesticValidComponents/DomesticValidStatusTypeCalculation'
import { getPdfDownloadToggleDomestic } from 'helpers/index'
import { LANGUAGE_CODES } from 'constants/index'

const DomesticValidCertificate = () => {
    const user = useSelector((state) => state.userReducer.user)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)
    domesticPageStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackEvent('Domestic Valid Certificate Component Loaded')
    }, [])

    return (
        <div>
            <div>
                <p
                    className="nhsuk-u-margin-bottom-0 nhsuk-u-font-weight-bold"
                    id="covid-records-domestic-details-name">
                    {getName(user)}
                </p>
                <p className="nhsuk-body" id="covid-records-domestic-details-dob">
                    <span>{domesticPageStrings.validCertificate.dateOfBirth}</span>
                    &nbsp;
                    {getDateFormattedDOB(user, getLanguage(user))}
                    {getLanguage(user) === LANGUAGE_CODES.cy ? (
                        <span className="nhsuk-hint bilingual-text">
                            {domesticPageStrings.validCertificate.dateOfBirth__bilingual}&nbsp;
                            {getDateFormattedDOB(user, LANGUAGE_CODES.en)}
                        </span>
                    ) : null}
                </p>
            </div>

            <DomesticValidStatusTypeCalculation />

            {getPdfDownloadToggleDomestic(featureToggle) ? <PdfCertificateGeneration /> : null}
            <ShareByEmailGeneration />
            {getIdentityProofingLevel(user) === 'P9' ? <ViewRecordsButton /> : null}
        </div>
    )
}

export default DomesticValidCertificate
