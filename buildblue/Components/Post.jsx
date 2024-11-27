import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Post(props) {

    const { width, height } = Dimensions.get('window');
    //style={[styles.container, {height: height * 0.25}]}
    return (
        <View style={styles.container}>
            <View style={styles.textLeftContainers}>
                <Text style={styles.textLeft}>{props.userLeft}</Text>    
            </View>
            <View style={styles.textLeftContainers}>
                <Text style={styles.textRight}>{props.userRight}</Text>
            </View>
            
            {/* <Text style={styles.textRight}>{props.userRight}</Text> */}
        </View>
    )
}

const debug = false;
const fontSize = 30;

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor: '#00d0ff',
        borderRadius: 10,
        margin: 20,
        paddingTop: 10,
        paddingBottom: 10,
        //width: '100%'
        //height: height * 0.5,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
        //width: "100%"
    },
    textLeftContainers: {
        flexDirection: 'row',
        borderWidth: debug ? 5 : 0,
        borderColor: "white"
    },
    textRightContainers: {
        flexDirection: 'row',
        //alignItems: 'right',
        borderWidth: debug ? 5 : 0,
        borderColor: "white"
    },
    textLeft: {
        borderWidth: debug ? 5 : 0,
        borderColor: debug ? "#000" : null,
        flex: 1,
        color: '#00d0ff',
        fontSize: fontSize,
        textAlign: 'left',
    },
    textRight: {
        flex: 1,
        color: '#00d0ff',
        fontSize: fontSize,
        textAlign: 'right'
    }
});