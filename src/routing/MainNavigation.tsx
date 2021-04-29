import React, { useRef } from 'react'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'

import { useReduxDevToolsExtension } from '@react-navigation/devtools'
import { HomeRoutes, HomeTabs, MainRoutes, MainStack } from './routes'
import { useReduxSelector } from '../redux'
import { selectIsRunning } from '../redux/ducks/appState'

import SplashScreen from '../screens/InitStack/SplashScreen'
import AppCheckScreen from '../screens/InitStack/AppCheckScreen'
import SignInScreen from '../screens/AuthStack/SignInScreen'
import SignUpScreen from '../screens/AuthStack/SignUpScreen'
import AppLoadingScreen from '../screens/AppStack/AppLoadingScreen'
import HomeScreen from '../screens/AppStack/HomeScreen'
import HomeScreenB from '../screens/AppStack/HomeScreenB'
import HomeScreenC from '../screens/AppStack/HomeScreenC'
import SettingsScreen from '../screens/AppStack/SettingsScreen'

const Home = () => (
    <HomeTabs.Navigator>
        <HomeTabs.Screen name={HomeRoutes.HomeA} component={HomeScreen} />
        <HomeTabs.Screen name={HomeRoutes.HomeB} component={HomeScreenB} />
        <HomeTabs.Screen name={HomeRoutes.HomeC} component={HomeScreenC} />
    </HomeTabs.Navigator>
)

const MainNavigation = (): React.ReactElement => {
    const isAppRunning = useReduxSelector(selectIsRunning)

    const navigationRef: React.RefObject<NavigationContainerRef> = useRef(null)

    useReduxDevToolsExtension(navigationRef)

    return (
        <NavigationContainer ref={navigationRef}>
            <MainStack.Navigator headerMode="none">
                {isAppRunning ? (
                    <>
                        <MainStack.Screen name={MainRoutes.Home} component={Home} />
                        <MainStack.Screen name={MainRoutes.Settings} component={SettingsScreen} />
                    </>
                ) : (
                    <>
                        <MainStack.Screen name={MainRoutes.Splash} component={SplashScreen} />
                        <MainStack.Screen name={MainRoutes.AppCheck} component={AppCheckScreen} />
                        <MainStack.Screen name={MainRoutes.SignIn} component={SignInScreen} />
                        <MainStack.Screen name={MainRoutes.SignUp} component={SignUpScreen} />
                        <MainStack.Screen
                            name={MainRoutes.AppLoading}
                            component={AppLoadingScreen}
                        />
                    </>
                )}
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation
