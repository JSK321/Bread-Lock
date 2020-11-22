import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import CustomerOrderCard from '../CustomerQueueCard'
import OrderlistCard from "../OrderlistCard";


export default function FoodBankQueueCard(props) {
    const { id } = useParams()

    const [foodBankQueueCard, setFoodBankQueueCard] = useState({})

    function loadFoodBankQueue() {
        // API Call to retrieve customer information
        API.getFBOrders(id).then(res => {
            setFoodBankQueueCard({
                customerInfo: res
            })

        })
    }

    useEffect(() => {
        loadFoodBankQueue()
    }, [])

    const handleSelectClick = event => {
        event.preventDefault()
        let customerOrderId = event.target.id
        let customerRecieved = event.target.value
        let setRecievedPointer;
        if (customerRecieved === "true") {
            setRecievedPointer = false
        } else {
            setRecievedPointer = true
        }
        // console.log(customerOrderId)
        // console.log(customerRecieved)
        // console.log(setRecievedPointer)
        API.putFBOrders(setRecievedPointer, customerOrderId).then(res => {
            // console.log("im here")
            loadFoodBankQueue()
        })

    }

    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-margin-left uk-width-expand">
                <h4 style={{ textAlign: "center" }}>Customer Queue</h4>
                <ul>
                    {
                        foodBankQueueCard.customerInfo != undefined ? (

                            foodBankQueueCard.customerInfo.map((data =>
                                <li>
                                    <label className="uk-text-muted">Click Button to change Order Status</label>
                                    <br></br>
                                    <button className="uk-button uk-button-default" id={data.id} value={data.recieved} type="button" onClick={handleSelectClick}>{data.recieved === false ? "Order Pending" : "Order Complete"}</button>
                                    {/* Hint the data.id is right above */}
                                    <br></br>
                                    Name: <strong>{data.Customer.firstName} {data.Customer.lastName}</strong>
                                    <div style={{ display: `${data.recieved === false ? "block" : "none"}` }}>
                                        Pick Up Date: <strong>{data.orderDate}</strong>
                                        <br></br>
                                    Pick Up Time: <strong>{data.orderTime}</strong>
                                        <br></br>
                                        {/* <strong>{foodBankQueueCard.customerInfo != undefined ? (
                                                foodBankQueueCard.customerInfo.map((data =>
                                                    data.OrderItems.map((stockObj =>
                                                        <li style={{ display: "inline-block", margin: "2px" }}>
                                                            <p>{stockObj.Stock.stockName},</p>
                                                        </li>
                                                    ))
                                                ))) : null
                                        }</strong> */}
                                        <OrderlistCard
                                            id={data.id}
                                            isLoggedIn={props.isLoggedIn}
                                            token={props.token}
                                        />
                                        {/* So Here Instead Use a button that's id is set to data.id send me to that page */}
                                        {/* <button href="#toggle-animation" className="uk-button uk-button-default" type="button" uk-toggle="target: #toggle-animation; animation: uk-animation-fade">View Order</button> */}
                                        {/* Send it to the unique page or /order/:id */}
                                        {/* Build a page that will show all of the order items in that order, and include two buttons one to go back to the customer orders */}
                                        {/* The second to go back to the foodbank, the data for both of those are found in their objects that you will get with the get request */}
                                        {/* <div id="toggle-animation" className="uk-card uk-card-default uk-card-body uk-margin-small">
                                            <ul>
                                                {foodBankQueueCard.customerInfo != undefined ? (
                                                    foodBankQueueCard.customerInfo.map((data =>
                                                        data.OrderItems.map((stockObj =>
                                                            <li style={{ display: "inline-block", margin: "2px" }}>{stockObj.Stock.stockName},</li>
                                                        ))
                                                    ))) : null
                                                }

                                            </ul>
                                        </div> */}
                                    </div>
                                </li>
                            ))
                        ) : null
                    }
                </ul>
            </div>
        </div>
    )
}
