import React from "react";

export default function NavBar() {
  return (
    <nav className="uk-navbar-container" uk-navbar="dropbar:true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/map">Map</a>
          </li>
          <li>
            <a href="#">View Pantry</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a href="/customerorder">Order Page</a>
                </li>
                <li>
                  <a href="/pantrydata">Available Food</a>
                </li>
                <li>
                  <a href="/customerqueue">Recipient Queue List</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Profile</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a href="/profile">Profile Page</a>
                </li>
                <li>
                  <a href="/foodbank">Food Bank Profile</a>
                </li>
                <li>
                  <a href="/pantry">Food Bank Pantry</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Sign Up</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a href="/adminhome">Admin Home Page</a>
                </li>
                <li>
                  <a href="/fbsignup">Register Food Bank</a>
                </li>
                <li>
                  <a href="/signup">Register as Recipient</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
