import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux'
import Counter from './src/components/demo/Counter'

export default function App(): React.ReactElement {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Counter />
                <StatusBar style="auto" />
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
