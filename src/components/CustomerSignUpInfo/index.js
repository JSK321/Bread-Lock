import React from 'react'

export default function CustomerSignUpInfo(props) {
    return (
        <div class="uk-card uk-card-default uk-margin-left uk-width-expand">
        <h4 style={{ textAlign: "center" }}>Profile</h4>
        <ul>
            <li>First Name: {props.showData?(props.firstName):null}</li>
            <br></br>
            <li>Last Name: {props.showData?(props.lastName):null}</li>
            <br></br>
            <li>Phone: {props.showData?(props.phone):null}</li>
            <br></br>
            <li>Email: {props.showData?(props.email):null}</li>
            <br></br>
            <li>Street Address: {props.showData?(props.address):null}</li>
            <br></br>
            <li>City: {props.showData?(props.cityName):null}</li>
            <br></br>
            <li>State: {props.showData?(props.stateAbr):null}</li>
            <br></br>
            <li>ZipCode: {props.showData?(props.zipCode):null}</li>
        </ul>
    </div>
    )
}
