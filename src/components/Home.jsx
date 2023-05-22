import { Link } from "react-router-dom"
import Logo from "./Logo"

function Home() {
  return (
    <div className=" h-screen flex items-center justify-center">
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex text-4xl" to="/items">
      <Logo size={12}/>
      <p className="m-1"></p>
        Start the Search
      </Link>
    </div>
  )
}

export default Home