import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export enum MainRoutes {
    // Init Stack
    Splash = 'Splash', // display a logo or splash image
    AppCheck = 'AppCheck', // check vital stuff, forced app updates and such

    // Auth Stack
    SignIn = 'SignIn', // existing user entry point
    SignUp = 'SignUp', // new user entry point

    // App Stack
    AppLoading = 'AppLoading', // Load User Data for signed in users
    Home = 'Home', // The first "real" page of the app, now a set of tabs
    Settings = 'Settings', // Default Settings Page
}

export enum HomeRoutes {
    HomeA = 'Home Section A', // demo A for nesting
    HomeB = 'Home Section B', // demo B for nesting
    HomeC = 'Home Section C', // demo C for nesting
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
    [MainRoutes.Home]: undefined
    [MainRoutes.Settings]: undefined
}

export type HomeTabsParamList = {
    [HomeRoutes.HomeA]: { update: boolean } | undefined // just an example, "update" will later be used for version checks
    [HomeRoutes.HomeB]: undefined
    [HomeRoutes.HomeC]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()

export const HomeTabs = createBottomTabNavigator<HomeTabsParamList>()
