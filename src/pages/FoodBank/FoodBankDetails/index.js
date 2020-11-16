import React from 'react'
import FoodBankSignUpInfo from '../../../components/FoodBankSignUpInfo'

export default function FoodBank(props) {
    return (
        <FoodBankSignUpInfo
        showData={props.showData}
        bankName={props.bankName}
        streetAddress={props.streetAddress}
        cityName={props.cityName}
        stateAbr={props.stateAbr}
        zipCode={props.zipCode}
        phone={props.phone}
        email={props.email}
        // operationHours={props.operationHours}
    />
    )
}
