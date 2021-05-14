import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
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
        <StyledContainer>
            <StyledInput
                onChangeText={text => setEmail(text)}
                value={email}
                keyboardType="email-address"
            />
            <StyledInput
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <StyledButtonContainer
                disabled={isLoading}
                onPress={() => submitHandler(email, password)}
            >
                <StyledButtonText>{label}</StyledButtonText>
            </StyledButtonContainer>
            {loginMessage && <Text>{loginMessage}</Text>}
        </StyledContainer>
    )
}

const StyledContainer = styled(View)`
    border-color: black;
    border-width: 3px;
    border-radius: 5px;
    padding: 10px;
`

const StyledInput = styled(TextInput)`
    height: 40px;
    width: 300px;
    border-color: grey;
    border-width: 1px;
    margin: 10px 0;
    padding: 5px;
`

const StyledButtonContainer = styled(TouchableOpacity)<{ disabled: boolean }>`
    background-color: ${props => (props.disabled ? '#ccc' : '#009688')};
    border-radius: 10px;
    padding: 10px 12px;
`

const StyledButtonText = styled(Text)`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    align-self: center;
    text-transform: uppercase;
`

export default UserForm
