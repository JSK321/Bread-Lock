//const express = require("express");
import {URL_PREFIX} from "../../../utils/urlPointer"
const axios = require("axios");

//const db = require("./node_modules")// what's the path to database to get foodbank address

// const URL_PREFIX = "http://localhost:8080"
// const URL_PREFIX = "https://breadlockapi.herokuapp.com"


const API = {
  getFoodbanks:function(){
    
    return axios
    .get(
      `${URL_PREFIX}/api/foodbank/get/all`
          );
  }
}

export default API
