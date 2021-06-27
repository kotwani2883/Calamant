import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, ToastAndroid
} from 'react-native';


import { connect } from 'react-redux';
import { login } from '../redux/actions/auth'

const Login = props => {
  const [state, setState] = useState({
    email: '',//Initial State
    password: ''
  });
  const handleLogin = () => {
    if (state.password.length < 6) {
      ToastAndroid.show(
        'Password must contain 6 characters',
        ToastAndroid.SHORT
      );
      return;
    }

    props.login({ ...state });
    console.log('after-register');
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/Login.jpg')}
            style={{
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').width
            }}
          />
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.headerText}>Login</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Email'}
            value={state.email}
            onChangeText={text => {
              setState({
                ...state,
                email: text
              });
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Password'}
            value={state.password}
            onChangeText={text => {
              setState({
                ...state,
                password: text
              });
            }}
            secureTextEntry={true}
          />

          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.already}>Don't have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin} >
            <View style={styles.submitButton}>
              <Text style={styles.submitText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  )
}

export default connect(null, { login })(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,

  },
  signUpContainer: {

    flex: 1,
    position: 'relative',

    top: -10
  },
  textInput: {
    borderRadius: 50,
    margin: 10,
    height: 40,

    elevation: 1,
    padding: 10,

  },
  radioButton: {
    flexDirection: 'row',
    paddingLeft: 20
  },

  submitButton: {
    alignSelf: 'center',
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',

    height: 40,
    borderRadius: 60
  },
  submitText: {

    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2
  },
  headerText: {

    fontSize: 40,
    textTransform: 'uppercase',
    padding: 10,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  already: {
    alignSelf: 'flex-end',
    paddingRight: 30,
    paddingBottom: 20,

  }
});


