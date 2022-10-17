//import 'react-native-gesture-handle';
import React from 'react';
import { NativeAppEventEmitter, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import COLORS from './src/consts/colors';
import DetailsScreean from './src/views/screens/DetailsScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';

const Stack = createNativeStackNavigator();

const App =()=>{
  return(
    <NavigationContainer>
    <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"/>
    <Stack.Navigator initialRouteName="BoardScreen" screenOptions={{headerShown:false}} >
      <Stack.Screen name="BoardScreen" component={OnBoardScreen}/>
      <Stack.Screen name="Home" component={BottomNavigator}/>
      <Stack.Screen name="DetailsScreean" component={DetailsScreean}/>
      </Stack.Navigator>
  </NavigationContainer>
  )
};
export default App;
