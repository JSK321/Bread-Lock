import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../pages/FoodBank/Map/API"

export default function FoodBankSignUp(props) {
  const [bankState, setBankState] = useState({
    selectedFoodBankId: "1",
    data: [],
    dataLoaded: false,
  });
  console.log("holaaaaaa2")



  useEffect(() => {
  API.getFoodbanks().then((res) => {
    console.log(res.data[0]);
    setBankState({
      selectedFoodBankId: res.data[0].id,
      data: res.data,
      dataLoaded: true,
    });
   });    

  }, []);


  const handleSelectBank = (event) => {
      console.log("holaaaaaa")
    let selectedBank = event.target.value;
    console.log(selectedBank);
    setBankState({
      ...bankState,
      selectedFoodBankId: selectedBank,
    });
  };

  return (
    <div className="uk-flex uk-flex-center">
      <div className="uk-card uk-card-default uk-width-1-2@m">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle">
            <div className="uk-width-expand">
              <h1
                className="uk-card-title uk-margin-remove-bottom"
                style={{ textAlign: "center" }}
              >
                Register Food Bank
              </h1>
            </div>
          </div>
        </div>
        <div class="uk-flex uk-flex-center">
          <div class="uk-card uk-card-default uk-width-expand">
            <form>
              <input
                className="uk-input uk-form-width-1-2"
                value={props.bankName}
                name="bankName"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Food Bank Name"
              />

              <input
                className="uk-input uk-form-width-1-2"
                value={props.streetAddress}
                name="streetAddress"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Street Address"
              />

              <input
                className="uk-input uk-form-width-1-2"
                value={props.cityName}
                name="cityName"
                onChange={props.handleInputChange}
                type="text"
                placeholder="City"
              />

              <input
                className="uk-input uk-form-width-1-2"
                value={props.stateAbr}
                name="stateAbr"
                onChange={props.handleInputChange}
                type="text"
                placeholder="State"
              />

              <input
                className="uk-input uk-form-width-1-2"
                value={props.zipCode}
                name="zipCode"
                onChange={props.handleInputChange}
                type="text"
                placeholder="ZipCode"
              />

              <input
                className="uk-input uk-form-width-1-2"
                value={props.phone}
                name="phone"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Phone"
              />

              <input
                className="uk-input uk-form-width-1-2"
                value={props.email}
                name="email"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Email"
              />

              {/* <input className="uk-input uk-form-width-1-2" value={props.operationHours} name="operationHours" onChange={props.handleInputChange} type="text" placeholder="Operation Hours" /> */}

              <div style={{ textAlign: "center" }}>
                <br></br>
                <button onClick={props.handleFormSubmit}>Sign Up</button>
              </div>
              <br></br>
            </form>
            <br></br>
            <div className="uk-margin" style={{ textAlign: "center" }}>
              <div className="uk-form-controls">
                <h3>Select Food Bank</h3>
                <select
                  className="uk-select"
                  id="form-stacked-select"
                  onChange={handleSelectBank}
                >
                  {bankState.dataLoaded ? (
                    bankState.data.map((entry) => (
                      <option value={entry.id}>{entry.bankName}</option>
                    ))
                  ) : (""
                  )}
                </select>
                <Link to={"/adminhome/" + bankState.selectedFoodBankId}>
                  {" "}
                  <button className="uk-button uk-button-primary uk-button-small uk-width-1-1" style={{background: "#998e7d"}}>View Food Bank</button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
