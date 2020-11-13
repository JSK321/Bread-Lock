
import React from 'react';
import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";



export default function Map() {
    return (
      
      
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
 
    )
}

//code to link to foodbank page TBD
// <a href = {/foodBanks/{{this.id}}>{{this.name}}</a>



//







//map foodbanks location

// router.get("/map", async function (req, res) {
//     let mapData = {};
//   

//         const foodBanks = await db.foodbank.findAll()
//         mapData.fBankPins = foodBanks.map(foodBank => {
//             foodBankJSON = foodBank.toJSON();
//             return {
//                 location: [foodBankJSON.latitude, foodBankJSON.longitude],
//                 name: foodBankJSON.name,
//                 id: foodBankJSON.id
//             }
//         })

//        res.render("map", mapData)
//     }

//     catch (err) {
//         console.log(err)
//         res.status(500).end()
//     }