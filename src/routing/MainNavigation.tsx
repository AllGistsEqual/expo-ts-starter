import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { MainStack, MainRoutes } from './routes'
import { useReduxSelector } from '../redux'
import { selectLogin } from '../redux/ducks/user'

import SplashScreen from '../screens/SplashScreen'
import AppLoadingScreen from '../screens/AppLoadingScreen'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const MainNavigation = (): React.ReactElement => {
    const isLoggedIn = useReduxSelector(selectLogin)

    return (
        <NavigationContainer>
            <MainStack.Navigator headerMode="none">
                {isLoggedIn ? (
                    <>
                        <MainStack.Screen name={MainRoutes.Loading} component={AppLoadingScreen} />
                        <MainStack.Screen name={MainRoutes.Home} component={HomeScreen} />
                        <MainStack.Screen name={MainRoutes.Settings} component={SettingsScreen} />
                    </>
                ) : (
                    <MainStack.Screen name={MainRoutes.Splash} component={SplashScreen} />
                )}
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation
