import background from '../../images/background.jpg'
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";

let sectionStyle = {
  backgroundImage: "url(" +  background  + ")",
  width: "100%"
  };

export default function NavBar() {
  const { id } = useParams()

  const [getUserProfile, setUserProfile] = useState({})

  function loadAllUserProfile() {
    API.getAllProfiles().then(res => {
      setUserProfile({
        users: res
      })
    })
  }

  useEffect(() => {
    loadAllUserProfile()
  })

  return (
    <nav className="uk-navbar-container" uk-navbar="dropbar:true" style={sectionStyle}>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/map">Map</a>
          </li>
          <li>
            <a href="/signin">Sign In</a>
          </li>
          {/* <li>
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
          </li> */}
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
          <li>
            <a href="#">Profile</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                {getUserProfile.users != undefined ? (
                  getUserProfile.users.map((data =>
                    <li><Link to={"/userprofile/" + data.id}>{data.firstName}'s Profile</Link></li>
                  ))
                ) : null}
                {/* <li>
                  <a href="/foodbank">Food Bank Profile</a>
                </li>
                <li>
                  <a href="/pantry">Food Bank Pantry</a>
                </li> */}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
