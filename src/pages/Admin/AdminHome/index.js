import React, { Component, useEffect, useState} from 'react';
import {withRouter} from "react-router";
import { Link } from 'react-router-dom';
import AdminHomePageCard from '../../../components/AdminHomePageCard';
import AdminWebsiteInfo from '../../../components/AdminWebsiteInfo';
import API from "../../../utils/API"
import axios from 'axios'
import {URL_PREFIX} from "../../../utils/urlPointer"


class AdminHome extends Component {

    constructor(props){
        super(props);
        this.state = {
        bankName: "",
        streetAddress: "",
        cityName: "",
        stateAbr: "",
        zipCode: "",
        phone: "",
        email: "",
        availability:"",
//        FoodBankId: id,
        showData:false,
       }
       this.id = this.props.match.params.id
       console.log(this.id)
      //  this.loadFoodBank();
    }

  //  loadFoodBank() {
  //        API.getOneFoodBank(this.id).then((res) => {
  //          console.log(res)
          //  this.setState({
            //     bankName: res.bankName,
            //     streetAddress: res.address,
            //     cityName: res.cityName,
            //     stateAbr: res.stateAbr,
            //     zipCode: res.zipCode,
            //     phone: res.phone,
            //     email: res.email,
            //     availability: res.availability,
            //     FoodBankId: this.id,
            //     showData: true
            //  });
    //      })
    //  }


    componentDidMount() {
      API.getOneFoodBank(this.id).then((res) => {
        console.log(res)
        this.setState({
             bankName: res.bankName,
             streetAddress: res.address,
             cityName: res.cityName,
             stateAbr: res.stateAbr,
             zipCode: res.zipCode,
             phone: res.phone,
             email: res.email,
             availability: res.availability,
             FoodBankId: this.id,
             showData: true
          });
      })
    }
    componentDidUpdate() {
     
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
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
                  let newAvailability;
                  console.log(this.state.availability)
                  if (this.state.availability==="true"){
                    newAvailability = true
                  } else {
                    newAvailability = false
                  }

                  console.log(newAvailability)
                  const requestOptions = {
                  method: "PUT",
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
                    availability: newAvailability
                  }),          
                };
                console.log(requestOptions.body)
                fetch(`${URL_PREFIX}/api/foodbank/put/${this.id}`, requestOptions)
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
                 alert ("Update Successful!")
                  })
                  .catch((error) => {
                    this.setState({ errorMessage: error.toString() });
                    console.error("There was an error!", error);
                  });
                  
                  
                  
                });
            }
          
    }

   
        render (){
            return (<div>
                <AdminHomePageCard
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    bankName={this.state.bankName}
                    streetAddress={this.state.streetAddress}
                    cityName={this.state.cityName}
                    stateAbr={this.state.stateAbr}
                    zipCode={this.state.zipCode}
                    phone={this.state.phone}
                    email={this.state.email}
                    availability={this.state.availability}
                />
                <hr />

                <button class="uk-button uk-button-default" type="button">
            <Link to={'/foodbankqueue/' + this.state.FoodBankId} className="uk-button uk-button-text">
              View Customer Cue
            </Link>
          </button>
                {/* <AdminWebsiteInfo
                    showData={foodBank.showData}
                    streetAddress={foodBank.streetAddress}
                    cityName={foodBank.cityName}
                    stateAbr={foodBank.stateAbr}
                    zipCode={foodBank.zipCode}
                    phone={foodBank.phone}
                    email={foodBank.email}
                    operationHours={foodBank.operationHours}
                /> */}
            </div>)
        }
    
}
//react router recommendation 
export default withRouter(AdminHome);