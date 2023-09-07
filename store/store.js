import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import { composeWithDevTools } from '@redux-devtools/extension'
import { useMemo } from 'react'
import thunk from 'redux-thunk'

let store

const initStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)))
}

const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState
        })

        store = undefined // Reset the current store
    }

    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return _store
}

export const useStore = (applicationState) => {
    return useMemo(() => initializeStore(applicationState), [applicationState])
}
