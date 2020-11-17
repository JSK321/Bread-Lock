import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../../utils/API";

export default function PantryData() {
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
       
        </ul>

        <div style={{ textAlign: "center" }}>
          <button>View Pantry</button>
        </div>
        <br />
      </div>
      id {id}
    </div>
  );
}
