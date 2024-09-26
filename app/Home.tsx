// Home.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginButton from './Spotify/LoginButton'; // Import the LoginButton component

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <LoginButton /> {/* Include the LoginButton component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20, // Add some margin to separate the text from the button
  },
});

export default Home;