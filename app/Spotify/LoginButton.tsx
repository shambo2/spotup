// LoginButton.tsx
import React from 'react';
const CLIENT_ID = 'cd31e73129784fc6acca83a4b5701622';
const REDIRECT_URI = 'http://localhost:8081/LogSuccess';
const AUTH_URL = 'https://accounts.spotify.com/authorize';

const LoginButton: React.FC = () => {
  const handleLogin = () => {
    const state = Math.random().toString(36).substring(7); // Generate a random state token
    localStorage.setItem('spotify_auth_state', state);

    const authUrl = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-read-email user-library-read user-read-recently-played&state=${state}`;
    window.location.href = authUrl;
  };

  return <button onClick={handleLogin}>Login with Spotify</button>;
};

export default LoginButton;