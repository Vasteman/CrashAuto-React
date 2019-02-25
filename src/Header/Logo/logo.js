import React from "react";

import "./logo.css";
import logo from "../../images/logo.svg";

const Logo = () => {
  return (
    <a href="#">
      <img src={logo} alt="logo" className="logo" />
    </a>
  );
};

export default Logo;
