import React, { useState } from 'react';
import {getAuth, signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth'
import app from './firebase.config';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
const navigate = useNavigate()
    const handleSubmit = (e) => {

        e.preventDefault();
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) =>{
            const user = userCredential.user;
            console.log(user)
            alert('Login Successfull')
            navigate('/home')
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage+":"+errorCode)
            console.log(error)
        })
       
    }

    const passwordReset = () =>{
        const auth = getAuth(app)
        sendPasswordResetEmail(auth, userEmail)
        .then(() =>{
            alert("Password Reset Link send in your email")
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    }

    return (
        <div>
      <form onSubmit={handleSubmit}>
  <h2>Login Form</h2>
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input onChange={(e) => setUserEmail(e.target.value)} type="email" id="email" name="email" required/>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input onChange={(e) => setUserPassword(e.target.value)} type="password" id="password" name="password" required/>
  </div>
  <Link to={'/forget'}>Forget Password</Link>
  <button type="submit">Login</button>
</form>
New User? <Link to={'/registration'}>Register</Link>
    </div>
    );
};

export default Login;