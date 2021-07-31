

import React, { useState } from 'react';
import { styles } from './SignUpStyle'
import todologo from '../../../src/assets/todologo.png';
import UseSignUp from './useSignUp';

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



function SignUp({ navigation }) {

    const [ email , password ,setEmail,setPassword,doSignupUser] = UseSignUp()

    const navigateTo = () => {
        navigation.navigate('SignIn', { data: 'some data' });

    };


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
                {/* <Text style={styles.text2} >
                        Name
                        <Text style={styles.text_astaric}>*</Text>
                    </Text>
                     <TextInput
                        style={styles.input1} 
                        onChangeText={text => setName(text)}
                    /> */}

                    <Text style={styles.text2} >
                        Email
                        <Text style={styles.text_astaric}>*</Text>
                    </Text>
                    <TextInput
                        style={styles.input1}
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />

                    <Text style={styles.text2} >
                        Password
                        <Text style={styles.text_astaric}>*</Text>
                    </Text>

                    <TextInput
                        style={styles.input1}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />

                    <View
                    style={{flexDirection: 'row' , justifyContent: 'space-between' , marginLeft: '5%' , marginRight: '5%',marginTop: '4%' }}
                    >               
                    <Text 
                    style={{color: 'white' , fontSize: 18 , fontFamily: 'roboto' , lineHeight: 30}} 
                    >
                        Already an account? 
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
                            SignIn
                        </Text>

                    </TouchableOpacity>

                    </View>

                </View>

                
                <View style={styles.head3} >
                    <TouchableOpacity

                        style={styles.buttonn}
                        onPress={doSignupUser}
                       
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
                            Sign Up
                        </Text>

                    </TouchableOpacity>
                </View>




            </View>
        </SafeAreaView>

    );
};


export default SignUp;


