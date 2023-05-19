import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function New() {
    const [newItem, setNewItem] = useState({
        name: "",
        image: "",
        cost: "",
        quantity: "",
        category: "",
    });
    const navigate = useNavigate();

    function handleInputChange (event) {
        const value = event.target.type === "select" ? event.target.option : event.target.value;
        setNewItem({...newItem, [event.target.id]: value});
        // setNewItem({...newItem, [event.target.id]: event.target.value});
    };

    function handleSubmit (event) {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/items`, newItem)
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
            value={newItem.name}
            onChange={handleInputChange}
            />
            <label htmlFor="image">Image: </label>
            <input 
            required
            name="image" 
            id="image" 
            type="text" 
            value={newItem.image}
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
            value={newItem.cost}
            onChange={handleInputChange}
            />
            <label htmlFor="quantity">Quantity: </label>
            <input 
            required
            name="quantity" 
            id="quantity" 
            type="number" 
            min="0"
            value={newItem.category}
            onChange={handleInputChange}
            />
            <label htmlFor="category">Category: </label>
            <input 
            name="category" 
            id="category" 
            type="select" 
            min="0"
            value={newItem.category}
            onChange={handleInputChange}
            />
        </form>
        <button type="submit" >Submit</button>
        <button><Link to={"/items"}>Cancel </Link></button>
    </div>
  )
}

export default New