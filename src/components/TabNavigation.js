import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Fontisto,
  FontAwesome5,
  Entypo,
  Feather,
  Ionicons
} from '@expo/vector-icons';
import HomeStackNavigator from './HomeStackNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../data/theme';
import TherapistStackNavigation from './TherapistStackNavigator'
import JournalStackNavigation from './JournalStackNavigator'

const Tab = createBottomTabNavigator();

const TabNavigation = props => {
  console.log(props);
  console.log("tab Navigation")
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Feather name='home' size={size} color={color} />;
          }
          else if (route.name === 'Journal'){
            return <Feather name='edit' size={size} color={color} /> ;
          }
          else if (route.name === 'Therapist') {
            return <Fontisto name='doctor' size={size} color={color} />;
          }
        }
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.white,
        inactiveTintColor: colors.white2,
        tabStyle: {
          padding: 8
        },
        style: {
          backgroundColor: '#0cbaba',
          marginTop: 0,
          borderTopWidth: 0,
          elevation: 10,
          height: 60
        },
        iconStyle: {
          margin: 8
        }
      }}
    >
      <Tab.Screen name='Home' component={HomeStackNavigator} />
      <Tab.Screen name='Journal' component={JournalStackNavigation} />
      <Tab.Screen name='Therapist' component={TherapistStackNavigation} />
    </Tab.Navigator>
  )
}

export default TabNavigation;

const styles = StyleSheet.create({});