import React, { useCallback } from 'react'
import { Text, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import { useReduxDispatch, useReduxSelector } from '../../redux'
import { attemptLogin, resetLogin, selectLogin } from '../../redux/ducks/user'
import UserForm from '../../components/demo/UserForm'
import DefaultPage from '../../components/shells/DefaultPage'

type SignInScreenProps = {
    navigation: MainNavigationProp<MainRoutes.SignIn>
}
const SignInScreen = ({ navigation }: SignInScreenProps): React.ReactElement => {
    const dispatch = useReduxDispatch()
    const isLoggedIn = useReduxSelector(selectLogin)

    useFocusEffect(
        useCallback(() => {
            if (isLoggedIn) navigation.navigate(MainRoutes.AppLoading)
        }, [navigation, isLoggedIn]),
    )

    const handleSubmit = (email: string, password: string): void => {
        dispatch(attemptLogin(email, password))
    }

    const handleSwitch = (): void => {
        dispatch(resetLogin())
        navigation.navigate(MainRoutes.SignUp)
    }

    return (
        <DefaultPage>
            <Text>Sign In</Text>
            <UserForm submitHandler={handleSubmit} label="Log in" />
            <Button title="Sign Up" onPress={handleSwitch} />
        </DefaultPage>
    )
}

export default SignInScreen
