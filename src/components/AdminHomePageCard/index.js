import React from 'react'

export default function AdminHomePageCard(props) {
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-width-1-2@m">
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle">
                        <div className="uk-width-auto" style={{ textAlign: "center" }}>
                            <img className="uk-border-circle" width="40" height="40" src="https://via.placeholder.com/150" />
                        </div>
                        <div className="uk-width-expand">
                            <h1 className="uk-card-title uk-margin-remove-bottom" style={{ textAlign: "center" }}>Update Website Information</h1>
                        </div>
                    </div>
                </div>
                <div class="uk-flex uk-flex-center">
                    <div class="uk-card uk-card-default uk-width-expand">
                        <form>
                            <div className="uk-margin">
                                <input className="uk-input uk-form-width-1-2" value={props.streetAddress} name="streetAddress" onChange={props.handleInputChange} type="text" placeholder="Street Address" />
                            </div>
                            <div className="uk-margin">
                                <input className="uk-input uk-form-width-1-2" value={props.cityName} name="cityName" onChange={props.handleInputChange} type="text" placeholder="City" />
                            </div>
                            <div className="uk-margin">
                                <input className="uk-input uk-form-width-1-2" value={props.stateAbr} name="stateAbr" onChange={props.handleInputChange} type="text" placeholder="State" />
                            </div>
                            <div className="uk-margin">
                                <input className="uk-input uk-form-width-1-2" value={props.zipCode} name="zipCode" onChange={props.handleInputChange} type="text" placeholder="ZipCode" />
                            </div>
                            <div className="uk-margin">
                                <input className="uk-input uk-form-width-1-2" value={props.phone} name="phone" onChange={props.handleInputChange} type="text" placeholder="Phone" />
                            </div>
                            <div className="uk-margin">
                                <input className="uk-input uk-form-width-1-2" value={props.email} name="email" onChange={props.handleInputChange} type="text" placeholder="Email" />
                            </div>
                            <div className="uk-margin">
                                <input className="uk-input uk-form-width-1-2" value={props.operationHours} name="operationHours" onChange={props.handleInputChange} type="text" placeholder="Operation Hours" />
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <button onClick={props.handleFormSubmit}>Update</button>
                            </div>
                            <br></br>
                        </form>
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
