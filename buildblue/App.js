import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './Components/Timer'
import PlayButton from './Components/PlayButton'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Finally got it working lets gooooo</Text> */}
      {/* <StatusBar style="auto" /> */}
      <Timer />
      <PlayButton />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
