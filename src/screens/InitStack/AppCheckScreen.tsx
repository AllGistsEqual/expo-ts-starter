import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'

type AppCheckScreenProps = {
    navigation: MainNavigationProp<MainRoutes.AppCheck>
}

const AppCheckScreen = ({ navigation }: AppCheckScreenProps): React.ReactElement => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(MainRoutes.SignIn)
        }, 1500)
    }, [navigation])

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
