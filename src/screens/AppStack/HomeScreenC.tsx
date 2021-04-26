import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'

type HomeScreenProps = {
    navigation: MainNavigationProp<MainRoutes.Home>
}
const HomeScreenC = ({ navigation }: HomeScreenProps): React.ReactElement => (
    <View style={styles.page}>
        <Text>Seection C</Text>
        <Button title="settings" onPress={() => navigation.navigate(MainRoutes.Settings)} />
    </View>
)

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default HomeScreenC
