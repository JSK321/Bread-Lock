import React, { Component } from 'react'
import FoodBankSignUp from '../../../components/FoodBankSignUp'
import FoodBankSignUpInfo from '../../../components/FoodBankSignUpInfo'
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
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        if (!this.state.bankName || !this.state.streetAddress || !this.state.cityName || !this.state.stateAbr || !this.state.zipCode || !this.state.phone || !this.state.email) {
            alert("Please fill every entry in form")
        } else {
            // ----------------------------------------------------------------------------------------------------------------------
            // test block of post fetch
            // ----------------------------------------------------------------------------------------------------------------------
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({         
                    bankName: this.state.bankName,
                    phone: this.state.phone,
                    email: this.state.email,
                    streetAddress: this.state.streetAddress,
                    cityName: this.state.cityName,
                    stateAbr: this.state.stateAbr,
                    zipCode: this.state.zipCode
                })
            };
            fetch('https://localhost:8080/api/foodbank/post', requestOptions)
                .then(async response => {
                    const data = await response.json();

                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }
                    this.setState({
                        bankName: "",
                        streetAddress:"",
                        cityName: "",
                        stateAbr: "",
                        zipCode: "",
                        phone: "",
                        email: "",
                        // operationHours: "",
                        showData:true,
                        currentLog:{
                            bankName: this.state.bankName,
                            streetAddress: this.state.streetAddress,
                            cityName: this.state.cityName,
                            stateAbr: this.state.stateAbr,
                            zipCode: this.state.zipCode,
                            phone: this.state.phone,
                            email: this.state.email,
                            // operationHours: this.state.operationHours
                        }
                    })
                })
                .catch(error => {
                    this.setState({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
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
    }

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
                <br></br>
                <FoodBankSignUpInfo
                    showData={this.state.showData}
                    bankName={this.state.currentLog.bankName}
                    streetAddress={this.state.currentLog.streetAddress}
                    cityName={this.state.currentLog.cityName}
                    stateAbr={this.state.currentLog.stateAbr}
                    zipCode={this.state.currentLog.zipCode}
                    phone={this.state.currentLog.phone}
                    email={this.state.currentLog.email}
                    // operationHours={this.state.currentLog.operationHours}
                />
            </div>
        )
    }
}