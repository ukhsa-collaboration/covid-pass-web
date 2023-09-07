import React, { useEffect } from 'react'
import { domesticPageStrings } from 'localization/translations'
import { trackEvent } from 'helpers/appInsights'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import mandatoryCerts from 'mappings/mandatoryCerts'
import { getTwoPassStatus } from 'helpers/certificateHelper'
import DomesticNoCertificateMandatoryVoluntary from 'components/Status/domesticComponents/domesticNoCertificate/DomesticNoCertificateMandatoryVoluntary'
import DomesticNoCertificateMandatory from 'components/Status/domesticComponents/domesticNoCertificate/DomesticNoCertificateMandatory'
import DomesticNoCertificateDefault from 'components/Status/domesticComponents/domesticNoCertificate/DomesticNoCertificateDefault'

const DomesticNoCertificate = () => {
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)

    domesticPageStrings.setLanguage(getLanguage(user))
    useEffect(() => {
        trackEvent('Domestic No Certificate Component Loaded')
    }, [])

    const getPassType = (apiCache) => {
        switch (getTwoPassStatus(apiCache)) {
            case mandatoryCerts.MandatoryVoluntaryOn:
                return <DomesticNoCertificateMandatoryVoluntary />
            case mandatoryCerts.MandatoryOnly:
                return <DomesticNoCertificateMandatory />
            case mandatoryCerts.MandatoryVoluntaryOff:
            default:
                return <DomesticNoCertificateDefault />
        }
    }
    return getPassType(userApiCache)
}

export default DomesticNoCertificate
