import React, { useState } from "react";
import Nav from "./Nav.jsx";
import LinkLi from "./LinkLi.jsx";
import navData from "../../model/data/nav.json";
import Linksmapper from "./Linksmapper.jsx";
import Logo from "./logo.jsx";
import Reglog from "./reglog.jsx";
import Donate from "./Donate.jsx";
import Toggle from "./Toggle.jsx";
const Header = () => {
  const [toggle,setToggle]= useState(false)
  return (
    <header className="header">
      <div className="container">

      <Logo position={"header"}></Logo>
      <Nav toggle={toggle}>
        <Linksmapper depth={1} data={navData}></Linksmapper>
      </Nav>
      <Reglog toggle={toggle}></Reglog>
      <Toggle toggle={toggle} setToggle={setToggle}></Toggle>
      </div>
    </header>
  );
};

export default Header;
