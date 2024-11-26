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
        </ScrollView>
    )
}

{/* <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.view, { height: height * 0.5 }]}>
        <Text style={styles.text}>View 1</Text>
      </View>
      <View style={[styles.view, { height: height * 0.5 }]}>
        <Text style={style.text}>View 2</Text>
      </View>
      <View style={[styles.view, { height: height * 0.5 }]}>
        <Text>View 3</Text>
      </View>
      <View style={[styles.view, { height: height * 0.5 }]}>
        <Text>View 4</Text>
      </View>
      <View style={[styles.view, { height: height * 0.5 }]}>
        <Text>View 5</Text>
      </View>
    </ScrollView> */}


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