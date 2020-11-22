import React from "react";
import './styles.css'

export default function AdminHomePageCard(props) {
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
                Food bank Information
              </h1>
            </div>
          </div>
        </div>
        <div class="uk-flex uk-flex-center">
          <div class="uk-card uk-card-default uk-width-expand">
            <form>
              <h5>FoodBank Name:</h5>
              <input
                className="uk-input uk-form-width-1-2"
                value={props.bankName}
                name="bankName"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Foodbank Name"
              />
              <h5>Street:</h5>
              <input
                className="uk-input uk-form-width-1-2"
                value={props.streetAddress}
                name="streetAddress"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Street Address"
              />
              <h5>City:</h5>
              <input
                className="uk-input uk-form-width-1-2"
                value={props.cityName}
                name="cityName"
                onChange={props.handleInputChange}
                type="text"
                placeholder="City"
              />
              <h5>State:</h5>
              <input
                className="uk-input uk-form-width-1-2"
                value={props.stateAbr}
                name="stateAbr"
                onChange={props.handleInputChange}
                type="text"
                placeholder="State"
              />
              <h5>Zip Code:</h5>
              <input
                className="uk-input uk-form-width-1-2"
                value={props.zipCode}
                name="zipCode"
                onChange={props.handleInputChange}
                type="text"
                placeholder="ZipCode"
              />
              <h5>Phone:</h5>
              <input
                className="uk-input uk-form-width-1-2"
                value={props.phone}
                name="phone"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Phone"
              />
              <h5>E-mail:</h5>
              <input
                className="uk-input uk-form-width-1-2"
                value={props.email}
                name="email"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Email"
              />
              <h5>Availability:</h5>
              <select
                className="uk-input uk-form-width-1-2"
                value={props.availability}
                name="availability"
                onChange={props.handleInputChange}
              >
                <option value="true">Open</option>
                <option value="false">Closed</option>
              </select>

              <div style={{ textAlign: "center" }}>
                <br></br>
                <button onClick={props.handleFormSubmit}>Update</button>
              </div>
              <br></br>
            </form>
          </div>
        </div>
        <div className="uk-card-footer" style={{ textAlign: "center" }}>
          {/* <button
            class="uk-button uk-button-default"
            type="button"
            uk-toggle="target: .toggle"
          >
            Availablity
          </button>
          <br />
          <img
            src={Open}
            alt="Open"
            class="toggle"
            style={{ width: "40px", margin: "10px" }}
          />
          <img
            src={Closed}
            alt="Closed"
            class="toggle"
            style={{ width: "40px", margin: "10px" }}
            hidden
          /> */}
        </div>
      </div>
    </div>
  );
}
