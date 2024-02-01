import React from "react";

const Counter = ({
  children,
  value,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div>
      <h1>{children}</h1>
      <h2>{value}</h2>
      <div className="d-flex gap-2">
        <button onClick={handleIncrement}>+</button>
        <button disabled={value === 0} onClick={handleDecrement}>
          -
        </button>
        <button disabled={value === 0} onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
