import React from 'react'
import { useSelector } from 'react-redux'
import certificateErrorCodes from 'mappings/certificateErrorCodes'
import { getErrorCode } from 'helpers/certificateHelper'
import PositivePCRError from 'components/Status/domesticComponents/ErrorMessageComponents/PositivePCRError'
import PositiveLFTError from 'components/Status/domesticComponents/ErrorMessageComponents/PositiveLFTError'
import DomesticNoCertificate from 'components/Status/domesticComponents/DomesticNoCertificate'

const CertificateErrorCode = () => {
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)

    const displayErrorCode = (type) => {
        switch (getErrorCode(type)) {
            case certificateErrorCodes.PossitivePCR:
                return <PositivePCRError />
            case certificateErrorCodes.PossitiveLFT:
                return <PositiveLFTError />
            default:
                return <DomesticNoCertificate />
        }
    }

    return <div>{displayErrorCode(userApiCache)}</div>
}

export default CertificateErrorCode
