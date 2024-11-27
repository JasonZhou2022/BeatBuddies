import { useState, useRef } from 'react';
import { Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import AvatarBubble from './AvatarBubble';
import CommentSection from './CommentSection';
import Comment from './Comment';
import { Avatar } from './ui/avatar';
import { VStack } from "@/Components/ui/vstack";
import { HStack } from "@/Components/ui/hstack";
// import { Box } from "@/Components/ui/box";
//import { Motion } from "@legendapp/motion";
//import { MotionLinearGradient } from '@legendapp/motion/linear-gradient-expo';
import GlobalStyles from '../Components/GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export default function Post({userLeft = "Jason", userRight = "Amy", nameLeft = userLeft, nameRight = userRight}) {

    const { width, height } = Dimensions.get('window');
    const [expanded, setExpanded] = useState(false);
    //const scale = useRef(new Animated.Value(1)).current;
    
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

    const animatedStyle = useAnimatedStyle(() => {
        const animatedHeight = expanded ? withTiming(100) : withTiming(0);
        return {
            height: animatedHeight,
        }
    })

    const exampleCommenters = ['Jason', 'Amy', 'Michael', 'Jenny Z', 'Barry', 'Matthew', 'Erich', 'Jenny K', 'Isabella', 'Elle', 'Fay']
    const examplesToDisplay = exampleCommenters.slice(0, 4);
    const example = 'Generic Comment Goes Here!'
    const exampleComments = examplesToDisplay.map((handle, index) => (
        <Comment key={index} handle={handle} comment={example} />
        
      ));

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
            </LinearGradient>
            {/* <Motion.View
                style={[{
                    maxHeight: expanded ? height * 0.2 : 0, // Expand to 300px or collapse to 0px
                    overflow: 'hidden', // Hide overflow content when collapsed
                  },
                  GlobalStyles.border, {backgroundColor: "#28282B"}
                ]}
                  initial={{ maxHeight: 0 }}
                  animate={{ maxHeight: expanded ? 300 : 0 }} // Animate between 0 and 300
                  transition={{
                    type: 'timing', // Use a timing transition for a smooth collapse/expand
                    duration: 1000, // Duration of the animation
                    useNativeDriver: true, // Use native driver for smooth performance
                  }}
            >
                {/* {expanded ? <CommentSection style={styles.commentSection}/> : null} */}
                {/* <Text style={[GlobalStyles.white, GlobalStyles.border]}>asdasd</Text> */}
            {/* </Motion.View> */}

            <Animated.View style={[animatedStyle]}>
                {/* <Text style={[GlobalStyles.white, GlobalStyles.border]}>Test DropDown</Text> */}
                {expanded ? <CommentSection style={styles.commentSection} comments={exampleComments}/> : null}
            </Animated.View>

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
        //borderColor: 'green',
        //borderWidth: 2,
        borderRadius: 20,
        backgroundColor: "#28282B",
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