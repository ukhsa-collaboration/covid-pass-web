import React, { useEffect } from 'react'
import { domesticPageStrings } from 'localization/translations'
import { trackEvent } from 'helpers/appInsights'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import { getDateUntil, getErrorCode } from 'helpers/certificateHelper'
import ViewRecordsButton from 'components/buttons/ViewRecordsButton'
import { getIdentityProofingLevel } from 'helpers/userHelper'
import ExternalLink from 'components/contentPresentation/ExternalLink'

const PositiveLFTError = () => {
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    domesticPageStrings.setLanguage(getLanguage(user))
    const dateUntil = getDateUntil(userApiCache, getLanguage(user))
    const errorCode = getErrorCode(userApiCache)

    useEffect(() => {
        trackEvent('Positive lft Error Component Loaded')
    }, [])

    return (
        <div>
            <div>
                <h1 className="nhsuk-heading-xl">
                    {domesticPageStrings.errorMessages.lft.heading}
                </h1>
            </div>
            <p className="nhsuk-body">{domesticPageStrings.errorMessages.lft.body1.text1}</p>
            <p className="nhsuk-body">
                {domesticPageStrings.errorMessages.lft.body2.text1}
                <span className="nhsuk-u-font-weight-bold">{dateUntil}</span>
                <span className="nhsuk-body">
                    {domesticPageStrings.errorMessages.lft.body2.text2}
                </span>
            </p>
            <p className="nhsuk-body">
                {domesticPageStrings.errorMessages.lft.body3.text1}
                <ExternalLink
                    href={domesticPageStrings.errorMessages.lft.body3.serviceHref1}
                    text={domesticPageStrings.errorMessages.lft.body3.linkText1}
                />
                {domesticPageStrings.errorMessages.lft.body3.text2}
            </p>
            <p className="nhsuk-body">
                {domesticPageStrings.errorMessages.lft.body4.text1}
                <ExternalLink
                    href={domesticPageStrings.errorMessages.lft.body4.serviceHref1}
                    text={domesticPageStrings.errorMessages.lft.body4.linkText1}
                />
                {domesticPageStrings.errorMessages.lft.body4.text2}
            </p>
            <p className="nhsuk-body">{domesticPageStrings.errorMessages.lft.body5.text1}</p>
            <ul className="nhsuk-u-margin-left-3">
                <li>
                    <p className="nhsuk-body">
                        {domesticPageStrings.errorMessages.lft.body5.list1}
                    </p>
                </li>
                <li>
                    <p className="nhsuk-body">
                        {domesticPageStrings.errorMessages.lft.body5.list2}
                    </p>
                </li>
                <li>
                    <p className="nhsuk-body">
                        {domesticPageStrings.errorMessages.lft.body5.list3}
                        <span>{errorCode}</span>
                    </p>
                </li>
            </ul>
            {getIdentityProofingLevel(user) === 'P9' ? <ViewRecordsButton /> : null}
        </div>
    )
}

export default PositiveLFTError
