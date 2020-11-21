import React from 'react'
import CustomerQueueCard from '../../../components/CustomerQueueCard'

export default function CustomerQueue(props) {
    return (
        <CustomerQueueCard
            id={props.id}
            token={props.token}
            isLoggedIn={props.isLoggedIn}
        />
    )
}
