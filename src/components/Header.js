import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="leftSide">
          <Link to="/">Axmbro</Link>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
