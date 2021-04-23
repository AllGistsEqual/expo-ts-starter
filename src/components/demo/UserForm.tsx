import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useReduxSelector } from '../../redux'
import { selectIsSubmitting, selectLoginMessage } from '../../redux/ducks/user'

type UserFormProps = {
    submitHandler: (email: string, password: string) => void
    label: string
}

const UserForm = ({ submitHandler, label }: UserFormProps): React.ReactElement => {
    const [email, setEmail] = useState('hans@wurst.de')
    const [password, setPassword] = useState('wiener')

    const isLoading = useReduxSelector(selectIsSubmitting)
    const loginMessage = useReduxSelector(selectLoginMessage)

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <Button
                title={label}
                disabled={isLoading}
                onPress={() => submitHandler(email, password)}
            />
            {loginMessage && <Text>{loginMessage}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
    },
})

export default UserForm
