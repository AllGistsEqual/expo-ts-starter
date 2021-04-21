import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { enableScreens } from 'react-native-screens'
import store from './src/redux'
import MainNavigation from './src/routing/MainNavigation'

enableScreens()

export default function App(): React.ReactElement {
    return (
        <Provider store={store}>
            <StatusBar hidden />
            <MainNavigation />
        </Provider>
    )
}
