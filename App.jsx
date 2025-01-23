import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { View, Text } from 'react-native';
import Splash from './Screens/Splash';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
      <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
