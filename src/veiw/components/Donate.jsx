import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <a className="btn btn-black" href="https://buymeacoffee.com/mohamedctrl">
      <button className=" btn-black">Donate</button>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </a>
  );
};

export default Donate;
