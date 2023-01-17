import { combineReducers } from 'redux'
import userReducer from './userReducer'
import nhsAppReducer from 'reducers/nhsAppReducer'
import userApiCacheReducer from 'reducers/userApiCacheReducer'
import featureToggleReducer from 'reducers/featureToggleReducer'

export default combineReducers({
    userReducer,
    nhsAppReducer,
    userApiCacheReducer,
    featureToggleReducer
})
