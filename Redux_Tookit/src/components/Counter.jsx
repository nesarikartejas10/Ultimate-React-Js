import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  setByValue,
} from "../features/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <div>
        <input
          type="number"
          placeholder="Enter value"
          onChange={(e) => setInputValue(parseInt(e.target.value))}
          value={inputValue}
        />
        <button onClick={() => dispatch(setByValue(inputValue))}>
          Set By Value
        </button>
      </div>
    </div>
  );
};

export default Counter;
