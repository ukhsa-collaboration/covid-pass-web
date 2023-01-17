import React from 'react'
import { domesticPageStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import ViewRecordsButton from 'components/buttons/ViewRecordsButton'
import { getIdentityProofingLevel } from 'helpers/userHelper'
import ExternalLink from 'components/contentPresentation/ExternalLink'

const DomesticExpiredMandatory = () => {
    const user = useSelector((state) => state.userReducer.user)
    domesticPageStrings.setLanguage(getLanguage(user))

    return (
        <div>
            <div>
                <h1 className="nhsuk-heading-xl">{domesticPageStrings.onePassExpired.heading}</h1>
                {getIdentityProofingLevel(user) === 'P9' ? <ViewRecordsButton /> : null}
                <p className="nhsuk-body">
                    {domesticPageStrings.onePassExpired.body1.text1}
                    <ExternalLink
                        href={domesticPageStrings.onePassExpired.body1.serviceHref1}
                        text={domesticPageStrings.onePassExpired.body1.linkText1}
                    />
                </p>
                <p className="nhsuk-body">
                    {domesticPageStrings.onePassExpired.body2.text1}
                    <ExternalLink
                        href={domesticPageStrings.onePassExpired.body2.serviceHref1}
                        text={domesticPageStrings.onePassExpired.body2.linkText1}
                    />
                    {domesticPageStrings.onePassExpired.body2.text2}
                </p>
            </div>
        </div>
    )
}

export default DomesticExpiredMandatory
