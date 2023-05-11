import React, { useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import UpdateDetails from '../Update/UpdateDetails';
import app from '../firebase.config';

const Home = () => {
    const [currentUserEmail, setCurrentUserEmail] = useState('')
    const [currentUserName, setCurrentUserName] = useState('')
    const [userData, setUserData] = useState()
    const navigate = useNavigate()
    const auth = getAuth(app)
    onAuthStateChanged(auth, (user) =>{
        if(user){
            const email = user.email;
            setCurrentUserEmail(email)
            const name = user.displayName;
            setCurrentUserName(name)
        }
        else{
            <p>User not available</p>
        }
    })
const logout = () =>{
    signOut(auth)
    .then((data) =>{
        alert("Signout Successful")
        console.log(data)
        navigate('/login')
    })
    .catch((error) =>{
        alert(error)
    })
    
}

// console.log(currentUserEmail)

  useEffect(() => {
    fetch(`http://localhost:5000/user/${currentUserEmail}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error(error));
  }, []);
 
// console.log(userData)
    return (
        <div>
            
          
           
                Name: {currentUserName} <br />
                Email: {currentUserEmail}  <br />
                <button onClick={logout}>Logout</button>
                <UpdateDetails/>                
            
             
           
          
        </div>
    );
};

export default Home;