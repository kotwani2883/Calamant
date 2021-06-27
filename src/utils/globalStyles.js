import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
   primaryInput: {
      width: '80%',
      margin: 10,
      borderBottomWidth: 0.8,
      borderBottomColor: 'gray'
   },
   primaryContainer: {
      backgroundColor: 'white',
      flex: 1,
   },
   headingText: {
      fontSize: 36,
      marginLeft: 25,
      // fontFamily:'Arial',
      // fontFamily: 'Roboto-Regular',
      color: 'rgba(0,0,0,0.7)'
   },
   primaryText: {
      fontSize: 22,
      // fontFamily:'Arial',
      // fontFamily: 'Roboto-Bold',  
      color: 'rgba(0,0,0,0.7)'

   },
   secondaryText: {
      fontSize: 18,
      // fontFamily:'Arial',
      // fontFamily: 'Roboto-Regular',
      letterSpacing: 0.1,
      color: 'rgba(0,0,0,0.7)'
   },
   primaryTouchableBtn: {
      padding: 7,
      backgroundColor: 'lightgray',
      borderRadius: 7,
      shadowColor: 'gray',
      shadowOffset: {
         width: 1,
         height: 2
      },
      shadowOpacity: 0.5,
      elevation: 5,
      backgroundColor: 'black'
   },
   btnText: {
      // fontFamily: 'Roboto-Bold',
      // fontFamily:'Arial',

      fontSize: 17,
      color: 'white',
      textAlign: 'center'
   },
   largeBtnText: {
      // fontFamily: 'Roboto-Bold',
      // fontFamily:'Arial',

      fontSize: 22,
      color: 'white',
      textAlign: 'center'
   }
})