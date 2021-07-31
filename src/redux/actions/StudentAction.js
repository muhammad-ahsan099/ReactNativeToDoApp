


import  {db} from '../../config/Firebase'
import { ADD_STUDENT , UPDATE_STUDENT , DELETE_STUDENT  ,FETCH_STUDENT  } from "../type/Type"; 

export const fetchStudents =  (setLoading) => async (dispatch , previouState) => {
    try {
        setLoading(true)
        let snapshot = await db.collection('students').get() ;
        let students = [] ;
        snapshot.forEach((doc)=>{
            students.push({
                docID: doc.id ,
                ...doc.data(),
            })
        })

    console.log("Data fetch from firestore" , students);
        dispatch({
            type: FETCH_STUDENT ,
            payload: students
        })


        
    } catch (error) {
        console.log("Error in Fetching Students" , error);
        alert(error)
    }

    finally{
        setLoading(false)
    }
}



export const addStudent =  (data ,setLoading) => async (dispatch , previouState) => {
    try {
        setLoading(true)
       const res =  await db.collection('students').add(data) ;
        
        

    console.log("Data Added into  firestore", res );
        dispatch({
            type: ADD_STUDENT ,
            payload: data
        })


        
    } catch (error) {
        console.log("Error in Add/Upload Students" , error);
        alert("Error At Add Student" , error)
    }

    finally{
        setLoading(false)
    }
}

// Delete Student in Action 

export const deleteStudent =  (docID ,setLoading) => async (dispatch , previouState) => {
    try {
        setLoading(true)
        await db.collection('students').doc(docID).delete() ;
        

    console.log("Data Delete from firestore" );
        dispatch({
            type: DELETE_STUDENT ,
            payload: docID
        })


        
    } catch (error) {
        console.log("Error in Deleting a Students" , error);
        alert(error)
    }

    finally{
        setLoading(false)
    }
}

// Update Student in Action 

export const updateStudent =  (docID,data ,setLoading) => async (dispatch , previouState) => {
    try {
        setLoading(true)
        await db.collection('students').doc(docID).update(data) ;
        

    console.log("Data Update to firestore" );
        dispatch({
            type: UPDATE_STUDENT ,
            payload: {docID,data}
        })


        
    } catch (error) {
        console.log("Error in Update Students" , error);
        alert(error)
    }

    finally{
        setLoading(false)
    }
}