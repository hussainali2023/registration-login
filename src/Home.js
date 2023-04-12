import React, { useState } from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import app from './firebase.config';
import { Link } from 'react-router-dom';
import UpdateDetails from './UpdateDetails';
const Home = () => {
    const [currentUserEmail, setCurrentUserEmail] = useState('')
    const [currentUserName, setCurrentUserName] = useState('')
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

    return (
        <div>
            
            <h1>This is Home Page</h1>
            Name: {currentUserName} <br />
            Email: {currentUserEmail}  <br />
If you want to update your details Please click here <Link to={'/update'}>Update Details</Link>
<UpdateDetails/>
        </div>
    );
};

export default Home;