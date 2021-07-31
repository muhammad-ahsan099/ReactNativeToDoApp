


import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { doSignUp } from '../../../src/redux/actions/AuthAction';


export default function UseSignIn() {
    // const [name , setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()


    const doSignupUser = ()=>{

        let user = {
            
            email ,
            password
        }
        dispatch(doSignUp(user))

        setEmail("")
        setPassword("")
    }

    return [ email , password ,setEmail,setPassword,doSignupUser]
}