import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/components/TabNavigation';
import LoginStackNavigator from './src/components/LoginStackNavigator';

const AuthFlow = () => {
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        console.log(auth)
    });
    return (
        <NavigationContainer>
            {!auth.isLogin ? <LoginStackNavigator /> : <TabNavigation />}
        </NavigationContainer>
    );
};

export default AuthFlow;