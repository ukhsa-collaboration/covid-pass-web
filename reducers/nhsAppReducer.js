import {
    UPDATE_NHS_APP_DESKTOP,
    TOGGLE_FOOTER,
    ADD_TMP_USER_TOKEN,
    ADD_TMP_USER_CONFIGURATION,
    REMOVE_TMP_TOKEN_INFO,
    UPDATE_SELECTED_FLOW,
    TOGGLE_SURVEY_BANNER,
    REMOVE_ALL_REDUX,
    REFRESH_SSO_TMP_NHS_USER_TOKEN
} from 'actions/types'

const initialState = {
    nhsApp: {
        isBannerOpen: true,
        isNhsAppDesktop: false,
        selectedFlow: null,
        tmpUserToken: null,
        tmpUserConfiguration: null,
        showFooter: true
    }
}

const nhsAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NHS_APP_DESKTOP:
            return {
                nhsApp: {
                    ...state.nhsApp,
                    isNhsAppDesktop: action.payload
                }
            }
        case UPDATE_SELECTED_FLOW:
            return {
                nhsApp: {
                    ...state.nhsApp,
                    selectedFlow: action.payload
                }
            }
        case ADD_TMP_USER_TOKEN:
            return {
                nhsApp: {
                    ...state.nhsApp,
                    tmpUserToken: action.payload
                }
            }
        case ADD_TMP_USER_CONFIGURATION:
            return {
                nhsApp: {
                    ...state.nhsApp,
                    tmpUserConfiguration: action.payload
                }
            }
        case REMOVE_TMP_TOKEN_INFO:
            return {
                nhsApp: {
                    ...state.nhsApp,
                    tmpUserToken: null,
                    tmpUserConfiguration: null
                }
            }
        case TOGGLE_FOOTER:
            return {
                nhsApp: {
                    ...state.nhsApp,
                    showFooter: action.payload
                }
            }
        case TOGGLE_SURVEY_BANNER:
            return {
                nhsApp: {
                    ...state.nhsApp,
                    isBannerOpen: action.payload
                }
            }
        case REMOVE_ALL_REDUX:
            return {
                nhsApp: {
                    ...state.nhsApp,
                    selectedFlow: null,
                    tmpUserToken: null,
                    tmpUserConfiguration: null
                }
            }

        case REFRESH_SSO_TMP_NHS_USER_TOKEN:
            return {
                nhsApp: {
                    ...state.nhsApp,
                    tmpUserToken: {
                        ...state.nhsApp.tmpUserToken,
                        accessToken: action.payload.accessToken,
                        refreshToken: action.payload.refreshToken,
                        expiresIn: action.payload.expiresIn
                    }
                }
            }
        default:
            return state
    }
}
export default nhsAppReducer
