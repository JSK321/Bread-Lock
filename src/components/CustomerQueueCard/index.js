import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";


export default function CustomerQueueCard() {
    const { id } = useParams()

    const [CustomerQueueCard, setCustomerQueueCard] = useState({})

    function loadCustomerQueue() {
        // API Call to retrieve customer information
        API.getCustomerrders(id).then(res => {
            setCustomerQueueCard({
                foodBankInfo: res
            })

        })
    }

    useEffect(() => {
        loadCustomerQueue()
    }, [])

    const handleSelectClick = event => {
        event.preventDefault()
        let foodBankOrderId = event.target.id
        let foodBankRecieved = event.target.value
        let setRecievedPointer;
        if (foodBankRecieved === "true"){
            setRecievedPointer = false 
        } else {
            setRecievedPointer = true
        }
        // console.log(customerOrderId)
        // console.log(customerRecieved)
        // console.log(setRecievedPointer)
        API.putFBOrders(setRecievedPointer, customerOrderId).then(res => {
            // console.log("im here")
            loadCustomerQueue()
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
                                    <br></br>
                                    Name: <strong>{data.Customer.firstName} {data.Customer.lastName}</strong>
                                    <div style={{display: `${data.recieved === false ? "block" : "none"}`}}>
                                    Pick Up Date: <strong>{data.orderDate}</strong>
                                        <br></br>
                                    Pick Up Time: <strong>{data.orderTime}</strong>

                                        <br></br>
                                        <button href="#toggle-animation" className="uk-button uk-button-default" type="button" uk-toggle="target: #toggle-animation; animation: uk-animation-fade">View Order</button>
                                        <div id="toggle-animation" className="uk-card uk-card-default uk-card-body uk-margin-small">
                                            <ul>
                                                {foodBankQueueCard.customerInfo != undefined ? (
                                                    foodBankQueueCard.customerInfo.map((data =>
                                                        data.OrderItems.map((stockObj =>
                                                            <li style={{ display: "inline-block", margin: "2px" }}>{stockObj.Stock.stockName},</li>
                                                        ))
                                                    ))) : null
                                                }
                                            </ul>
                                        </div>
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
