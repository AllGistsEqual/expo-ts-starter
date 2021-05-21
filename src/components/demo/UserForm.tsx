import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native' // eslint-disable-line import/no-extraneous-dependencies
import { useReduxSelector } from '../../redux'
import { selectIsSubmitting, selectLoginMessage, selectLoginState } from '../../redux/ducks/user'

type UserFormProps = {
    submitHandler: (email: string, password: string) => void
    label: string
}

const UserForm = ({ submitHandler, label }: UserFormProps): React.ReactElement => {
    const [email, setEmail] = useState('hans@wurst.de')
    const [password, setPassword] = useState('wiener')

    const isLoading = useReduxSelector(selectIsSubmitting)
    const loginState = useReduxSelector(selectLoginState)
    const loginMessage = useReduxSelector(selectLoginMessage)

    return (
        <StyledContainer error={loginState === 'denied'}>
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

const StyledContainer = styled(View)<{ error: boolean }>`
    border: 3px solid ${props => props.theme.palette.interactive.border};
    border-radius: 5px;
    padding: 10px;

    ${props => {
        if (props.error === true) {
            return {
                border: `3px solid ${props.theme.palette.signal.red}`,
                backgroundColor: props.theme.palette.signal.redShade,
            }
        }

        return {
            border: `3px solid ${props.theme.palette.interactive.border}`,
            backgroundColor: props.theme.palette.common.white,
        }
    }};
}
`

const StyledInput = styled(TextInput)`
    height: 40px;
    width: 300px;
    border-color: grey;
    border-width: 1px;
    background-color: ${props => props.theme.palette.common.white};
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
