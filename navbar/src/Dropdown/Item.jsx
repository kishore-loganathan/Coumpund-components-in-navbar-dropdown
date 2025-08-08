import React from "react";

const Item = ({ children,onClick,className}) => {
  return (
    <div
      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${className}`} onClick={onClick}
    >
      {children}
    </div>
  );
};
export default Item;