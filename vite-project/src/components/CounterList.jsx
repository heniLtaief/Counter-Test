import React, { useState } from "react";
import Counter from "./Counter";
import Header from "./Header";

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
    //Loop through the counterArray state to manage each value by id
    const updateCounter = counterArray.map((item) =>
      //Check if the id clicked equals the same id in currentArray than increment else nothing
      item.id === id ? { ...item, value: item.value + 1 } : item
    );
    setCounterArray(updateCounter);
  };

  const handleDecrement = (id) => {
    //Loop through the counterArray state to manage each value by id
    const updateCounter = counterArray.map((item) =>
      //Check if the id clicked equals the same id in currentArray than decrement else nothing
      item.id === id ? { ...item, value: item.value - 1 } : item
    );
    setCounterArray(updateCounter);
  };

  const handleReset = (id) => {
    const updateCounter = counterArray.map((item) =>
      //Reset the value with the clicked id
      item.id === id ? { ...item, value: 0 } : item
    );
    setCounterArray(updateCounter);
  };

  //Loop through the counterArray and sum the values
  const valuesSum = counterArray.reduce((acc, item) => acc + item.value, 0);

  return (
    <>
      <Header valuesSum={valuesSum} />
      <div className="d-flex flex-wrap gap-3">
        {counterArray?.map((item) => {
          return (
            <Counter
              key={item.id}
              value={item.value}
              handleIncrement={() => handleIncrement(item.id)}
              handleDecrement={() => handleDecrement(item.id)}
              handleReset={() => handleReset(item.id)}
            >
              {item.title}
            </Counter>
          );
        })}
      </div>
    </>
  );
};

export default CounterList;
