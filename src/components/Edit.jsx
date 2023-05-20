import { useState, useEffect } from "react";
import { useNavigate,Link, useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
    const [editItem, setEditItem] = useState({
        name: "",
        image: "",
        cost: "",
        quantity: "",
        category: "",
    });
    const navigate = useNavigate();
    const {id} = useParams();

    function handleInputChange (event) {
        const value = event.target.type === "select" ? event.target.option : event.target.value;
        setEditItem({...editItem, [event.target.id]: value});
        // setNewItem({...newItem, [event.target.id]: event.target.value});
    };

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/items/${id}`)
      .then((res) => {
        setEditItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [id]);

    function handleSubmit (event) {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/items/${id}`, editItem)
        .then(() => {
            navigate("/items");
        })
        .catch((error) => {
            console.log(error);
        });
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input 
            required
            name="name" 
            id="name" 
            type="text" 
            value={editItem.name}
            onChange={handleInputChange}
            />
            <label htmlFor="image">Image: </label>
            <input 
            required
            name="image" 
            id="image" 
            type="text" 
            value={editItem.image}
            onChange={handleInputChange}
            />
            <label htmlFor="cost">Cost: </label>
            <input 
            required
            name="cost" 
            id="cost" 
            type="number" 
            min="0"
            step="0.01"
            value={editItem.cost}
            onChange={handleInputChange}
            />
            <label htmlFor="quantity">Quantity: </label>
            <input 
            required
            name="quantity" 
            id="quantity" 
            type="number" 
            min="0"
            value={editItem.quantity}
            onChange={handleInputChange}
            />
            <label htmlFor="category">Category: </label>
            <input 
            name="category" 
            id="category" 
            type="select" 
            min="0"
            value={editItem.category}
            onChange={handleInputChange}
            />
        </form>
        <button type="submit" >Submit</button>
        <button><Link to={"/items"}>Cancel </Link></button>
    </div>
  )
}

export default Edit