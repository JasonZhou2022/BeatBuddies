import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PickSongPage from './Pages/PickSongPage'
import FeedPage from './Pages/FeedPage'

export default function App() {
  return (
    <View style={styles.container}>
      <FeedPage />
      {/* <PickSongPage /> */}
      {/* <Text>Finally got it working lets gooooo</Text> */}
      {/* <StatusBar style="auto" /> */}
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    //overflow: 'visible'
  },
});
