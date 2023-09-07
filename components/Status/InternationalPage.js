import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import InternationalCertificate from './internationalComponents/InternationalCertificate'
import InternationalNoCertificate from './internationalComponents/InternationalNoCertificate'
import { getIdentityProofingLevel } from 'helpers/userHelper'
import { useRouter } from 'next/router'
import { UNVERIFIED } from 'constants/routes'

const InternationalPage = () => {
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    const user = useSelector((state) => state.userReducer.user)
    const router = useRouter()
    const certificateStatus = userApiCache.certificate.international.status
        ? userApiCache.certificate.international.status
        : userApiCache.certificate.recovery.status

    useEffect(() => {
        if (['P5', 'P5Plus'].includes(getIdentityProofingLevel(user))) {
            router.push(UNVERIFIED)
        }
    }, [user, router])

    return (
        <>
            {certificateStatus && <InternationalCertificate />}
            {!certificateStatus && <InternationalNoCertificate />}
        </>
    )
}

export default InternationalPage
