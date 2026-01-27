import React, { useState } from "react";

const Counter = ({ message }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p style={{ color: "lightcoral", fontWeight: "500" }}>
        Note:<em>{message}</em>
      </p>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
