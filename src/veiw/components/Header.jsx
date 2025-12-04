import React, { useState } from "react";
import Nav from "./Nav.jsx";
import LinkLi from "./LinkLi.jsx";
import navData from "../../model/data/nav.json";
import Linksmapper from "./Linksmapper.jsx";
import Logo from "./Logo.jsx";
import Reglog from "./Reglog.jsx";
import Donate from "./Donate.jsx";
import Toggle from "./Toggle.jsx";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <Logo position={"header"}></Logo>
        <Nav toggle={toggle}>
          <Linksmapper
            setToggle={setToggle}
            depth={1}
            data={navData}
          ></Linksmapper>
        </Nav>
        <Reglog setToggle={setToggle} toggle={toggle}></Reglog>
        <Toggle toggle={toggle} setToggle={setToggle}></Toggle>
        {toggle && <div className="layout-log-reg"></div>}
      </div>
    </header>
  );
};

export default Header;
