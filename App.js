import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './routes/DrawerNav';

//defining the entry point of the joke challenge app

const App = ()=> {
  return (
    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>
  );
}

export default App