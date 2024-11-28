import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin"; // NEW fixed
import { Avatar, NativeBaseProvider, useTheme } from 'native-base';

  export default function AvatarBubble(
        {
            size = "md", 
            style = {}, 
            url = "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name = 'AA'
        }
    )
  {
    return (
        <View style={style}>
            <Avatar bg="amber.500" source={{
                uri: url
            }} size={size}>
              {JSON.stringify(name)}
              <Avatar.Badge bg="green.500" />
            </Avatar>
        </View>
    )
    
  }