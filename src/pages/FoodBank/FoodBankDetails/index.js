import React from 'react'
import FoodBankSignUpInfo from '../../../components/FoodBankSignUpInfo'

//route to get foodbank by ID
//add onclick function to view  pantry page
export default function FoodBank(props) {


    return (

        <div className="uk-flex uk-flex-center">
            <div class="uk-card uk-card-default uk-margin-left uk-width-expand">
                <h4 style={{ textAlign: "center" }}>Food Bank Information</h4>
                <ul>
                    <li>Food Bank: {props.bankName}</li>
                    <br></br>
                    <li>Address: {props.streetAddress}</li>
                    <br></br>
                    <li>City: {props.city}</li>
                    <br></br>
                    <li>State: {props.stateAbr}</li>
                    <br></br>
                    <li>ZipCode: {props.zipcode}</li>
                    <br></br>
                    <li>Phone: {props.phone}</li>
                    <br></br>
                    <li>Email: {props.email}</li>
                    <br></br>
                </ul>

                <div style={{ textAlign: "center" }}>
                    <button>View Pantry</button>
                </div>
                <br />
            </div>



        </div>



    )
}
