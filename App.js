/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Provider } from 'react-redux';
import store from './src/config/Store';

import Schedule from './src/components/calender/Calender'
import Student from './src/components/student/Student';
import SignIn from './src/modules/signIn/SignIn';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation/Navigation';
import SignUp from './src/modules/signUp/SignUp';


  function App()
  {

    // const toFirestore =  async ()=> {
    //   try {
    //     console.log('try');
    //     const data = await db.collection('sample').add({name:"naveed"});
    //     console.log('success', data);
    //   } catch (error) {
    //     console.log('error', error);
    //   }
    
  

    // }

  return (
    <Provider store={store}>


    <SafeAreaView  style={styles.container} >
      
      
        <View style={styles.container}>
          
          {/* < SignIn /> */}
          {/* <Student /> */}
          {/* <Schedule/> */}
         <Navigation />
         {/* <SignUp /> */}
          
        </View>

    </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  

});


export default App;





