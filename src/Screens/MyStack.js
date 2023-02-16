import React from "react"
import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./Login";
import Profile from "./Profile";


const Stack = createStackNavigator();
const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MyStack