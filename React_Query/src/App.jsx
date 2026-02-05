import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Articles from "./pages/articles/Articles";
import Admin from "./pages/admin/Admin";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="app_main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
