import React, { Component } from 'react'
// import './styles.css'

export default class UserSignUp extends Component {
    state = {
        firstName: "",
        lastName:"",
        phone: "",
        email: "",
        address: "",
        cityName: "",
        stateAbr: "",
        zipCode: "",
        showData: false,
        currentLog: {
            firstName: "",
            lastName:"",
            phone: "",
            email: "",
            address: "",
            cityName: "",
            stateAbr: "",
            zipCode: "",
        }
    }

    handleInputChange = event => {
        const { name,value } = event.target
        this.setState ({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        if(!this.state.firstName || !this.state.lastName || !this.state.phone || !this.state.email || !this.state.address || !this.state.cityName || !this.state.stateAbr || !this.state.zipCode) {
            alert("Please fill every entry in form")
        } else {
            // ----------------------------------------------------------------------------------------------------------------------
            // test block of post fetch
            // ----------------------------------------------------------------------------------------------------------------------
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({         
            //         bankName: this.state.bankName,
            //         phone: this.state.phone,
            //         email: this.state.email,
            //         address: this.state.streetAddress,
            //         cityName: this.state.city,
            //         stateAbr: this.state.stateAbr,
            //         zipCode: this.state.zipcode
            //     })
            // };
            // fetch('https://localhost:8080/api/foodbank/post', requestOptions)
            //     .then(async response => {
            //         const data = await response.json();
        
            //         // check for error response
            //         if (!response.ok) {
            //             // get error message from body or default to response status
            //             const error = (data && data.message) || response.status;
            //             return Promise.reject(error);
            //         }
            //         this.setState({
            //             bankName: "",
            //             streetAddress:"",
            //             city: "",
            //             stateAbr: "",
            //             zipcode: "",
            //             phone: "",
            //             email: "",
            //             operationHours: "",
            //             showData:true,
            //             currentLog:{
            //                 bankName: this.state.bankName,
            //                 streetAddress: this.state.streetAddress,
            //                 city: this.state.city,
            //                 stateAbr: this.state.stateAbr,
            //                 zipcode: this.state.zipcode,
            //                 phone: this.state.phone,
            //                 email: this.state.email,
            //                 operationHours: this.state.operationHours
            //             }
            //         })
            //     })
            //     .catch(error => {
            //         this.setState({ errorMessage: error.toString() });
            //         console.error('There was an error!', error);
            //     });
            // ----------------------------------------------------------------------------------------------------------------------
            // end test block of post fetch
            // ----------------------------------------------------------------------------------------------------------------------

            this.setState({
                firstName: "",
                lastName:"",
                phone: "",
                email: "",
                address: "",
                cityName: "",
                stateAbr: "",
                zipCode: "",
                showData: true,
                currentLog: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    phone: this.state.phone,
                    email: this.state.email,
                    address: this.state.address,
                    cityName: this.state.cityName,
                    stateAbr: this.state.stateAbr,
                    zipCode: this.state.zipCode,
                }
            })
        }
    }

    render() {
        return (
            <div className="uk-flex uk-flex-center">
                <div className="uk-card uk-card-default uk-width-1-2@m">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle">
                            <div className="uk-width-auto" style={{ textAlign: "center" }}>
                                <img className="uk-border-circle" width="40" height="40" src="https://via.placeholder.com/150" />
                            </div>
                            <div className="uk-width-expand">
                                <h1 className="uk-card-title uk-margin-remove-bottom" style={{ textAlign: "center" }}>Sign Up</h1>
                            </div>
                        </div>
                    </div>
                    <div class="uk-flex uk-flex-center">
                        <div class="uk-card uk-card-default uk-width-expand">
                            <h4 style={{ textAlign: "center" }}>Register</h4>
                            <form>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.firstName} name="firstName" onChange={this.handleInputChange} type="text" placeholder="First Name" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.lastName} name="lastName" onChange={this.handleInputChange} type="text" placeholder="Last Name" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.phone} name="phone" onChange={this.handleInputChange} type="text" placeholder="Phone" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.email} name="email" onChange={this.handleInputChange} type="text" placeholder="Email" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.address} name="address" onChange={this.handleInputChange} type="text" placeholder="Street Address" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.cityName} name="cityName" onChange={this.handleInputChange} type="text" placeholder="City" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.stateAbr} name="stateAbr" onChange={this.handleInputChange} type="text" placeholder="State" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.zipCode} name="zipCode" onChange={this.handleInputChange} type="text" placeholder="ZipCode" />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <button onClick={this.handleFormSubmit}>Sign Up</button>
                                </div>
                                <br></br>
                            </form>
                        </div>
                        <div class="uk-card uk-card-default uk-margin-left uk-width-expand">
                            <h4 style={{ textAlign: "center" }}>Profile</h4>
                            <ul>
                                <li>First Name: {this.state.showData?(this.state.currentLog.firstName):null}</li>
                                <br></br>
                                <li>Last Name: {this.state.showData?(this.state.currentLog.lastName):null}</li>
                                <br></br>
                                <li>Phone: {this.state.showData?(this.state.currentLog.phone):null}</li>
                                <br></br>
                                <li>Email: {this.state.showData?(this.state.currentLog.email):null}</li>
                                <br></br>
                                <li>Street Address: {this.state.showData?(this.state.currentLog.address):null}</li>
                                <br></br>
                                <li>City: {this.state.showData?(this.state.currentLog.cityName):null}</li>
                                <br></br>
                                <li>State: {this.state.showData?(this.state.currentLog.stateAbr):null}</li>
                                <br></br>
                                <li>ZipCode: {this.state.showData?(this.state.currentLog.zipCode):null}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}