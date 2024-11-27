import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Post from '../Components/Post' 


export default function FeedPage() {
    const { width, height } = Dimensions.get('window');
    return (
      <ScrollView style={styles.container}>
        <Post userLeft={"Jason"} userRight={"Amy"}/>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </ScrollView>
    )

    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        width: "100%"
    },
    text: {
        color: 'white',
        fontSize: 100
    }
})