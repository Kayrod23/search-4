import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function New() {
  const [email, setEmail] = useState(null);
    const [newItem, setNewItem] = useState({
      name: "",
      image: "",
      cost: "",
      quantity: "",
      category: "",
      description: "",
      email: ""
    });
    const navigate = useNavigate();

    function handleInputChange (event) {
        setNewItem({...newItem, [event.target.id]: event.target.value});
    };

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setEmail(user.email);
        } else {
          setEmail(null);
        }
      });
      return () => {
        listen();
      };
    }, []);

    function handleSubmit (event) {
        event.preventDefault();
        setNewItem({ ...newItem, email: email });
        axios.post(`${process.env.REACT_APP_API_URL}/items`, newItem)
        .then(() => {
          console.log(newItem.email)
            navigate("/items");
        })
        .catch((error) => {
            console.log(error);
        });
    }
  return (
    <div className="flex justify-center m-32">
      <div className="w-full max-w-lg">
        <h1 className="text-xl text-center bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex">
          Add a new Item
        </h1>
        <p>{email ? email : null}</p>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name :
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                name="name"
                id="name"
                type="text"
                value={newItem.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                hidden="Image"
              >
                Image :
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                name="image"
                id="image"
                type="text"
                value={newItem.image}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Description :
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="description"
                id="description"
                type="text"
                value={newItem.description}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Cost :
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                name="cost"
                id="cost"
                type="number"
                min="0"
                step="0.01"
                value={newItem.cost}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Category :
              </label>
              <div className="relative">
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="category"
                  value={newItem.category}
                  onChange={handleInputChange}
                >
                <option value="">--Options--</option>
                  <option value="games">games</option>
                  <option value="tech">tech</option>
                  <option value="clothes">clothes</option>
                  <option value="toys">toys</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Quantity :
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="quantity"
                id="quantity"
                type="number"
                min="0"
                value={newItem.quantity}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            > Add new Item</button>
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <Link to={"/items"}>Cancel </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default New