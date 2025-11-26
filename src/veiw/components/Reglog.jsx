import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Reglog = () => {
  return (
    <section className="reg-log-btns">
      <button title="will be able soon"  className={"btn btn-black"}>log in</button>
      <button  title="will be able soon" className="btn btn-white">
        sign in{" "}
        <FontAwesomeIcon
          style={{ color: "#aaa" }}
          icon={faArrowUpRightFromSquare}
        />
      </button>
    </section>
  );
};

export default Reglog;
