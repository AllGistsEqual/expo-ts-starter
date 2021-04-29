import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './ducks/user'
import counterReducer from './ducks/counter'
import appStateReducer from './ducks/appState'

const rootReducer = combineReducers({
    appState: appStateReducer,
    user: userReducer,
    counter: counterReducer,
})

export default rootReducer
