import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Products from './Products'
import ProductDetial from './Details'
import LoginPage from './LoginPage'
import Register from './Register'

const Stack = createStackNavigator()
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={LoginPage} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="home" component={Products} />
        <Stack.Screen name="Detail" component={ProductDetial} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack