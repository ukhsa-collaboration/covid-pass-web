import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { showGoogleWallet } from 'helpers/walletHelper'
import { googlePayExpanderCardStrings } from 'localization/translations'
import GooglePayCertificateGeneration from 'components/Certificate/GenerationCards/GooglePayCertificateGeneration'
import { getLanguage } from 'helpers/userHelper'
import MenuBookIcon from 'components/icons/MenuBookIcon'
import ArrowIcon from 'components/icons/ArrowIcon'
import { trackEvent } from 'helpers/appInsights'
import { LANGUAGE_CODES } from 'constants/index'

const GooglePayExpanderCard = () => {
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)

    const GoogleWalletContent = () => {
        const [showMore, setShowMore] = React.useState(false)
        const [intData, setIntData] = React.useState(null)
        const user = useSelector((state) => state.userReducer.user)
        const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)

        googlePayExpanderCardStrings.setLanguage(getLanguage(user))

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
                    `Google Wallet Expander: Number of Doses: ${
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
            <div className="google-pay-expander-card link-bar">
                <a
                    id="google-pay-expander-card-link-text"
                    data-testid="google-pay-expander-card-link-text"
                    className="non-decoration-link-text link-bar__anchor"
                    role="button"
                    aria-label={googlePayExpanderCardStrings.accessibilityExpanderText1}
                    tabIndex={0}
                    aria-expanded={showMore}
                    onKeyDown={(e) => {
                        e.key === 'Enter' && setShowMore(!showMore)
                    }}
                    onClick={() => setShowMore(!showMore)}>
                    <span className="hover-text-container">
                        <div className="link-bar-flex-container">
                            <MenuBookIcon className="card-link-icon" />
                            <div className="text">
                                {googlePayExpanderCardStrings.linkText1}
                                {getLanguage(user) === LANGUAGE_CODES.cy ? (
                                    <span className="bilingual-text">
                                        <span className="bilingual-text__block">
                                            {googlePayExpanderCardStrings.linkText1__bilingual}
                                        </span>
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    </span>
                </a>
                <a
                    id="google-pay-expander-card-link-icon"
                    data-testid="google-pay-expander-card-link-icon"
                    role="button"
                    aria-label={googlePayExpanderCardStrings.accessibilityExpanderText1}
                    tabIndex={-1}
                    onClick={() => setShowMore(!showMore)}
                    onKeyDown={(e) => {
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
                    <div className="google-pay-expander-card__see-more-container">
                        <p className="nhsuk-hint google-pay-expander-card__see-more-container__description break-word-wrap">
                            {googlePayExpanderCardStrings.body1}
                        </p>

                        {featureToggle.googleWallet.includes('international') &&
                        userApiCache.certificate.international.status ? (
                            <div className="google-pay-expander-card__see-more-container__international">
                                {intData.map((value, index) => {
                                    return (
                                        <div
                                            className="google-pay-expander-card__see-more-container__international__value"
                                            key={index}>
                                            {index > 0 ? (
                                                <hr
                                                    className="nhsuk-section-break nhsuk-section-break--visible"
                                                    data-testid="google-pay-expander-card-horizontal-rule-international"
                                                />
                                            ) : null}
                                            <p className="nhsuk-body nhsuk-u-margin-bottom-0">
                                                <span className="nhsuk-u-font-weight-bold">
                                                    {`${googlePayExpanderCardStrings.vaccination.dose} ${value.doseNumber} ${googlePayExpanderCardStrings.vaccination.doseOf} ${value.totalSeriesOfDoses}`}
                                                </span>
                                                &nbsp;{value.product.item2}
                                                {value.isBooster ? (
                                                    <>
                                                        &nbsp;
                                                        {
                                                            googlePayExpanderCardStrings.vaccination
                                                                .booster
                                                        }
                                                    </>
                                                ) : null}
                                            </p>
                                            <GooglePayCertificateGeneration
                                                QRType={1}
                                                DoseNumber={value.walletPassID}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        ) : null}

                        {featureToggle.googleWallet.includes('recovery') &&
                        userApiCache.certificate.recovery.status ? (
                            <div className="google-pay-expander-card__see-more-container__recovery">
                                {userApiCache.certificate.international.status ? (
                                    <hr className="nhsuk-section-break nhsuk-section-break--visible" />
                                ) : null}
                                <p className="nhsuk-body nhsuk-u-margin-bottom-0 break-word-wrap">
                                    <span className="nhsuk-u-font-weight-bold">
                                        {googlePayExpanderCardStrings.recovery.text}
                                    </span>
                                    &nbsp;{googlePayExpanderCardStrings.recovery.immunity}
                                </p>
                                <GooglePayCertificateGeneration QRType={2} />
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
        )
    }

    if (!showGoogleWallet()) {
        return null
    }

    if (
        featureToggle.googleWallet.includes('recovery') ||
        featureToggle.googleWallet.includes('international')
    ) {
        return <GoogleWalletContent />
    }

    return null
}

export default GooglePayExpanderCard
