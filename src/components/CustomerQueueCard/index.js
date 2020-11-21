import React, { useEffect, useState } from "react";
import API from "../../utils/API";


export default function CustomerQueueCard(props) {
    const [customerQueueCard, setCustomerQueueCard] = useState({})

    function loadCustomerQueue() {
        // API Call to retrieve customer order information
        API.getCustomerOrders(props.token).then(res => {
            console.log(res)
            setCustomerQueueCard({
                foodBankInfo: res
            })
        })
    }

    useEffect(() => {
        loadCustomerQueue()
    }, [props.token])

    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-width-expand">
                <h4 style={{ textAlign: "center" }}>My Orders</h4>
                <ul>
                    {
                        customerQueueCard.foodBankInfo != undefined ? (

                            customerQueueCard.foodBankInfo.map((data =>
                                <li>
                                    <label className="uk-text-muted">Order Information</label>
                                    <div>
                                        <p>Pick Up Date: <strong>{data.orderDate}</strong><br />Pick Up Time: <strong>{data.orderTime}</strong></p>
                                        <p>My Basket:
                                            <strong>{customerQueueCard.foodBankInfo != undefined ? (
                                                customerQueueCard.foodBankInfo.map((data =>
                                                    data.OrderItems.map((stockObj =>
                                                        <li style={{ display: "inline-block", margin: "2px" }}>
                                                            <p>{stockObj.Stock.stockName},</p>
                                                        </li>
                                                    ))
                                                ))) : null
                                            }</strong>
                                        </p>
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
