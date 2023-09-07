import React, { useEffect } from 'react'
import { domesticPageStrings } from 'localization/translations'
import { trackEvent } from 'helpers/appInsights'
import { getLanguage, getIdentityProofingLevel } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import { getDateUntil, getErrorCode } from 'helpers/certificateHelper'
import ViewRecordsButton from 'components/buttons/ViewRecordsButton'
import ExternalLink from 'components/contentPresentation/ExternalLink'

const PositivePCRError = () => {
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    domesticPageStrings.setLanguage(getLanguage(user))
    const dateUntil = getDateUntil(userApiCache, getLanguage(user))
    const errorCode = getErrorCode(userApiCache)

    useEffect(() => {
        trackEvent('Positive PCR Error Component Loaded')
    }, [])

    return (
        <div data-testid="positive-pcr-error">
            <div>
                <h1 className="nhsuk-heading-xl">
                    {domesticPageStrings.errorMessages.pcr.heading}
                </h1>
            </div>
            <p className="nhsuk-body">{domesticPageStrings.errorMessages.pcr.body1.text1}</p>
            <p className="nhsuk-body">
                {domesticPageStrings.errorMessages.pcr.body2.text1}
                <span className="nhsuk-u-font-weight-bold">{dateUntil}</span>
                <span className="nhsuk-body">
                    {domesticPageStrings.errorMessages.pcr.body2.text2}
                </span>
            </p>
            <p className="nhsuk-body">
                {domesticPageStrings.errorMessages.pcr.body3.text1}
                <ExternalLink
                    href={domesticPageStrings.errorMessages.pcr.body3.serviceHref1}
                    text={domesticPageStrings.errorMessages.pcr.body3.linkText1}
                />
                {domesticPageStrings.errorMessages.pcr.body3.text2}
            </p>
            <p className="nhsuk-body">
                {domesticPageStrings.errorMessages.pcr.body4.text1}
                <ExternalLink
                    href={domesticPageStrings.errorMessages.pcr.body4.serviceHref1}
                    text={domesticPageStrings.errorMessages.pcr.body4.linkText1}
                />
                {domesticPageStrings.errorMessages.pcr.body4.text2}
            </p>
            <p className="nhsuk-body">{domesticPageStrings.errorMessages.pcr.body5.text1}</p>
            <ul className="nhsuk-u-margin-left-3">
                <li>
                    <p className="nhsuk-body">
                        {domesticPageStrings.errorMessages.pcr.body5.list1}
                    </p>
                </li>
                <li>
                    <p className="nhsuk-body">
                        {domesticPageStrings.errorMessages.pcr.body5.list2}
                    </p>
                </li>
                <li>
                    <p className="nhsuk-body">
                        {domesticPageStrings.errorMessages.pcr.body5.list3}
                        <span>{errorCode}</span>
                    </p>
                </li>
            </ul>
            {getIdentityProofingLevel(user) === 'P9' ? <ViewRecordsButton /> : null}
        </div>
    )
}

export default PositivePCRError
