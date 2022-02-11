import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'

const Stack = createStackNavigator()

const MainStack = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen component={Detail} name="Detail" />
            <Stack.Screen component={Home} name="Home" />
        </Stack.Navigator>
    )
}

export default MainStack