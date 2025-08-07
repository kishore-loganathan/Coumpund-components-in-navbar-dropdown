import React from "react";
const Avatar = ({ name, className,src}) => {
  const initial = name? name.charAt(0).toUpperCase():"U";
  return (
    <div className={`w-10 h-10 rounded-full overflow-hidden ${className}`}>
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className={`w-full h-full flex items-center justify-center  ${className}`}>
          {initial}
        </div>
      )}
    </div>
  );
};

export default Avatar;
