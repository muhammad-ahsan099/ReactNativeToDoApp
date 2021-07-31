




// import {data} from './data';
import {useEffect, useState} from 'react';
import { useSelector , useDispatch} from 'react-redux';
// import store from '../Config/store';

import {addStudent, fetchStudents , deleteStudent , updateStudent} from "../../redux/actions/StudentAction";

export function useStudent()
{
    

    // const [students , setStudent] = useState("");
    const [errMessage , setMessage] = useState("");
    const [flag , setFlag] = useState(false)
    const [updatedIndex , setUpdatedIndex] = useState(0);
    // New Hooks Defined
    const [load, setLoading] = useState(false);
    const [ctaLoading, setCtaLoading] = useState(false);

    const dispatch = useDispatch();
    

    const [name , setName] = useState("");
    const [rollno , setRollno] = useState("");
    const [stuClass , setstuClass] = useState("");
    const [batch , setBatch] = useState("");

    // const students = useSelector(state => state.studentReducer.students)
    const students = useSelector(state=>state.StudentReducer.students)

    console.log("students from studentReducer",students);
    // setStudent(students)

    useEffect( ()=> {

        // dispatch(fetchStudents(setLoading));
        dispatch(fetchStudents(setLoading))

    } , [])


// Add New Student Function and Handler 

    const ctaHandler = ()=> {

        setMessage("")  
        if( name !== "" )
        {  
        let student = {

        name ,        
        createdAt: new Date()

        }

        console.log('Student Data:  '  , student);
        // setStudent([...students , student])
        dispatch(addStudent(student, setCtaLoading))

        setName("")
    }

        else
        {
            setMessage("Some Inputs are Empty");
        }

    } 

    // Delete Student Handler and Function 

    const deleteHandler = (docID) =>
    {
        dispatch(deleteStudent(docID, setLoading))

    };

    // Update Student Handler and Function 

    const updateHandler = (student , index)=> {
        
        console.log("Student to be Updated:   "  , student );
        setUpdatedIndex(student.docID)
        setName(student.name)
        setFlag(true);
        
    } 


    // Update Student onClick or OnPress Event 

    const ctaupdateHandler = ()=> {
        setMessage("")  
        if( name !== "" )
        {  

        let student = {
        name ,

        }

        console.log('Student Data:  '  , student);

        console.log("docID", updatedIndex);
            
        dispatch(updateStudent(updatedIndex,student, setLoading))

        setName("")
        setFlag(false);
    }

        else
        {
            setMessage("Error: Some Inputs are Empty");
        }

    
    

    }






    return [students , errMessage  , flag  ,name   ,load ,ctaLoading , setName, ctaHandler , deleteHandler , updateHandler , ctaupdateHandler]

   
}
