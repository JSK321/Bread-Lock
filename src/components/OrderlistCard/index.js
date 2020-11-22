import React, { useEffect, useState } from "react";
import API from '../../utils/API'

export default function OrderlistCard(props) {


    const [orderList, setOrderlist] = useState({
        id: 0,
        stuff: [],
        loaded: false,
    })

    function loadOrder() {
        // API Call to retrieve customer order information
        console.log(props.id);
        API.getOneOrdersItems(props.id).then(res => {
            console.log(orderList);
            setOrderlist({
                id: props.id,
                stuff: res,
                loaded:true
            })
            console.log(orderList);
        })
    }

    useEffect(() => {
        loadOrder()
    }, [props.token, props.id])

    return (
        <div>
            {/* <p>I'm Here a card :D</p> */}
            {orderList.stuff != undefined ? (
                orderList.stuff.map((stockObj =>
                    <li style={{ display: "inline-block", margin: "2px" }}>
                        <p>{stockObj.Stock.stockName},</p>
                    </li>
                ))
            ) : null}
        </div>
    )
}
