

import React, { useState } from 'react';
import { styles } from './SignInStyle'
import todologo from '../../../src/assets/todologo.png';
import UseSignIn from './useSignIn';

import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Button,
    Text,
    TextInput,
    View,
    Image,
} from 'react-native';



function SignIn({ navigation }) {

    const [email, password, setEmail, setPassword, doLoginUser] = UseSignIn()

   
    const navigateTo =() => {
        navigation.navigate('SignUp' , {data: 'some data'}) 
    }

    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <View style={styles.head}>
                <View style={styles.head1} >
                    <Image
                        style={styles.logo_image}
                        source={todologo}
                    />
                </View>

                <View style={styles.head2} >
                    <Text style={styles.text2} >
                        Email
                        <Text style={styles.text_astaric}>*</Text>
                    </Text>
                    <TextInput
                        style={styles.input1}
                        onChangeText={text => setEmail(text)}
                    />

                    <Text style={styles.text2} >
                        Password
                        <Text style={styles.text_astaric}>*</Text>
                    </Text>

                    <TextInput
                        style={styles.input1}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />




                    <View
                    style={{flexDirection: 'row' , justifyContent: 'space-between' , marginLeft: '5%' , marginRight: '5%' , marginTop: '4%' }}
                    >               
                    <Text 
                    style={{color: 'white' , fontSize: 18 , fontFamily: 'roboto' , lineHeight: 30}} 
                    >
                        Create an account? 
                    </Text>

                    <TouchableOpacity
                    style={{width: 70 , backgroundColor: 'white' ,  borderRadius: 50 ,  }}
                    onPress={navigateTo}
                    >
                        <Text
                            style={{
                                color: '#F0FFF0',
                                fontSize: 14,
                                textAlign: 'center',
                                color: 'black',
                                fontFamily: 'serif',
                                padding: 5 ,
                                
                            }}
                        >
                            SignUp
                        </Text>

                    </TouchableOpacity>

                    </View>


                </View>

                <View style={styles.head3} >
                    <TouchableOpacity

                        style={styles.buttonn}
                        onPress={doLoginUser }
                        
                    >
                        <Text
                            style={{
                                color: '#F0FFF0',
                                fontSize: 20,
                                textAlign: 'center',
                                lineHeight: 55,
                                color: 'black',
                                fontFamily: 'serif',
                            }}
                        >
                            Login
                        </Text>

                    </TouchableOpacity>
                </View>




            </View>
        </SafeAreaView>

    );
};


export default SignIn;


