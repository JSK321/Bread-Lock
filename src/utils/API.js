import {URL_PREFIX} from "./urlPointer"
//const URL_PREFIX = "http://localhost:8080"
// const URL_PREFIX = "https://breadlockapi.herokuapp.com"

const API = {
    
    login:function(email, password){
        // console.log(userData)
        return fetch(`${URL_PREFIX}/api/customer/login`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(email, password)
        }).then(res=> res.json()).catch(err=>null)
    },
    getProfile:function(token){
        return fetch(`${URL_PREFIX}/api/customer/secrets`,{
            headers:{
                "authorization": `Bearer ${token}`
            }
        }).then(res=>res.json()).catch(err=>null)
    },
    // getAllFoodBanks:function(){
    //     return fetch(`${URL_PREFIX}/api/foodbank/get/all`,{
    //     }).then(res=>res.json()).catch(err=>null)
    // },

    // used in pages/foodbank/map
    putFoodBank: function(bankName, phone, email, address, cityName, stateAbr, zipCode, latitude, longitude, availabilty){
        return fetch(`${URL_PREFIX}/api/foodbank/put/:id`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                bankName,
                phone,
                email,
                address,
                cityName,
                stateAbr,
                zipCode,
                latitude,
                longitude,
                availabilty
            })
        }).then(res => res).catch(err => null)
    },
    getFoodbanks: function () {
        return fetch(`${URL_PREFIX}/api/foodbank/get/all`, {})
            .then((res) => res.json())
            .catch((err) => null);
    },
    // used in /pages/admin/pantrydata
    getOneFoodBank: function (id) {
        return fetch(`${URL_PREFIX}/api/foodbank/get/${id}`, {
        }).then(res => res.json()).catch(err => null)
    },
    // deleteFoodBank:function(token,foodBankId){
    //     return fetch(`${URL_PREFIX}/api/foodbanks/${foodBankId}`,{
    //         method:"DELETE",
    //         headers: {
    //             "authorization": `Bearer ${token}`
    //           }
    //     }).then(res=> res.json()).catch(err=>null)
    // },
    getAllProfiles: function () {
        return fetch(`${URL_PREFIX}/api/customer/get/all`, {
        }).then(res => res.json()).catch(err => null)
    },
    getOneProfile: function (customerId, token) {
        console.log(token);
        return fetch(`${URL_PREFIX}/api/customer/get/${customerId}`, {
            headers:{
                "authorization": `Bearer ${token}`
            }
        }).then(res => res.json()).catch(err => null)
    },
    postCustomer: function(firstName, lastName, phone, email, password, address, cityName, stateAbr, zipCode){
        return fetch(`${URL_PREFIX}/api/customer/post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                password,
                address,
                cityName,
                stateAbr,
                zipCode
            })
        }).then(res => res).catch(err => null)
    },
    // used in /pages/admin/pantrydata && /pages/user/customerorder
    getOneFBPantry: function (id) {
        return fetch(`${URL_PREFIX}/api/pantry/get/${id}`)
            .then(res => res.json()).catch(err => null)
    },

    isPantryEmpty: function (id) {
        return fetch(`${URL_PREFIX}/api/pantry/isEmpty/${id}`)
            .then(res => res.json()).catch(err => null)
    },
    // used in /pages/user/customerorder
    postOneOrderItem: function (orderAmount, OrderId, StockId) {
        return fetch(`${URL_PREFIX}/api/orderitem/post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                orderAmount,
                OrderId,
                StockId
            })
        }).then(res => res).catch(err => null)
    },
    putOnePantryItem: function (claimed, notClaimed, id) {
        return fetch(`${URL_PREFIX}/api/pantry/put/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                notClaimed: notClaimed,
                claimed: claimed
            })
        }).then(response => response.json())
            .catch(err => null);
    },
    // used in /components/foodbankqueuecard
    getFBOrders: function (FoodBankId) {
        return fetch(`${URL_PREFIX}/api/order/get/all/foodbank/${FoodBankId}`, {})
            .then((res) => res.json())
            .catch((err) => null);
    },
    getCustomerOrders: function (CustomerId) {
        return fetch(`${URL_PREFIX}/api/order/get/all/customer/${CustomerId}`, {})
            .then((res) => res.json())
            .catch((err) => null);
    },
    getOneOrders: function (id) {
        return fetch(`${URL_PREFIX}/api/order/get/${id}`, {})
            .then((res) => res.json())
            .catch((err) => null);
    },
    // used in /components/foodbankqueuecard
    putFBOrders: function (recieved, id) {
        return fetch(`${URL_PREFIX}/api/order/put/foodbankwork/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                recieved: recieved
            })
        }).then(response => response.json())
            .catch(err => null);
    },


    // createFish:function(token,fishData){
    //     return fetch(`${URL_PREFIX}/api/fishes`,{
    //         method:"POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "authorization": `Bearer ${token}`
    //           },
    //         body:JSON.stringify(fishData)
    //     }).then(res=> res.json()).catch(err=>null)
    // },
    // deleteFish:function(token,fishId){
    //     return fetch(`${URL_PREFIX}/api/fishes/${fishId}`,{
    //         method:"DELETE",
    //         headers: {
    //             "authorization": `Bearer ${token}`
    //           }
    //     }).then(res=> res.json()).catch(err=>null)
    // },
};

//module.exports = API;
export default API;
