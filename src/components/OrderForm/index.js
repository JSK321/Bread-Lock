import React, { Component } from 'react'
import foods from '../../foods.json';
import './styles.css'

export default class OrderForm extends Component {
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
            selectedFood: []
        })
    }

    render() {
        return (
            <div className="uk-flex uk-flex-center">
                <div className="uk-card uk-card-default uk-card-body " uk-grid>
                    <form>
                        <div class="uk-card-title">Food Available</div>
                        <ul>
                        {this.state.foodList.map(item =>
                            <li><input className="uk-checkbox" type="checkbox" value={item.food} onClick={this.handleSelectClick}/>{item.food}</li>
                        )}
                        </ul>
                        <button className="addBtn" onClick={this.handleFormSubmit}>Add to Basket!</button>
                    </form>
                </div>

                <div className="uk-card uk-card-default uk-card-body " uk-grid>
                <div class="uk-card-title">Basket</div>
                    <ul>
                      
                    </ul>
                </div>
            </div>
        )
    }
}