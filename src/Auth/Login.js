import React  from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase";

const Login = () => {

    const [email, setemail] =useState("")
    const [password, setpassword] = useState("");

    const singin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredental) => {
            console.log(userCredental);
        })
        .catch((error) => {
            console.log(error);
        })
    };

  return (
    <div className='singin'>
        <form onSubmit={singin}>
            <h1>Login to Account</h1>
            <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)} />
            <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login