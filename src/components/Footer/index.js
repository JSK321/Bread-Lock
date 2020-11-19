import React from "react";
import logo from "../../images/BreadLockLogo.png";
import background from "../../images/background.jpg"
export default function Footer() {
    let sectionStyle = {
    backgroundImage: "url(" +  background  + ")",
    width: "100%"
    };
  return (
    <nav className="uk-navbar-container uk-background-cover" uk-navbar="true" style={sectionStyle}>
      <div className="uk-navbar-center"  >
        <img className="uk-padding-small" src={logo} alt="logo" width="200px"/>
    
      </div>
    </nav>
  );
}
