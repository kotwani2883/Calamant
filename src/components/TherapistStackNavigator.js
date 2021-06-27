import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();
import TherapistScreen from '../views/TherapistHomeScreen';
import TherapistProfileScreen from '../views/TherapistProfileScreen';
import TherapistHomeScreen from '../views/TherapistHomeScreen';
import Schedule from '../views/Schedule';


const TherapistStackNavigation = () => {
    return (
        <Stack.Navigator intialRouteName='TherapistHome'>
            <Stack.Screen
                name='TherapistHome'
                component={TherapistHomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Therapist'
                component={TherapistScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='TherapistProfile'
                component={TherapistProfileScreen}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name='Schedule'
                component={Schedule}
                options={{ headerShown: false }}

            />
        </Stack.Navigator>
    )
};

export default TherapistStackNavigation;