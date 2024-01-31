import React from "react";
import Counter from "./Counter";

const CounterList = () => {
  const objectArray = [
    { id: 1, title: "title 1", value: 10 },
    { id: 2, title: "title 2", value: 20 },
    { id: 3, title: "title 3", value: 30 },
    { id: 4, title: "title 4", value: 40 },
    { id: 5, title: "title 5", value: 50 },
  ];

  return (
    <div className="d-flex flex-wrap">
      {objectArray.map((item) => {
        return (
          <Counter key={item.id} value={item.value}>
            {item.title}
          </Counter>
        );
      })}
    </div>
  );
};
// values => dynamic
// App.jsx => sum of values
export default CounterList;
