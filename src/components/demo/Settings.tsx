import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import styled from 'styled-components/native' // eslint-disable-line import/no-extraneous-dependencies

const Tab = createMaterialTopTabNavigator()

const TabOne = () => (
    <View>
        <Text>Tab One</Text>
    </View>
)
const TabTwo = () => (
    <ScrollView>
        <Text />
        {Array(42)
            .fill('Tab Two')
            .map((text: string, index) => {
                const tabContent = `${text} (${index})`
                return <Text key={tabContent}>{tabContent}</Text>
            })}
    </ScrollView>
)
const TabThree = () => (
    <View>
        <Text>Tab Three</Text>
    </View>
)

const SettingTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="SettingsOne" component={TabOne} />
            <Tab.Screen name="SettingsTwo" component={TabTwo} />
            <Tab.Screen name="SettingsThree" component={TabThree} />
        </Tab.Navigator>
    )
}

const Settings = (): React.ReactElement => {
    return (
        <StyledSettingsBox>
            <SettingTabs />
        </StyledSettingsBox>
    )
}

const StyledSettingsBox = styled.View`
    background-color: #ccc;
    width: 300px;
    height: 500px;
    border-width: 4px;
    border-color: #000;
    border-radius: 5px;
`

export default Settings
