import React, { Component, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CustomerOrderForm from '../../../components/CustomerOrderForm'
import CustomerPickUpForm from '../../../components/CustomerPickUpForm';
// import foods from '../../../foods.json';
import FoodBank from '../../FoodBank/FoodBankDetails';
import API from "../../../utils/API"


export default function CustomerOrder() {
    const { id } = useParams();

    const [customerOrder, setCustomerOrder] = useState({
        foodList: [],
        basketList: [],
        selectedFood: [],
        orderDate: "",
        orderTime: "",
        CustomerId: 1, // change to specific customer order, 
        FoodBankId: id
    })

    function loadPantry() {
        API.getOneFBPantry(id).then((res) => {
            setCustomerOrder({
                foodList: res,
                basketList: [],
                selectedFood: [],
                orderDate: "",
                orderTime: "",
                CustomerId: 1, // change to specific customer order, 
                FoodBankId: id
            })
        });
    }

    useEffect(() => {
        loadPantry()
    }, [])

    const handleSelectDay = event => {
        let day = event.target.value
        setCustomerOrder({
            ...customerOrder,
            orderDate: day
        })
    }

    const handleSelectTime = event => {
        let time = event.target.value
        setCustomerOrder({
            ...customerOrder,
            orderTime: time
        })

    }

    const handleSelectClick = event => {
        console.log("Select clicked!")
        let value = event.target.value
        console.log(value)
        let foodsList = customerOrder.selectedFood
        // check if the item is already in my selectedFood array
        const clickedFood = foodsList.includes(value)
        // if it's not added to array, add it
        if (!clickedFood) {
            foodsList.push(value)
            console.log(foodsList)
        } else {
            // if it is added, find where it is in array!

            // Function to check if any selected is empty

            // 
            console.log(foodsList)
            let foodPointer = foodsList.indexOf(value)
            // and remove it from the array!
            foodsList.splice(foodPointer)
        }
        // set the new state!
        setCustomerOrder({
            ...customerOrder,
            selectedFood: foodsList
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log("Button clicked!")
        let basket = customerOrder.selectedFood
        // check to see if at least one item is clicked aka basket is empty
        if (customerOrder.basketList === []) {
            alert("Please select some items to add to your basket")
        } else {
            // generate a post request for new order
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderDate: customerOrder.orderDate,
                    recieved: false,
                    CustomerId: customerOrder.CustomerId,
                    FoodBankId: customerOrder.FoodBankId
                })
            };
            fetch('http://localhost:8080/api/order/post', requestOptions)
                .then(async response => {
                    const data = await response.json();
                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }
                })
                .catch(error => {
                    // this.setState({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
                });
        }

        // individually check every item in the basket with the stock database
        // if it matches, create a post to order list
        // also if it matches, create a put request to update the claimed and unclaimed pantry list ALL in one fuction
        // set the state back to default

        setCustomerOrder({
            ...customerOrder,
            basketList: basket
        })

    }

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
                <CustomerPickUpForm
                    handleSelectDay={handleSelectDay}
                    handleSelectTime={handleSelectTime}
                />
                {customerOrder.foodList.map(foodObj => (
                    <CustomerOrderForm
                        handleSelectClick={handleSelectClick}
                        id={foodObj.id}
                        food={foodObj.Stock.stockName}
                        available={foodObj.notClaimed}
                    />
                ))}
                <div className="uk-card-footer" style={{ textAlign: "center" }}>
                    <button className="addBtn" onClick={handleFormSubmit}>Order Basket!</button>
                </div>
            </div>
        </div>
    )



    //--------------------------------------------------------------------------------

    // state = {
    //     foodList: foods,
    //     basketList: [],
    //     selectedFood: []
    // }

    // handleSelectClick = event => {
    //     console.log("Select clicked!")
    //     let value = event.target.value
    //     console.log(value)
    //     let foodsList = this.state.selectedFood
    //     // check if the item is already in my selectedFood array
    //     const clickedFood = foodsList.includes(value)
    //     // if it's not added to array, add it
    //     if (!clickedFood) {
    //         foodsList.push(value)
    //         console.log(foodsList)
    //     } else {
    //         // if it is added, find where it is in array!
    //         console.log(foodsList)
    //         let foodPointer = foodsList.indexOf(value)
    //         // and remove it from the array!
    //         foodsList.splice(foodPointer)
    //     }
    //     // set the new state!
    //     this.setState({
    //         selectedFood: foodsList
    //     })
    // }

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     console.log("Button clicked!")
    //     let basket = this.state.selectedFood
    //     this.setState({
    //         basketList: basket,

    //     })
    // }

    // render() {
    //     return (
    //         <div className="uk-flex uk-flex-center">
    //             <div className="uk-card uk-card-default uk-card-body" uk-grid>
    //                 <div className="uk-card-header">
    //                     <div className="uk-grid-small uk-flex-middle">
    //                         <div className="uk-width-expand">
    //                             <h1 className="uk-card-title uk-margin-remove-bottom" style={{ textAlign: "center" }}>Basket</h1>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 {this.state.foodList.map(foodObj => (
    //                     <CustomerOrderForm
    //                         handleSelectClick={this.handleSelectClick}
    //                         id={foodObj.id}
    //                         food={foodObj.food}
    //                     />
    //                 ))}
    //                 <div className="uk-card-footer" style={{ textAlign: "center" }}>
    //                     <button className="addBtn" onClick={this.handleFormSubmit}>Order Basket!</button>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}