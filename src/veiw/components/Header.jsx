import React from "react";
import Nav from "./Nav.jsx";
import LinkLi from "./LinkLi.jsx";
import navData from "../../model/data/nav.json";
import Linksmapper from "./Linksmapper.jsx";
import Logo from "./logo.jsx";
import Reglog from "./reglog.jsx";
import Donate from "./Donate.jsx";
const Header = () => {
  return (
    <header className="header">
      <div className="container">

      <Logo position={"header"}></Logo>
      <Nav>
        <Linksmapper depth={1} data={navData}></Linksmapper>
      </Nav>
      <Reglog></Reglog>
      </div>
    </header>
  );
};

export default Header;
