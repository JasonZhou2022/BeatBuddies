import { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { HStack } from "@/Components/ui/hstack";
import { Box } from "@/Components/ui/box";
import GlobalStyles from './GlobalStyles';
import Comment from './Comment';

export default function CommentSection({handle}) {
    return (
        <Box style={[styles.zeroed]}>
            <Comment handle={'Test'} comment={'generic comment goes here!'}/>
            <Comment handle={'Test'} comment={'generic comment goes here!'}/>
            <Comment handle={'Test'} comment={'generic comment goes here!'}/>
        </Box>
    )
}

const styles = StyleSheet.create({
    zeroed: {
        margin: 0,
        padding: 0
    }
})