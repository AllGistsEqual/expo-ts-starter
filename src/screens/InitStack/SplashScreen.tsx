import React, { useCallback } from 'react'
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'

type SplashScreenProps = {
    navigation: MainNavigationProp<MainRoutes.Splash>
}

const SplashScreen = ({ navigation }: SplashScreenProps): React.ReactElement => {
    const navigate = useCallback(() => navigation.navigate(MainRoutes.AppCheck), [navigation])

    useFocusEffect(
        useCallback(() => {
            const navigationTimer = setTimeout(() => {
                navigate()
            }, 3000)

            return (): void => clearTimeout(navigationTimer)
        }, [navigate]),
    )

    return (
        <TouchableWithoutFeedback onPress={() => navigate()}>
            <View style={styles.page}>
                <View style={styles.titleBox}>
                    <Text>ALL BITS EQUAL</Text>
                    <Text>presents</Text>
                    <Text>The Expo Starter Kit</Text>
                </View>
                <View style={styles.contentBox}>
                    <Text>stay legendary</Text>
                </View>
                <View style={styles.footer}>
                    <Text>written by Konrad Abe</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBox: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentBox: {
        width: '100%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        width: '100%',
        height: '10%',
        paddingRight: '3%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})

export default SplashScreen
