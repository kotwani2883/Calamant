import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView, Linking } from 'react-native';
import BrickList from 'react-native-masonry-brick-list';
import { Button } from 'react-native-elements';
import { updateConcerns } from '../redux/actions/profile';
import { colors } from '../data/theme'
import axios from 'axios';
import { connect, useSelector } from 'react-redux';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';


const HomeScreen = props => {
    const auth = useSelector((state) => state.auth)

    console.log('Home');
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.helloText}>Heya !  </Text>
                        <Text style={styles.nameText}>{auth.profile.name} </Text>

                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('Profile');
                        }}
                    >
                        <View style={styles.avatar}>
                            <Image
                                source={require('../../assets/Avatar.png')}
                                style={{ width: 60, height: 60 }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.chatbotContainer}>
                    <View style={styles.botContainer}>
                        <Image
                            source={require('../../assets/bot.gif')}
                            style={{ width: 180, height: 100 }}
                        />
                    </View>
                    <View style={styles.botContent}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                marginBottom: 10,
                                color: colors.secondary
                            }}
                        >
                            I'M Zullu
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('Chat with Zullu', {

                                });
                            }}
                        >
                            <View style={styles.button}>
                                <View style={styles.button}>
                                    <Text
                                        style={{
                                            color: colors.white,
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        Talk With Me
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tracksContainer}>

                    <Text style={styles.trackTitle}>Games to relax your mind!</Text>
                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL("https://sudoku.com/")
                            }}>
                                <Card style={{ padding: 0, paddingRight: 40 }}>
                                    <Card.Content>
                                        <Title>Let's Play!</Title>
                                    </Card.Content>
                                    <Card.Cover source={{ uri: 'https://media.giphy.com/media/l41Yy6jvn3BXYDRu0/source.gif' }} style={{ width: 160, borderRadius: 10 }} />

                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL("https://www.arkadium.com/free-online-games/crosswords/");
                            }}>
                                <Card style={{ padding: 0, paddingRight: 40 }}>
                                    <Card.Content>
                                        <Title>Let's Play!</Title>
                                    </Card.Content>
                                    <Card.Cover source={{ uri: 'https://media.giphy.com/media/l2JedalQ5mctBiJtC/giphy.gif' }} style={{ width: 160, borderRadius: 10 }} />

                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate('BubbleWrapGame')
                            }}>
                                <Card style={{ padding: 0, paddingRight: 40 }}>
                                    <Card.Content>
                                        <Title>Let's Play!</Title>
                                    </Card.Content>
                                    <Card.Cover source={{ uri: 'https://media.tenor.com/images/89eaa43774e143008e081adac58933fc/tenor.gif' }} style={{ width: 160, borderRadius: 10 }} />

                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL("https://coloritbynumbers.com/online");
                            }}>
                                <Card style={{ padding: 0, paddingRight: 40 }}>
                                    <Card.Content>
                                        <Title>Let's Play!</Title>
                                    </Card.Content>
                                    <Card.Cover source={{ uri: 'https://media.giphy.com/media/l0K45rW3ygXmVgsz6/giphy.gif' }} style={{ width: 160, borderRadius: 10 }} />

                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL("https://supermariorun.com/en-gb/index.html");
                            }}>
                                <Card style={{ padding: 0, paddingRight: 40 }}>
                                    <Card.Content>
                                        <Title>Let's Play!</Title>
                                    </Card.Content>
                                    <Card.Cover source={{ uri: 'https://media.giphy.com/media/fAnEC88LccN7a/giphy.gif' }} style={{ width: 160, borderRadius: 10 }} />

                                </Card>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Do Meditate</Text>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('Meditate', {

                            });
                        }}
                    >
                        <Card >
                            <Card.Content>
                                <Title>Let's Meditate</Title>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://media.giphy.com/media/kvCYXVnXQdecE/giphy.gif' }} style={{ width: 200, borderRadius: 10 }} />

                        </Card>
                    </TouchableOpacity>

                </View>

            </View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('CreateMeme');
                }}
            >
                <View style={styles.createMemeContainer}>
                    <Text style={{ color: colors.white, fontSize: 40 }}>Create a Meme</Text>
                </View>
            </TouchableOpacity>


        </ScrollView >
    )
}
const mapStateToProps = state => ({
    auth: state.auth,

});
export default connect(mapStateToProps, { updateConcerns })(
    HomeScreen
);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#FFEFD5'
    },
    header: {
        flexDirection: 'column',
        textAlign: 'left',
        borderBottomRightRadius: 150,
        justifyContent: 'flex-end',
        backgroundColor: '#0cbaba',
        paddingBottom: 5,
        elevation: 10
    },
    centeredView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },


    helloText: {
        fontSize: 30,
        fontWeight: 'bold',
        flexDirection: 'column',
        color: '#FFEFD5',
        marginTop: 40,
        marginLeft: 20
    },
    nameText: {
        fontSize: 20,
        marginLeft: 40,
        flexDirection: 'column',
        color: '#FFEFD5'
    },
    createMemeContainer: {

        backgroundColor: colors.black,

        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 10,
        width: 70,
        height: 70,
        borderRadius: 90,
        marginRight: 10,

        marginLeft: 20
    },
    chatbotContainer: {
        margin: 10,
        marginTop: 0,
        borderStyle: 'solid',
        borderColor: '#EFEFEF',
        borderRadius: 20,
        borderBottomWidth: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    botContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    botContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 150,
        height: 40,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },

    tracksContainer: {
        marginVertical: 10,
        padding: 10,
        paddingTop: 0,
        paddingLeft: 20,
        position: 'relative'
    },
    trackTitle: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    track: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
        position: 'relative'
    },
    trackContent: {
        width: 150,
        height: 150,
        backgroundColor: 'black',
        borderRadius: 10,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: 10,
        paddingBottom: 10
    },
    trackImage: {
        opacity: 1
    },
    done: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 15,
        flex: 1,
        color: colors.black
    },
    done_button: {
        borderRadius: 90,
        backgroundColor: colors.yellow,
        borderColor: colors.tertiary,
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
        width: 120
    },

});