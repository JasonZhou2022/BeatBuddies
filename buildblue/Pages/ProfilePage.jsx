import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AvatarBubble from '../Components/AvatarBubble'

export default function ProfilePage(){
    
    const defaultLink = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    const size = 150;

    return (
        <View>
            <AvatarBubble uri = {defaultLink}/>
        </View>
    )
}

const debug = true;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: debug ? 'white' : null,
        borderWidth: debug ? 5 : 0,
        justifyContent: 'center'
    },
    head: {
        color: 'white',
        fontSize: 50
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: debug ? 'white' : null,
        borderWidth: debug ? 5 : 0,
    },
    icon: {
        
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        borderColor: debug ? 'white' : null,
        borderWidth: debug ? 5 : 0,
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
})