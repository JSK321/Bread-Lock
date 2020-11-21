import React, { Component } from "react";
import FoodBankSignUp from "../../../components/FoodBankSignUp";
import {URL_PREFIX} from "../../../utils/urlPointer"
import {Redirect} from 'react-router-dom'
// import API from "../../../utils/API";
import axios from 'axios'
// import './styles.css'

export default class FbSignUp extends Component {
  state = {
    bankName: "",
    streetAddress: "",
    cityName: "",
    stateAbr: "",
    zipCode: "",
    phone: "",
    email: "",
    // operationHours: "",
    showData: false,
    currentLog: {
      bankName: "",
      streetAddress: "",
      cityName: "",
      stateAbr: "",
      zipCode: "",
      phone: "",
      email: "",
      // operationHours: "",
    },
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
      // ----------------------------------------------------------------------------------------------------------------------
      // test block of post fetch
      // ----------------------------------------------------------------------------------------------------------------------
    if (
      !this.state.bankName ||
      !this.state.streetAddress ||
      !this.state.cityName ||
      !this.state.stateAbr ||
      !this.state.zipCode ||
      !this.state.phone ||
      !this.state.email
    ) {
      alert("Please fill every entry in form");
    } else {
      let location = `${this.state.streetAddress} ${this.state.cityName} ${this.state.stateAbr}`;
      const APIKey = "51966f60-25d5-11eb-a940-51e78db4786d";
      axios
        .get(
          `https://app.geocodeapi.io/api/v1/search?apikey=${APIKey}&text=${location}`
        )
        .then((res) => {
          console.log(res);
          return {
            lat: res.data.bbox[1],
            long: res.data.bbox[0],
          };
        })
        .then((coords) => {
            console.log(coords)
            console.log(this.state.streetAddress)
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              bankName: this.state.bankName,
              phone: this.state.phone,
              email: this.state.email,
              address: this.state.streetAddress,
              cityName: this.state.cityName,
              stateAbr: this.state.stateAbr,
              zipCode: this.state.zipCode,
              latitude: coords.lat,
              longitude: coords.long,
            }),
          };
          fetch(`${URL_PREFIX}/api/foodbank/post`, requestOptions)
            .then(async (response) => {
              const data = await response.json();
              console.log(response);
              console.log(data);
              // check for error response
              if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
              }
              this.setState({
                bankName: "",
                streetAddress: "",
                cityName: "",
                stateAbr: "",
                zipCode: "",
                phone: "",
                email: "",
                // operationHours: "",
                showData: true,
                currentLog: {
                  bankName: this.state.bankName,
                  streetAddress: this.state.streetAddress,
                  cityName: this.state.cityName,
                  stateAbr: this.state.stateAbr,
                  zipCode: this.state.zipCode,
                  phone: this.state.phone,
                  email: this.state.email,
                  // operationHours: this.state.operationHours
                },
              });
            })
            .catch((error) => {
              this.setState({ errorMessage: error.toString() });
              console.error("There was an error!", error);
            });
            
            //take in the new added ID
            // Redirect to adminHome page with new food Bank id
          });


      // ----------------------------------------------------------------------------------------------------------------------
      // end test block of post fetch
      // ----------------------------------------------------------------------------------------------------------------------

      // this.setState({
      //     bankName: "",
      //     streetAddress: "",
      //     cityName: "",
      //     stateAbr: "",
      //     zipCode: "",
      //     phone: "",
      //     email: "",
      // operationHours: "",
      //     showData: true,
      //     currentLog: {
      //         bankName: this.state.bankName,
      //         streetAddress: this.state.streetAddress,
      //         cityName: this.state.cityName,
      //         stateAbr: this.state.stateAbr,
      //         zipCode: this.state.zipCode,
      //         phone: this.state.phone,
      //         email: this.state.email,
      //         operationHours: this.state.operationHours
      //     }
      // })
    }
  };




  render() {
    return (
      <div>
        <FoodBankSignUp
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          bankName={this.state.bankName}
          streetAddress={this.state.streetAddress}
          cityName={this.state.cityName}
          stateAbr={this.state.stateAbr}
          zipCode={this.state.zipCode}
          phone={this.state.phone}
          email={this.state.email}
          // operationHours={this.state.operationHours}
        />
       

        {/* <FoodBankSignUpInfo
          showData={this.state.showData}
          bankName={this.state.currentLog.bankName}
          streetAddress={this.state.currentLog.streetAddress}
          cityName={this.state.currentLog.cityName}
          stateAbr={this.state.currentLog.stateAbr}
          zipCode={this.state.currentLog.zipCode}
          phone={this.state.currentLog.phone}
          email={this.state.currentLog.email}
          // operationHours={this.state.currentLog.operationHours}
        /> */}
      </div>
    );
  }
}
