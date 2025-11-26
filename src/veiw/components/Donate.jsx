import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Donate = () => {
  return <button className="btn btn-black">donate <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>;
};

export default Donate;
