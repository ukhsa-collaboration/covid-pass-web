import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import DomesticValidCertificate from './domesticComponents/DomesticValidCertificate'
import DomesticExpired from './domesticComponents/DomesticExpired'
import DomesticNoCertificate from './domesticComponents/DomesticNoCertificate'
import { getIdentityProofingLevel } from 'helpers/userHelper'
import { useRouter } from 'next/router'
import { UNVERIFIED } from 'constants/routes'
import CertificateErrorCode from 'components/Status/domesticComponents/CertificateErrorCode'

const DomesticPage = () => {
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    const user = useSelector((state) => state.userReducer.user)
    const router = useRouter()

    const certificateStatus = userApiCache.certificate.domestic.status
    const certificateEverExisted = userApiCache.certificate.domestic.certificateEverExisted
    const certificateErrorCode = userApiCache.certificate.domestic.errorCode

    useEffect(() => {
        if (getIdentityProofingLevel(user) === 'P5') {
            router.push(UNVERIFIED)
        }
    }, [user, router])

    if (certificateErrorCode) {
        return <CertificateErrorCode />
    }

    if (certificateEverExisted && !certificateStatus) {
        return <DomesticExpired />
    }

    if (certificateStatus) {
        return <DomesticValidCertificate />
    }

    return <DomesticNoCertificate />
}

export default DomesticPage
