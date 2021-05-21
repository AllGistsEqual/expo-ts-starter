import React from 'react'
import { Text, Button } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import DefaultPage from '../../components/shells/DefaultPage'

type HomeScreenProps = {
    navigation: MainNavigationProp<MainRoutes.Home>
}
const HomeScreenC = ({ navigation }: HomeScreenProps): React.ReactElement => (
    <DefaultPage>
        <Text>Section C</Text>
        <Button title="settings" onPress={() => navigation.navigate(MainRoutes.Settings)} />
    </DefaultPage>
)

export default HomeScreenC
