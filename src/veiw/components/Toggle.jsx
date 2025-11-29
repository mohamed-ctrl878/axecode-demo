import { faBars, faCancel, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Toggle = ({ toggle =false,setToggle }) => {
  return (
    <>
    {!toggle?
    <FontAwesomeIcon
    onClick={() => setToggle((e) => !e)}
    className={"toggle-btn"}
      icon={faBars}
      ></FontAwesomeIcon>
:
          <FontAwesomeIcon
      onClick={() => setToggle((e) => !e)}
      className={"toggle-btn"}
      icon={faX}
      ></FontAwesomeIcon>
    }
      </>
  );
};

export default Toggle;
