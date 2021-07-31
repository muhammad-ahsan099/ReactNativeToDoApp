

import React from 'react';
import {View , Text , TouchableOpacity, ScrollView} from 'react-native';

function StudentList({student ,index , deleteHandler , updateHandler})
{
    return(


            <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' , padding: 5  }}
            >

                <Text style={{width: 150 , marginLeft: 5}}>
                <Text
                style={{fontSize:14 , color: 'white'  }}
                >
                    {index+1}: &nbsp;
                </Text>

                <Text
                style={{fontSize:20 , color: 'white' }}
                >
                    {student.name}
                </Text>
                </Text>

                <Text>
                <TouchableOpacity
                onPress={()=>deleteHandler(student.docID)}
                >
                    <Text
                    style={{backgroundColor: 'white' , color: 'black' , padding: 10 , width: 80,textAlign: 'center'  , borderRadius: 30, }}
                    >
                        Delete
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>updateHandler(student , index)}
                >
                    <Text
                    style={{backgroundColor: 'white' , color: 'black' , padding: 10 , width: 80 ,marginLeft: 5 ,marginRight: 5 , textAlign: 'center' , borderRadius: 30, }}
                    >
                        Update
                    </Text>
                </TouchableOpacity>
                </Text>


            </View>
 
          

        
    )

}


export default StudentList;