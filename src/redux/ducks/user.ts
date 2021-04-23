/* eslint-disable no-param-reassign */
import { createAction, createReducer, Middleware } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { createAccount, login } from '../../mock/mockUser'

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

export const userMiddleware: Middleware = ({ dispatch }) => next => action => {
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
}

const userReducer = createReducer(initialState, builder => {
    builder
        .addCase(attemptLogin, state => {
            if (state.loginState) state.loginState = 'loading'
        })
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
