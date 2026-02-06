import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Product: {id}</h2>
      <button onClick={() => navigate("/products")}>Go Back to products</button>
    </div>
  );
};

export default Product;
