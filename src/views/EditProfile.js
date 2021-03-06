import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput, RadioButton, HelperText, Checkbox, Button } from 'react-native-paper';
import { colors, sizes, fonts } from '../data/theme'
import { AntDesign, MaterialCommunityIcons, Feather, Entypo } from '@expo/vector-icons';
import { concerns } from '../data/concerns'
import { updateUser } from '../redux/actions/profile'
import { connect } from 'react-redux';

const Profile = (props) => {
    const auth = useSelector((state) => state.auth)
    const user = useSelector((state) => state.user)
    const [checked, setChecked] = useState(user.name);
    const [selectedConcerns, setSelectedConcerns] = useState(auth.profile.concerns);
    const [fullname, setFullname] = useState(user.name);
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState("9826428021");
    const [age, setAge] = useState(user.age);
    console.log(user.email);
    console.log("Edit")
    console.log(props)
    const Gender = (props) => {
        return (
            <RadioButton
                value={props} color={"#0cbaba"}
                status={checked === props ? 'checked' : 'unchecked'}
                onPress={() => setChecked(props)}
            />
        )
    }
    const submitHandler = () => {
        props.updateUser(fullname, email, phone, age, checked, selectedConcerns, auth.user._id);
    }
    return (
        <ScrollView style={{ backgroundColor: 'white', width: '100%' }}>
            <Text style={styles.profileText}>Edit Profile</Text>
            <View style={styles.background} >
                <AntDesign name="arrowleft" size={32} color="white" style={{ position: "absolute", top: 25, left: 20 }}
                    onPress={() => props.navigation.navigate('Profile')} />

                <View style={styles.dpCover} >
                    <Image style={{ width: 90, height: 90 }} source={require('../../assets/Avatar.png')} />
                </View>
                <Entypo name="camera" size={24} color={colors.secondary} style={styles.camera} />
                <KeyboardAvoidingView>
                    <View style={styles.inputBox}>
                        <AntDesign name="user" size={24} color={colors.secondary}
                            style={{ position: 'relative', left: 20 }} />
                        <TextInput style={styles.input} theme={{ colors: { primary: colors.secondary } }}
                            underlineColor={colors.secondary} selectionColor={colors.secondary} mode="flat" dense={true}
                            label="Fullname" value={fullname}
                            onChangeText={text => setFullname(text)}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <MaterialCommunityIcons name="email-outline" size={24} color={colors.secondary}
                            style={{ position: 'relative', left: 20 }} />
                        <TextInput style={styles.input} theme={{ colors: { primary: colors.secondary } }}
                            underlineColor={colors.secondary} selectionColor={colors.secondary} mode="flat" dense={true}
                            label="Email" value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 5, paddingBottom: 5 }}>
                        <Text>Male: </Text>
                        {Gender('male')}
                        <Text>Female: </Text>
                        {Gender('female')}
                        <Text>Other: </Text>
                        {Gender('other')}
                    </View>
                    <View style={styles.inputBox2}>
                        <Feather name="phone" size={24} color={colors.secondary}
                            style={{ position: 'relative', left: 20 }} />
                        <TextInput style={{ marginRight: 15, width: "45%", paddingLeft: 22, backgroundColor: 'transparent', }} theme={{ colors: { primary: colors.secondary } }}
                            underlineColor={colors.secondary} selectionColor={colors.secondary} mode="flat" dense={true}
                            label="Phone no." value={phone}
                            onChangeText={text => setPhone(text)} keyboardType='numeric'
                        />
                        <MaterialCommunityIcons name="timer-sand-empty" size={24} color={colors.secondary}
                            style={{ position: 'relative', left: 20 }} />
                        <TextInput style={{ width: "30%", paddingLeft: 22, backgroundColor: 'transparent', }} theme={{ colors: { primary: colors.secondary } }}
                            underlineColor={colors.secondary} selectionColor={colors.secondary} mode="flat" dense={true}
                            label="Age" value={age}
                            onChangeText={text => setAge(text)} keyboardType='numeric'
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Button mode="contained" color='#0cbaba' style={{ width: '60%', borderRadius: 20, marginTop: 20 }}
                            onPress={submitHandler}>
                            <Text style={{ color: colors.white }}>Save Changes</Text>
                        </Button>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    )

}
const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { updateUser })(Profile)




const styles = StyleSheet.create({
    background: {
        flex: 1,

        borderBottomEndRadius: 180,
        // borderBottomStartRadius:300, 
        width: '100%',
        height: 150,
        marginBottom: 30,
        marginTop: 300,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    profileText: {
        position: 'relative',
        top: 50,
        marginLeft: 110,
        color: "#000000",
        fontSize: 24,
        fontWeight: '700',
        alignItems: 'center'
    },
    dpCover: {
        width: 100,
        height: 100,
        position: 'relative',
        // left:'35%',
        top: '20%',
        borderRadius: 62,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    camera: {
        position: 'absolute',
        top: '105%'
    },
    inputBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    input: {
        marginRight: 15,
        width: "90%",
        paddingLeft: 22,
        backgroundColor: 'transparent',
    },
    problemText: {
        paddingTop: 20,
        paddingLeft: 15,
        paddingBottom: 8,
        fontSize: fonts.title.fontSize,
        fontWeight: '600',
        color: colors.secondary,
        display: 'flex',
        textAlign: 'left'

    },
    problemsBox: {
        display: 'flex',
        marginLeft: 20,
        marginRight: 15,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    problemsPart: {
        width: '50%'
    },
    checkbox: {
        width: '100%',
        // paddingLeft:15,
        paddingVertical: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});