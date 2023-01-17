import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { showAppleWallet } from 'helpers/walletHelper'
import { appleWalletExpanderCardStrings } from 'localization/translations'
import AppleWalletCertificateGeneration from 'components/Certificate/GenerationCards/AppleWalletCertificateGeneration'
import { getLanguage } from 'helpers/userHelper'
import MenuBookIcon from 'components/icons/MenuBookIcon'
import ArrowIcon from 'components/icons/ArrowIcon'
import { trackEvent } from 'helpers/appInsights'
import { LANGUAGE_CODES } from 'constants/index'

const AppleWalletExpanderCard = () => {
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)

    const AppleWalletContent = () => {
        const [showMore, setShowMore] = React.useState(false)
        const [intData, setIntData] = React.useState(null)
        const user = useSelector((state) => state.userReducer.user)
        const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
        appleWalletExpanderCardStrings.setLanguage(getLanguage(user))

        // Sorts oldest to latest by date
        const compare = (a, b) => {
            if (a.dateTimeOfTest < b.dateTimeOfTest) {
                return -1
            }
            if (a.dateTimeOfTest > b.dateTimeOfTest) {
                return 1
            }
            return 0
        }

        useEffect(() => {
            if (userApiCache.certificate.international.status) {
                const intResultTmp = userApiCache.certificate.international.resultData
                setIntData(
                    intResultTmp
                        .sort(compare)
                        .map((data, index) => {
                            return { ...data, walletPassID: index }
                        })
                        .reverse()
                )
                trackEvent(
                    `iOS Wallet Expander: Number of Doses: ${
                        intResultTmp ? intResultTmp.length : 0
                    }`
                )
            } else {
                setIntData(null)
            }
        }, [
            userApiCache.certificate.international.status,
            userApiCache.certificate.international.resultData
        ])

        return (
            <div className="apple-wallet-expander-card link-bar">
                <a
                    id="apple-wallet-expander-card-link-text"
                    className="non-decoration-link-text link-bar__anchor"
                    role="button"
                    aria-label={appleWalletExpanderCardStrings.accessibilityExpanderText1}
                    tabIndex={0}
                    aria-expanded={showMore}
                    onKeyPress={(e) => {
                        e.key === 'Enter' && setShowMore(!showMore)
                    }}
                    onClick={() => setShowMore(!showMore)}>
                    <span className="hover-text-container">
                        <div className="link-bar-flex-container">
                            <MenuBookIcon className="card-link-icon" />
                            <div className="text">
                                {appleWalletExpanderCardStrings.linkText1}
                                {getLanguage(user) === LANGUAGE_CODES.cy ? (
                                    <span className="bilingual-text">
                                        <span className="bilingual-text__block">
                                            {appleWalletExpanderCardStrings.linkText1__bilingual}
                                        </span>
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    </span>
                </a>
                <a
                    id="apple-wallet-expander-card-link-icon"
                    role="button"
                    aria-label={appleWalletExpanderCardStrings.accessibilityExpanderText1}
                    tabIndex={-1}
                    onClick={() => setShowMore(!showMore)}
                    onKeyPress={(e) => {
                        e.key === 'Enter' && setShowMore(!showMore)
                    }}>
                    <ArrowIcon
                        className={
                            'status-card-expander-icon ' +
                            (showMore ? 'icon-arrow-up' : 'icon-arrow-down')
                        }
                    />
                </a>
                {showMore ? (
                    <div className="apple-wallet-expander-card__see-more-container">
                        <p className="nhsuk-hint apple-wallet-expander-card__see-more-container__description break-word-wrap">
                            {appleWalletExpanderCardStrings.body1}
                        </p>
                        {featureToggle.appleWallet.includes('international') &&
                        userApiCache.certificate.international.status ? (
                            <div className="apple-wallet-expander-card__see-more-container__international">
                                {intData.map((value, index) => {
                                    return (
                                        <div
                                            className="apple-wallet-expander-card__see-more-container__international__value"
                                            key={index}>
                                            {index > 0 ? (
                                                <hr className="nhsuk-section-break nhsuk-section-break--visible" />
                                            ) : null}
                                            <p className="nhsuk-body nhsuk-u-margin-bottom-0 break-word-wrap">
                                                <span className="nhsuk-u-font-weight-bold">
                                                    {`${appleWalletExpanderCardStrings.vaccination.dose} ${value.doseNumber} ${appleWalletExpanderCardStrings.vaccination.doseOf} ${value.totalSeriesOfDoses}`}
                                                </span>
                                                &nbsp;{value.product.item2}
                                                {value.isBooster ? (
                                                    <>
                                                        &nbsp;
                                                        {
                                                            appleWalletExpanderCardStrings
                                                                .vaccination.booster
                                                        }
                                                    </>
                                                ) : null}
                                            </p>
                                            <AppleWalletCertificateGeneration
                                                QRType={1}
                                                DoseNumber={value.walletPassID}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        ) : null}
                        {featureToggle.appleWallet.includes('recovery') &&
                        userApiCache.certificate.recovery.status ? (
                            <div className="apple-wallet-expander-card__see-more-container__recovery">
                                {userApiCache.certificate.international.status ? (
                                    <hr className="nhsuk-section-break nhsuk-section-break--visible" />
                                ) : null}
                                <p className="nhsuk-body nhsuk-u-margin-bottom-0 break-word-wrap">
                                    <span className="nhsuk-u-font-weight-bold">
                                        {appleWalletExpanderCardStrings.recovery.text}
                                    </span>
                                    &nbsp;{appleWalletExpanderCardStrings.recovery.immunity}
                                </p>
                                <AppleWalletCertificateGeneration QRType={2} />
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
        )
    }

    return showAppleWallet() ? (
        featureToggle.appleWallet.includes('recovery') ||
        featureToggle.appleWallet.includes('international') ? (
            <AppleWalletContent />
        ) : null
    ) : null
}
export default AppleWalletExpanderCard
