import { useState } from "react";

const useCounter = (initailvalue) => {
  const [count, setcount] = useState(initailvalue);

  const increment = () => {
    setcount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setcount((prevCount) => prevCount - 1);
  };

  const setByValue = (value) => {
    setcount(value);
  };

  return {
    count,
    increment,
    decrement,
    setByValue,
  };
};

export default useCounter;
