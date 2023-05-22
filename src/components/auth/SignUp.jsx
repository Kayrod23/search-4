import React, {useState} from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const naviagte = useNavigate();
 
    function signUp(event) {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            naviagte("/items")
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
    } 

  return (
    <div>
    <div className='flex justify-center m-32'>
      <div className="w-full max-w-sm">
      <h1 className="text-xl text-center bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex">
        Create your 
        <p className="m-1"></p>
        <Logo size={6}/>
        <p className="m-1"></p>
        Account
        </h1>
        <form
          onSubmit={signUp}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
        </button>
          </div>
        </form>
      </div>
    </div>
        {/* <form onSubmit={signUp}>
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
        </form> */}
    </div>
  )
}

export default SignUp