import { getAuth, updatePassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import app from './firebase.config';
import { useNavigate } from 'react-router-dom';

const UpdateDetails = () => {
const navigate = useNavigate()
    const [updateName, setUpdateName] = useState()
    const [ updateUserPassword, setUpdateUserPassword] = useState()
    const auth = getAuth(app)
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(updateName, updatePassword)
        updateProfile(auth.currentUser, {
            displayName: updateName
        })
        .then(() =>{
            
            console.log("Name Update successfully")

            updatePassword(auth.currentUser, updateUserPassword)
        .then(() =>{
            console.log('Password Updated Successfully')
        })
        .catch((error) =>{
            console.log(error)
        })
        
        })
        .catch((error) =>{
            console.log(error)
        })
        
        
        


    }
    return (
        <div>
         <h1>This is Update User Details Page</h1>   
         <form onSubmit={handleSubmit}>
  <h2>Registration Form</h2>
  <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input onChange={(e) => setUpdateName(e.target.value)} type="text" id="name" name="name" />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input onChange={(e) => setUpdateUserPassword(e.target.value)} type="password" id="password" name="password"/>
  </div>
  <button type="submit">Register</button>
</form>
        </div>
    );
};

export default UpdateDetails;