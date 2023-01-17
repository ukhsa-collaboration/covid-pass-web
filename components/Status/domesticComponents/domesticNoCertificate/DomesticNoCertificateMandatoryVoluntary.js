import React from 'react'
import { domesticPageStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import { getIdentityProofingLevel } from 'helpers/userHelper'
import ViewRecordsButton from 'components/buttons/ViewRecordsButton'
import ExternalLink from 'components/contentPresentation/ExternalLink'

const DomesticNoCertificateMandatoryVoluntary = () => {
    const user = useSelector((state) => state.userReducer.user)
    domesticPageStrings.setLanguage(getLanguage(user))

    return (
        <div>
            <div>
                <div>
                    <h1 className="nhsuk-heading-xl">
                        {domesticPageStrings.twoPassNoRecords.headingNoCertificate}
                    </h1>
                </div>
                <p className="nhsuk-body">{domesticPageStrings.twoPassNoRecords.body1}</p>
                <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                    {domesticPageStrings.twoPassNoRecords.subHead1}
                </h2>
                <p className="nhsuk-body">{domesticPageStrings.twoPassNoRecords.body2}</p>
                <p className="nhsuk-body">
                    {domesticPageStrings.twoPassNoRecords.body3}
                    <span>
                        <ExternalLink
                            href={domesticPageStrings.twoPassNoRecords.href}
                            text={domesticPageStrings.twoPassNoRecords.linkText}
                            ariaLabel="report covid 19 result link"
                        />
                    </span>
                    <span className="nhsuk-u-font-weight-bold">
                        {domesticPageStrings.twoPassNoRecords.body4}
                    </span>
                </p>
                <p className="nhsuk-body">{domesticPageStrings.twoPassNoRecords.body5}</p>

                <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                    {domesticPageStrings.twoPassNoRecords.subHead2}
                </h2>
                <p className="nhsuk-body">
                    {domesticPageStrings.twoPassNoRecords.body6}
                    <span className="nhsuk-u-font-weight-bold">
                        {domesticPageStrings.twoPassNoRecords.body7}
                    </span>
                </p>
                <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                    {domesticPageStrings.twoPassNoRecords.subHead3}
                </h2>
                <p className="nhsuk-body">{domesticPageStrings.twoPassNoRecords.body8}</p>
                <h2 className="nhsuk-heading-l nhsuk-u-padding-top-4">
                    {domesticPageStrings.twoPassNoRecords.subHead4}
                </h2>
                <p className="nhsuk-body">{domesticPageStrings.twoPassNoRecords.body9}</p>
            </div>
            {getIdentityProofingLevel(user) === 'P9' ? <ViewRecordsButton /> : null}
        </div>
    )
}

export default DomesticNoCertificateMandatoryVoluntary
