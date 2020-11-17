import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="uk-flex uk-flex-center">
      <div className="uk-card uk-card-default uk-margin-left uk-width-expand">
        <h3>Welcome to BreadLock</h3>
        <h5 style={{ textAlign: "left" }}>
          Bread Lock is an application that connects food banks with the
          receivers in the Seattle area. Food banks in the Seattle area are
          mostly independent from each other. Each bank has their own website
          but is limited in information of their amount of food in their pantry.
          Bread Lock aims to gather information on the availability of food each
          bank has in their pantry and be able to distribute them to people who
          are in need. Receivers will be able to sign up to secure their share
          of food from the food bank and schedule a timeframe to pick it up.
          This will help reduce waste as the food bank will be able to measure
          how much food to distribute depending on the amount of receivers
          signed up. It will also help reduce contact between people during this
          ongoing pandemic as people will not need to wait in lines to receive
          their share. With the latest technology of React, Bread Lock functions
          on a real time basis, allowing receivers to feel assured as they know
          their share of food will be secured for them!
          <br />
          Main goal is to aid in our community through uniformity and
          connectivity while maintaining social distancing.
        </h5>

        <div style={{ textAlign: "center" }}>
          <Link to={"/map"}>
            <button>Foodbanks near me</button>
          </Link>
        </div>
        <br/>
        <div style={{ textAlign: "center" }}>
          <Link to={"/signup"}>
            <button>Sign Up</button>
          </Link>
        </div>


      </div>
    </div>
  );
}
