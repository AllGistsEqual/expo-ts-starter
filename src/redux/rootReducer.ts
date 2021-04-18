import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './ducks/user'
import counterReducer from './ducks/counter'

const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer,
})

export default rootReducer
