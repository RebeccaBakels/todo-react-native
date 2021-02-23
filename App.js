import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Alert } from 'react-native';
// import HomeText from './components/HomeText'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoScreen from './screens/ToDoScreen';
import NewToDoScreen from './screens/NewToDoScreen'

export default function App() {
  const myName = 'Rebecca'
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Home' component={ToDoScreen} options={{ title: 'Welcome'}}/>
       <Stack.Screen name='NewToDo' component={NewToDoScreen} options={{ title: 'New To-Do'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
