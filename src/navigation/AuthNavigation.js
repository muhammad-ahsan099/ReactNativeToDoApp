

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  SignIn from "../modules/signIn/SignIn";
import SignUp from '../modules/signUp/SignUp';
const Stack = createStackNavigator();

export const AuthNavigation = () => {
    return(
    <Stack.Navigator
        screenOptions = {{
            headerShown: null
        }}
    >     
        <Stack.Screen 
            name="SignIn" 
            component= {SignIn}
        />          
        <Stack.Screen 
            name="SignUp" 
            component= {SignUp}
        />          
         
    </Stack.Navigator> 
    )
    }