import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import GlobalStyles from '../Components/GlobalStyles';
import Post from '../Components/Post';
import { Box } from "@/Components/ui/box";


export default function FeedPage() {
    const { width, height } = Dimensions.get('window');
    return (
      <ScrollView style={[styles.container, styles.debug]} contentContainerStyle={{alignItems: 'center'}}>
            <Box style={styles.margin10}></Box>
            <Post userLeft={"Jason"} userRight={"Amy"}/>
            <Post userLeft={"Bob"} userRight={"Marley"}/>
            <Post userLeft={"Trump"} userRight={"Biden"}/>
            <Post userLeft={"Chad"} userRight={"Kyle"}/>
            {/* <Post userLeft={"Jenny Z"} userRight={"Jenny K"}/>
            <Post userLeft={"Matthew"} userRight={"Erich"}/>
            <Post userLeft={"Lina"} userRight={"Wayne"}/>
            <Post userLeft={"Josh"} userRight={"Darian"}/>
            <Post userLeft={"Isabella"} userRight={"Youna"}/>
            <Post userLeft={"Elle"} userRight={"Fay"}/>
            <Post userLeft={"Michael"} userRight={"Barry"}/> */}
        </ScrollView>
    )

    
}

const { width, height } = Dimensions.get('window');
const debug = false;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        alignSelf: 'stretch',
        //width: "100%",
        //justifyContent: 'center'
    },
    margin10: {
        marginTop: height * 0.1
    },
    debug: {
        borderWidth: debug ? 5 : 0,
        borderColor: debug ? 'green' : 0,
    }
})