import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import { useReduxDispatch } from '../../redux'
import { attemptLogin } from '../../redux/ducks/user'
import UserForm from '../../components/demo/UserForm'

type SignInScreenProps = {
    navigation: MainNavigationProp<MainRoutes.SignIn>
}
const SignInScreen = ({ navigation }: SignInScreenProps): React.ReactElement => {
    const dispatch = useReduxDispatch()

    const handleSubmit = (email: string, password: string): void => {
        dispatch(attemptLogin(email, password))
    }

    return (
        <View style={styles.page}>
            <Text>Sign In</Text>
            <UserForm submitHandler={handleSubmit} label="Log in" />
            <Button title="Sign Up" onPress={() => navigation.navigate(MainRoutes.SignUp)} />
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

export default SignInScreen
