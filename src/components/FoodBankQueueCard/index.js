import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";


export default function FoodBankQueueCard() {
    const { id } = useParams()

    const [foodBankQueueCard, setFoodBankQueueCard] = useState({})

    function loadFoodBankQueue() {
        // API Call to retrieve customer information
        API.getFBOrders(id).then(res => {
            console.log(res)
            setFoodBankQueueCard({
                customerInfo: res
            })

        })
    }

    useEffect(() => {
        loadFoodBankQueue()
    }, [])

    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-margin-left uk-width-expand">
                <h4 style={{ textAlign: "center" }}>Customer Queue</h4>
                <ul>
                    {
                        foodBankQueueCard.customerInfo != undefined ? (

                            foodBankQueueCard.customerInfo.map((data =>
                                <li>
                                    Name: {data.Customer.firstName} {data.Customer.lastName}
                                    <br></br>
                                    Date: {data.orderDate}
                                    <br></br>
                                    Pick Up Time: {data.orderTime}
                                    <br></br>
                                    <button>View Order</button>
                                </li>
                            ))
                        ) : null
                    }
                </ul>
            </div>
        </div>
    )
}
