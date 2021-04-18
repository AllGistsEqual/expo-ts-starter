import { createStackNavigator } from '@react-navigation/stack'

export enum MainRoutes {
    Splash = 'Splash',
    Loading = 'Loading',
    Home = 'Home',
    Settings = 'Settings',
}

export type MainStackParamList = {
    [MainRoutes.Splash]: undefined
    [MainRoutes.Loading]: undefined
    [MainRoutes.Home]: { update: boolean } | undefined // just an example, "update" will later be used for version checks
    [MainRoutes.Settings]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()
