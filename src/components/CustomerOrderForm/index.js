import React from 'react'
import './styles.css'

export default function CustomerOrderForm(props) {
    return (
        <div>
            <form>
                <ul>
    <li className="foodOrderList"><input className="uk-checkbox" type="checkbox" id={props.id} value={props.StockId} onClick={props.handleSelectClick} /> {props.food} Portions Available:{props.available}</li>
                </ul>
            </form>
        </div>
    )
}
