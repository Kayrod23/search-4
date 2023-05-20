import React, {useState} from "react";
import { auth, provider } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithRedirect } from "firebase/auth";


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function signIn(event) {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate("/items")
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
            alert("Wrong email or password!!!")
        });
    } 

    function google() {
        signInWithRedirect(auth, provider);
        navigate("/items");
    }

  return (
    <div>
        <h1>Log In to your Account</h1>
        <form onSubmit={signIn}>
            <label htmlFor="email">Email: </label>
            <input 
            type="email"
            name="email" 
            id="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="password">Password: </label>
            <input 
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Log In</button>
        </form>
        <button onClick={google}>Sign in With Google</button>
    </div>
  )
}

export default SignIn