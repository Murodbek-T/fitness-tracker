import React from "react";

const Email = ({ width, className, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`placeholder:text-lg w-[${width}px] h-[50px] ${className} mt-10 text-black shadow-2xl shadow-black focus:scale-105 transition-all `}
      required
    />
  );
};

export default Email;
