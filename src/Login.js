import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth} from './firebase';


        
function Login() {
    // Seting up the email with database from firebase.
    const history = useHistory();  
    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');

    const loginuser = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {    // auth is the transform form the database to the system
            history.push('/')
        })
        .catch(e => alert(e.message))
    }
     // Seting up the password with database from firebase.
     const signupuser = event => {
         event.preventDefault();
         auth.createUserWithEmailAndPassword(useremail, userpassword)
         .then(auth => {    // auth is the transform form the database to the system
             history.push('/');
         })
         .catch(e => alert(e.message))
     }

    return(


        <div className="login">
           <Link>
              <img className="login_logo"
               src="/images/logoVaccine.png" alt="Login-Logo" />
           </Link> 
            <div className="login__container">
                <h1>Signin</h1>
                <form>
                   <h5>Email</h5> 
                   <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email" />
                   <h5>Password</h5>
                   <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password" />
                   <button onClick={loginuser} type="submit" className="login_signInButton">Sign</button>
                </form>
                <p>by signing-in, you agree to World Lab Terms and Conditions.</p>
                <button onClick={signupuser}  className="login_registerButton">Create Your Accuont</button>
            </div>
        </div>
    )
}


export default Login;