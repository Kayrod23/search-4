import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function Show() {
    const [item, setItem] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

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
        axios.delete(`${process.env.REACT_APP_API_URL}/items${id}`)
        .then(() => {
            navigate("/items");
        })
        .catch((error) => {
            console.log(error);
        });
    };

  return (
    <div>
        <img src={item.image} alt={item.name}/>
        <p>{item.name}</p>
        <p>${item.cost}</p>
        <p>{item.quantity}</p>
        {/* <p>{item.description}</p> */}
        <p>{item.category}</p>
        <div>
            <button><Link to={"/items"}>Back to all Items</Link></button>
            <button><Link to={`/items/${id}edit`}>Edit Item</Link></button>
            <button onClick={handleDelete}>Remove Item</button>
        </div>
    </div>
  )
}

export default Show