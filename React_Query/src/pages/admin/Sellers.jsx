import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";

const Sellers = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sellerInput, setSellerInput] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setSellers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  const addSeller = () => {
    const newSeller = {
      name: sellerInput,
      id: sellers.length + 1,
    };

    setSellers((prevSellers) => [newSeller, ...prevSellers]);
    setSellerInput("");

    axios
      .post("https://jsonplaceholder.typicode.com/users", newSeller)
      .then((res) => setSellers([res.data, ...sellers]))
      .catch((error) => {
        setError(error.message);
        setSellers(sellers);
      });
  };

  const deleteSeller = (id) => {
    setSellers(sellers.filter((seller) => seller.id !== id));
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .catch((error) => {
        setError(error.message);
        setSellers(sellers);
      });
  };

  return (
    <>
      <h3>Admin Sellers Page</h3>
      <div>
        <input
          type="text"
          placeholder="seller name"
          value={sellerInput}
          onChange={(e) => setSellerInput(e.target.value)}
        />
        <button onClick={addSeller}>Add Seller</button>
      </div>
      {loading && <Loader />}
      {error && <em style={{ color: "coral" }}>{error}!!</em>}
      <table>
        {sellers.map((seller) => {
          return (
            <tr>
              <td>
                <p key={seller.id}>{seller.name}</p>
              </td>
              <td>
                <button onClick={() => deleteSeller(seller.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Sellers;
