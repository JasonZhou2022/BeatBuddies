import { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { HStack } from "@/Components/ui/hstack";
import { VStack } from "@/Components/ui/vstack";
import { Box } from "@/Components/ui/box";
import GlobalStyles from './GlobalStyles';
import Comment from './Comment';

export default function CommentSection({handle, style, comments}) {

    
    const { width, height } = Dimensions.get('window');

    return (
        <VStack style={[styles.debug, styles.zeroed, styles.spacing, style.dimensions, style]}>
            {comments}
            <Text style={[GlobalStyles.white, {paddingTop: height * 0.02, textAlign: 'center'}]}>--See More--</Text>
        </VStack>
    )
}

const { width, height } = Dimensions.get('window');
const debug = false;

const styles = StyleSheet.create({
    zeroed: {
        margin: 0,
        padding: 0,
        
    },
    spacing: {
        paddingLeft: width * 0.03,
        paddingVertical: height * 0.02,
    },
    dimensions: {
        //height: height * 0.2
    },
    debug: {
        borderWidth: debug ? 2 : 0,
        borderColor: debug ? 'red' : null,
    }
})