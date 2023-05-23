import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

function AuthDetails({ options }) {
  const [authUser, setAuthUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  function userSignOut() {
    signOut(auth)
      .then(() => {
        console.log(`sign out successful`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="">
      {authUser ? (
        <>
          <div className="font-bold m-5">
            <button className="" onClick={() => setIsOpen(!isOpen)}>
              <p className="">{`${authUser.email} `}</p>
            </button>
            {isOpen && (
              <div className="">
                <ul>
                  <li className="bg-gray-600 text-white focus:outline-none rounded focus:shadow-outline p-2">
                    <Link
                      className="bg-blue-500 rounded hover:bg-blue-700 m-1 p-1"
                      to={options[0].path}
                    >
                      {options[0].name}
                    </Link>
                  </li>
                  <li className="bg-gray-600 text-white focus:outline-none rounded focus:shadow-outline p-2">
                    <button onClick={userSignOut}>
                      <Link
                        className="bg-blue-500 rounded hover:bg-blue-700 m-1 p-1"
                        to={options[1].path}
                      >
                        {options[1].name}{" "}
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="m-5">
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2"
            to={"/signin"}
          >
            Login
          </Link>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            to={"/signup"}
          >
            sign up
          </Link>
        </div>
      )}
    </div>
  );
}

export default AuthDetails