import { View, Text } from 'react-native'
import React from 'react'
import Welcome from './Screens/Welcome'
import LoginPage from './Screens/LoginPage'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Screens/StackNavigator';
import Payment from './Screens/Payment';
import ProductDetial from './Screens/ProductDetial';
import DelhiveryAddess from './Screens/DelhiveryAddess';
import Products from './Screens/Products';
import MyStack from "./src/Screens/MyStack"

const App = () => {
  return (

    <MyStack />

  )
}

export default App;