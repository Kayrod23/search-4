import { Link } from 'react-router-dom';
import AuthDetails from './auth/AuthDetails';
import Logo from './Logo';

function Nav() {
  return (
    <nav className="bg-gray-600 text-white grid grid-cols-2 h-16">
      <Link  className="text-5xl m-2 flex" to={"/items"}>
       <Logo size={12}/>
        Search4
      </Link>
      <div className="justify-self-end">
        <AuthDetails
          onOptionCLick={(options) => {
            console.log(options);
          }}
          options={[
            { name: "View Profile", path: "/profile" },
            { name: "Add New Item", path: "/items/new" },
          ]}
        />
      </div>
    </nav>
  );
}

export default Nav