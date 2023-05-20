import { useEffect, useState } from 'react';
import { onAuthStateChanged} from 'firebase/auth';
import { auth } from "../../firebase";
import { Link } from 'react-router-dom';

function AuthDetails({options}) {
    const [authUser, setAuthUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            };
        });
        return () => {
            listen();
        };
    }, []);

  return (
    <div className='' >{authUser ?
        <>
        <div className=''>
        <button className='' onClick={() => setIsOpen(!isOpen)}>
            <p className='' >{`Signed In as ${authUser.email}`}</p>
        </button>
        {isOpen && 
        <div>
            <ul>
                {options.map((option, index) => 
                <li key={index}><Link to={option.path}>{option.name}</Link></li>)}
            </ul>
        </div>}
        </div>
        </> : 
        <div>
            <Link className="" to={"/signin"}>Login</Link>
            <Link  to={"/signup"}>sign up</Link>
        </div>
    }</div>
  )
}

export default AuthDetails