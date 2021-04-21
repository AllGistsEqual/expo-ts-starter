import { createStackNavigator } from '@react-navigation/stack'

export enum MainRoutes {
    // Init Stack
    Splash = 'Splash', // display a logo or splash image
    AppCheck = 'AppCheck', // check vital stuff, forced app updates and such

    // Auth Stack
    SignIn = 'SignIn', // existing user entry point
    SignUp = 'SignUp', // new user entry point

    // App Stack
    AppLoading = 'AppLoading', // Load User Data for signed in users
    Home = 'Home', // The first "real" page of the app
    Settings = 'Settings', // Default Settings Page
}

export type MainStackParamList = {
    // Init Stack
    [MainRoutes.Splash]: undefined
    [MainRoutes.AppCheck]: undefined

    // Auth Stack
    [MainRoutes.SignIn]: undefined
    [MainRoutes.SignUp]: undefined

    // App Stack
    [MainRoutes.AppLoading]: undefined
    [MainRoutes.Home]: { update: boolean } | undefined // just an example, "update" will later be used for version checks
    [MainRoutes.Settings]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()
