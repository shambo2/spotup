// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginButton from './Spotify/LoginButton';
import Callback from './Spotify/Callback';
import SpotifyData from './Spotify/SpotifyData';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/data" element={<SpotifyData />} />
      </Routes>
    </Router>
  );
};

export default App;