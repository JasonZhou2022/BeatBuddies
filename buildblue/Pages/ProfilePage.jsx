import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ProfilePage(){
    
    const size = 150;

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Icon name="user" size={size} color="#00d0ff"/>
            </View>
            <View style={styles.left}>
                <Text style={styles.head}>Username:</Text>
                {/* <Text style={styles.head}>Password:</Text> */}
            </View>
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