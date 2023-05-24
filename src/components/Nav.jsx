import { Link } from 'react-router-dom';
import AuthDetails from './auth/AuthDetails';


function Nav() {
  return (
    <nav className="bg-gray-600 text-white grid grid-cols-2 h-16 z-50 absolute top-0 left-0 w-full">
      <Link  className="text-5xl m-2 flex" to={"/items"}>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12"
  >
    <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z"
      clipRule="evenodd"
    />
  </svg>
        Search4
      </Link>
      <div className="justify-self-end">
        <AuthDetails
          onOptionCLick={(options) => {
            console.log(options);
          }}
          options={[
            { name: "Add New Item", path: "/items/new" },
            { name: "Sign Out", path: "/items" },
          ]}
        />
      </div>
    </nav>
  );
}

export default Nav