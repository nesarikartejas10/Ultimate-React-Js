function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/articles">Articles</a>
        </li>
        <li>
          <a href="/admin">Admin</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
