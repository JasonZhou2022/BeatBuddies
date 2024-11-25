import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Post() {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={[styles.container, {height: height * 0.25}]}>
            <Text style={styles.text}>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 5,
        //width: '100%'
        //height: height * 0.5,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 40,
    }
});