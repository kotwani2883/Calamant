import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image, ScrollView } from 'react-native';
import { Chip } from 'react-native-paper';
import { AntDesign, MaterialIcons, Feather, FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { connect, useSelector } from 'react-redux';
import { concerns } from '../data/concerns';
import { colors, fonts } from '../data/theme'
import pastData from '../data/PastData'
import futureData from '../data/futureData'
import Appointments from '../components/Appointments'
const ProfileScreen = (props) => {
    console.log("Profile")
    console.log(props);
    const auth = useSelector((state) => state.auth)
    const [selectedConcerns, setSelectedConcerns] = useState(auth.profile.concerns);

    console.log(auth);
    return (
        <ScrollView style={styles.container}>

            <View style={styles.top}>
                <AntDesign name="arrowleft" size={32} color={'#000000'}
                    onPress={() => props.navigation.navigate('Home')} />

                <Text style={styles.profileText}>Profile Page</Text>
                <FontAwesome5 name="edit" size={24} color={"#000000"}
                    onPress={() => props.navigation.navigate('EditProfile')} />
            </View>
            {/* Edit Profile to be added */}
            {/*Image Added */}
            <View style={styles.dpCover}>
                <Image style={{ width: 100, height: 100, borderRadius: 45 }} source={require('../../assets/Avatar.png')} />
            </View>

            {/*Name*/}
            <Text style={styles.name}>{auth.profile.name}</Text>




            <View style={styles.info}>
                {/*Gender */}
                <View style={styles.infoBox}>
                    <MaterialCommunityIcons name="gender-male-female" size={20} color={'#000000'} />
                    <Text style={styles.otherInfo}>{auth.profile.gender}</Text>
                </View>
                {/*Age */}
                <View style={styles.infoBox}>
                    <MaterialCommunityIcons name="timer-sand-empty" size={20} color={'#000000'} />
                    <Text style={styles.otherInfo}>{auth.profile.age} Years Old</Text>
                </View>

                {/*Phone Number*/}
                <View style={styles.infoBox}>
                    <MaterialCommunityIcons name="phone" size={20} color={'#000000'} />
                    <Text style={styles.otherInfo}>{auth.profile.phone_no} 1234567890 </Text>
                </View>

                {/*email*/}
                <View style={styles.infoBox}>
                    <MaterialCommunityIcons name="email-outline" size={20} color={'#000000'} />
                    <Text style={styles.otherInfo}> {auth.user.email} </Text>
                </View>
            </View>
            {/*Concerns*/}

            <View style={{ position: 'relative', top: 60 }}>
                <Appointments data={futureData} type="Future" />
            </View>
            <View style={{ position: 'relative', top: 60, marginBottom: 70 }}>
                <Appointments data={pastData} type="Past" />
            </View>

        </ScrollView >
    )

}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',

    },
    background: {
        backgroundColor: '#FFEFD5',
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'column'
        //   borderBottomEndRadius:100
    },
    top: {
        padding: 20,
        paddingTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileText: {
        marginTop: 20,
        marginBottom: 0,
        marginRight: 85,
        position: 'relative',
        alignItems: 'center',
        color: "#8B0000",
        justifyContent: 'center',
        fontSize: fonts.h1.fontSize,
        fontWeight: 'bold'
    },
    dpCover: {
        width: 110,
        height: 110,
        position: 'relative',
        alignSelf: 'center',
        top: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    info: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'row'
    },
    name: {
        paddingTop: 30,
        marginLeft: 170,
        fontSize: fonts.title.fontSize,
        fontWeight: 'bold',
        color: '#000000'
    },
    otherInfo: {
        paddingBottom: 5,
        paddingLeft: 5,
        // fontStyle:'italic'
    },
    concernContainer: {
        margin: 10,
        paddingBottom: 10,
        position: 'relative',
        top: 20,



    },
    concernTitle: {
        textAlign: "center",
        padding: 10,
        fontSize: fonts.title.fontSize,
        color: '#8B0000'
    },
    chip: {
        margin: 5,
        backgroundColor: '#d1edf2',
    }
});