import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LoginPage from './LoginPage';
import Profile from './Profile';
import Home from './Home';
import Package from './Package';
import CostumDrawer from './CostumDrawer';
import Chat from './Chat';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const DrawerNavigator = () => {
    const Drawer=createDrawerNavigator();
    const Navigation=useNavigation();
  return (
   <Drawer.Navigator initialRouteName='Profile'
   drawerContent={props=><CostumDrawer{...props}/>}
   screenOptions={{
     headerShown:false,
     drawerLabelStyle:{fontFamily:"Roboto-Midium",fontSize:15},
     drawerActiveBackgroundColor:"#128c33",
     drawerActiveTintColor:"white",
     drawerInactiveTintColor:"#333"}}
   >
    <Drawer.Screen name='Profile' component={Profile}
      options={{
        drawerIcon:({colore})=>(
          <Icon name="user" size={27}/>
        )
      }}
    />
    <Drawer.Screen name='Home' component={Home}
      options={{
        drawerIcon:({colore})=>(
          <Icon name="home" size={27}/>
        )
      }}
    />
    <Drawer.Screen name='Log out' component={()=>{Navigation.navigate("Login")}}
        options={{
          drawerIcon:({colore})=>(
            <Icon name="sign-out-alt" size={27}/>
          )
        }}
    />
   <Drawer.Screen name='Chat' component={Chat}
     options={{
      drawerIcon:({colore})=>(
        <Icon name="rocketchat" size={27}/>
      )
     }}
   />
   </Drawer.Navigator>
  )
}

export default DrawerNavigator