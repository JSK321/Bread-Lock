import React, { Component } from 'react'
// import './styles.css'

export default class FbSignUp extends Component {
    state = {
        bankName: "",
        streetAddress:"",
        city: "",
        stateAbr: "",
        zipcode: "",
        phone: "",
        email: "",
        operationHours: "",
        showData: false,
        currentLog: {
            bankName: "",
            streetAddress:"",
            city: "",
            stateAbr: "",
            zipcode: "",
            phone: "",
            email: "",
            operationHours: "",
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
        if(!this.state.bankName || !this.state.streetAddress || !this.state.city || !this.state.stateAbr || !this.state.zipcode || !this.state.phone || !this.state.email || !this.state.operationHours) {
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
                bankName: "",
                streetAddress:"",
                city: "",
                stateAbr: "",
                zipcode: "",
                phone: "",
                email: "",
                operationHours: "",
                showData:true,
                currentLog:{
                    bankName: this.state.bankName,
                    streetAddress: this.state.streetAddress,
                    city: this.state.city,
                    stateAbr: this.state.stateAbr,
                    zipcode: this.state.zipcode,
                    phone: this.state.phone,
                    email: this.state.email,
                    operationHours: this.state.operationHours
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
                                <h1 className="uk-card-title uk-margin-remove-bottom" style={{ textAlign: "center" }}>Food Bank Sign Up</h1>
                            </div>
                        </div>
                    </div>
                    <div class="uk-flex uk-flex-center">
                        <div class="uk-card uk-card-default uk-width-expand">
                            <h4 style={{ textAlign: "center" }}>Food Bank Register</h4>
                            <form>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.bankName} name="bankName" onChange={this.handleInputChange} type="text" placeholder="Food Bank Name" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.streetAddress} name="streetAddress" onChange={this.handleInputChange} type="text" placeholder="Street Address" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.city} name="city" onChange={this.handleInputChange} type="text" placeholder="City" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.stateAbr} name="stateAbr" onChange={this.handleInputChange} type="text" placeholder="State" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.zipcode} name="zipcode" onChange={this.handleInputChange} type="text" placeholder="ZipCode" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.phone} name="phone" onChange={this.handleInputChange} type="text" placeholder="Phone" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.email} name="email" onChange={this.handleInputChange} type="text" placeholder="Email" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.operationHours} name="operationHours" onChange={this.handleInputChange} type="text" placeholder="Operation Hours" />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <button onClick={this.handleFormSubmit}>Sign Up</button>
                                </div>
                                <br></br>
                            </form>
                        </div>
                        <div class="uk-card uk-card-default uk-margin-left uk-width-expand">
                            <h4 style={{ textAlign: "center" }}>Food Bank Information</h4>
                            <ul>
                                <li>Food Bank: {this.state.showData?(this.state.currentLog.bankName):null}</li>
                                <br></br>
                                <li>Address: {this.state.showData?(this.state.currentLog.streetAddress):null}</li>
                                <br></br>
                                <li>City: {this.state.showData?(this.state.currentLog.city):null}</li>
                                <br></br>
                                <li>State: {this.state.showData?(this.state.currentLog.stateAbr):null}</li>
                                <br></br>
                                <li>ZipCode: {this.state.showData?(this.state.currentLog.zipcode):null}</li>
                                <br></br>
                                <li>Phone: {this.state.showData?(this.state.currentLog.phone):null}</li>
                                <br></br>
                                <li>Email: {this.state.showData?(this.state.currentLog.email):null}</li>
                                <br></br>
                                <li>Hours: {this.state.showData?(this.state.currentLog.operationHours):null}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}