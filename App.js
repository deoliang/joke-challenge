import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './routes/DrawerNav';

//defining the entry point of the joke challenge app
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>
  );
}

