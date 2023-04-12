import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css'

import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from './firebase.config';

const Registration = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
const navigate= useNavigate()
    const handleSubmit = (e) =>{
    e.preventDefault()

    const auth = getAuth(app)
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) =>{
        const user = userCredential.user;
        if(auth.currentUser){
            updateProfile(auth.currentUser, {
                displayName: userName
            })
            .then(() =>{
                navigate('/home')
                console.log("user Update successfully")
            
            })
            .catch((error) =>{
                console.log(error)
            })
            navigate('/home')
        }

        
        console.log(user)
    })
    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage)
    })
    
    // const user = {
    //     Name: userName,
    //     Email: userEmail,
    //     Password: userPassword
    // }
        }

       

   
    return (
        <div>
      <form onSubmit={handleSubmit}>
  <h2>Registration Form</h2>
  <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input onChange={(e) => setUserName(e.target.value)} type="text" id="name" name="name" required />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input onChange={(e) => setUserEmail(e.target.value)} type="email" id="email" name="email" required/>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input onChange={(e) => setUserPassword(e.target.value)} type="password" id="password" name="password" required/>
  </div>
  <button type="submit">Register</button>
</form>
Existing User? <Link to={'/login'}>Login</Link>

    </div>

    );
};

export default Registration;