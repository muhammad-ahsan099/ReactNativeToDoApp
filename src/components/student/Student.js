
import React from 'react';
import { useDispatch } from 'react-redux';
import {doLogout} from '../../redux/actions/AuthAction';
import StudentList from './StudentList';
import Schedule from '../calender/Calender';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import * as Progress from 'react-native-progress';
import { useStudent } from './useStudent';

function Student({ navigation }) {


    const [students, errMessage, flag, name, load, ctaLoading, setName, ctaHandler, deleteHandler, updateHandler, ctaupdateHandler] = useStudent();

    const navigateTo = () => {
        navigation.navigate('Schedule', { data: 'some data' });

    };

    // User Logout Function

    const dispatch = useDispatch();
    
    const doUserLogout = ()=> {
        dispatch(doLogout())
    }


    return (

        <View
            style={{ flex: 1, backgroundColor: '#0C1327' }}
        >
            <View>
                <Text
                    style={{
                        fontSize: 26,
                        fontFamily: 'Roboto',
                        textAlign: 'center',
                        padding: 10,
                        color: 'white',
                    }}
                >
                    Add ToDo

                </Text>


                <TouchableOpacity
                    style={{ backgroundColor: 'white', position: 'absolute', top: 15, right: 10, padding: 5, paddingLeft: 13, paddingRight: 13, borderRadius: 50 }}
                    onPress={doUserLogout}
                >
                    <Text
                        style={{ color: 'black', fontSize: 14, fontFamily: 'Roboto' }}
                    >
                        Logout
                    </Text>
                </TouchableOpacity>


            </View>

            <TextInput
                // onChange ={ (e) => setName(e.target.value) }
                onChangeText={text => setName(text)}
                style={{
                    borderWidth: 1,
                    padding: 8,
                    paddingLeft: 20,
                    borderColor: 'grey',
                    width: '90%',
                    height: 45,
                    marginLeft: '5%',
                    marginRight: '5%',
                    marginBottom: '5%',
                    borderRadius: 4,
                    color: 'black',
                    fontSize: 16,
                    color: 'white'
                }}
                placeholder={'Enter ToDo'}
                placeholderTextColor={'white'}
                value={name}
            />

            {
                flag ?
                    <TouchableOpacity
                        onPress={ctaupdateHandler}
                        style={{

                            backgroundColor: "white",
                            borderRadius: 50,
                            width: '90%',
                            marginLeft: '5%',
                            marginRight: '5%',
                            marginBottom: 20,
                            height: 60,
                            opacity: 1,


                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 20,
                                textAlign: 'center',
                                lineHeight: 55,

                            }}
                        >
                            Update
                        </Text>
                    </TouchableOpacity>

                    :

                    <TouchableOpacity
                        onPress={ctaHandler}

                        style={{

                            backgroundColor: 'white',
                            borderRadius: 50,
                            width: '90%',
                            marginLeft: '5%',
                            marginRight: '5%',
                            marginBottom: 20,
                            height: 60,
                            opacity: 1
                        }}
                    >
                        <Text
                            style={{
                                color: '#0C1327',
                                fontSize: 20,
                                textAlign: 'center',
                                lineHeight: 55,

                            }}
                        >
                            {ctaLoading ? <Progress.Circle size={10} indeterminate={true} /> : "Submit"}
                        </Text>
                    </TouchableOpacity>


            }


            <TouchableOpacity
                onPress={navigateTo}
                style={{

                    backgroundColor: "white",
                    borderRadius: 50,
                    width: '90%',
                    marginLeft: '5%',
                    marginRight: '5%',
                    marginBottom: 20,
                    height: 60,
                    opacity: 1,


                }}
            >
                <Text
                    style={{
                        color: 'black',
                        fontSize: 20,
                        textAlign: 'center',
                        lineHeight: 57,

                    }}
                >
                    Calender
                </Text>
            </TouchableOpacity>


            <Text style={{ color: "white", fontSize: 16, textAlign: 'center' }}>
                {errMessage}
            </Text>


            <Text
                style={{
                    fontSize: 26,
                    fontFamily: 'Roboto',
                    textAlign: 'center',
                    padding: 3,
                    borderWidth: 1,
                    marginTop: 5,
                    marginBottom: 5,
                    color: '#0C1327',
                    backgroundColor: 'white'

                }}
            >
                List of All ToDo's

            </Text>


            <ScrollView>
                {
                    students.map((item, index) => {
                        // console.log("This is Map Itens: " , item);
                        return <StudentList index={index} student={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />

                    })


                }

                {/* {load && <Text>Loading...</Text>} */}
                {load && <Progress.Circle size={30} indeterminate={true} thickness={3} duration={1000} style={{ justifyContent: 'center' }} />}


            </ScrollView>

        </View>


    );

}



export default Student;
