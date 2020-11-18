import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";


export default function CustomerQueueCard() {
    const { id } = useParams()

    const [customerQueueCard, setCustomerQueueCard] = useState({})

    function loadCustomer() {
        // API Call to retrieve customer information
        API.getFBOrders().then(res => {
            console.log(res)
            setCustomerQueueCard({
                customerInfo: res
            })

        })

    }

    useEffect(() => {
        loadCustomer()
    }, [])

    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-margin-left uk-width-expand">
                <h4 style={{ textAlign: "center" }}>Customer Queue</h4>
                <ul>

                    <li>
                        Map over customer queue list. <button>View Customer Order</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
