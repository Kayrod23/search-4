import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Index() {
    const [items, setItems] = useState([]);

    useEffect (() => {
        axios.get(`${process.env.REACT_APP_API_URL}/items`)
        .then((res) => {
            setItems(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

  return (
    <div>
        {items ? items.map((item) => 
            <Link key={item.id} to={`/items/${item.id}`}>
                <div>
                    <img src={item.image} alt={item.name}/>
                    <h3 className="text-3xl font-bold underline">{item.name} ${item.cost}</h3>
                </div>
            </Link>
        ) : null}
    </div>
  )
}

export default Index