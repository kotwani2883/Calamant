import React from 'react'
import { StyleSheet, Text, View, LogBox, Image } from 'react-native';
import ChatBot from 'react-native-chatbot';
import Constant from 'expo-constants';
import { colors } from '../data/theme'
import { connect, useSelector } from 'react-redux';
import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native'
LogBox.ignoreAllLogs();

const SmileyGif = () => {
  return (
    <View style={{ width: 100, height: 100, backgroundColor: 'transparent' }}>
      <Image
        source={{
          uri:
            'https://static.skaip.org/img/emoticons/180x180/f6fcff/smilerobot.gif'
        }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  )
};
const ChatWithZullu = () => {
  const auth = useSelector((state) => state.auth)
  const steps = [
    {
      id: '0',
      message: `Hey  ${auth.profile.name}!  , ! I am Zullu`,
      trigger: '1'
    },
    {
      id: '1',
      message: 'I was getting bored.Glad to See you here!!',
      trigger: '2'
    },
    {
      id: '2',
      message: 'How Can I help You??',
      trigger: '3'
    },
    {
      id: '3',
      options: [
        { value: 1, label: 'Need Motivation!', trigger: '5' },
        { value: 2, label: 'Cheer me up!!', trigger: '10' },
        { value: 3, label: 'Not Feeling Good!' },
        { value: 4, label: 'Day was not good!' },
        { value: 5, label: 'Feeling Happy today' }
      ]
    },
    {
      id: '5',
      message: 'Sure! I can help you get some',
      trigger: '6'
    },
    {
      id: '6',
      message:
        'I can give you some motivational quotes from successfull people.',
      trigger: '7'
    },
    {
      id: '7',
      message:
        '“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney.',
      trigger: '8'
    },
    {
      id: '8',
      options: [
        { value: 1, label: 'Another quote', trigger: '7' },
        { value: 2, label: 'Feeling motivated', trigger: '9' }
      ]
    },
    {
      id: '9',
      message: 'I am glad to know that. :)',
      trigger: '2'
    },
    {
      id: '10',
      message: 'I think a joke can help XP.',
      trigger: '11'
    },
    {
      id: '11',
      message:
        'A dad walks into his sons room and says,"Son I told you time after time," if you keep that up you\'re going to get blind. His son says, "dad I\'m over here',
      trigger: '12'
    },
    {
      id: '12',
      options: [
        { value: 1, label: 'Funny', trigger: '13' },
        { value: 2, label: 'Bad one', trigger: '14' }
      ]
    },
    {
      id: '13',
      message: 'I know XD.',
      trigger: '2'
    },
    {
      id: '14',
      message: 'Sorry. I will work on my sense of humour.',
      trigger: '2'
    }
  ];
  return (

    <View style={styles.container}>
      <ChatBot
        steps={steps}
        botAvatar={
          'https://i.pinimg.com/736x/fd/a1/3b/fda13b9d6d88f25a9d968901d319216a.jpg'
        }
        marginTop='40'
        botFontColor='#0cbaba'
        bubbleStyle={{ backgroundColor: 'colors.accent' }}
        optionFontColor='#0cbaba'
        optionBubbleColor='#FFEFD5'
        userBubbleStyle={{ backgroundColor: '#0cbaba' }}

        submitButtonStyle={{
          backgroundColor: colors.accent,
          color: colors.white
        }}
      />
    </View>
  )
}


export default ChatWithZullu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25

  }
});