import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../flexibleContents/Avatar";
import Dropdown from "../Dropdown";
const Nav = ({ pages, user }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-16 shadow-md">
      <nav className="font-bold flex items-center justify-between px-8 h-full">
        <div className="flex gap-8">
          {pages.map((m) => (
            <div
              key={m.path}
              onClick={() => navigate(m.path)}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {m.label}
            </div>
          ))}
        </div>
        <Dropdown >
          <Dropdown.Toggle>
            <Avatar
              name={user[0].name}
              className="bg-black text-white cursor-pointer"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Avatar
                name={user[0].name}
                className="bg-green-500 text-white"
              ></Avatar>
              <div className=" font-light">{user[0].email}</div>
            </Dropdown.Item>
            <hr className="my-1 border-gray-400" />
            <Dropdown.Item> subscription</Dropdown.Item>
            <Dropdown.Item> Settings</Dropdown.Item>
            <hr className="my-1 border-gray-400" />
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
};

export default Nav;
