import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'

type AppLoadingScreenProps = {
    navigation: MainNavigationProp<MainRoutes.AppLoading>
}

const AppLoadingScreen = ({ navigation }: AppLoadingScreenProps): React.ReactElement => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(MainRoutes.Home)
        }, 1500)
    }, [navigation])

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
