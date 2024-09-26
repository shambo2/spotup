// LogSuccess.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LogSuccess: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('spotify_access_token');
      console.log('Retrieved Token:', token); // Debugging: Log the retrieved token
      if (token) {
        try {
          const response = await axios.get('https://api.spotify.com/v1/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log('Response:', response.data); // Debugging: Log the response
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user profile', error);
          setError('Error fetching user profile');
        } finally {
          setLoading(false);
        }
      } else {
        console.error('No token found');
        setError('No token found');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Welcome, {userData.display_name}!</h1>
      <p>Email: {userData.email}</p>
      {userData.images && userData.images.length > 0 && (
        <img src={userData.images[0].url} alt="Profile" />
      )}
    </div>
  );
};

export default LogSuccess;