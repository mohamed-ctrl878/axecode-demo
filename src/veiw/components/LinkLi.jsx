import React from "react";
import { Link } from "react-router-dom";

const LinkLi = ({ children, className, path, onClick }) => {
  return (
    <li onClick={onClick} className={className}>
      <Link to={path}>{children}</Link>
    </li>
  );
};

export default LinkLi;
