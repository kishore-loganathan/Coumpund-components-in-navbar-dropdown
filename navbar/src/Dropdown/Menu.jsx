import React, { useContext } from "react";
import { DropdownContext } from "./Dropdown";

const Menu = ({ children }) => {
  const { isOpen } = useContext(DropdownContext);

  if (!isOpen) return null;

  return (
    <div className="absolute mt-5 w-48 right-0 bg-white border rounded shadow-lg z-10">
      {children}
    </div>
  );
};

export default Menu;
