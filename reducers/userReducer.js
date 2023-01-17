import {
    REMOVE_USER,
    ACCESS_TOKEN_EXPIRED,
    ADD_USER_CONFIGURATION,
    REMOVE_ALL_REDUX,
    LANGUAGE_TOGGLE
} from 'actions/types'

const initialState = {
    user: {
        name: null,
        lastName: null,
        email: true,
        destination: {
            countryCode: null,
            value: null
        },
        dateOfBirth: null,
        sessionEnded: false,
        identityProofingLevel: null,
        userConfiguration: null,
        uuid: null
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_CONFIGURATION: {
            return {
                user: {
                    ...state.user,
                    email: action.payload.email,
                    destination: action.payload.destination,
                    name: action.payload.name,
                    lastName: action.payload.lastName,
                    dateOfBirth: action.payload.dateOfBirth,
                    identityProofingLevel: action.payload.identityProofingLevel,
                    uuid: action.payload.uuid,
                    userConfiguration: action.payload.userConfiguration
                }
            }
        }
        case ACCESS_TOKEN_EXPIRED: {
            return {
                user: {
                    ...state.user,
                    sessionEnded: action.payload
                }
            }
        }
        case LANGUAGE_TOGGLE: {
            return {
                user: {
                    ...state.user,
                    userConfiguration: {
                        ...state.user.userConfiguration,
                        preferences: {
                            ...state.user.userConfiguration.preferences,
                            languagePreference: action.payload
                        }
                    }
                }
            }
        }
        case REMOVE_USER:
            return initialState
        case REMOVE_ALL_REDUX:
            return initialState
        default:
            return state
    }
}

export default userReducer
