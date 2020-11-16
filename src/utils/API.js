const URL_PREFIX = "http://localhost:8080"
// const URL_PREFIX = "https://augfish-api.herokuapp.com"

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
    getAllFoodBanks:function(){
        return fetch(`${URL_PREFIX}/api/foodbanks`,{
        }).then(res=>res.json()).catch(err=>null)
    },
    getOneFoodBank:function(foodBankId){
        return fetch(`${URL_PREFIX}/api/foodbanks/${foodBankId}`,{
        }).then(res=>res.json()).catch(err=>null)
    },
    createFoodBank: function(token,foodBankData){
        return fetch(`${URL_PREFIX}/api/foodbanks`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
              },
            body:JSON.stringify(foodBankData)
        }).then(res=> res.json()).catch(err=>null)
    },
    deleteFoodBank:function(token,foodBankId){
        return fetch(`${URL_PREFIX}/api/foodbanks/${foodBankId}`,{
            method:"DELETE",
            headers: {
                "authorization": `Bearer ${token}`
              }
        }).then(res=> res.json()).catch(err=>null)
    },
    getOneFish:function(fishId){
            return fetch(`${URL_PREFIX}/api/fishes/${fishId}`,{
            }).then(res=>res.json()).catch(err=>null)
    },
    createFish:function(token,fishData){
        return fetch(`${URL_PREFIX}/api/fishes`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
              },
            body:JSON.stringify(fishData)
        }).then(res=> res.json()).catch(err=>null)
    },
    deleteFish:function(token,fishId){
        return fetch(`${URL_PREFIX}/api/fishes/${fishId}`,{
            method:"DELETE",
            headers: {
                "authorization": `Bearer ${token}`
              }
        }).then(res=> res.json()).catch(err=>null)
    },
}

module.exports = API;