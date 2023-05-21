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
        <div>
            <button ><Link to={"/items/new"}>add New Item</Link></button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
            {items ? items.map((item) => 
                <Link className="bg-white p-6 text-center m-4" key={item.id} to={`/items/${item.id}`}>
                    <div className="grid justify-items-center h-80">
                        <p className="text-xl font-bolde">{item.name} ${item.cost}</p>
                        <img className="object-scale-down  w-64 h-56 " src={item.image} alt={item.name}/>
                        <p className="text-sm font-bold">
                            <button className="text-blue-600">See More</button>
                        </p>
                    </div>
                </Link>
            ) : null}
        </div>
    </div>
  )
}

export default Index