import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";

const Sellers = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setSellers(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <h3>Admin Sellers Page</h3>
      {loading && <Loader />}
      {sellers.map((seller) => {
        return <p key={seller.id}>{seller.name}</p>;
      })}
    </>
  );
};

export default Sellers;
