// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Layout from './(tabs)/_layout'; // Ensure this import is correct
import LogSuccess from './LogSuccess'; // Ensure this import is correct

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Layout" component={Layout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;