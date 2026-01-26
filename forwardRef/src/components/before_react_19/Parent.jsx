import { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "white";
    inputRef.current.style.color = "black";
    inputRef.current.value = "Tejas";
  };
  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={handleClick}>Before React 19</button>
    </div>
  );
};

export default Parent;
