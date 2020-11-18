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

                                    {/* <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-close-default">Default</button>

                                    <div id="modal-close-default" uk-modal>
                                        <div className="uk-modal-dialog uk-modal-body">
                                            <button className="uk-modal-close-default" type="button" uk-close></button>
                                            <h2 className="uk-modal-title">Default</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div> */}
                                </li>
                            ))
                        ) : null
                    }
                </ul>
            </div>
        </div>
    )
}
