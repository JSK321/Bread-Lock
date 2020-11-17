//const express = require("express");
const axios = require("axios");
//const db = require("./node_modules")// what's the path to database to get foodbank address




const API = {
  getFoodbanks:function(){
    return axios
    .get(
      `http://localhost:8080/api/foodbank/get/all`
          );
  }
}

module.exports = API;
