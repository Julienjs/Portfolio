import React from "react";

const Input = ({ type, id, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="border border-black"
    />
  );
};

export default Input;
