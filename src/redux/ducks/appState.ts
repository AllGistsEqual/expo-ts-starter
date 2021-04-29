import { createAction, createReducer } from '@reduxjs/toolkit'
import { RootState } from '../index'

type AppState = {
    isRunning: boolean
}

const initialState: AppState = {
    isRunning: false,
}

export const setRunning = createAction('[APPSTATE] Set Running', (running: boolean) => ({
    payload: {
        running,
    },
}))

export const selectIsRunning = (state: RootState): boolean => state.appState.isRunning

const appStateReducer = createReducer(initialState, builder => {
    builder.addCase(setRunning, (state, action) => {
        const { running } = action.payload
        return {
            isRunning: running,
        }
    })
})

export default appStateReducer
