import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import Welcome from './Welcome';
import Profile from './Profile';
import DrawerNavigator from './DrawerNavigator';
import BottumTabNavigator from './BottumTabNavigator';
import Payment from './Payment';
import OrdeId from './OrdeId';
import Rating from './Rating';
import Notification from './Notification';
import Delivery from './Delivery';
import Blog from './Blog';
import Address from './Address';
import BlogDetail from './BlogDetail';
import Categories from './Categories';
import Friuts from './Friuts';
import ShoopingCart from './ShoopingCart';
import ProductDetial from './ProductDetial';
import DelhiveryAddess from './DelhiveryAddess';
import PaymentSuccess from './PaymentSuccess';
import Package from './Package';

const Stack = createStackNavigator();



const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }} />
      <Stack.Screen name='profile' component={BottumTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='Payment' component={Payment} options={{ headerShown: false }} />
      <Stack.Screen name='Order' component={OrdeId} options={{ headerShown: false }} />
      <Stack.Screen name='Rating' component={Rating} options={{ headerShown: false }} />
      <Stack.Screen name='Notification' component={Notification} options={{ headerShown: false }} />
      <Stack.Screen name='Delivery' component={Delivery} options={{ headerShown: false }} />
      <Stack.Screen name='Blog' component={Blog} options={{ headerShown: false }} />
      <Stack.Screen name='Address' component={Address} options={{ headerShown: false }} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} options={{ headerShown: false }} />
      <Stack.Screen name='Categories' component={Categories} options={{ headerShown: false }} />
      <Stack.Screen name='Fruits' component={Friuts} options={{ headerShown: false }} />
      <Stack.Screen name='Cart' component={ShoopingCart} options={{ headerShown: false }} />  
      <Stack.Screen name='Product' component={ProductDetial} options={{ headerShown: false }} />  
      <Stack.Screen name='DeliveryAdress' component={DelhiveryAddess} options={{ headerShown: false }} />  
      <Stack.Screen name='PaymentSuccess' component={PaymentSuccess} options={{ headerShown: false }} />  
      <Stack.Screen name='Package' component={Package} options={{ headerShown: false }} />  
    </Stack.Navigator>
  )
}

export default StackNavigator