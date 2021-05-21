/* eslint-disable no-param-reassign */
import { createAction, createReducer, Middleware } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { createAccount, login } from '../../mock/mockUser'
import { setRunning } from './appState'

type LoginState = 'init' | 'loading' | 'denied' | 'loggedOut'

type UserState = {
    login: boolean
    loginState?: LoginState
    email?: string
    newUser?: boolean
    message?: string
}

const initialState: UserState = {
    login: false,
    loginState: 'init',
}

export const setLogin = createAction('[USER] Set Login', (email: string, newUser: boolean) => ({
    payload: {
        email,
        newUser,
    },
}))

export const resetLogin = createAction('[USER] Reset Login')

export const setLogout = createAction(
    '[USER] Set Logout',
    (loginState?: LoginState, message?: string) => ({
        payload: {
            loginState,
            message,
        },
    }),
)

export const attemptLogin = createAction(
    '[USER] attempt Login',
    (email: string, password: string) => ({
        payload: {
            email,
            password,
        },
    }),
)

export const attemptSignUp = createAction(
    '[USER] attempt SignUp',
    (email: string, password: string) => ({
        payload: {
            email,
            password,
        },
    }),
)

export const selectLogin = (state: RootState): boolean => state.user.login
export const selectLoginState = (state: RootState): string | undefined => state.user.loginState
export const selectIsSubmitting = (state: RootState): boolean => state.user.loginState === 'loading'
export const selectLoginMessage = (state: RootState): string | undefined => state.user.message

export const userMiddleware: Middleware =
    ({ dispatch }) =>
    next =>
    action => {
        next(action)

        if (attemptLogin.match(action)) {
            const { email, password } = action.payload

            login(email, password)
                .then(() => dispatch(setLogin(email, false)))
                .catch(err => dispatch(setLogout('denied', err.message)))
        }

        if (attemptSignUp.match(action)) {
            const { email, password } = action.payload

            createAccount(email, password)
                .then(() => dispatch(setLogin(email, true)))
                .catch(err => dispatch(setLogout('denied', err.message)))
        }

        if (setLogout.match(action)) {
            dispatch(setRunning(false))
        }
    }

const userReducer = createReducer(initialState, builder => {
    builder
        .addCase(attemptLogin, state => ({
            ...state,
            loginState: 'loading',
            message: 'loading',
        }))
        .addCase(attemptSignUp, state => ({
            ...state,
            loginState: 'loading',
            message: 'loading',
        }))
        .addCase(resetLogin, state => ({
            ...state,
            loginState: 'init',
            message: undefined,
        }))
        .addCase(setLogin, (state, action) => {
            const { email, newUser } = action.payload
            return {
                login: true,
                email,
                newUser,
            }
        })
        .addCase(setLogout, (state, action) => {
            const { loginState = 'loggedOut', message } = action.payload
            return {
                login: false,
                loginState,
                message,
            }
        })
})

export default userReducer
