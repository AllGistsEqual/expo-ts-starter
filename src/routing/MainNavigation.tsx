import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { MainStack, MainRoutes } from './routes'
import { useReduxSelector } from '../redux'
import { selectLogin } from '../redux/ducks/user'

import SplashScreen from '../screens/InitStack/SplashScreen'
import AppCheckScreen from '../screens/InitStack/AppCheckScreen'
import SignInScreen from '../screens/AuthStack/SignInScreen'
import SignUpScreen from '../screens/AuthStack/SignUpScreen'
import AppLoadingScreen from '../screens/AppStack/AppLoadingScreen'
import HomeScreen from '../screens/AppStack/HomeScreen'
import SettingsScreen from '../screens/AppStack/SettingsScreen'

const MainNavigation = (): React.ReactElement => {
    const isLoggedIn = useReduxSelector(selectLogin)

    return (
        <NavigationContainer>
            <MainStack.Navigator headerMode="none">
                {isLoggedIn ? (
                    <>
                        <MainStack.Screen
                            name={MainRoutes.AppLoading}
                            component={AppLoadingScreen}
                        />
                        <MainStack.Screen name={MainRoutes.Home} component={HomeScreen} />
                        <MainStack.Screen name={MainRoutes.Settings} component={SettingsScreen} />
                    </>
                ) : (
                    <>
                        <MainStack.Screen name={MainRoutes.Splash} component={SplashScreen} />
                        <MainStack.Screen name={MainRoutes.AppCheck} component={AppCheckScreen} />
                        <MainStack.Screen name={MainRoutes.SignIn} component={SignInScreen} />
                        <MainStack.Screen name={MainRoutes.SignUp} component={SignUpScreen} />
                    </>
                )}
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation
