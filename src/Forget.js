import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, {useState} from 'react';
import app from './firebase.config';
import { useNavigate } from 'react-router-dom';

const Forget = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        const auth = getAuth(app)
        sendPasswordResetEmail(auth, email)
        .then(() =>{
            navigate('/login')
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
    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required/>
  </div>
  <button type="submit">Submit</button>
</form>  
        </div>
    );
};

export default Forget;