// SpotifyData.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpotifyData: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('spotify_access_token');
      if (token) {
        const response = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {userData.display_name}</h1>
      <p>Email: {userData.email}</p>
      <img src={userData.images[0]?.url} alt="Profile" />
    </div>
  );
};

export default SpotifyData;