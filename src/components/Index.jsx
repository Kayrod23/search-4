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
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {items
          ? items.map((item) => (
              <Link
                className="bg-gray-200 p-6 text-center m-4 max-w-lg rounded overflow-hidden shadow-2xl grid justify-items-center content-center"
                key={item.id}
                to={`/items/${item.id}`}
              >
                <div className="grid justify-items-center h-80">
                  <img
                    className="object-scale-down  w-64 h-56 "
                    src={item.image}
                    alt={item.name}
                  />
                   <p className="text-xl font-bolde">
                    {item.name} ${item.cost}
                  </p>
                  <p className="text-sm font-bold">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">See More</button>
                  </p>
                </div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}

export default Index