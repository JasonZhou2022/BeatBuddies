import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin"; // NEW fixed
import {
    Avatar,
    AvatarBadge,
    AvatarFallbackText,
    AvatarImage,
  } from "@/Components/ui/avatar"

  export default function AvatarBubble(
        {
            size = 'md', 
            style = {}, 
            uri = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name = 'Andy Andy'
        }
    )
  {
    const url = uri;
    return (
        <View style={style}>
            <Avatar size={size} >
                <AvatarFallbackText>{name}</AvatarFallbackText>
                    <AvatarImage
                        source={{                    
                            uri: {url},
                        }}
                    />
                <AvatarBadge />
            </Avatar>
        </View>
    )
    
  }