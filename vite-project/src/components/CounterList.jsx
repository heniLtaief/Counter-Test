import React, { useState } from "react";
import Counter from "./Counter";

const CounterList = () => {
  //make the objectArray as a state to be able to manage its values
  const [counterArray, setCounterArray] = useState([
    { id: 1, title: "title 1", value: 0 },
    { id: 2, title: "title 2", value: 0 },
    { id: 3, title: "title 3", value: 0 },
    { id: 4, title: "title 4", value: 0 },
    { id: 5, title: "title 5", value: 0 },
  ]);

  //Move counter handlers in parent component to be able to manage the values dynamically
  const handleIncrement = (id) => {
    setCounterArray((currentArray) => {
      //Loop through the counterArray state to manage each value by id
      currentArray.map((item) =>
        //Check if the id clicked equals the same id in currentArray than increment else nothing
        item.id === id ? { ...item, value: item.value + 1 } : item
      );
    });
  };

  const handleDecrement = (id) => {
    setCounterArray((currentArray) => {
      //Loop through the counterArray state to manage each value by id
      currentArray.map((item) =>
        //Check if the id clicked equals the same id in currentArray than decrement else nothing
        item.id === id ? { ...item, value: item.value - 1 } : item
      );
    });
  };

  return (
    <div className="d-flex flex-wrap">
      {counterArray.map((item) => {
        return (
          <Counter key={item.id} value={item.value}>
            {item.title}
          </Counter>
        );
      })}
    </div>
  );
};

export default CounterList;
