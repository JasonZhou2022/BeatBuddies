import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/Components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PickSongPage from './Pages/PickSongPage'
import FeedPage from './Pages/FeedPage'
import LoginPage from './Pages/LoginPage'
import ProfilePage from './Pages/ProfilePage'
import HomePage from './Pages/HomePage'
import TestPage from './Pages/TestPage'
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
        <GluestackUIProvider mode="light">
          <View style={[styles.container, styles.debug]}>
            {/* <TestPage /> */}
              {/* <ProfilePage name="Jason Zhou" handle="@jxzhou" blurb="When Life Gives You Lemons..." /> */}
              <FeedPage />
              {/* <PickSongPage /> */}
              {/* <Text>Finally got it working lets gooooo</Text> */}
              {/* <StatusBar style="auto" /> */}
          </View>
        </GluestackUIProvider>
    </NativeBaseProvider>

    
  );
}

const debug = false;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
    //overflow: 'visible'
  },
  debug: {
    borderWidth: debug ? 5 : 0,
    borderColor: debug ? 'white' : 0,
  }
});
