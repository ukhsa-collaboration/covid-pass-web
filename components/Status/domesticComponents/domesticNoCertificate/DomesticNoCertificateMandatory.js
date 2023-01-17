import React from 'react'
import { domesticPageStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import ViewRecordsButton from 'components/buttons/ViewRecordsButton'
import { getIdentityProofingLevel } from 'helpers/userHelper'
import ExternalLink from 'components/contentPresentation/ExternalLink'

const DomesticNoCertificateMandatory = () => {
    const user = useSelector((state) => state.userReducer.user)
    domesticPageStrings.setLanguage(getLanguage(user))

    return (
        <div>
            <h1 className="nhsuk-heading-xl">{domesticPageStrings.onePassNoRecords.heading}</h1>
            <div>
                <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                    {domesticPageStrings.onePassNoRecords.textGroup1.list1.text.text1}
                    <span className="nhsuk-u-font-weight-bold">
                        {domesticPageStrings.onePassNoRecords.textGroup1.list1.text.boldText1}
                    </span>
                </p>
                <ul>
                    <li>{domesticPageStrings.onePassNoRecords.textGroup1.list1.listItem1}</li>
                    <li>{domesticPageStrings.onePassNoRecords.textGroup1.list1.listItem2}</li>
                </ul>
            </div>

            <div>
                <h2 className="nhsuk-heading-l break-word-wrap">
                    {domesticPageStrings.onePassNoRecords.textGroup2.heading}
                </h2>
                <p className="nhsuk-body">
                    {domesticPageStrings.onePassNoRecords.textGroup2.body1.text1}
                    <span className="nhsuk-u-font-weight-bold">
                        {domesticPageStrings.onePassNoRecords.textGroup2.body1.boldText1}
                    </span>
                </p>
                <p className="nhsuk-body">
                    <ExternalLink
                        href={domesticPageStrings.onePassNoRecords.textGroup2.link.href}
                        text={domesticPageStrings.onePassNoRecords.textGroup2.link.text}
                    />
                </p>
            </div>

            <div>
                <h2 className="nhsuk-heading-l">
                    {domesticPageStrings.onePassNoRecords.textGroup3.heading}
                </h2>
                <p className="nhsuk-body">
                    {domesticPageStrings.onePassNoRecords.textGroup3.body1.text1}
                    <span className="nhsuk-u-font-weight-bold">
                        {domesticPageStrings.onePassNoRecords.textGroup3.body1.boldText1}
                    </span>
                    {domesticPageStrings.onePassNoRecords.textGroup3.body1.text2}
                </p>
                <p className="nhsuk-body">
                    <ExternalLink
                        href={domesticPageStrings.onePassNoRecords.textGroup3.link.href}
                        text={domesticPageStrings.onePassNoRecords.textGroup3.link.text}
                    />
                </p>
            </div>

            <p className="nhsuk-body">
                {domesticPageStrings.onePassNoRecords.textGroup4.body1.text1}
                <span className="nhsuk-u-font-weight-bold">
                    {domesticPageStrings.onePassNoRecords.textGroup4.body1.boldText1}
                </span>
                {domesticPageStrings.onePassNoRecords.textGroup4.body1.text2}
                <ExternalLink
                    href={domesticPageStrings.onePassNoRecords.textGroup4.body1.link.href}
                    text={domesticPageStrings.onePassNoRecords.textGroup4.body1.link.text}
                />
            </p>

            <p className="nhsuk-body">
                {domesticPageStrings.onePassNoRecords.textGroup5.body1.text1}
                <span className="nhsuk-u-font-weight-bold">
                    {domesticPageStrings.onePassNoRecords.textGroup5.body1.boldText1}
                </span>
                {domesticPageStrings.onePassNoRecords.textGroup5.body1.text2}
            </p>

            {getIdentityProofingLevel(user) === 'P9' ? <ViewRecordsButton /> : null}

            <p className="nhsuk-body">
                {domesticPageStrings.onePassNoRecords.textGroup6.body1.text1}
                <ExternalLink
                    href={domesticPageStrings.onePassNoRecords.textGroup6.body1.serviceHref1}
                    text={domesticPageStrings.onePassNoRecords.textGroup6.body1.linkText1}
                />
            </p>

            <p className="nhsuk-body">
                {domesticPageStrings.onePassNoRecords.textGroup7.body1.text1}
                <ExternalLink
                    href={domesticPageStrings.onePassNoRecords.textGroup7.body1.serviceHref1}
                    text={domesticPageStrings.onePassNoRecords.textGroup7.body1.linkText1}
                />
                {domesticPageStrings.onePassNoRecords.textGroup7.body1.text2}
            </p>
        </div>
    )
}

export default DomesticNoCertificateMandatory
