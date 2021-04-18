import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux'
import MainNavigation from './src/routing/MainNavigation'

export default function App(): React.ReactElement {
    return (
        <Provider store={store}>
            <StatusBar hidden />
            <MainNavigation />
        </Provider>
    )
}
