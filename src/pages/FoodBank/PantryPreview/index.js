import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../../utils/API";
import {URL_PREFIX, URL_REDIRECT} from "../../../utils/urlPointer"
// const URL_PREFIX = "http://localhost:8080";
// const URL_PREFIX = "https://breadlockapi.herokuapp.com"

export default function PantryPreview(props) {
  const { id } = useParams();

  const [foodBank, setFoodBank] = useState({
    foodList: [],
    FoodBankId: id,
  });

  function loadPantry() {
    API.getOneFBPantry(id).then((res) => {
      setFoodBank({
        foodList: res,
        FoodBankId: id,
      });
    });
  }

  useEffect(() => {
    loadPantry();
  }, []);

  return (
    <div className="uk-flex uk-flex-center">
      <div className="uk-card uk-card-default uk-width-3-4">
        <div className="uk-card-header">
          <h4 style={{ textAlign: "center" }}>Pantry Preview</h4>
        </div>
        <ul>
          {foodBank.foodList.map((pantryList) => (
            <li style={{ textAlign: "center" }}>
              {pantryList.Stock.stockName} Portion Available:{" "}
              {pantryList.notClaimed}
            </li>
          ))}
        </ul>

        <div className="uk-card-footer" style={{ textAlign: "center" }}>
          {props.isLoggedIn ? 
          <Link to={"/customerorder/" + foodBank.FoodBankId}>
              <button>Order Food</button>
            </Link> : 
            <Link to={"/signin"}>
              <button>Sign In</button>
            </Link>}

        </div>
      </div>

    </div>

  );
}
