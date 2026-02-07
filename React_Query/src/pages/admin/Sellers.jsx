import axios from "axios";
import { useEffect, useState } from "react";

const Sellers = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setSellers(res.data));
  }, []);
  return (
    <>
      <h3>Admin Sellers Page</h3>
      {sellers.map((seller) => {
        return <p key={seller.id}>{seller.name}</p>;
      })}
    </>
  );
};

export default Sellers;
