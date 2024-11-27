import { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, Animated, useAnimatedValue } from 'react-native';
import AvatarBubble from './AvatarBubble';
import CommentSection from './CommentSection';
import { Avatar } from './ui/avatar';
import { VStack } from "@/Components/ui/vstack";
import { HStack } from "@/Components/ui/hstack";
import { Box } from "@/Components/ui/box";
import { Motion } from "@legendapp/motion";
import { MotionLinearGradient } from '@legendapp/motion/linear-gradient-expo';
import GlobalStyles from '../Components/GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';

export default function Post({userLeft = "Jason", userRight = "Amy", nameLeft = userLeft, nameRight = userRight}) {

    const { width, height } = Dimensions.get('window');
    const [expanded, setExpanded] = useState(false);
    const scale = useRef(new Animated.Value(1)).current;
    
    const startSpring = () => {
        Animated.spring(scale, {
          toValue: 1.5, // Target scale
          friction: 3,  // Controls bounciness
          tension: 100, // Controls speed
          useNativeDriver: true, // Required for better performance
        }).start(() => {
          // Reset the scale after animation
          Animated.spring(scale, {
            toValue: 1, // Reset scale to original
            friction: 3,
            tension: 100,
            useNativeDriver: true,
          }).start();
        });
      };

    const onPress = () => {
        setExpanded((expanded) => !expanded);
        //startSpring();
        console.log("PRESSED");
    }
    //{ flex: 1, justifyContent: 'center', alignItems: 'center' }
    return (
        <Pressable style={[styles.pressable, styles.debug]} onPress={onPress}>
            <LinearGradient
                    colors={['#40C9FF', '#E81CFF']}
                style={[styles.debug, styles.container]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 1.5 }}
            >
                <HStack style={[styles.left]}>
                    <AvatarBubble size="lg" name={nameLeft} style={[styles.avatarLeft, styles.debug]}/>
                    <Text style={[GlobalStyles.white, styles.name]}>{userLeft}</Text>
                </HStack>
                {/* <Box style={[styles.debug, styles.animationPadding]}>
                </Box> */}
                <HStack style={styles.right}>
                    <Text style={[GlobalStyles.white, styles.name]}>{userRight}</Text>
                    <AvatarBubble size="lg" name={nameRight} style={[styles.avatarRight, styles.debug]}/>
                </HStack>

                    

                    {/* <Pressable 
                        style={[styles.pressable, styles.debug, {borderColor: 'green'}]}
                        onPress={onPress}
                    >
                </Pressable> */}
            </LinearGradient>
            <Motion.View
                initial={{ height: 0 }}
                animate={{ height: expanded ? height * 0.2 : 0 }}
                transition={{ duration: 150 }}
                style={[GlobalStyles.border, styles.commentSection]}
            >
                {expanded ? <CommentSection /> : null}
                
            </Motion.View>
        </Pressable>
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
    animationPadding: {
        paddingTop: height * 0.1,
    },
    commentSection: {
        borderRaidus: 20,
    },
    pressable: {
        flex: 1,
        alignSelf: 'stretch',
        marginHorizontal: width* 0.05,
        // position: 'absolute',
        // width: '100%',
        // height: '130%',
        // borderRadius: 20,
        // zIndex: 1
    },
    zero: {
        margin: 0,
        padding: 0,
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
        zIndex: -1,
        //flexDirection: 'row',
        //alignSelf: 'stretch',
        //flex: 1,
        borderRadius: 20,
        marginVertical: height * 0.02,
        paddingVertical: height * 0.02,
        //paddingHorizontal: width * 0.01,
        //width: '95%'
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