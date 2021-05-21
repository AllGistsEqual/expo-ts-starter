import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/native' // eslint-disable-line import/no-extraneous-dependencies
import { StatusBar } from 'expo-status-bar'
import { enableScreens } from 'react-native-screens'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './src/redux'
import MainNavigation from './src/routing/MainNavigation'
import theme from './src/styles/baseTheme'

enableScreens()

export default function App(): React.ReactElement {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <StatusBar hidden />
                    <MainNavigation />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}
