import React from "react";
import { Link } from "react-router-dom";
import LinkLi from "./LinkLi";

const nav = ({ children, toggle}) => {
  return (
    <nav className={`${toggle ? "show-mob" : "hidden-mob"}`}>
      <ul>{children}</ul>
    </nav>
  );
};

export default nav;
