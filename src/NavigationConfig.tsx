import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DesignsPage from './pages/Designs';
import Home from './pages/Home';
import PasswordGenerator from './pages/PasswordGenerator';

const Stack = createNativeStackNavigator();

const NavigationRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Designs" component={DesignsPage} />
        <Stack.Screen name="Inputs" component={PasswordGenerator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoute;
