import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products";
import Articles from "../../pages/articles/Articles";
import Admin from "../../pages/admin/Admin";
import NotFound from "../../pages/not-found/NotFound";
import Product from "../../pages/products/Product";
import Sales from "../../pages/admin/Sales";
import Sellers from "../../pages/admin/Sellers";

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="sales" element={<Sales />} />
        <Route path="sellers" element={<Sellers />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRouting;
