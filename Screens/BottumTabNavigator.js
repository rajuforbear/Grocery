import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator';
import Home from './Home';
import Favourite from './Favourite';
import Notification from './Notification';
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Package from './Package';

const BottumTabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>

            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='home' size={22} color={color} />
                    )
                }}
            />

            <Tab.Screen name="profile" component={DrawerNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='user' size={22} color={color} />
                    )
                }}
            />

            <Tab.Screen name='Favourite' component={Favourite}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='heart' size={22} color={color} />
                    )
                }}

            />
            <Tab.Screen name="Notification" component={Notification}

                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="notifications-outline" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Order" component={Package} 
               options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="shopping-bag" size={25} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    )
}

export default BottumTabNavigator