import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../../utils/API";
import { URL_PREFIX, URL_REDIRECT } from "../../../utils/urlPointer"

export default function FoodBank(props) {

  const { id } = useParams();

  const [foodBank, setFoodBank] = useState({});

  const [foodBankPantry, setFoodBankPantry] = useState({
    foodList: [],
    FoodBankPantryId: id,
  });

  function loadPantry() {
    API.getOneFBPantry(id).then((res) => {
      setFoodBankPantry({
        foodList: res,
        FoodBankPantryId: id,
      });
    });
  }

  function loadFoodBank() {
    API.getOneFoodBank(id).then((res) => {
      setFoodBank(res);
    });
  }

  useEffect(() => {
    loadPantry()
    loadFoodBank()

  }, []);

  return (
    <div className="uk-flex uk-flex-center">
      <div className="uk-card uk-card-default uk-width-1-2@m">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid>
            <div className="uk-width-expand">
              <h4 style={{ textAlign: "center" }}>{foodBank.bankName}</h4>
            </div>
          </div>
        </div>
        <div className="uk-flex uk-flex-center uk-flex-around">
          <div className="uk-card uk-card-default uk-card-body" style={{ textAlign: "justify", margin: "0 auto", width: "30em" }}>
            <ul>
              <li>Address: {foodBank.address}</li>
              <br></br>
              <li>City: {foodBank.cityName}</li>
              <br></br>
              <li>State: {foodBank.stateAbr}</li>
              <br></br>
              <li>ZipCode: {foodBank.zipCode}</li>
              <br></br>
              <li>Phone: {foodBank.phone}</li>
              <br></br>
              <li>Email: {foodBank.email}</li>
              <br></br>
            </ul>
          </div>
        </div>

        <div className="uk-card uk-card-default uk-card-body" style={{ textAlign: "justify", margin: "0 auto", width: "30em" }}>
          <ul>
            {foodBankPantry.foodList.map((pantryList) => (
              <li style={{ textAlign: "center" }}>
                {pantryList.Stock.stockName} Portion Available:{" "}
                {pantryList.notClaimed}
              </li>
            ))}
          </ul>
        </div>

        <div className="uk-card-footer" style={{ textAlign: "center" }}>
          <Link to={'/pantry/' + id}>
            <button>View Pantry</button>
          </Link>
          <br></br>
          <br></br>
          {props.isLoggedIn ?
            <Link to={"/customerorder/" + foodBank.FoodBankId}>
              <button>Order Form</button>
            </Link> :
            <Link to={"/signin"}>
              <button>Sign In</button>
            </Link>}
          <br></br>
          {props.isLoggedIn ? null : <Link to="/signup"><button>Sign Up</button></Link>}
          <br></br>
          <Link to={'/foodbankqueue/' + id}>
            <button>View Customer Queue</button>
          </Link>
        </div>
      </div>
    </div>

  );
}
