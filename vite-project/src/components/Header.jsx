import React from "react";

const Header = ({ valuesSum }) => {
  return (
    <div className="mb-5">
      {" "}
      <h3>The sum is: {valuesSum}</h3>
    </div>
  );
};

export default Header;
