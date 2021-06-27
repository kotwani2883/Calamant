import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { colors, sizes, fonts } from '../data/theme'




const Meditate = (props) => {
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 30, marginTop: 80, textAlign: 'center', marginLeft: 135 }} >Meditate</Text>

                    <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 135 }} >10 min of Peace</Text>
                </View>

            </View>
            <View style={styles.PlayButtons}>
                <Image source={require('../../assets/FastForward.png')} style={{ marginLeft: 50, height: 60, width: 60 }} />
                <Image source={require('../../assets/Play_Button.png')} style={{ marginLeft: 30, marginRight: 40, height: 80, width: 80 }} />

                <Image source={require('../../assets/Slow.png')} style={{ height: 60, width: 40 }} />
            </View>

            <View style={styles.progress}>
                <Image source={require('../../assets/ProgressBar.png')} style={{ height: 100, width: 300 }} />
            </View>

        </View>
    )
}
export default Meditate;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    header: {

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    songArea: {
        alignItems: 'center',
        marginTop: '80'
    },
    PlayButtons: {

        flexDirection: 'row',
        marginTop: 200,
        marginRight: 70,


    },
    progress: {
        marginTop: 30,
        marginLeft: 40,
        height: 100,
        width: 100
    }
})