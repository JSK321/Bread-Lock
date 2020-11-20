import React from 'react'

export default function CustomerSignUp(props) {
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-width-1-2@m">
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle">
                        <div className="uk-width-auto" style={{ textAlign: "center" }}>
                            <img className="uk-border-circle" width="40" height="40" src="https://via.placeholder.com/150" />
                        </div>
                        <div className="uk-width-expand">
                            <h1 className="uk-card-title uk-margin-remove-bottom" style={{ textAlign: "center" }}>Register</h1>
                        </div>
                    </div>
                </div>
                <div className="uk-flex uk-flex-center">
                    <div className="uk-card uk-card-default uk-width-expand">
                        <form>
                            <input className="uk-input uk-form-width-1-2" value={props.firstName} name="firstName" onChange={props.handleInputChange} type="text" placeholder="First Name" />

                            <input className="uk-input uk-form-width-1-2" value={props.lastName} name="lastName" onChange={props.handleInputChange} type="text" placeholder="Last Name" />

                            <input className="uk-input uk-form-width-1-2" value={props.phone} name="phone" onChange={props.handleInputChange} type="text" placeholder="Phone" />

                            <input className="uk-input uk-form-width-1-2" value={props.address} name="address" onChange={props.handleInputChange} type="text" placeholder="Street Address" />

                            <input className="uk-input uk-form-width-1-2" value={props.cityName} name="cityName" onChange={props.handleInputChange} type="text" placeholder="City" />

                            <input className="uk-input uk-form-width-1-2" value={props.stateAbr} name="stateAbr" onChange={props.handleInputChange} type="text" placeholder="State" />

                            <input className="uk-input uk-form-width-1-2" value={props.zipCode} name="zipCode" onChange={props.handleInputChange} type="text" placeholder="ZipCode" />

                            <input className="uk-input uk-form-width-1-2" value={props.email} name="email" onChange={props.handleInputChange} type="text" placeholder="Email" />

                            <input className="uk-input uk-form-width-1-2" value={props.password} name="password" onChange={props.handleInputChange} type="password" placeholder="Password" />

                            <div style={{ textAlign: "center" }}>
                                <br></br>
                                <button onClick={props.handleFormSubmit}>Sign Up</button>
                            </div>
                            <br></br>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
