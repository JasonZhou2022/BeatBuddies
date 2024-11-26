import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Post(props) {

    const { width, height } = Dimensions.get('window');
    //style={[styles.container, {height: height * 0.25}]}
    return (
        <View style={styles.container}>
            <Text style={styles.textLeft}>{props.userLeft}</Text>
            <Text style={styles.textRight}>{props.userRight}</Text>
        </View>
    )
}

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
        alignItems: 'center'
    },
    text: {
        color: '#00d0ff',
        fontSize: 50,
        textAlign: "center"
    }
});