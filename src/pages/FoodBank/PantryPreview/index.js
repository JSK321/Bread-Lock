import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../../utils/API";

// const URL_PREFIX = "http://localhost:8080";
const URL_PREFIX = "https://breadlockapi.herokuapp.com"

export default function PantryPreview() {
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
      <div className="uk-card uk-card-default uk-margin-left uk-width-expand">
        <h4 style={{ textAlign: "center" }}>Pantry Preview</h4>
        <ul>
          {foodBank.foodList.map((pantryList) => (
            <li>
              {pantryList.Stock.stockName} Portion Available:{" "}
              {pantryList.notClaimed}
            </li>
          ))}
        </ul>

        <div className="uk-card-footer" style={{ textAlign: "center" }}>
          <Link to={"/signup"}>
            <button>Sign Up</button>
          </Link>

          <div className="uk-card-footer" style={{ textAlign: "center" }}>
            <Link to={"/customerorder/" + foodBank.FoodBankId}>
              <button>Order Food</button>
            </Link>
          </div>
        </div>
       
      </div>
    </div>
  );
}
