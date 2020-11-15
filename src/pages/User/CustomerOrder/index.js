import React, { Component } from 'react'
import CustomerOrderForm from '../../../components/CustomerOrderForm'
import foods from '../../../foods.json';


export default class CustomerOrder extends Component {
    state = {
        foodList: foods,
        basketList: [],
        selectedFood: [],
    }

    handleSelectClick = event => {
        console.log("Select clicked!")
        let value = event.target.value
        console.log(value)
        let foodsList = this.state.selectedFood
        // check if the item is already in my selectedFood array
        const clickedFood = foodsList.includes(value)
        // if it's not added to array, add it
        if (!clickedFood) {
            foodsList.push(value)
            console.log(foodsList)
        } else {
            // if it is added, find where it is in array!
            console.log(foodsList)
            let foodPointer = foodsList.indexOf(value)
            // and remove it from the array!
            foodsList.splice(foodPointer)
        }
        // set the new state!
        this.setState({
            selectedFood: foodsList
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Button clicked!")
        let basket = this.state.selectedFood
        this.setState({
            basketList: basket,

        })
    }

    render() {
        return (
            <div className="uk-flex uk-flex-center">
                <div className="uk-card uk-card-default uk-card-body" uk-grid>
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle">
                            <div className="uk-width-expand">
                                <h1 className="uk-card-title uk-margin-remove-bottom" style={{ textAlign: "center" }}>Basket</h1>
                            </div>
                        </div>
                    </div>
                    {this.state.foodList.map(foodObj => (
                        <CustomerOrderForm
                            handleSelectClick={this.handleSelectClick}
                            id={foodObj.id}
                            food={foodObj.food}
                        />
                    ))}
                    <div className="uk-card-footer" style={{ textAlign: "center" }}>
                        <button className="addBtn" onClick={this.handleFormSubmit}>Order Basket!</button>
                    </div>
                </div>
            </div>
        )
    }
}

{/* <div className="uk-flex uk-flex-center">
<div className="uk-card uk-card-default uk-card-body" uk-grid>
    <form>
        <div class="uk-card-title">Basket</div>
        <ul>
            {this.state.foodList.map(item =>
                <li className="foodOrderList"><input className="uk-checkbox" type="checkbox" value={item.food} onClick={this.handleSelectClick} /> {item.food}</li>
            )}
        </ul>
        <br></br>
        <button className="addBtn" onClick={this.handleFormSubmit}>Order Basket!</button>
    </form>
</div>
</div> */}