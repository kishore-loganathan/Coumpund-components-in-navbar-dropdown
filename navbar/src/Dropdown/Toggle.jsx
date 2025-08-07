import React, { useContext } from "react";
import { DropdownContext } from "./Dropdown";
const Toggle = ({ children }) => {
  const { toggleDropdown } = useContext(DropdownContext);
  return (
    <button
      onClick={toggleDropdown}
    >
      {children}
    </button>
  );
};

export default Toggle;
