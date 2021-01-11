import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './demo/counter'

const rootReducer = combineReducers({
    counter: counterReducer,
})

export default rootReducer
