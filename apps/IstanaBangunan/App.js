import 'react-native-gesture-handler'
import React from 'react';
import {
  Text,
  View,
  SafeAreaView
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/navigators/MainStack';

const App = () => {

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
      
  );
};



export default App;
 