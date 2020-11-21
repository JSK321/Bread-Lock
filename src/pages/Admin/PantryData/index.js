import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../../utils/API";
import { URL_PREFIX, URL_REDIRECT } from "../../../utils/urlPointer"
// const URL_PREFIX = "http://localhost:8080";
// const URL_PREFIX = "https://breadlockapi.herokuapp.com"

export default function PantryPreview() {
  const { id } = useParams();

  const [foodBank, setFoodBank] = useState({
    foodList: [],
    FoodBankId: id,
    foodItem: "",
    foodAmount: ""
  });

  const [foodBankProfile, setFoodBankProfile] = useState({})

  function loadPantry() {
    API.getOneFBPantry(id).then((res) => {
      setFoodBank({
        foodList: res,
        FoodBankId: id,
      });
    });

    API.getOneFoodBank(id).then(res => {
      setFoodBankProfile(res)
    })
  }

  // function updatePantry() {
  //   API.putOnePantryItem(id).then(res => {

  //   })
  // }

  useEffect(() => {
    loadPantry();
  }, []);

  const handleFormSubmit = event => {
    event.preventDefault();
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFoodBank({
      ...foodBank,
      [name]: value
    })

  }

  return (
    <div className="uk-flex uk-flex-center">
      <div className="uk-card uk-card-default uk-width-1-2@m">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid>
            <h4 style={{ textAlign: "center" }}>{foodBankProfile.bankName}</h4>
          </div>
        </div>
        <div className="uk-flex uk-flex-center uk-flex-around">
          <div className="uk-card uk-card-default uk-card-body" style={{ textAlign: "justify", margin: "0 auto", width: "30em" }}>
            <ul style={{ textAlign: "center" }}>
              <h5>Available Portions</h5>
              {foodBank.foodList.map((pantryList) => (
                <form>
                  <input className="uk-input" type="text" value={foodBank.foodItem} placeholder={pantryList.Stock.stockName} onChange={handleInputChange} disabled/>
                  <input className="uk-input" type="number" value={foodBank.foodAmount} placeholder={pantryList.notClaimed} onChange={handleInputChange}/>
                </form>
              ))}
              <br></br>
              <input type="submit" value="Update" />
            </ul>
          </div>
          <div className="uk-card uk-card-default uk-card-body" style={{ textAlign: "justify", margin: "0 auto", width: "30em" }}>
            <h5>Add Food</h5>
            <form>
              <input className="uk-input" type="text" onChange={handleInputChange} placeholder="Food name" />
              <input className="uk-input" type="text" onChange={handleInputChange} placeholder="Amount" />
              <div style={{ textAlign: "center" }}>
                <br></br>
                <input type="submit" value="Add" />
              </div>
            </form>
          </div>
        </div>
        <div className="uk-card-footer" style={{ textAlign: "center" }}>
          <Link to={'/foodbankqueue/' + id}>
            <button>View Customer Queue</button>
          </Link>
        </div>
      </div>
    </div>

  );
}

{/* <ul>
{foodBank.foodList.map((pantryList) => (
  <li>
    {pantryList.Stock.stockName} Portion Available:{" "}
    {pantryList.notClaimed}
  </li>
))}
</ul> */}

{/* <div className="uk-card-body uk-width-1-2" style={{ textAlign: "justify", margin: "0 auto", width: "30em" }}>
<ul>
  <h5>Available Portions</h5>
  {foodBank.foodList.map((pantryList) => (
    <li>
      {pantryList.Stock.stockName} Portion Available:{" "}
      {pantryList.notClaimed}
    </li>
  ))}
</ul>
</div>
<div className="uk-card-body uk-width-1-2" style={{ textAlign: "justify", margin: "0 auto", width: "30em" }}>
<h5>Update Portions</h5>
</div> */}