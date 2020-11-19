import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";


export default function CustomerQueueCard() {
    const { id } = useParams()

    const [customerQueueCard, setCustomerQueueCard] = useState({})

    function loadCustomerQueue() {
        // API Call to retrieve customer order information
        API.getCustomerOrders(id).then(res => {
            setCustomerQueueCard({
                foodBankInfo: res
            })

        })
    }

    useEffect(() => {
        loadCustomerQueue()
    }, [])

   
    
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-margin-left uk-width-expand">
                <h4 style={{ textAlign: "center" }}>My Orders</h4>
                <ul>
                    {
                        customerQueueCard.foodBankInfo != undefined ? (

                            customerQueueCard.foodBankInfo.map((data =>
                                <li>
                                    <label className="uk-text-muted">Order Lists</label>
                                    <br></br>
                                    <div style={{display: `${data.recieved === false ? "block" : "none"}`}}>
                                    Pick Up Date: <strong>{data.orderDate}</strong>
                                        <br></br>
                                    Pick Up Time: <strong>{data.orderTime}</strong>

                                        <br></br>

                                        <div id="toggle-animation" className="uk-card uk-card-default uk-card-body uk-margin-small">
                                            <ul>
                                                {customerQueueCard.foodBankInfo != undefined ? (
                                                    customerQueueCard.foodBankInfo.map((data =>
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
