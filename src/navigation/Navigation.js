


import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
//Import Navigations
import {AppNavigation} from './AppNavigation';
import {AuthNavigation} from './AuthNavigation';

// firebase auth
import auth from '@react-native-firebase/auth';

export default Navigation = () =>{

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

   // Handle user state changes
    function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
   

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  return (
    <NavigationContainer>
      { user ? <AppNavigation /> : <AuthNavigation /> }
    </NavigationContainer>
  );
}
