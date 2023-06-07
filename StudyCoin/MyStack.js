import React from "react";
import {View, Text} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import Dashboard from './Dashboard';
import Login from './components/Login';
import Timer from './components/Pomodoro';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
enableScreens();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}/>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{title: 'Pomodoro'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;