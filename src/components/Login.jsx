import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/Firebase.init';

const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const handleGoogleSignIn = () => {
  signInWithPopup(auth , googleProvider)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
  }
  return (
    <div>
      <h2>pls loging in</h2>
      <div>
        <button onClick={handleGoogleSignIn}>Sine in with google</button>
      </div>
    </div>
  );
};

export default Login;