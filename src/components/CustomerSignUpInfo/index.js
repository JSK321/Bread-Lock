import React from 'react'
import { Link } from "react-router-dom";

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
                            <li>First Name: <strong>{props.firstName}</strong></li>
                            <br></br>
                            <li>Last Name: <strong>{props.lastName}</strong></li>
                            <br></br>
                            <li>Phone: <strong>{props.phone}</strong></li>
                            <br></br>
                            <li>Email: <strong>{props.email}</strong></li>
                            <br></br>
                            <li>Street Address: <strong>{props.address}</strong></li>
                            <br></br>
                            <li>City: <strong>{props.cityName}</strong></li>
                            <br></br>
                            <li>State: <strong>{props.stateAbr}</strong></li>
                            <br></br>
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
