import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import { useReduxDispatch } from '../../redux'
import { attemptSignUp } from '../../redux/ducks/user'
import UserForm from '../../components/demo/UserForm'

type SignUpScreenProps = {
    navigation: MainNavigationProp<MainRoutes.SignUp>
}
const SignUpScreen = ({ navigation }: SignUpScreenProps): React.ReactElement => {
    const dispatch = useReduxDispatch()

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
