import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import * as firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';


import { globalStyles } from '../utils/globalStyles'
import { Button } from 'react-native-elements'


// let oldCoverImageURL = "https://www.denofgeek.com/wp-content/uploads/2019/03/captain-marvel-new-poster.jpg?resize=768%2C432"

export default function CreateBlog({ navigation, route }) {

   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')
   const [coverImg, setCoverImg] = useState(null)

   const dbh = firebase.firestore();

   let id = route.params?.id


   useEffect(() => {
      if(id) {
         getBlogData(id)
      }
   }, [id])

   function onUploadImage() {
      launchImageLibrary({
         mediaType: 'photo',
      }, (data) => setCoverImg(data.assets[0].uri))
   }

   let downloadURL;
   function onUploadChoosedImage1(){
      downloadURL = "https://www.incimages.com/uploaded_files/image/1920x1080/getty_505023182_149431.jpg" 
   }
   function onUploadChoosedImage2(){
      downloadURL = "https://blog.univariety.com/wp-content/uploads/2014/08/motivational-goals.jpg"
   }
   function onUploadChoosedImage3(){
      downloadURL = "https://i.pinimg.com/originals/40/ae/7b/40ae7beb16824fee6d058f1a7d40631e.jpg"
   }

   function onCheck() {
      if(id) {
         onUpdate(id)
         return
      }
      onCreate()
   }

//    function getBlogData(id) {
//       dbh.collection('usersBlog')
//       .doc(uid)
//       .collection('blogs')
//       .doc(id)
//       .get()
//       .then((snapshot) => {
//          const data = snapshot.data()
//          setTitle(data.title)
//          setContent(data.content)
//          setCoverImg(data.coverImage)
//          oldCoverImageURL = data.coverImage
//       })
//    }

   // async function uploadCoverImg(id) {
   //    const splitPath = coverImg.split('/')
   //    const imageName = splitPath[splitPath.length-1]
   //    const reference = storage().ref(`/${id}/images/${imageName}`)
   //    const data =  await reference.putFile(coverImg)
   //    return await storage().ref(data.metadata.fullPath).getDownloadURL()
   // }

   async function onCreate() {
      if(!title && !content) {
         return false
      }
      navigation.navigate('JournalHome')

      try {
         
         dbh.collection('blogs')
         .add({
            title,
            content,
            coverImage: downloadURL
            // createdAt: firestore.FieldValue.serverTimestamp()
         })
      } catch(error) {
         console.log(error)
      }
   }

//    async function onUpdate(id) {
//       navigation.navigate('JournalHome')
//       try {
//          let downloadURL = oldCoverImageURL

//          if(oldCoverImageURL !== coverImg) {
//             downloadURL = await uploadCoverImg(uid)
//          }

//          dbh.collection('usersBlog')
//          .doc(uid)
//          .collection('blogs')
//          .doc(id)
//          .update({
//             title,
//             content,
//             coverImage: downloadURL,
//             lastUpdate: firestore.FieldValue.serverTimestamp()
//          })
//       } catch(error) {
//          console.log(error)
//       }
//    } 

   return (
      <ScrollView 
         style={globalStyles.primaryContainer}
         keyboardShouldPersistTaps={'always'}
      >
         <Text style={{ ...globalStyles.primaryText, margin:10, marginTop:15 }}>CREATE A BLOG</Text>
         <Text style={{ ...globalStyles.primaryText, margin:10 }}>Click tick when done -</Text>
         
         <View
            style={styles.inputContainer}
         >
            <Text style={styles.label}>Title</Text>
            <TextInput 
               style={styles.input}
               multiline={true}
               numberOfLines={2}
               value={title}
               onChangeText={(text) => setTitle(text)}
            />
         </View>

         <View
            style={styles.inputContainer}
         >
            <Text style={styles.label}>Content</Text>
            <TextInput 
               style={styles.input}
               multiline={true}
               numberOfLines={10}
               value={content}
               onChangeText={(text) => setContent(text)}
               underlineColorAndroid='transparent'
            />
         </View>

         <View style={{ flexDirection: 'row', margin:20, marginLeft:-8}}>
            <Image 
               style={styles.image}
               source={{ uri: coverImg }}
               resizeMode='cover'
           />
           <TouchableOpacity
               style={styles.touchabelBtn}
               onPress={onUploadChoosedImage1}
           >
              <Text style={globalStyles.btnText}>Soothing</Text>
           </TouchableOpacity>
           <TouchableOpacity
               style={styles.touchabelBtn}
               onPress={onUploadChoosedImage2}
           >
              <Text style={globalStyles.btnText}>Motivational</Text>
           </TouchableOpacity>
           <TouchableOpacity
               style={styles.touchabelBtn}
               onPress={onUploadChoosedImage3}
           >
              <Text style={globalStyles.btnText}>Wisdom</Text>
           </TouchableOpacity>
         </View>

         <FontAwesome 
            name='check-circle'
            color='black'
            size={50}
            style={styles.uploadBtn}
            onPress={onCheck}
         />
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   input: {
      borderWidth: 1,
      borderColor: 'gray',
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 2,
      padding: 10,
      textAlignVertical: 'top',
      fontSize: 16
      
   },
   label: {
      fontSize: 18,
      margin: 10,
      // fontFamily: 'Roboto-Regular',
      // fontFamily:'Arial',
   },
   touchabelBtn: {
      ...globalStyles.primaryTouchableBtn,
      // width: 200,
      // marginLeft:-5,
      marginHorizontal: 8,
      justifyContent: 'center',
      alignItems: 'center'
   },
   image: {
      width: 50,
      height: 50,
   },
   uploadBtn: {
      position: 'absolute',
      top: 10,
      right:100,
      marginTop: 50,
      shadowOffset: {
         width: 1,
         height: 2
      },
      shadowOpacity: 0.5,
      elevation: 10,
   }
})