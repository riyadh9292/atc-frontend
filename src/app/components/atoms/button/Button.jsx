import React from "react";

const Button = ({ variant, onClick, children }) => {
  let classes = "px-4 py-2 rounded-lg";
  if (variant === "primary") {
    classes += " bg-fanta text-white";
  } else if (variant === "secondary") {
    classes += " bg-gray-500 text-white";
  } else {
    classes += " bg-gray-200 text-gray-800";
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
