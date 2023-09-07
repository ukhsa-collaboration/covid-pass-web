import React, { useCallback, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DotButton, PrevButton, NextButton } from 'components/buttons/CarouselButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { detailsStrings, carouselStrings } from 'localization/translations'
import QrCode from 'components/QrCode/QrCode'
import VaccinationInternationalCard from 'components/Results/Cards/VaccinationInternationalCard'
import RecoveryInternationalCard from 'components/Results/Cards/RecoveryInternationalCard'
import { getFormattedDateTimeEuropeLondonNoHours } from 'helpers/dateHelper'
import { getLanguage } from 'helpers/userHelper'
import AppleWalletCertificateGeneration from 'components/Certificate/GenerationCards/AppleWalletCertificateGeneration'
import GooglePayCertificateGeneration from 'components/Certificate/GenerationCards/GooglePayCertificateGeneration'
import { LANGUAGE_CODES } from 'constants/index'

const Carousel = () => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla])
    const onSelect = useCallback(() => {
        if (!embla) return
        setSelectedIndex(embla.selectedScrollSnap())
        setPrevBtnEnabled(embla.canScrollPrev())
        setNextBtnEnabled(embla.canScrollNext())
    }, [embla, setSelectedIndex])

    const user = useSelector((state) => state.userReducer.user)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    const [slides, setSlides] = React.useState([])

    carouselStrings.setLanguage(getLanguage(user))
    detailsStrings.setLanguage(getLanguage(user))

    const compare = (a, b) => {
        if (a.resultData.dateTimeOfTest < b.resultData.dateTimeOfTest) {
            return -1
        }
        if (a.resultData.dateTimeOfTest > b.resultData.dateTimeOfTest) {
            return 1
        }
        return 0
    }

    useEffect(() => {
        const intTmp = userApiCache.certificate.international
        const intData =
            intTmp.status &&
            userApiCache.certificate.international.resultData
                .map((data, index) => {
                    return {
                        expiryDate: intTmp.expiryDate,
                        header: intTmp.header,
                        resultData: data,
                        tag: intTmp.tag,
                        walletPassID: index
                    }
                })
                .sort(compare)
                .reverse()

        const recTmp = userApiCache.certificate.recovery
        let recData =
            recTmp.status &&
            recTmp.resultData.map((data) => {
                return {
                    expiryDate: recTmp.expiryDate,
                    header: recTmp.header,
                    resultData: data,
                    tag: recTmp.tag
                }
            })

        // At the first part, we merge all arrays, and then filter array elements - we include only "not null" values
        const arr = [].concat(intData, recData).filter((item) => item)

        setSlides(arr)
    }, [userApiCache.certificate.international, userApiCache.certificate.recovery])

    useEffect(() => {
        if (!embla) return
        onSelect()
        setScrollSnaps(embla.scrollSnapList())
        embla.on('select', onSelect)
    }, [embla, setScrollSnaps, onSelect])

    return (
        <div>
            <div className="carousel-code-container">
                <div className="embla">
                    {slides.length > 1 ? (
                        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                    ) : null}
                    <div className="embla__viewport" ref={viewportRef}>
                        <div className="embla__container">
                            {slides.length > 0 &&
                                slides.map((_, index) => (
                                    <div className="embla__slide" key={index}>
                                        <div
                                            className="embla__slide__inner carousel-inner"
                                            data-testid="carousel-inner">
                                            <div className="carousel-qr-container">
                                                <p
                                                    className="nhsuk-u-margin-bottom-2 carousel-qr-container-head"
                                                    data-testid="carousel-qr-container-head">
                                                    {slides[index].tag === 'vaccination'
                                                        ? carouselStrings.vaccineHead
                                                        : carouselStrings.recoveredHead}
                                                </p>
                                                {getLanguage(user) === LANGUAGE_CODES.cy ? (
                                                    <p
                                                        className="nhsuk-hint bilingual-text nhsuk-u-margin-bottom-2 carousel-qr-container-head-bilingual"
                                                        data-testid="carousel-qr-container-head-bilingual">
                                                        {slides[index].tag === 'vaccination'
                                                            ? carouselStrings.vaccineHead__bilingual
                                                            : carouselStrings.recoveredHead__bilingual}
                                                    </p>
                                                ) : null}

                                                <QrCode
                                                    qrString={slides[index].resultData.qrCode}
                                                    key={index}
                                                    className="qr-code"
                                                />

                                                <p className="nhsuk-u-margin-bottom-1 covid-records-details-expiry">
                                                    <span className="nhsuk-u-font-weight-bold">
                                                        {detailsStrings.expiration}
                                                    </span>
                                                </p>
                                                <p className="nhsuk-u-margin-bottom-4 covid-records-details-expiry__bilingual">
                                                    {getFormattedDateTimeEuropeLondonNoHours(
                                                        slides[index].expiryDate,
                                                        getLanguage(user)
                                                    )}
                                                </p>

                                                {getLanguage(user) === LANGUAGE_CODES.cy ? (
                                                    <>
                                                        <p className="nhsuk-hint bilingual-text nhsuk-u-margin-bottom-1 covid-records-details-expiry__bilingual">
                                                            <span className="nhsuk-u-font-weight-bold">
                                                                {
                                                                    detailsStrings.expiration__bilingual
                                                                }
                                                            </span>
                                                        </p>
                                                        <p className="nhsuk-u-margin-bottom-4 covid- records-details-expiry__bilingual">
                                                            {getFormattedDateTimeEuropeLondonNoHours(
                                                                slides[index].expiryDate,
                                                                LANGUAGE_CODES.en
                                                            )}
                                                        </p>
                                                    </>
                                                ) : null}
                                                {index === selectedIndex &&
                                                    (slides[index].tag === 'vaccination' ? (
                                                        <>
                                                            {featureToggle.appleWallet?.includes(
                                                                'international'
                                                            ) ? (
                                                                <AppleWalletCertificateGeneration
                                                                    QRType={1}
                                                                    DoseNumber={
                                                                        slides[index].walletPassID
                                                                    }
                                                                />
                                                            ) : null}
                                                            {featureToggle.googleWallet?.includes(
                                                                'international'
                                                            ) ? (
                                                                <GooglePayCertificateGeneration
                                                                    QRType={1}
                                                                    DoseNumber={
                                                                        slides[index].walletPassID
                                                                    }
                                                                />
                                                            ) : null}
                                                        </>
                                                    ) : (
                                                        <>
                                                            {featureToggle.appleWallet?.includes(
                                                                'recovery'
                                                            ) ? (
                                                                <AppleWalletCertificateGeneration
                                                                    QRType={2}
                                                                />
                                                            ) : null}
                                                            {featureToggle.googleWallet?.includes(
                                                                'recovery'
                                                            ) ? (
                                                                <GooglePayCertificateGeneration
                                                                    QRType={2}
                                                                />
                                                            ) : null}
                                                        </>
                                                    ))}
                                            </div>

                                            {slides[index].tag === 'vaccination' ? (
                                                <VaccinationInternationalCard
                                                    data={slides[index].resultData}
                                                />
                                            ) : (
                                                <RecoveryInternationalCard
                                                    data={slides[index].resultData}
                                                    expiryDate={slides[index].expiryDate}
                                                />
                                            )}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    {slides.length > 1 ? (
                        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                    ) : null}
                    {slides.length > 1 ? (
                        <>
                            <div className="embla__dots">
                                {scrollSnaps.map((_, index) => (
                                    <DotButton
                                        index={index + 1}
                                        key={index}
                                        selected={index === selectedIndex}
                                        onClick={() => scrollTo(index)}
                                    />
                                ))}
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
            <p className="nhsuk-u-margin-bottom-2" id="covid-records-barcode-refresh">
                {detailsStrings.barcodeRefreshInternationalText}
            </p>
        </div>
    )
}

export default Carousel
