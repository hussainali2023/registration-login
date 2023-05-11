import { getAuth, updatePassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase.config';
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
            updateUser(updateName)
            
            console.log("Name Update successfully")
            alert("Name Update Successfull")

            updatePassword(auth.currentUser, updateUserPassword)
        .then(() =>{
            console.log('Password Updated Successfully')
            alert("Password Update Successfull")
        })
        .catch((error) =>{
            console.log(error)
        })
        
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    const updateUser = (name, email) => {
        const user = { name: name };
        // console.log(user);
        fetch(`http://localhost:5000/update/${email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      };

    return (
        <div> 
         <form onSubmit={handleSubmit}>
  <h2>Update Name and Password</h2>
  <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input onChange={(e) => setUpdateName(e.target.value)} type="text" id="name" name="name" />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input onChange={(e) => setUpdateUserPassword(e.target.value)} type="password" id="password" name="password"/>
  </div>
  <button type="submit">Update</button>
</form>
        </div>
    );
};

export default UpdateDetails;