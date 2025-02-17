import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/Components/ui/gluestack-ui-provider";
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';  // Import SecureStore
import PickSongPage from './Pages/PickSongPage';
import FeedPage from './Pages/FeedPage';
import ProfilePage from './Pages/ProfilePage';
import HomePage from './Pages/HomePage';
import TestPage from './Pages/TestPage';
import LoginPage from './Pages/LoginPage';
import CreateAccountPage from './Pages/CreateAccountPage';
import { NativeBaseProvider } from 'native-base';

export default function App() {
    // isLoading → Tracks if we are still checking login status.
    // userToken → Holds the Spotify token if the user is logged in.
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    // Check if the user is logged in when the app starts
    useEffect(() => {
        async function checkLoginStatus() {
            const token = await SecureStore.getItemAsync("spotify_token"); // Check if token exists
            if (token) {
                setUserToken(token);
            }
            setIsLoading(false);
        }
        checkLoginStatus();
    }, []);

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <NativeBaseProvider>
            <GluestackUIProvider mode="light">
                <View style={[styles.container, styles.debug]}>
                    <StatusBar style="auto" />
                    {userToken ? <HomePage /> : <LoginPage />}  
                </View>
            </GluestackUIProvider>
        </NativeBaseProvider>
    );
    // decides which page to show, if userToken exists show homepage
    // else if no token show login page for login
}

const debug = false;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  debug: {
    borderWidth: debug ? 5 : 0,
    borderColor: debug ? 'white' : 0,
  }
});
