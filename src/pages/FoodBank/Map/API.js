const express = require("express");
const router = express.Router();
const db = require("../models")
const axios = require('axios')



//API call for bank locations

// Post route to add a Gardener
router.post("/api/", function (req, res) {
    const APIKey = '0a157990-f940-11ea-ac04-cb65445966da'
    axios.get(`https://app.geocodeapi.io/api/v1/search?apikey=${APIKey}&text=${req.body.address}`)
      .then(response => {geo
        db.Gardener.create({
          username: req.body.username,
          email: req.body.email,
          address: req.body.address,
          latitude: response.data.bbox[1],
          longitude: response.data.bbox[0],
          password: req.body.password
        }).then(result => {
          res.json(result)
        }).catch(err => {
          res.status(500).send(err)
        })
      })
  })


  //google geocoding api key:  AIzaSyD375YLQgOa4olGSHYbsMKe9Ozq6alQOBM