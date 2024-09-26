// LogSuccess.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LogSuccess: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('spotify_access_token');
      if (token) {
        try {
          const response = await axios.get('https://api.spotify.com/v1/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user profile', error);
        }
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello, {userData.display_name}!</h1>
    </div>
  );
};

export default LogSuccess;