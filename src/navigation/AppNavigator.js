import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import StartCooking from '../screens/StartCooking';
import Welcome from '../components/Welcome';
import Login from '../components/Login';
import Register from '../components/Register';
import CookingStatus from '../screens/CookingStatus';
import CookingHistory from '../screens/CookingHistory';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StartCooking" component={StartCooking} />
        <Stack.Screen name="CookingStatus" component={CookingStatus} />
        <Stack.Screen name="CookingHistory" component={CookingHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;