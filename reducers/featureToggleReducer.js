import {
    UPDATE_APPLE_WALLET_TOGGLE,
    UPDATE_GOOGLE_WALLET_TOGGLE,
    UPDATE_SHOW_PDF_DOWNLOAD,
    UPDATE_DOMESTIC_TOGGLE
} from 'actions/types'

const initialState = {
    featureToggle: {
        appleWallet: null,
        googleWallet: null,
        showPdfDownloadDomestic: null,
        showPdfDownloadInternational: null,
        domesticEndpointsEnabled: null
    }
}

const featureToggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_APPLE_WALLET_TOGGLE:
            return {
                featureToggle: {
                    ...state.featureToggle,
                    appleWallet: action.payload
                }
            }
        case UPDATE_GOOGLE_WALLET_TOGGLE:
            return {
                featureToggle: {
                    ...state.featureToggle,
                    googleWallet: action.payload
                }
            }
        case UPDATE_SHOW_PDF_DOWNLOAD:
            return {
                featureToggle: {
                    ...state.featureToggle,
                    showPdfDownloadDomestic: action.payload.domestic,
                    showPdfDownloadInternational: action.payload.international
                }
            }
        case UPDATE_DOMESTIC_TOGGLE:
            return {
                featureToggle: {
                    ...state.featureToggle,
                    domesticEndpointsEnabled: action.payload
                }
            }
        default:
            return state
    }
}

export default featureToggleReducer
