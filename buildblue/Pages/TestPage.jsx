import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Pressable } from 'react-native';
import GlobalStyles from '../Components/GlobalStyles';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import CommentSection from '../Components/CommentSection';
import Comment from '../Components/Comment';
import { Box } from "@/Components/ui/box";
import AvatarBubble from '../Components/AvatarBubble';
import { VStack } from "@/Components/ui/vstack";
import { HStack } from "@/Components/ui/hstack";
import { Heading } from "@/Components/ui/heading";
import { Avatar, NativeBaseProvider, useTheme } from 'native-base';


export default function TestPage() {

    const Example = () => {
        return <VStack space={2} alignItems="center">
            <AvatarBubble />
          </VStack>;
      };

    return (
        <Example />
    )
}