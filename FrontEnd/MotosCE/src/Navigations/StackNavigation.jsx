// src/navigations/AppNavigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/Auth/LoginScreen'; // Import your LoginScreen
import RegisterScreen from '../Screens/Auth/RegisterScreen'; // Import your RegisterScreen
import HomeScreen from '../Screens/Main/HomeScreen'; // Import your HomeScreen

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
