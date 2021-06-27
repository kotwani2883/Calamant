import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../views/Login';
import SignupScreen from '../views/SignUp';

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='SignUp' component={SignupScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default LoginStackNavigator;