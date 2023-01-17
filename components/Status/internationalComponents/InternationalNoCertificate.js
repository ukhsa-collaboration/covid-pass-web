import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { NO_RECORDS } from 'constants/routes'
import InternationalStatusCard from 'components/Status/internationalComponents/InternationalStatusCard'
import { internationalPageStrings } from 'localization/translations'
import { trackEvent } from 'helpers/appInsights'
import { getIdentityProofingLevel, getLanguage } from 'helpers/userHelper'
import ViewRecordsButton from 'components/buttons/ViewRecordsButton'
import ExternalLink from 'components/contentPresentation/ExternalLink'
import SurveyBanner from 'components/Status/SurveyBanner'

const InternationalNoCertificate = () => {
    const router = useRouter()
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    const user = useSelector((state) => state.userReducer.user)
    const [certificateStatus, setCertificateStatus] = React.useState(
        userApiCache.certificate.international.status
    )
    internationalPageStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackEvent('International No Certificate Component Loaded')
    }, [])

    const noRecordsFound = (event) => {
        event.preventDefault()
        router.push(NO_RECORDS)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            noRecordsFound()
        }
    }

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
            <p className="nhsuk-body">
                <a
                    id="status-button-records"
                    className="nhsuk-link nhsuk-link--no-visited-state"
                    href={NO_RECORDS}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => handleKeyPress(e)}
                    onClick={(e) => noRecordsFound(e)}>
                    {internationalPageStrings.linkText1}
                </a>
            </p>
            {getIdentityProofingLevel(user) === 'P9' ? <ViewRecordsButton /> : null}
            <SurveyBanner hasCertificate={false} />
        </div>
    )
}

export default InternationalNoCertificate
