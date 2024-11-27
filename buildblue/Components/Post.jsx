import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import AvatarBubble from './AvatarBubble';
import { Avatar } from './ui/avatar';
import { VStack } from "@/Components/ui/vstack";
import { HStack } from "@/Components/ui/hstack";
import { Box } from "@/Components/ui/box";
import GlobalStyles from '../Components/GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';

export default function Post({userLeft = "Jason", userRight = "Amy", nameLeft = userLeft, nameRight = userRight}) {

    const { width, height } = Dimensions.get('window');
    //style={[styles.container, {height: height * 0.25}]}
    return (
        <Box style={[styles.debug, styles.container]}>
            <HStack style={styles.left}>
                <AvatarBubble size="lg" name={nameLeft} style={[styles.avatarLeft, styles.debug]}/>
                <Text style={[GlobalStyles.white, styles.name]}>{userLeft}</Text>
            </HStack>
            <HStack style={styles.right}>
                <Text style={[GlobalStyles.white, styles.name]}>{userRight}</Text>
                <AvatarBubble size="lg" name={nameRight} style={[styles.avatarRight, styles.debug]}/>
            </HStack>

            <LinearGradient
                colors={['#40C9FF', '#E81CFF']}
                style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, styles.debug, styles.gradient]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 1.5 }}
            >
            </LinearGradient>

            <Pressable style={[styles.pressable]}>
                {/* <Text style={[GlobalStyles.white]}>Example</Text> */}
            </Pressable>
        </Box>
    )
}

const { width, height } = Dimensions.get('window');
const debug = false;
const fontSize = 30;

const styles = StyleSheet.create({
    debug: {
        borderWidth: debug ? 5 : 0,
        borderColor: debug ? 'white' : 0,
    },
    pressable: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '130%',
        borderRadius: 20,
        zIndex: 1
    },
    margin10: {
        marginTop: height * 0.1
    },
    avatarLeft: {
        paddingLeft: width * 0.03,
    },
    avatarRight: {
        paddingRight: width * 0.03,
    },
    gradient: {
        position: 'absolute',
        borderRadius: 20,
        //flex: 1,
        width: '100%',
        height:'130%',
        zIndex: -1,
    },
    container: {
        //backgroundColor: 'black',
        //borderWidth: 5,
        //borderRadius: 10,
        borderColor: 'white',
        marginVertical: height * 0.02,
        paddingVertical: height * 0.02,
        //paddingHorizontal: width * 0.01,
        width: '95%'
    },
    name: {
        fontSize: fontSize,
        fontWeight: 500,
        marginHorizontal: width * 0.03,
    },
    white: {
        color: 'white'
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})

// const styles = StyleSheet.create({
//     container: {
//         borderWidth: 5,
//         borderColor: '#00d0ff',
//         borderRadius: 10,
//         margin: 20,
//         paddingTop: 10,
//         paddingBottom: 10,
//         //width: '100%'
//         //height: height * 0.5,
//         alignItems: 'center',
//         flexDirection: 'column',
//         justifyContent: 'space-between'
//         //width: "100%"
//     },
//     textLeftContainers: {
//         flexDirection: 'row',
//         borderWidth: debug ? 5 : 0,
//         borderColor: "white"
//     },
//     textRightContainers: {
//         flexDirection: 'row',
//         //alignItems: 'right',
//         borderWidth: debug ? 5 : 0,
//         borderColor: "white"
//     },
//     textLeft: {
//         borderWidth: debug ? 5 : 0,
//         borderColor: debug ? "#000" : null,
//         flex: 1,
//         color: '#00d0ff',
//         fontSize: fontSize,
//         textAlign: 'left',
//     },
//     textRight: {
//         flex: 1,
//         color: '#00d0ff',
//         fontSize: fontSize,
//         textAlign: 'right'
//     }
// });