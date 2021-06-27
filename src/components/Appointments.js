import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { fonts } from '../data/theme'
import { useNavigation } from '@react-navigation/native';

const Appointments = (props) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        return (
            <View style={styles.appointment}>
                <Image
                    source={{
                        uri: item.img
                    }}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 80
                    }}
                />
                <View style={{ padding: 6, }}>
                    <Text style={{ fontSize: 15 }}>{item.name}</Text>
                    <Text style={{ fontSize: 12 }}>
                        {item.specialisation}
                    </Text>
                    <Text style={{ fontSize: 12 }}>
                        {item.date} | {item.time}
                    </Text>
                </View>

                <View
                    style={{
                        alignSelf: 'flex-end',
                        flexDirection: 'row'
                    }}
                >
                    <View style={{ padding: 5 }}>
                        <AntDesign name="rightcircle" size={24} color={'#d1edf2'}
                            onPress={() => navigation.navigate('TherapistProfile', { therapist: item })} />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.appoinmentsContainer}>
            <Text style={styles.heading}>
                {props.type} Appointments
            </Text>
            <View
                style={{
                    padding: 3,
                    width: '100%',
                    flexDirection: 'row'
                }}
            >
                <FlatList
                    data={props.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    style={{ flex: 1 }}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}



export default Appointments

const styles = StyleSheet.create({
    appoinmentsContainer: {
        padding: 10
    },
    appointment: {
        width: 300,
        height: 120,
        backgroundColor: '#f7fcfa',
        marginLeft: 15,
        borderRadius: 10,
        borderLeftColor: '#d1edf2',
        borderLeftWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: fonts.h3.fontSize,
        padding: 10,
        paddingTop: 20,
        color: '#A52A2A',
        fontWeight: '700'
    }
})