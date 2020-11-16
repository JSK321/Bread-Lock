import React, {useState, useEffect} from "react"
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




 

export default function Map() {

  function loadMap() {
    API.getFoodbanks().then((res) => {
      setBankState({
        data: res.data,
        dataLoaded: true
      })
    });
  }
  useEffect(() => {
    loadMap()
  }, [])
    
const [bankState, setBankState] = useState({
       data:"",
       dataLoaded:false
     });





    return (
      
      
      <MapContainer center={[47.6,-122.3]} zoom={15} scrollWheelZoom={false} style={{ height: '50vh', width: '50vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {bankState.dataLoaded?bankState.data.map(entry=><Marker position={[entry.latitude,entry.longitude]}> <Popup>{entry.bankName}</Popup> </Marker>) : <p>hola</p>}
    </MapContainer>
 
    )}








