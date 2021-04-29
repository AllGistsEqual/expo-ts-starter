import React, { useCallback } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useReduxDispatch } from '../../redux'
import { setRunning } from '../../redux/ducks/appState'

const AppLoadingScreen = (): React.ReactElement => {
    const dispatch = useReduxDispatch()

    useFocusEffect(
        useCallback(() => {
            setTimeout(() => {
                dispatch(setRunning(true))
            }, 1500)
        }, [dispatch]),
    )

    return (
        <View style={styles.page}>
            <Text>loading User Data...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default AppLoadingScreen
