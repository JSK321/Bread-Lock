import React from 'react';
import './styles.css'

export default function CustomerOrderForm(props) {

    let renderPointer = false;
    props.checker.forEach(element => {
        if (element === props.id) {
            renderPointer = true;
        }

    });

    return (
        <div>
            <form>
                <ul>
                    <li className="foodOrderList"><input className="uk-checkbox" type="checkbox" id={props.id} value={props.StockId} onClick={props.handleSelectClick} /> <strong>{props.food}</strong> <p>Available:{props.available}</p></li>
                </ul>
            </form>
        </div>
    )
}
