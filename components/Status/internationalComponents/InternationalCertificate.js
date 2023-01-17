import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import InternationalStatusCard from 'components/Status/internationalComponents/InternationalStatusCard'
import PdfCertificateGeneration from 'components/Certificate/GenerationCards/PdfCertificateGeneration'
import ShareByEmailGeneration from 'components/Certificate/GenerationCards/ShareByEmailGeneration'
import ViewRecordsButton from 'components/buttons/ViewRecordsButton'
import AppleWalletExpanderCard from 'components/Certificate/GenerationCards/AppleWalletExpanderCard'
import GooglePayExpanderCard from 'components/Certificate/GenerationCards/GooglePayExpanderCard'
import { internationalPageStrings } from 'localization/translations'
import { trackEvent } from 'helpers/appInsights'
import { getLanguage } from 'helpers/userHelper'
import { getPdfDownloadToggleInternational } from 'helpers/index'
import ExternalLink from 'components/contentPresentation/ExternalLink'
import SurveyBanner from 'components/Status/SurveyBanner'

const InternationalCertificate = () => {
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    const user = useSelector((state) => state.userReducer.user)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)
    const [certificateStatus, setCertificateStatus] = React.useState(
        userApiCache.certificate.international.status
            ? userApiCache.certificate.international.status
            : userApiCache.certificate.recovery.status
    )
    internationalPageStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackEvent('International Valid Certificate Component Loaded')
    }, [])

    return (
        <div>
            <h1 className="nhsuk-heading-xl break-word-wrap" id="status-heading-one">
                {internationalPageStrings.titleInternational}
            </h1>
            <p className="nhsuk-body">{internationalPageStrings.body1}</p>
            <p className="nhsuk-body nhsuk-u-margin-bottom-1">{internationalPageStrings.body2}</p>
            <ul>
                <li className="nhsuk-u-margin-bottom-1">
                    {internationalPageStrings.bullet1.text}
                    <ExternalLink
                        href={internationalPageStrings.bullet1.link.href}
                        text={internationalPageStrings.bullet1.link.linkText}
                    />
                </li>
                <li>{internationalPageStrings.bullet2}</li>
            </ul>
            <InternationalStatusCard id="status-statuscard" certificateStatus={certificateStatus} />
            {getPdfDownloadToggleInternational(featureToggle) ? <PdfCertificateGeneration /> : null}
            <ShareByEmailGeneration />
            <ViewRecordsButton />
            <AppleWalletExpanderCard />
            <GooglePayExpanderCard />
            <SurveyBanner hasCertificate={true} />
        </div>
    )
}

export default InternationalCertificate
