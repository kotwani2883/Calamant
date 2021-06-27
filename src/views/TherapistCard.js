import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors, sizes, fonts } from '../data/theme'
import { useNavigation } from '@react-navigation/native';


const TherapistCard = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} />
                </View>

                <View>
                    <Text style={styles.name}>{props.data.name}</Text>
                    <Text style={styles.spec}>{props.data.specialisation}</Text>
                </View>
            </View>
            <View style={styles.bookContainer}>
                <Text style={styles.bookText}>Book Appointment</Text>
                <View>
                    <AntDesign name="rightcircle" size={28} color={'#505050'}
                        onPress={() => navigation.navigate('TherapistProfile', { therapist: props.data })} />
                </View>
            </View>
        </View>

    );
};

export default TherapistCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#0cbaba',
        borderLeftWidth: 8,
        borderRadius: 15,
        // backgroundColor:colors.lightGrey
    },
    infoContainer: {
        paddingVertical: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgContainer: {
        width: '30%'
    },
    img: {
        width: 60,
        height: 60
    },
    bookContainer: {
        marginHorizontal: 10,
        borderTopColor: colors.accent,
        borderTopWidth: 2,
        paddingVertical: 5,
        width: '93%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: fonts.header.fontSize,
        fontWeight: 'bold',
        color: '#000000',
        paddingVertical: 7
    },
    spec: {
        fontStyle: 'italic'
    },
    bookText: {
        color: '#0cbaba',
        fontWeight: '700',
    }
});