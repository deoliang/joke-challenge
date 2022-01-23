import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Joke from '../screens/Joke';
import TabNav from './TabNav';

const Stack = createStackNavigator()



//defining the Stack Navigator component whose children are the bottom tab navigator, and the joke screen
const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Root Stack" component={TabNav} />
            <Stack.Screen name="Joke Delivery" component={Joke} />
        </Stack.Navigator>
    )
};

export default StackNav;