import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import JournalHomePage from '../views/JournalHomePage';
import Blog from '../views/Blog';
import CreateBlog from '../views/CreateBlog';


const Stack = createStackNavigator();
const JournalStackNavigation = () => {
    
    return (
        <Stack.Navigator initialRouteName='JournalHome'>
            <Stack.Screen
                name='JournalHome'
                component={JournalHomePage}
                options={{ headerShown: false }} 
            />
            <Stack.Screen
                name='Blog'
                component={Blog}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='CreateBlog'
                component={CreateBlog}
                options={{ headerShown: false }}
            />


</Stack.Navigator>
    );
};

export default JournalStackNavigation;



