import React from "react";
const Avatar = ({ name, className}) => {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${className}`}
    >
      {initial}
    </div>
  );
};

export default Avatar;
