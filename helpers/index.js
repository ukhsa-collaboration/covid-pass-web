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

export const getNhsLoginRedirectUri = (pathEdit = process.env.NEXT_PUBLIC_BASE_PATH_EDIT) => {
    return `${window.location.origin}/${pathEdit === 'true' ? 'staticsite/' : ''}`
}

export const getInternalHref = (path, pathEdit = process.env.NEXT_PUBLIC_BASE_PATH_EDIT) => {
    return `${pathEdit === 'true' ? '/staticsite' : ''}${path}`
}
