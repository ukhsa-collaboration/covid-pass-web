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
    const [certificateStatus, setCertificateStatus] = React.useState(
        userApiCache.certificate.domestic.status
    )
    const [certificateEverExisted, setCertificateExpired] = React.useState(
        userApiCache.certificate.domestic.certificateEverExisted
    )

    const [certificateErrorCode, setCertificateErrorCode] = React.useState(
        userApiCache.certificate.domestic.errorCode
    )

    useEffect(() => {
        if (getIdentityProofingLevel(user) === 'P5') {
            router.push(UNVERIFIED)
        }
    }, [user, router])

    return (
        <>
            {certificateErrorCode !== null ? (
                <CertificateErrorCode />
            ) : certificateEverExisted && certificateStatus == false ? (
                <DomesticExpired />
            ) : certificateStatus ? (
                <DomesticValidCertificate />
            ) : (
                <DomesticNoCertificate />
            )}
        </>
    )
}

export default DomesticPage
