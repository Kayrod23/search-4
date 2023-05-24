import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import New from "./components/New.jsx";
import Index from "./components/Index.jsx";
import Show from "./components/Show.jsx";
import Edit from "./components/Edit.jsx";
import Nav from "./components/Nav.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import img from "./markus-winkler-afW1hht0NSs-unsplash.jpg";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import './App.css';
import { auth } from "./firebase.js";

function App() {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <div
      className="bg-gray-100 h-screen w-screen bg-cover absolute top-0"
      style={{ backgroundImage: `url(${img}` }}
    >
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/items" element={<Index />} />
          <Route path="/items/:id" element={<Show />} />
          {authUser ? (
            <>
              <Route path="/items/new" element={<New />} />
              <Route path="/items/:id/edit" element={<Edit />} />
            </>
          ) : (
            <></>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
