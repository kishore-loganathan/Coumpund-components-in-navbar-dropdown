import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <DropdownContext.Provider value={{ open, toggle }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  );
};

const Toggle = ({ children }) => {
  const { toggle } = useContext(DropdownContext);
  return (
    <button
      onClick={toggle}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      {children}
    </button>
  );
};

const Menu = ({ children }) => {
  const { open } = useContext(DropdownContext);
  if (!open) return null;

  return (
    <div className="absolute mt-2 w-48 bg-white border shadow-lg rounded z-10">
      {children}
    </div>
  );
};

const Item = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </div>
  );
};

Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
