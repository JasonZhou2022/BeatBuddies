import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AvatarBubble from '../Components/AvatarBubble';
import { VStack } from "@/Components/ui/vstack";
import { Box } from "@/Components/ui/box";
import {
    Button,
    ButtonText,
    ButtonSpinner,
    ButtonIcon,
    ButtonGroup,
  } from "@/Components/ui/button";

export default function ProfilePage(props){
    
    
    const defaultLink = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    //const size = 100;

    return (
        <Box style={[styles.top, styles.all, styles.debug]}>
            <Box className="Avatar Card (Header)" style={styles.center}>
                <VStack style={[styles.container, styles.padding5]}>
                    <Text style={styles.profile}>Profile</Text>
                    <AvatarBubble className="Picture" uri = {defaultLink} size={"2xl"}/>
                    <Text className="name" style={styles.name}>{props.name}</Text>
                    <Text className="handle" style={[styles.childDebug, styles.handle]}>{props.handle}</Text>
                    <Text className="blurb" style={[styles.blurb, styles.padding3]}>{props.blurb}</Text>
                </VStack>
            </Box>
            {/* <VStack style={[styles.debug, styles.padding5]}>
                <Text style={[styles.childDebug, styles.fontUI]}>Username:</Text>
            </VStack> */}

{/* style={({pressed}) => [
            {
              backgroundColor: pressed ? 'red' : 'white',
            }]} */}
            <Button size="lg" variant="solid" backgroundColor="white" style={[styles.childDebug, styles.editButton]}>
                <ButtonText>Edit</ButtonText>
            </Button>
        </Box>
        
    )
}
const { width, height } = Dimensions.get('window');
const debug = false;
const childDebug = false;
const fontSize = 30;
const fontSizeUI = 25;

const styles = StyleSheet.create({
    all: {
        flex: 1
    },
    editButton: {
        //width: '30%',
        marginTop: height * 0.05,
        alignSelf: 'center'
    },
    fontUI: {
        fontSize: fontSizeUI,
        color: 'white'
    },
    padding3: {
        marginTop: height * 0.03,
    },
    padding4: {
        marginTop: height * 0.04,
    },
    padding5: {
        marginTop: height * 0.05,
    },
    padding10: {
        paddingTop: height * 0.10
    },
    padding15: {
        paddingTop: height * 0.15
    },
    handle: {
        fontSize: fontSize * 0.8,
        color: 'white'
    },
    debug: {
        borderWidth: debug ? 5 : 0,
        borderColor: debug ? 'red' : null,
    },
    childDebug: {
        borderWidth: childDebug ? 5 : 0,
        borderColor: childDebug ? 'green' : null,
    },
    container: {
        //flex: 1,
        flexDirection: 'column',
        borderColor: debug ? 'white' : null,
        borderWidth: debug ? 5 : 0,
        //paddingTop: height * 0.05,
        //justifyContent: 'flex-start',
        alignItems: 'center',
    },
    top: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    center: {
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: debug ? 'white' : null,
        borderWidth: debug ? 5 : 0,
        //paddingTop: '30vh',
    },
    name: {
        paddingTop: height * 0.025,
        fontWeight: "bold",
        color: 'white',
        fontSize: fontSize,
    },
    blurb:{
        fontSize: fontSize * 0.7,
        color: 'white',
        textAlign: 'center'
    },
    red: {
        color: 'red'
    },
    profile: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 40,
        paddingBottom: height * 0.05,
    }
})