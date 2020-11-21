import React, { useEffect, useState } from "react";
import API from '../../utils/API'

export default function OrderlistCard(props) {


    const [orderlist, setOrderlist] = useState({
        id: 0,
        stuff: []
    })

    function loadOrder() {
        // API Call to retrieve customer order information
        console.log(props.id);
        API.getOneOrdersItems(props.id).then(res => {
            console.log(res)
            setOrderlist({
                id: props.id,
                stuff: res
            })
        })
    }

    useEffect(() => {
        loadOrder()
    }, [props.token])

    return (
        <div>
            {/* <p>I'm Here a card :D</p> */}
            {orderlist.stuff != undefined ? (
                orderlist.stuff.map((stockObj =>
                    <li style={{ display: "inline-block", margin: "2px" }}>
                        <p>{stockObj.Stock.stockName},</p>
                    </li>
                ))
            ) : null}
        </div>
    )
}
