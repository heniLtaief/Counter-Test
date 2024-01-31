import React, { useState } from "react";

const Counter = ({ children, value }) => {
  const [count, setCount] = useState(value);
  return (
    <div>
      <h1>{children}</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>
        -
      </button>
      <button disabled={count === 0} onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
};

export default Counter;
