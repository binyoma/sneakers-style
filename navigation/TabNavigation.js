import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../components/Home'
import Help from '../components/Help'
const Tab =createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='help' component={Help}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation