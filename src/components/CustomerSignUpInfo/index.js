import React from 'react'

export default function CustomerSignUpInfo(props) {
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-width-1-2@m">
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle">
                        <div className="uk-width-auto" style={{ textAlign: "center" }}>
                            <img className="uk-border-circle" width="40" height="40" src="https://via.placeholder.com/150" />
                        </div>
                        <div className="uk-width-expand">
                            <h1 className="uk-card-title uk-margin-remove-bottom" style={{ textAlign: "center" }}>Profile</h1>
                        </div>
                    </div>
                </div>
                <div class="uk-flex uk-flex-center">
                    <div class="uk-card uk-card-default uk-width-expand">
                        <ul>
                            <li>First Name: {props.showData ? (props.firstName) : null}</li>
                            <br></br>
                            <li>Last Name: {props.showData ? (props.lastName) : null}</li>
                            <br></br>
                            <li>Phone: {props.showData ? (props.phone) : null}</li>
                            <br></br>
                            <li>Email: {props.showData ? (props.email) : null}</li>
                            <br></br>
                            <li>Street Address: {props.showData ? (props.address) : null}</li>
                            <br></br>
                            <li>City: {props.showData ? (props.cityName) : null}</li>
                            <br></br>
                            <li>State: {props.showData ? (props.stateAbr) : null}</li>
                            <br></br>
                            <li>ZipCode: {props.showData ? (props.zipCode) : null}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
