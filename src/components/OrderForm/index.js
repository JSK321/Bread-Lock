import React, { Component } from 'react'
import foods from '../../foods.json';
import './styles.css'

export default class OrderForm extends Component {
    state = {
        foodList: foods,
        basketList: [],
        selectedFood: [],
    }
    

    render() {
        return (
            <div className="uk-flex uk-flex-center">
                <div className="uk-card uk-card-default uk-card-body " uk-grid>
                    <form>
                        <div class="uk-card-title">Food Available</div>
                        <ul>
                          
                        </ul>
                        <button className="addBtn">Add to Basket!</button>
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