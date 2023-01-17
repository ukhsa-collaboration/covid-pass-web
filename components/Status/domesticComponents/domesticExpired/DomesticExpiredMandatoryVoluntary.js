import React from 'react'
import { domesticPageStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import { getIdentityProofingLevel } from 'helpers/userHelper'
import ViewRecordsButton from 'components/buttons/ViewRecordsButton'
import ExternalLink from 'components/contentPresentation/ExternalLink'

const DomesticExpiredMandatoryVoluntary = () => {
    const user = useSelector((state) => state.userReducer.user)
    domesticPageStrings.setLanguage(getLanguage(user))

    return (
        <div>
            <div>
                <h1 className="nhsuk-heading-xl">{domesticPageStrings.twoPassExpired.heading}</h1>
                <p className="nhsuk-body">{domesticPageStrings.twoPassExpired.body1.text1}</p>
                <ul>
                    <li>{domesticPageStrings.twoPassExpired.body1.list1}</li>
                    <li>{domesticPageStrings.twoPassExpired.body1.list2}</li>
                </ul>
                <p className="nhsuk-body">{domesticPageStrings.twoPassExpired.body2.text1}</p>
                <ul>
                    <li>{domesticPageStrings.twoPassExpired.body2.list1}</li>
                    <li>{domesticPageStrings.twoPassExpired.body2.list2}</li>
                    <li>{domesticPageStrings.twoPassExpired.body2.list3}</li>
                </ul>
                <p className="nhsuk-body">{domesticPageStrings.twoPassExpired.body3.text1}</p>
                <ul>
                    <li>{domesticPageStrings.twoPassExpired.body3.list1}</li>
                    <li>{domesticPageStrings.twoPassExpired.body3.list2}</li>
                    <li>{domesticPageStrings.twoPassExpired.body3.list3}</li>
                </ul>
                <p className="nhsuk-body">
                    {domesticPageStrings.twoPassExpired.body4.text1}
                    <ExternalLink
                        href={domesticPageStrings.twoPassExpired.body4.serviceHref}
                        text={domesticPageStrings.twoPassExpired.body4.linkText1}
                    />
                    {domesticPageStrings.twoPassExpired.body4.text2}
                </p>
                <p className="nhsuk-body">
                    {domesticPageStrings.twoPassExpired.body5.text1}
                    <ExternalLink
                        href={domesticPageStrings.twoPassExpired.body5.serviceHref}
                        text={domesticPageStrings.twoPassExpired.body5.linkText1}
                    />
                    {domesticPageStrings.twoPassExpired.body5.text2}
                    <ExternalLink
                        href={domesticPageStrings.twoPassExpired.body5.serviceHref2}
                        text={domesticPageStrings.twoPassExpired.body5.linkText2}
                    />
                </p>
                <p className="nhsuk-body">{domesticPageStrings.twoPassExpired.body6.text1}</p>
                <p className="nhsuk-body">
                    {domesticPageStrings.twoPassExpired.body7.text1}
                    <ExternalLink
                        href={domesticPageStrings.twoPassExpired.body7.serviceHref}
                        text={domesticPageStrings.twoPassExpired.body7.linkText1}
                    />
                    {domesticPageStrings.twoPassExpired.body7.text2}
                </p>
            </div>
            {getIdentityProofingLevel(user) === 'P9' ? <ViewRecordsButton /> : null}
        </div>
    )
}

export default DomesticExpiredMandatoryVoluntary
