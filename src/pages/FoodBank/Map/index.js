import React, {useState} from "react"
import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
import API from "./API"

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

//import './style.css';

 

export default function Map() {

    const [bankState, setBankState] = useState({
       data:"",
       dataLoaded:false
     })

  API.getFoodbanks().then((res) => {
    setBankState({
      data:res.data,
      dataLoaded:true
    })
  });



  // let mapDataWLocation = 


    return (
      
      
      <MapContainer center={[47.6,-122.3]} zoom={18} scrollWheelZoom={false} style={{ height: '50vh', width: '50vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {bankState.dataLoaded?bankState.data.map(entry=><Marker position={[entry.latutude,entry.longitude]}> <Popup>{entry.bankName}</Popup> </Marker>) : <p>hola</p>}
    </MapContainer>
 
    )
}







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