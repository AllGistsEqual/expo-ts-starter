import React from 'react'
import { Text, Button } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import Settings from '../../components/demo/Settings'
import DefaultPage from '../../components/shells/DefaultPage'

type SettingsScreenProps = {
    navigation: MainNavigationProp<MainRoutes.Settings>
}

const SettingsScreen = ({ navigation }: SettingsScreenProps): React.ReactElement => (
    <DefaultPage>
        <Text>SETTINGS</Text>
        <Settings />
        <Button title="back" onPress={() => navigation.goBack()} />
    </DefaultPage>
)

export default SettingsScreen
