import React from 'react'
import { domesticPageStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import ExternalLink from 'components/contentPresentation/ExternalLink'

const DomesticExpiredDefault = () => {
    const user = useSelector((state) => state.userReducer.user)
    domesticPageStrings.setLanguage(getLanguage(user))

    return (
        <div>
            <div>
                <h1 className="nhsuk-heading-xl">
                    {domesticPageStrings.noCertificateAndExpired.headingExpired}
                </h1>
                <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                    {domesticPageStrings.noCertificateAndExpired.subheadExpired}
                </h2>
            </div>
            <p className="nhsuk-body">{domesticPageStrings.noCertificateAndExpired.body1}</p>
            <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                {domesticPageStrings.noCertificateAndExpired.subHead1}
            </h2>
            <p className="nhsuk-body">{domesticPageStrings.noCertificateAndExpired.body2}</p>
            <p className="nhsuk-body">
                {domesticPageStrings.noCertificateAndExpired.body3}
                <span>
                    <ExternalLink
                        href={domesticPageStrings.noCertificateAndExpired.href}
                        text={domesticPageStrings.noCertificateAndExpired.linkText}
                        ariaLabel={
                            domesticPageStrings.noCertificateAndExpired.ariaLabelReportResult
                        }
                    />
                </span>
                <span className="nhsuk-u-font-weight-bold">
                    {domesticPageStrings.noCertificateAndExpired.body4}
                </span>
            </p>
            <p className="nhsuk-body">{domesticPageStrings.noCertificateAndExpired.body5}</p>

            <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                {domesticPageStrings.noCertificateAndExpired.subHead2}
            </h2>
            <p className="nhsuk-body">
                {domesticPageStrings.noCertificateAndExpired.body6}
                <span className="nhsuk-u-font-weight-bold">
                    {domesticPageStrings.noCertificateAndExpired.body7}
                </span>
            </p>
            <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                {domesticPageStrings.noCertificateAndExpired.subHead3}
            </h2>
            <p className="nhsuk-body">{domesticPageStrings.noCertificateAndExpired.body8}</p>
            <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                {domesticPageStrings.noCertificateAndExpired.subHead4}
            </h2>
            <p className="nhsuk-body">{domesticPageStrings.noCertificateAndExpired.body9}</p>
        </div>
    )
}

export default DomesticExpiredDefault
