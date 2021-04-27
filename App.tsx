import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { enableScreens } from 'react-native-screens'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './src/redux'
import MainNavigation from './src/routing/MainNavigation'

enableScreens()

export default function App(): React.ReactElement {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StatusBar hidden />
                <MainNavigation />
            </PersistGate>
        </Provider>
    )
}
