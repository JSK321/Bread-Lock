import React from 'react'
import { Link } from "react-router-dom";

export default function CustomerSignUpInfo(props) {
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-width-1-2@m">
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle">
                        <div className="uk-width-expand">
                            <h1 className="uk-card-title uk-margin-remove-bottom" style={{ textAlign: "center" }}>Profile</h1>
                        </div>
                    </div>
                </div>
                <div className="uk-flex uk-flex-center">
                    <div className="uk-card uk-card-default uk-width-expand">
                        <ul>
                            <li>First Name: <strong>{props.firstName}</strong></li>
                            <hr></hr>
                            <li>Last Name: <strong>{props.lastName}</strong></li>
                            <hr></hr>
                            <li>Phone: <strong>{props.phone}</strong></li>
                            <hr></hr>
                            <li>Email: <strong>{props.email}</strong></li>
                            <hr></hr>
                            <li>Street Address: <strong>{props.address}</strong></li>
                            <hr></hr>
                            <li>City: <strong>{props.cityName}</strong></li>
                            <hr></hr>
                            <li>State: <strong>{props.stateAbr}</strong></li>
                            <hr></hr>
                            <li>ZipCode: <strong>{props.zipCode}</strong></li>
                        </ul>
                        <div className="uk-card-footer" style={{ textAlign: "center" }}>
                            <Link to="/customerqueue"><button>My Order</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
