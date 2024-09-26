// Callback.tsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CLIENT_ID = 'cd31e73129784fc6acca83a4b5701622';
const CLIENT_SECRET = 'a89abca0d86c4d308aa33b4ecb9b78fd';
const REDIRECT_URI = 'http://localhost:8087/LogSuccess';
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async (code: string) => {
      try {
        const response = await axios.post(SPOTIFY_TOKEN_URL, null, {
          params: {
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        const { access_token } = response.data;
        localStorage.setItem('spotify_access_token', access_token);
        navigate('/data'); // Redirect to the data page or desired page
      } catch (error) {
        console.error('Error fetching the token', error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const storedState = localStorage.getItem('spotify_auth_state');

    if (state !== storedState) {
      console.error('State token mismatch');
      return;
    }

    if (code) {
      getToken(code);
    } else {
      console.error('Authorization code not found');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;