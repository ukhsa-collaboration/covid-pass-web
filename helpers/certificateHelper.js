import { welshConvertDate } from 'helpers/dateHelper'
import { trackEvent } from './appInsights'
import mandatoryCerts from 'mappings/mandatoryCerts'
import certificateTypes from 'mappings/certificateTypes'
import { LANGUAGE_CODES } from 'constants/index'

export const certificateTypeToText = (certificateTypeNumber) => {
    switch (certificateTypeNumber) {
        case certificateTypes.DomesticVoluntary:
            return 'Voluntary'

        case certificateTypes.DomesticMandatory:
            return 'Mandatory'
        case certificateTypes.Diagnostic:
        case certificateTypes.Vaccination:
        case certificateTypes.Immunity:
        case certificateTypes.Recovery:
        case certificateTypes.Exemption:
        case certificateTypes.None:
        case certificateTypes.VaccinationInsufficientHoursFromLastResult:
        case certificateTypes.TestResult:
        default:
            return 'Default'
    }
}

export const getTwoPassStatus = (userApiCache) => {
    return userApiCache?.certificate?.domestic?.twoPassStatus
}

export const getErrorCode = (userApiCache) => {
    return userApiCache.certificate.domestic.errorCode
}

export const getDateUntil = (userApiCache, lang) => {
    var options = { month: 'long', day: 'numeric' }
    var date = new Date(Date.parse(userApiCache.certificate.domestic.waitPeriod))
    return lang === LANGUAGE_CODES.cy
        ? welshConvertDate(date.toLocaleDateString('en-us', options))
        : date.toLocaleDateString('en-us', options)
}

export const getDaysUntil = (userApiCache) => {
    const dateDifference = Math.abs(
        new Date(Date.parse(userApiCache.certificate.domestic.waitPeriod)) - new Date()
    )
    return Math.ceil(dateDifference / (1000 * 3600 * 24))
}

export const logCertificateGeneration = (data) => {
    switch (data.twoPassStatus) {
        case mandatoryCerts.MandatoryVoluntaryOn:
            //if certificate is null then user failed to generate mandatory nor voluntary certificate
            //if certificate is voluntary than user failed to generate mandatory
            //if certificate generated mandatory then no failures occurred
            if (data.certificate === null) {
                trackEvent(
                    'Domestic Voluntary Certificate - failed Generation - Mandatory Voluntary'
                )
                trackEvent(
                    'Domestic Mandatory Certificate - failed Generation - Mandatory Voluntary'
                )
            } else if (data.certificate.certificateType === certificateTypes.DomesticVoluntary) {
                trackEvent(
                    'Domestic Voluntary Certificate - valid Certificate - Mandatory Voluntary'
                )
                trackEvent(
                    'Domestic Mandatory Certificate - failed Generation - Mandatory Voluntary'
                )
            } else if (data.certificate.certificateType === certificateTypes.DomesticMandatory) {
                trackEvent(
                    'Domestic Mandatory Certificate - valid Certificate - Mandatory Voluntary'
                )
            }
            break
        case mandatoryCerts.MandatoryOnly:
            //if certificate is null then user failed to generate mandatory
            //if certificate is not null then user generated mandatory
            if (data.certificate === null) {
                trackEvent('Domestic Mandatory Certificate - failed Generation - Mandatory')
            } else if (data.certificate.certificateType === certificateTypes.DomesticMandatory) {
                trackEvent('Domestic Mandatory Certificate - valid Certificate - Mandatory')
            }
            break
        case mandatoryCerts.MandatoryVoluntaryOff:
            //if certificate is not null, user generated valid certificate
            if (data.certificate !== null) {
                trackEvent('Domestic Certificate - valid Certificate - Default')
            } else {
                trackEvent('Domestic Certificate - invalid Certificate - Default')
            }
            break
        default:
    }
}
