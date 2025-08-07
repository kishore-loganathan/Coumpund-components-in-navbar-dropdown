import React, { createContext, useState } from "react";
export const DropdownContext = createContext();
const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);
  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown }}>
      <div className="relative inline-block text-left">{children}</div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
