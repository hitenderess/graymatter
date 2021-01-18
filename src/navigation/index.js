import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from '../components/Auth';
import VerifyOtp from '../components/VerifyOtp';

const Stack = createStackNavigator();

const RootNavigator = (props) => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Auth" component={Auth} />
                <Stack.Screen options={{ headerShown: false }} name="VerifyOtp" component={VerifyOtp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default RootNavigator;