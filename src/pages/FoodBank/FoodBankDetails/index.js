import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
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
      <div className="uk-card uk-card-default uk-margin-left uk-width-expand">
        <h4 style={{ textAlign: "center" }}>Food Bank Information</h4>
        <ul>
          <li>Food Bank: {foodBank.bankName}</li>
          <br></br>
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

        <div style={{ textAlign: "center" }}>
          <Link to= {'/pantry/' + id}>
            <button>View Pantry</button>
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
}
