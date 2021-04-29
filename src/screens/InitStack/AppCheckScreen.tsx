import React, { useCallback } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import { useReduxSelector } from '../../redux'
import { selectLogin } from '../../redux/ducks/user'

type AppCheckScreenProps = {
    navigation: MainNavigationProp<MainRoutes.AppCheck>
}

const AppCheckScreen = ({ navigation }: AppCheckScreenProps): React.ReactElement => {
    const isLoggedIn = useReduxSelector(selectLogin)

    const getRoute = useCallback(() => (isLoggedIn ? MainRoutes.AppLoading : MainRoutes.SignIn), [
        isLoggedIn,
    ])

    useFocusEffect(
        useCallback(() => {
            setTimeout(() => {
                navigation.navigate(getRoute())
            }, 1500)
        }, [navigation, getRoute]),
    )

    return (
        <View style={styles.page}>
            <Text>loading App Data...</Text>
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

export default AppCheckScreen
