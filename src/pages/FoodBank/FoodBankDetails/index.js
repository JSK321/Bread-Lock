import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../../utils/API";


export default function FoodBank() {
  const [foodBank, setFoodBank] = useState({});

  const { id } = useParams();

  useEffect(() => {
    API.getOneFoodBank(id).then((res) => {
      setFoodBank(res);
    });
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
        <div className="uk-card-body" style={{ textAlign: "justify", margin: "0 auto", width: "30em" }}>
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
        <div className="uk-card-footer" style={{ textAlign: "center" }}>
          <Link to={'/pantry/' + id}>
            <button>Order Food</button>
          </Link>
          <br></br>
          <Link to={'/foodbankqueue/' + id}>
            <button>View Customer Queue</button>
          </Link>
        </div>
      </div>
    </div>

  );
}
