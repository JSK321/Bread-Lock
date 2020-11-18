import React from "react";
import logo from "../../images/BreadLockLogo.png";

export default function Footer() {
  return (
    <nav className="uk-uk-navbar-container" style={{ textAlign: "center" }}>
      <div className="uk-navbar-center">
        <img className="BreadLock Logo" src={logo} alt="logo" width="150px" />
      </div>
    </nav>
  );
}
