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
import Profile from "./components/auth/Profile.jsx"
import img from "./markus-winkler-afW1hht0NSs-unsplash.jpg"
import './App.css';

function App() {
  return (
    <div className='bg-gray-100 h-screen bg-cover'
    style={{backgroundImage: `url(${img}`}}>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/items" element={<Index/>}/>
        <Route path="/items/new" element={<New/>}/>
        <Route path="/items/:id" element={<Show/>}/>
        <Route path="/items/:id/edit" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
