import React from 'react'
import FoodBankQueueCard from '../../../components/FoodBankQueueCard'

export default function FoodBankQueue(props) {
    return (
        <FoodBankQueueCard 
            // customerFirstName={props}
            // customerLastName={props}
            // customerId={props}
            token={props.token}
            isLoggedIn={props.isLoggedIn}
        />
    )
}
