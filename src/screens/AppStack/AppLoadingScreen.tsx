import React, { useCallback } from 'react'
import { Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useReduxDispatch } from '../../redux'
import { setRunning } from '../../redux/ducks/appState'
import DefaultPage from '../../components/shells/DefaultPage'

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
        <DefaultPage>
            <Text>loading User Data...</Text>
        </DefaultPage>
    )
}

export default AppLoadingScreen
