import { EXTERNAL_RESOURCE_LETTER } from 'constants/routes'

export const removeSlashFromRoute = (route) => {
    return route.replace(/\//g, '')
}

export const addInternalRouteWithExternalResourceLetter = (isLetter) => {
    return isLetter ? EXTERNAL_RESOURCE_LETTER : ''
}

export const getPdfDownloadToggleDomestic = (featureToggle) => {
    return featureToggle ? featureToggle.showPdfDownloadDomestic : null
}

export const getPdfDownloadToggleInternational = (featureToggle) => {
    return featureToggle ? featureToggle.showPdfDownloadInternational : null
}
