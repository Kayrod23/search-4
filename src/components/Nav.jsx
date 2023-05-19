import { Link } from 'react-router-dom';
import AuthDetails from './auth/AuthDetails';

function Nav() {
  return (
    <nav>
        <h2>Search4</h2>
        <div>
            <Link to={"/signin"}>Login</Link>
            <Link to ={"/signup"}>Sign up</Link>
            <AuthDetails/>
        </div>
    </nav>
  )
}

export default Nav