import { useState } from "react";
import "./App.css";
import User from "./components/User";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && <User />}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "hide" : "show"}
      </button>
    </>
  );
}

export default App;
