import React, {useState} from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signUp(event) {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
    } 

  return (
    <div>
        <h1>Create Account</h1>
        <form onSubmit={signUp}>
            <label htmlFor="email">Email: </label>
            <input 
            type="email"
            name="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="password">Password: </label>
            <input 
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp