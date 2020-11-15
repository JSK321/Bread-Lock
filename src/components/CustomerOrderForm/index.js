import React from 'react'
import './styles.css'

export default function CustomerOrderForm(props) {
    return (
        <div>
            <form>
                <ul>
                    <li className="foodOrderList"><input className="uk-checkbox" type="checkbox" value={props.food} onClick={props.handleSelectClick} /> {props.food}</li>
                </ul>
            </form>
        </div>
    )
}
