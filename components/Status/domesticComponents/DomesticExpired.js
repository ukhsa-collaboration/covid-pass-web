import React, { useEffect } from 'react'
import { domesticPageStrings } from 'localization/translations'
import { trackEvent } from 'helpers/appInsights'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import mandatoryCerts from 'mappings/mandatoryCerts'
import { getTwoPassStatus } from 'helpers/certificateHelper'
import DomesticExpiredMandatoryVoluntary from 'components/Status/domesticComponents/domesticExpired/DomesticExpiredMandatoryVoluntary'
import DomesticExpiredMandatory from 'components/Status/domesticComponents/domesticExpired/DomesticExpiredMandatory'
import DomesticExpiredDefault from 'components/Status/domesticComponents/domesticExpired/DomesticExpiredDefault'

const DomesticExpired = () => {
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    domesticPageStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackEvent('Domestic Expired Certificate Component Loaded')
    }, [])

    const getPassType = (getPassType) => {
        switch (getTwoPassStatus(getPassType)) {
            case mandatoryCerts.MandatoryVoluntaryOn:
                return <DomesticExpiredMandatoryVoluntary />
            case mandatoryCerts.MandatoryOnly:
                return <DomesticExpiredMandatory />
            case mandatoryCerts.MandatoryVoluntaryOff:
            default:
                return <DomesticExpiredDefault />
        }
    }
    return getPassType(userApiCache)
}

export default DomesticExpired
