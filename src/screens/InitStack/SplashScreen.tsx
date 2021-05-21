import React, { useCallback } from 'react'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import styled from 'styled-components/native' // eslint-disable-line import/no-extraneous-dependencies
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import DefaultPage from '../../components/shells/DefaultPage'

type SplashScreenProps = {
    navigation: MainNavigationProp<MainRoutes.Splash>
}

const SplashScreen = ({ navigation }: SplashScreenProps): React.ReactElement => {
    const navigate = useCallback(() => navigation.navigate(MainRoutes.AppCheck), [navigation])

    useFocusEffect(
        useCallback(() => {
            const navigationTimer = setTimeout(() => {
                navigate()
            }, 3000)

            return (): void => clearTimeout(navigationTimer)
        }, [navigate]),
    )

    return (
        <TouchableWithoutFeedback onPress={() => navigate()}>
            <DefaultPage>
                <StyledTitleBox>
                    <Text>ALL BITS EQUAL</Text>
                    <Text>presents</Text>
                    <Text>The Expo Starter Kit</Text>
                </StyledTitleBox>
                <StyledContentBox>
                    <Text>stay legendary</Text>
                </StyledContentBox>
                <StyledFooter>
                    <Text>written by Konrad Abe</Text>
                </StyledFooter>
            </DefaultPage>
        </TouchableWithoutFeedback>
    )
}

const StyledTitleBox = styled.View`
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: center;
`

const StyledContentBox = styled.View`
    width: 100%;
    height: 45%;
    align-items: center;
    justify-content: center;
`

const StyledFooter = styled.View`
    width: 100%;
    height: 10%;
    padding-right: 3%;
    align-items: flex-end;
    justify-content: center;
`

export default SplashScreen
