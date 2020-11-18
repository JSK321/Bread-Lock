import React, { Component, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CustomerOrderForm from '../../../components/CustomerOrderForm'
import CustomerPickUpForm from '../../../components/CustomerPickUpForm';
// import foods from '../../../foods.json';
import FoodBank from '../../FoodBank/FoodBankDetails';
import API, { postOneOrderItem, putOnePantryItem } from "../../../utils/API"


export default function CustomerOrder() {
    const { id } = useParams();

    const [customerOrder, setCustomerOrder] = useState({
        foodList: [],
        basketList: [],
        selectedFood: [],
        selectedStock: [],
        orderDate: "",
        orderTime: "",
        CustomerId: 1, // change to specific customer order, 
        FoodBankId: id,
        availablePointer: true,
        lastOrder: 0
    })

    function loadPantry() {
        API.getOneFBPantry(id).then((res) => {
            setCustomerOrder({
                foodList: res,
                basketList: [],
                selectedFood: [],
                selectedStock: [],
                orderDate: "",
                orderTime: "",
                CustomerId: 1, // change to specific customer order, 
                FoodBankId: id,
                availablePointer: true,
                lastOrder: 0
            })
        });
    }

    function afterOrder() {
        API.getOneFBPantry(id).then((res) => {
            setCustomerOrder({
                foodList: res,
                basketList: [],
                selectedFood: [],
                selectedStock: [],
                orderDate: "",
                orderTime: "",
                CustomerId: 1, // change to specific customer order, 
                FoodBankId: id,
                availablePointer: true,
                lastOrder: 0
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



    function changeClaimedPantry(id) {
        let newClaimed = customerOrder.foodList[id].claimed + 1;
        let newNotClaimed = customerOrder.foodList[id].notClaimed - 1;
        putOnePantryItem(newClaimed, newNotClaimed, id);
    }


    function checkForAvailable(id) {
        for (let i = 0; i < customerOrder.foodList.length; i++) {
            if (customerOrder.foodList[i].id === id) {
                if (customerOrder.foodList[i].notClaimed > 0) {
                    return true
                } else {
                    setCustomerOrder({
                        ...customerOrder,
                        availablePointer: false
                    })
                }
            } else {
                return false
            }
        }
    }

    const handleSelectClick = event => {
        console.log("Select clicked!")
        let pantryId = event.target.id
        let stocker = event.target.value
        console.log(pantryId)
        let cartArray = customerOrder.selectedFood
        let stockArray = customerOrder.selectedStock
        // check if the item is already in my selectedFood array
        const clickedFood = cartArray.includes(pantryId)
        // if it's not added to array, add it
        if (!clickedFood) {
            cartArray.push(pantryId)
            stockArray.push(stocker)
            console.log(cartArray)
        } else {
            console.log(cartArray)
            let foodPointer = cartArray.indexOf(pantryId)
            // and remove it from the array!
            cartArray.splice(foodPointer)
            stockArray.splice(foodPointer)
        }
        // set the new state!
        setCustomerOrder({
            ...customerOrder,
            selectedFood: cartArray,
            selectedStock: stockArray
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log("Button clicked!")
        let cartArray = customerOrder.selectedFood
        let stockArray = customerOrder.selectedStock
        // check to see if at least one item is clicked aka basket is empty
        if (customerOrder.basketList === []) {
            alert("Please select some items to add to your basket")
        } else {
            // generate a post request for new order
            // check your cart
            cartArray.forEach(element => {
                checkForAvailable(element)
            });
            if (customerOrder.availablePointer) {
                alert('That foodbank does not have one of your order')
                break
            } else {
                cartArray.forEach(element => {
                    changeClaimedPantry(element)
                });
                fetch(`${URL_PREFIX}/api/order/post`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        orderDate: customerOrder.orderDate,
                        orderTime: customerOrder.orderTime,
                        FoodBankId: customerOrder.FoodBankId,
                        CustomerId: customerOrder.CustomerId
                    })
                }).then(res => {
                    const lastMade = res.id;
                    stockArray.forEach(element => {
                        postOneOrderItem(1,lastMade,element);
                    });
                    afterOrder();
                }).catch(err => null)
            }
        }

        // individually check every item in the basket with the stock database
        // if it matches, create a post to order list
        // also if it matches, create a put request to update the claimed and unclaimed pantry list ALL in one fuction
        // set the state back to default



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
                        StockId={foodObj.StockId}
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