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

    setSellers([newSeller, ...sellers]);
    setSellerInput("");

    axios
      .post("https://jsonplaceholder.typicode.com/users", newSeller)
      .then((res) => setSellers([res.data, ...sellers]))
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
      {sellers.map((seller) => {
        return <p key={seller.id}>{seller.name}</p>;
      })}
    </>
  );
};

export default Sellers;
