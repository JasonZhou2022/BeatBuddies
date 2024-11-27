import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin"; // NEW fixed
import {
    Avatar,
    AvatarBadge,
    AvatarFallbackText,
    AvatarImage,
  } from "@/Components/ui/avatar"

  export default function AvatarBubble(props)
  {
    const uri = props.uri;
    return (
        <View>
            <Avatar size={props.size} >
                <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                    <AvatarImage
                        source={{                    
                            uri: {uri},
                        }}
                    />
                <AvatarBadge />
            </Avatar>
        </View>
    )
    
  }