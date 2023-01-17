import React from 'react'
import { useSelector } from 'react-redux'
import AppleWalletCertificateGeneration from 'components/Certificate/GenerationCards/AppleWalletCertificateGeneration'
import GooglePayCertificateGeneration from 'components/Certificate/GenerationCards/GooglePayCertificateGeneration'

const DomesticWalletIntegration = () => {
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)

    return (
        <>
            {featureToggle.appleWallet?.includes('domestic') ? (
                <AppleWalletCertificateGeneration QRType={0} />
            ) : null}
            {featureToggle.googleWallet?.includes('domestic') ? (
                <GooglePayCertificateGeneration QRType={0} />
            ) : null}
        </>
    )
}

export default DomesticWalletIntegration
