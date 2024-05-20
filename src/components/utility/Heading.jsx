import React from "react";

const Heading = ({ children, className = "", ...props }) => {
  console.log(props);
  return (
    <div className={`text-4xl font-bold font-cursive ${className} `} {...props}>
      {children}
    </div>
  );
};

export default Heading;
