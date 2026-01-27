import { useState } from "react";
import useCounter from "../custom_hook/useCounter";

const CountTracker = () => {
  const { count, increment, decrement, setByValue } = useCounter(0);
  const [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <div className="flex justify-center items-center gap-5 mt-5">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <div className="border border-white rounded-lg">
          <input
            className="py-2 px-1 border-none outline-none"
            type="number"
            placeholder="Enter value..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={() => setByValue(inputValue)}>Set Value</button>
        </div>
      </div>
    </div>
  );
};

export default CountTracker;
