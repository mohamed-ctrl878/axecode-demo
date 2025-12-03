import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Reglog = ({ toggle, setToggle }) => {
  const [localToggle, setLocalToggle] = useState(false);
  useEffect(() => {
    if (!localToggle) return;
    const time = setTimeout(() => {
      setLocalToggle(false);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [localToggle]);
  console.log(localToggle);
  return (
    <>
      <section className={`reg-log-btns ${toggle ? "show-btn" : "hidden-btn"}`}>
        <button
          onClick={() => {
            setToggle((e) => !e);
            setLocalToggle(true);
          }}
          title="will be able soon"
          className={"btn btn-black"}
        >
          log in
        </button>
        <button
          onClick={() => {
            setToggle((e) => !e);
            setLocalToggle(true);
          }}
          title="will be able soon"
          className="btn btn-white"
        >
          sign in{" "}
          <FontAwesomeIcon
            style={{ color: "#aaa" }}
            icon={faArrowUpRightFromSquare}
          />
        </button>
      </section>
      {localToggle && (
        <section className="container log-reg-message">
          <p>Soon you can sign/log in</p>
        </section>
      )}

    </>
  );
};

export default Reglog;
