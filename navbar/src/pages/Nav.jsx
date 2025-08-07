import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../flexibleContents/Avatar";
import Dropdown from "../Dropdown";
import { NavLink } from "react-router-dom";
const Nav = ({ pages, user }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-16 shadow-md">
      <nav className="font-bold flex items-center justify-between px-8 h-full">
        <div className="flex gap-8">
          {pages.map((m) => (
            <NavLink
              key={m.path}
              to={m.path}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {m.label}
            </NavLink>
          ))}
        </div>
        <Dropdown>
          <Dropdown.Toggle>
            <Avatar
              name={null}
              className="bg-black text-white cursor-pointer"
              src={
                "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg"
              }
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Avatar
                name={user[0].name}
                className="bg-green-500 text-white h-20 w-20"
                src={
                  "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg"
                }
              ></Avatar>
              <div className=" font-light">{user[0].email}</div>
            </Dropdown.Item>
            <hr className="my-1 border-gray-400" />
            <Dropdown.Item className="text-amber-600"> subscription</Dropdown.Item>
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
