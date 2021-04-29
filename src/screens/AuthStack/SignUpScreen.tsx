import React, { useCallback } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import { useReduxDispatch, useReduxSelector } from '../../redux'
import { attemptSignUp, selectLogin } from '../../redux/ducks/user'
import UserForm from '../../components/demo/UserForm'

type SignUpScreenProps = {
    navigation: MainNavigationProp<MainRoutes.SignUp>
}
const SignUpScreen = ({ navigation }: SignUpScreenProps): React.ReactElement => {
    const dispatch = useReduxDispatch()
    const isLoggedIn = useReduxSelector(selectLogin)

    useFocusEffect(
        useCallback(() => {
            if (isLoggedIn) navigation.navigate(MainRoutes.AppLoading)
        }, [navigation, isLoggedIn]),
    )

    const handleSubmit = (email: string, password: string): void => {
        dispatch(attemptSignUp(email, password))
    }

    return (
        <View style={styles.page}>
            <Text>Sign Up</Text>
            <UserForm submitHandler={handleSubmit} label="Sign Up" />
            <Button title="Sign In" onPress={() => navigation.navigate(MainRoutes.SignIn)} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SignUpScreen
