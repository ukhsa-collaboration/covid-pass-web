import React from 'react'
import { useSelector } from 'react-redux'
import certificateTypes from 'mappings/certificateTypes'
import DomesticValidDefault from 'components/Status/domesticComponents/domesticValid/DomesticValidDefault'
import DomesticValidMandatory from 'components/Status/domesticComponents/domesticValid/DomesticValidMandatory'
import DomesticValidMandatoryVoluntary from 'components/Status/domesticComponents/domesticValid/DomesticValidMandatoryVoluntary'

const DomesticValidStatusTypeCalculation = () => {
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)

    switch (userApiCache.certificate.domestic.certificateType) {
        case certificateTypes.DomesticVoluntary:
            return <DomesticValidMandatoryVoluntary />
        case certificateTypes.DomesticMandatory:
            return <DomesticValidMandatory />
        case certificateTypes.Domestic:
        case certificateTypes.Vaccination:
        case certificateTypes.Immunity:
        case certificateTypes.Recovery:
        case certificateTypes.Exemption:
        default:
            return <DomesticValidDefault />
    }
}

export default DomesticValidStatusTypeCalculation
