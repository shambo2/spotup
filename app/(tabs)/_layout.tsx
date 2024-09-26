import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import LogSuccess from '../LogSuccess';
// import Login from '../screens/Login'; // Assuming you have a Login component

const Tab = createBottomTabNavigator();

const Layout: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="LogSuccess"
          component={LogSuccess}
          options={{
            title: 'Welcome',
            tabBarIcon: ({ color, focused }) =>   (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default Layout;