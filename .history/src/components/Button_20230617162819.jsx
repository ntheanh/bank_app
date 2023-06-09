import React from "react";

const Button = (styles) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient text-[18px] outline-none rounded-[10px] font-poppins font-medium text-primary ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
