import * as AuthSession from 'expo-auth-session';
import { encode as btoa } from 'base-64';

// for authentication
const CLIENT_ID = "your-client-id"; // unique ID that identifies your app
const REDIRECT_URI = "exp://localhost:19000"; // where spotify sends the user back after login 
const AUTH_URL = "https://accounts.spotify.com/authorize"; // The Spotify login page URL

// for getting token
const CLIENT_SECRET = "your-client-secret";
const TOKEN_URL = "https://accounts.spotify.com/api/token"; // Spotify’s API endpoint for getting an access token

export async function authenticateSpotify() {
    const authUrl = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=user-read-private user-read-email user-top-read playlist-read-private`;
    
    // send the user to spotifys login page
    // Opens a browser window for the user to log in to Spotify.
    // Waits for the user to finish logging in.
    // Returns the "code" if successful.
    const result = await AuthSession.startAsync({ authUrl });


    // Once/if user logs in successfully, we store the code. else if login fails log error
    if (result.type === 'success') {
        return getAccessToken(result.params.code);
    } else {
        console.error("Authentication failed:", result);
    }
}

// Send the authentication code to Spotify and get an access token
async function getAccessToken(authCode) {
    // Converts client ID and secret into Base64 format (required for authentication)
    // We need to send our client ID and secret in a secure format (Base64)
    const credentials = `${CLIENT_ID}:${CLIENT_SECRET}`;
    const encodedCredentials = btoa(credentials); // Convert to Base64

    const response = await fetch(TOKEN_URL, {
        headers: {
            "Authorization": `Basic ${encodedCredentials}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `grant_type=authorization_code&code=${authCode}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`
    });

    const data = await response.json();

    // saves the token on the device so user doesn't have to login every time
    if (data.access_token) {
        await SecureStore.setItemAsync("spotify_token", data.access_token);
    }

    return data.access_token;
}

export async function searchSpotify(query, accessToken) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });

    const data = await response.json();
    return data.tracks.items; // Returns array of tracks
}