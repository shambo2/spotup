// LoginButton.tsx
import React from 'react';

const CLIENT_ID = 'cd31e73129784fc6acca83a4b5701622';
const REDIRECT_URI = 'http://localhost:8087/LogSuccess';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'code';
const SCOPE = 'user-read-private user-read-email';

const LoginButton: React.FC = () => {
  const handleLogin = () => {
    const state = Math.random().toString(36).substring(7); // Generate a random state token
    localStorage.setItem('spotify_auth_state', state); // Store the state token in localStorage

    const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${state}`;
    console.log('Redirecting to:', authUrl); // Debugging line
    window.location.href = authUrl;
  };

  return <button onClick={handleLogin}>Login with Spotify</button>;
};

export default LoginButton;