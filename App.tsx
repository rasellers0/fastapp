import React from 'react';
import Main from './main'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExercise from './components/AddExercise';
import AddWorkout from './components/AddWorkout';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Add Exercise" component={AddExercise} />
      <Stack.Screen name="Add Workout" component={AddWorkout} />
      </Stack.Navigator>
      {/* <Main></Main> */}
    </NavigationContainer>
  );
}

export default App;
