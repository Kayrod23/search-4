import React, { useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function signIn(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/items");
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
        alert("Wrong Email or Password!!!!");
      });
  }

  function google() {
    signInWithPopup(auth, provider).catch((error) => {
      alert(error);
    });
    navigate("/items");
  }

  return (
    <div className="flex justify-center mt-32">
      <div className="w-full max-w-sm">
        <div className="text-xl text-center bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl text-center flex">
          Log In to your
          <p className="m-1"></p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z"
              clipRule="evenodd"
            />
          </svg>
          <p className="m-1"></p>
          Account
        </h1>
        <button
            className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 my-4 rounded focus:outline-none focus:shadow-outline "
            onClick={google}
          >
            Sign in With Google
          </button>
        </div>
        <form
          onSubmit={signIn}
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
          <div className="flex items-center justify-between">
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
  );
}

export default SignIn;
