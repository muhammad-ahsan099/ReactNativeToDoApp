


import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens

import Student from '../components/student/Student';
import Schedule from '../components/calender/Calender';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen
        options={{title: 'Student'}}
        name="Student" 
        component={Student}
      />

      <Stack.Screen name="Schedule" component={Schedule} />
     

    </Stack.Navigator>
  
  )}