import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";


export default function FoodBankQueueCard() {
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
        // console.log(customerOrderId)
        // console.log(customerRecieved)
        

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
                                    <label><input class="uk-checkbox" id={data.id} value={data.recieved} type="checkbox" onChange={handleSelectClick}/> {data.recieved === false ? "Order Pending" : "Order Complete"}</label>
                                    <br></br>
                                    Name: {data.Customer.firstName} {data.Customer.lastName}
                                    <div style={{display: `${data.recieved === false ? "block" : "none"}`}}>
                                    Date: {data.orderDate}
                                        <br></br>
                                    Pick Up Time: {data.orderTime}

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
