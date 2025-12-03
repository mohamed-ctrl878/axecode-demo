import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ position }) => {
  return (
    <Link to={"/"} className={`logo-${position}`}>
      <span>
        A<span>xeCod</span>e
        <FontAwesomeIcon icon={faTerminal} />
      </span>
    </Link>
  );
};

export default Logo;
