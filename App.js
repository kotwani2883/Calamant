import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './src/components/TabNavigation';
import { Provider } from 'react-redux';

// import * as firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5pKnswQZq7uffQ77TbimHnsGYU8TLFK8",
  authDomain: "calmant-95a55.firebaseapp.com",
  projectId: "calmant-95a55",
  storageBucket: "calmant-95a55.appspot.com",
  messagingSenderId: "618221420883",
  appId: "1:618221420883:web:05b4890f04712ba80561a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


import store from './src/redux/store';
import ChatWithZullu from './src/views/ChatWithZullu'
import HomeScreen from './src/views/HomePage';
import SignUp from './src/views/SignUp'
import AuthFlow from './AuthFlow';
export default function App() {
  console.log("App")

  return (

    < Provider store={store} >
      <AuthFlow />
    </Provider >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
