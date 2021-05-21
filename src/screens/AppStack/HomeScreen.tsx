import React from 'react'
import { Text, Button } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import { useReduxDispatch } from '../../redux'
import { setLogout } from '../../redux/ducks/user'
import DefaultPage from '../../components/shells/DefaultPage'

type HomeScreenProps = {
    navigation: MainNavigationProp<MainRoutes.Home>
}
const HomeScreen = ({ navigation }: HomeScreenProps): React.ReactElement => {
    const dispatch = useReduxDispatch()
    const logoutHandler = () => dispatch(setLogout())

    return (
        <DefaultPage>
            <Text>HOME</Text>
            <Button title="logout" onPress={() => logoutHandler()} />
            <Button title="settings" onPress={() => navigation.navigate(MainRoutes.Settings)} />
        </DefaultPage>
    )
}

export default HomeScreen
