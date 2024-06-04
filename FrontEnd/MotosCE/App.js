import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigations/StackNavigation'; // Import your StackNavigator

const AuthContext = createContext({ isLoggedIn: false, setIsLoggedIn: () => {} });

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial login state

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationContainer>
        {isLoggedIn ? <HomeScreen /> : <StackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
export { AuthContext };
