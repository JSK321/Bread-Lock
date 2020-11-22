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
        <div className="uk-card-header" style={{ textAlign: "center" }}>
          <div className="uk-grid-small uk-flex-middle" uk-grid>
            <h4>{foodBank.bankName}</h4>
            {props.isLoggedIn ? null : <h6 className="uk-text-muted">Sign in to order food!</h6>}
            {props.isLoggedIn ?
            <Link to={"/customerorder/" + id}>
              <button>Order Form</button>
            </Link> :
            <Link to={"/signin"}>
              <button>Sign In</button>
            </Link>}
          {props.isLoggedIn ? null : <Link to="/signup"><button>Sign Up</button></Link>}
          {/* <Link to={'/foodbankqueue/' + id}>
            <button>View Customer Queue</button>
          </Link> */}
          </div>
        </div>
        <div className="uk-flex uk-flex-center">
          <div className="uk-card uk-card-default uk-card-body" style={{ textAlign: "center", width: "30em" }}>
            <ul>
              <li>Street Address: <strong>{foodBank.address}</strong></li>
              <hr></hr>
              <li>City: <strong>{foodBank.cityName}</strong></li>
              <hr></hr>
              <li>State: <strong>{foodBank.stateAbr}</strong></li>
              <hr></hr>
              <li>ZipCode: <strong>{foodBank.zipCode}</strong></li>
              <hr></hr>
              <li>Phone: <strong>{foodBank.phone}</strong></li>
              <hr></hr>
              <li>Email: <strong>{foodBank.email}</strong></li>
              <hr></hr>
            </ul>
          </div>
          <div className="uk-card uk-card-default uk-card-body" style={{ textAlign: "center", width: "30em" }}>
            <ul>
              {foodBankPantry.foodList.map((pantryList) => (
                <li style={{ textAlign: "center" }}>
                  <strong>{pantryList.Stock.stockName}</strong> Available: {pantryList.notClaimed}
                  <hr></hr>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}