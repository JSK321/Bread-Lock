const express = require("express");
const axios = require("axios");
const db = require("")// what's the path to database to get foodbank address



//set var for location lat and long
var lat;
var long;

//map search function to convert address to lat & long code
function geoData(req, res) {
  let location = req.body.address
  const APIKey = "51966f60-25d5-11eb-a940-51e78db4786d"; 
  axios
    .get(
      `https://app.geocodeapi.io/api/v1/search?apikey=${APIKey}&text=${location}`
    )
    .then((res) => {
      console.log(res);
      var lat = response.data.bbbox[1];
      var long = response.data.bbox[0];
    });
};