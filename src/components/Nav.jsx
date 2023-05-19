import { Link } from 'react-router-dom';
import AuthDetails from './auth/AuthDetails';

function Nav() {
  return (
    <nav className="">
      <Link className="" to={"/items"}>Search4</Link>
        <div>
            <Link className='no-underline' to={"/signin"}>Login</Link>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Sign up</button>
            <Link  to={"/signup"}>sign up</Link>
            <AuthDetails/>
        </div>
    </nav> 
  )
}

export default Nav