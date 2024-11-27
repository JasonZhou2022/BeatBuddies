import { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { HStack } from "@/Components/ui/hstack";
import GlobalStyles from './GlobalStyles';
import AvatarBubble from './AvatarBubble';

export default function Comment({handle, comment}) {

    const { width, height } = Dimensions.get('window');

    return (
        <HStack style={[styles.stack, {alignItems:'center', paddingBottom: height * 0.01}]}>
            <AvatarBubble className="AvatarPicture" size='xs' name={{handle}} style={{marginRight: width * 0.02}}/>
            <Text className="commentHandle" style={[GlobalStyles.white, GlobalStyles.bold]}>{handle}</Text>
            <Text className="comment" style={[GlobalStyles.white, {paddingLeft: width * 0.02}]}>{comment}</Text>
        </HStack>
    )
}

const styles = StyleSheet.create({
    stack: {
        flexDirection: 'row',
    }
})