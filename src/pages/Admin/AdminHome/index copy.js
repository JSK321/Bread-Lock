import React, { Component } from 'react'
import AdminHomePageCard from '../../../components/AdminHomePageCard'
import AdminWebsiteInfo from '../../../components/AdminWebsiteInfo'

export default class AdminHome extends Component {
    state = {
        streetAddress: "",
        cityName: "",
        stateAbr: "",
        zipCode: "",
        phone: "",
        email: "",
        operationHours: "",
        showData: false,
        currentLog: {
            streetAddress: "",
            cityName: "",
            stateAbr: "",
            zipCode: "",
            phone: "",
            email: "",
            operationHours: "",
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        if (!this.state.streetAddress || !this.state.cityName || !this.state.stateAbr || !this.state.zipCode || !this.state.phone || !this.state.email || !this.state.operationHours) {
            alert("Please fill every entry in form")
        } else {
            this.setState({
                streetAddress: "",
                cityName: "",
                stateAbr: "",
                zipCode: "",
                phone: "",
                email: "",
                operationHours: "",
                showData: true,
                currentLog: {
                    streetAddress: this.state.streetAddress,
                    cityName: this.state.cityName,
                    stateAbr: this.state.stateAbr,
                    zipCode: this.state.zipCode,
                    phone: this.state.phone,
                    email: this.state.email,
                    operationHours: this.state.operationHours
                }
            })
        }
    }

    render() {
        return (
            <div>
                <AdminHomePageCard
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    streetAddress={this.state.streetAddress}
                    cityName={this.state.cityName}
                    stateAbr={this.state.stateAbr}
                    zipCode={this.state.zipCode}
                    phone={this.state.phone}
                    email={this.state.email}
                    operationHours={this.state.operationHours}
                />
                <hr />
                {/* <AdminWebsiteInfo
                    showData={this.state.showData}
                    streetAddress={this.state.currentLog.streetAddress}
                    cityName={this.state.currentLog.cityName}
                    stateAbr={this.state.currentLog.stateAbr}
                    zipCode={this.state.currentLog.zipCode}
                    phone={this.state.currentLog.phone}
                    email={this.state.currentLog.email}
                    operationHours={this.state.currentLog.operationHours}
                /> */}
            </div>
        )
    }
}