import React from "react";
import { Link } from "react-router-dom";
import homepageImg from "../../../images/CoverImgIcon.png";

export default function Home() {
  return (
    <div className="uk-flex uk-flex-center">
      <div className="uk-card uk-card-default uk-width-1-2@m">
        <img
          className="hompageImg"
          src={homepageImg}
          alt="homepage"
          width="100%"
        />
        <div style={{ padding: "5%" }}>
          <h1 style={{textAlign:"center"}}>Welcome to BreadLock</h1>
          <h5 style={{ textAlign: "left" }}>
            Bread Lock is an application that connects food banks with those in need within the Seattle area.
            With the latest technology of React, Bread Lock functions on a real time basis.
            It assures receivers to feel secured as their share of food will be locked for them!
            <br />
            <br></br>
            <div style={{textAlign:"center"}}>
              Our main goal is to unite our community!
            </div>
          </h5>
        </div>
        <div style={{ textAlign: "center" }}>
          <Link to={"/map"}>
            <button className="uk-button uk-button-primary uk-button-large uk-width-1-1" style={{background: "#998e7d"}}>Foodbanks near me</button>
          </Link>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <Link to={"/signup"}>
            <button  className="uk-button uk-button-primary uk-button-large uk-width-1-1"  style={{background: "#998e7d"}}>Sign Up</button>
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
}
