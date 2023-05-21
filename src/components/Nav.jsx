import { Link } from 'react-router-dom';
import AuthDetails from './auth/AuthDetails';

function Nav() {
  return (
    <nav className="bg-gray-600 text-white grid grid-cols-2">

      <Link className="text-5xl justify-self-start" to={"/items"}>Search4</Link>
      <div className='justify-self-end'>
        <AuthDetails 
          onOptionCLick={(options) => {
            console.log(options)
          }}
          options={[
            {name: "View Profile", path: "/profile"},
          ]}
        />
      </div>
    </nav> 
  )
}

export default Nav