import React, { useState, useEffect } from 'react'; import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid
} from 'react-native';

import { RadioButton } from 'react-native-paper';
import { register } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const SignUp = props => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    fullName: '',
    email: '',
    age: null,
    gender: '',
    password: '',
    password2: ''
  });
  const handleSignUp = () => {
    if (state.fullName === '') {
      ToastAndroid.show('Full Name is required', ToastAndroid.SHORT);
      return;
    }

    if (
      state.age === null ||
      state.age === '' ||
      parseInt(state.age) <= 0 ||
      parseInt(state.age) >= 201
    ) {
      ToastAndroid.show('Age is invalid', ToastAndroid.SHORT);
      return;
    }

    if (state.gender === '') {
      ToastAndroid.show('Please select gender', ToastAndroid.SHORT);
      return;
    }

    if (state.password.length < 6) {
      ToastAndroid.show(
        'Password must contain 6 characters',
        ToastAndroid.SHORT
      );
      return;
    }

    if (state.password !== state.password2) {
      ToastAndroid.show('Password does not match', ToastAndroid.SHORT);
      return;
    }

    console.log('before-register');

    props.register({ name: state.fullName, ...state });
    console.log('after-register');
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={StyleSheet.container}>
        <View>
          <Image
            source={require('../../assets/Signup.jpg')}
            style={{
              width: Dimensions.get('screen').width,
              height: 400
            }}
          />

        </View>
        <View style={StyleSheet.signUpcontainer}>
          <Text style={styles.headerText}>Signup</Text>
          <TextInput style={styles.textInput}
            placeholder={"Full Name"}
            value={state.fullName}
            onChangeText={text =>
              setState({
                ...state,
                fullName: text
              })
            }
          />
          <TextInput style={styles.textInput}
            placeholder={"Email"}
            value={state.email}
            onChangeText={text => {
              setState({
                ...state,
                email: text
              });
            }}
          />
          <TextInput style={styles.textInput}
            placeholder={"Age"}
            keyboardType='numeric'
            value={state.age}
            onChangeText={text => {
              setState({
                ...state,
                age: text
              });
            }}
          />

          <View style={styles.radioButton}>
            <View style={styles.radio}>
              <Text>Male</Text>
              <RadioButton
                value='male'
                status={state.gender === 'male' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setState({
                    ...state,
                    gender: 'male'
                  });
                }}
              />
            </View>
          </View>
          <View style={styles.radioButton}>
            <View style={styles.radio}>
              <Text>Female</Text>
              <RadioButton
                value='female'
                status={state.gender === 'female' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setState({
                    ...state,
                    gender: 'female'
                  });
                }}
              />

            </View>
          </View>
          <View style={styles.radioButton}>
            <View style={styles.radio}>
              <Text>Others</Text>
              <RadioButton
                value='others'
                status={state.gender === 'others' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setState({
                    ...state,
                    gender: 'others'
                  });
                }}
              />

            </View>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder={'Phone Number'}

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
          <TextInput
            style={styles.textInput}
            placeholder={'Confirm Password'}
            value={state.password2}
            onChangeText={text => {
              setState({
                ...state,
                password2: text
              });
            }}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Login');
            }}

          >
            <Text style={styles.already}>Already have an account?</Text>
          </TouchableOpacity >

          <TouchableOpacity onPress={handleSignUp}>
            <View style={styles.submitButton}>
              <Text style={styles.submitText}>Signup</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}

export default connect(null, { register })(SignUp);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',

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
    paddingLeft: 20,
    width: '100%'
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  submitButton: {
    alignSelf: 'center',
    width: 150,
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
    paddingRight: 20,
    paddingBottom: 10,

  }
});


