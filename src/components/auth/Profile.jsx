import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase";
import { Link } from 'react-router-dom';

function Profile() {
    function userSignOut() {
        signOut(auth)
        .then(() => {
            console.log(`sign out successful`);
        })
        .catch((error) => {
            console.log(error);
        });
    };
  return (
    <div>
         <button onClick={userSignOut}><Link to={"/items"}>Sign Out</Link></button>  
    </div>
  )
}

export default Profile