import React, { Component } from 'react'
import CustomerSignUp from '../../../components/CustomerSignUp'
import API from '../../../utils/API'
// import CustomerSignUpInfo from '../../../components/CustomerSignUpInfo'
// import './styles.css'

export default class UserSignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        address: "",
        cityName: "",
        stateAbr: "",
        zipCode: "",
        // showData: false,
        // currentLog: {
        //     firstName: "",
        //     lastName:"",
        //     phone: "",
        //     email: "",
        //     address: "",
        //     cityName: "",
        //     stateAbr: "",
        //     zipCode: "",
        // }
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        if (!this.state.firstName || !this.state.lastName || !this.state.phone || !this.state.email || !this.state.address || !this.state.cityName || !this.state.stateAbr || !this.state.zipCode) {
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
            if (this.state.password.length < 8) {
                return alert("Password must be at least 8 characters")
            } else {
                API.postCustomer(this.state.firstName, this.state.lastName, this.state.phone, this.state.email, this.state.password, this.state.address, this.state.cityName, this.state.stateAbr, this.state.zipCode)

                this.setState({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    password: "",
                    address: "",
                    cityName: "",
                    stateAbr: "",
                    zipCode: "",
                    // showData: true,
                    // currentLog: {
                    //     firstName: this.state.firstName,
                    //     lastName: this.state.lastName,
                    //     phone: this.state.phone,
                    //     email: this.state.email,
                    //     address: this.state.address,
                    //     cityName: this.state.cityName,
                    //     stateAbr: this.state.stateAbr,
                    //     zipCode: this.state.zipCode,
                    // }
                })
                alert("Singup Successful. Please Signin.")
            }
        }
    }

    render() {
        return (
            <div>
                <CustomerSignUp
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                    email={this.state.email}
                    password={this.state.password}
                    address={this.state.address}
                    cityName={this.state.cityName}
                    stateAbr={this.state.stateAbr}
                    zipCode={this.state.zipCode}
                />
                <br></br>
                {/* <CustomerSignUpInfo 
                showData={this.state.showData}
                firstName={this.state.currentLog.firstName}
                lastName={this.state.currentLog.lastName}
                phone={this.state.currentLog.phone}
                email={this.state.currentLog.email}
                address={this.state.currentLog.address}
                cityName={this.state.currentLog.cityName}
                stateAbr={this.state.currentLog.stateAbr}
                zipCode={this.state.currentLog.zipCode}
                /> */}
            </div>
        )
    }
}