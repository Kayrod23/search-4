import { useState, useEffect } from "react";
import { onAuthStateChanged} from 'firebase/auth';
import { auth } from "../firebase";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function Show() {
    const [item, setItem] = useState({});
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams();

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

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/items/${id}`)
        .then((res) => {
            setItem(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    function handleDelete () {
        axios.delete(`${process.env.REACT_APP_API_URL}/items/${id}`)
        .then(() => {
            navigate("/items");
        })
        .catch((error) => {
            console.log(error);
        });
    };
    console.log(item.email)

  return (
    <div className="flex justify-center my-20">
    <div className="max-w-md rounded overflow-hidden bg-gray-200 shadow-2xl grid justify-items-start">
        <img className="object-scale-down w-96 h-96 place-self-center m-4" src={item.image} alt={item.name}/>
        <div className="p-2 text-gray-700 text-base h-48 overflow-y-scroll grid ">
        <p className="font-bold text-md">{item.name} <span>${item.cost}</span></p> 
        <p>{item.description}</p>
        <p>Stock : {item.quantity}</p>
        <p>Category : {item.category}</p>
        <p>Email :{item.email} </p>
       {authUser && authUser.email === item.email ? 
        <div className="grid grid-cols-3 gap-2 my-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"><Link to={"/items"}>Back to all Items</Link></button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><Link to={`/items/${id}/edit`}>Edit Item</Link></button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleDelete}>Remove Item</button>
    </div> :
        <div className="grid grid-cols-2 gap-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"><Link to={"/items"}>Back to all Items</Link></button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"><Link to={"/items"}>Add to Cart</Link></button>
        </div>}
        </div>
    </div>
    </div>
  )
}

export default Show