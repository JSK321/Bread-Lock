const URL_PREFIX = "http://localhost:8080"
// const URL_PREFIX = "https://breadlockapi.herokuapp.com"

const API = {
    // login:function(userData){
    //     console.log(userData)
    //     return fetch(`${URL_PREFIX}/api/users/login`,{
    //         method:"POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //           },
    //         body:JSON.stringify(userData)
    //     }).then(res=> res.json()).catch(err=>null)
    // },
    // getProfile:function(token){
    //     return fetch(`${URL_PREFIX}/api/users/secretProfile`,{
    //         headers:{
    //             "authorization": `Bearer ${token}`
    //         }
    //     }).then(res=>res.json()).catch(err=>null)
    // },
    // getAllFoodBanks:function(){
    //     return fetch(`${URL_PREFIX}/api/foodbank/get/all`,{
    //     }).then(res=>res.json()).catch(err=>null)
    // },

    // used in pages/foodbank/map
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
    getOneProfile: function (customerId) {
        return fetch(`${URL_PREFIX}/api/customer/get/${customerId}`, {
        }).then(res => res.json()).catch(err => null)
    },
    // used in /pages/admin/pantrydata && /pages/user/customerorder
    getOneFBPantry: function (id) {
        return fetch(`${URL_PREFIX}/api/pantry/get/${id}`)
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

module.exports = API;
