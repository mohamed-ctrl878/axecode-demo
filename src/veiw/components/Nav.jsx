import React from "react";
import { Link } from "react-router-dom";
import LinkLi from "./LinkLi";

const nav = ({ children }) => {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};

export default nav;
