import React, { Component } from 'react'
import './styles.css'

export default class AdminHomePage extends Component {
    state = {
        streetAddress:"",
        city: "",
        state: "",
        zipcode: "",
        phone: "",
        email: "",
        operationHours: "",
        showData: false,
        currentLog: {
            streetAddress:"",
            city: "",
            state: "",
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
        if(!this.state.streetAddress || !this.state.city || !this.state.state || !this.state.zipcode || !this.state.phone || !this.state.email || !this.state.operationHours) {
            alert("Please fill every entry in form")
        } else {
            this.setState({
                streetAddress:"",
                city: "",
                state: "",
                zipcode: "",
                phone: "",
                email: "",
                operationHours: "",
                showData:true,
                currentLog:{
                    streetAddress: this.state.streetAddress,
                    city: this.state.city,
                    state: this.state.state,
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
                                <h1 className="uk-card-title uk-margin-remove-bottom" style={{ textAlign: "center" }}>Food Bank Admin Home</h1>
                            </div>
                        </div>
                    </div>
                    <div class="uk-flex uk-flex-center">
                        <div class="uk-card uk-card-default uk-width-expand">
                            <h4 style={{ textAlign: "center" }}>Update Website Information</h4>
                            <form>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.streetAddress} name="streetAddress" onChange={this.handleInputChange} type="text" placeholder="Street Address" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.city} name="city" onChange={this.handleInputChange} type="text" placeholder="City" />
                                </div>
                                <div className="uk-margin">
                                    <input className="uk-input uk-form-width-1-2" value={this.state.state} name="state" onChange={this.handleInputChange} type="text" placeholder="State" />
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
                                    <button onClick={this.handleFormSubmit}>Update</button>
                                </div>
                                <br></br>
                            </form>
                        </div>
                        <div class="uk-card uk-card-default uk-margin-left uk-width-expand">
                            <h4 style={{ textAlign: "center" }}>Website Information</h4>
                            <ul>
                                <li>Address: {this.state.showData?(this.state.currentLog.streetAddress):null}</li>
                                <br></br>
                                <li>City: {this.state.showData?(this.state.currentLog.city):null}</li>
                                <br></br>
                                <li>State: {this.state.showData?(this.state.currentLog.state):null}</li>
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
                    <div className="uk-card-footer" style={{ textAlign: "center" }}>
                        <a href="/map" className="uk-button uk-button-text">Food Availability</a>
                        <br />
                        <a href="/customerqueue" className="uk-button uk-button-text">Customer Queue List</a>
                    </div>
                </div>
            </div>
        )
    }
}