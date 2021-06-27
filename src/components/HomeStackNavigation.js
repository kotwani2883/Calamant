import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../views/HomePage';
import ProfileScreen from '../views/ProfileScreen';
import BubbleWrapGame from '../views/BubbleWrapGame';
import ChatWithZullu from '../views/ChatWithZullu';
import DrawingPad from '../views/DrawingPad';
import EditProfile from '../views/EditProfile';
import CreateMeme from '../views/MemeCreator';
import Meditate from '../views/Meditate'

import TherapistProfile from '../views/TherapistProfileScreen';

const Stack = createStackNavigator();
const HomeStackNavigation = props => {
    console.log(props);
    console.log('Success');
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={HomePage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='EditProfile'
                component={EditProfile}
                options={{ headerShown: false }}
            />




            <Stack.Screen
                name='Chat with Zullu'
                component={ChatWithZullu}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='TherapistProfile'
                component={TherapistProfile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='BubbleWrapGame'
                component={BubbleWrapGame}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Meditate'
                component={Meditate}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='CreateMeme'
                component={CreateMeme}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>
    );
};

export default HomeStackNavigation;