import React, { useState, useEffect } from "react";
import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
import { Link } from "react-router-dom";
import API from "./API";
import icon from "../../../images/dropPin-Food.png";
import icon2 from "../../../images/dropPin-NoFood.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
let DefaultIcon2 = L.icon({
  iconUrl: icon2,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const [bankState, setBankState] = useState({
    selectedFoodBankId: "1",
    data: [],
    dataLoaded: false,
  });

  
  const [pantryStatus, setPantryStatus] = useState({
    isEmpty:false,
  });

  function loadMap() {
    API.getFoodbanks().then((res) => {
      console.log(res.data[0]);
      setBankState({
        selectedFoodBankId: res.data[0].id,
        data: res.data,
        dataLoaded: true,
      });


    });


  }

  useEffect(() => {
    loadMap();
  }, []);

  const handleSelectBank = (event) => {
    let selectedBank = event.target.value;
    console.log(selectedBank);
    setBankState({
      ...bankState,
      selectedFoodBankId: selectedBank,
    });
  };



  return (
    <div className="uk-flex uk-flex-center">
      <div className="uk-card uk-card-default uk-width-1-2@m">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle">
            <div className="uk-width-expand">
              <h1
                className="uk-card-title uk-margin-remove-bottom"
                style={{ textAlign: "center" }}
              >
                Food Bank Map
              </h1>
            </div>
          </div>
        </div>
        <div className="uk-flex uk-flex-center">
          <div className="uk-card uk-card-default">
            <div className="uk-margin" style={{ textAlign: "center" }}>
              <div className="uk-form-controls">
                <label>Select Food Bank</label>
                <select
                  className="uk-select"
                  id="form-stacked-select"
                  onChange={handleSelectBank}
                >
                  {bankState.dataLoaded ? (
                    bankState.data.map((entry) => (
                      <option value={entry.id}>{entry.bankName}</option>
                    ))
                  ) : (
                    <p>map</p>
                  )}
                </select>
                <Link to={"/foodbank/" + bankState.selectedFoodBankId}>
                  {" "}
                  <button>View Food Bank</button>{" "}
                </Link>
              </div>
            </div>

            <div  style={{marginBottom: "10%"}}>
              <MapContainer
                center={[47.6, -122.3]}
                zoom={12}
                scrollWheelZoom={false}
                style={{ height: "65vh", width: "55vh" }}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {bankState.dataLoaded ? (
                  bankState.data.map((entry) => (
                    <Marker position={[entry.latitude, entry.longitude]} icon={entry.availability?DefaultIcon:DefaultIcon2}>
                      {" "}
                      <Popup>
                        <Link to={"/foodbank/" + entry.id}>
                          {entry.bankName}{" "}{entry.availability?"full":"Empty"}{"as"}
                        </Link>{" "}
                      </Popup>{" "}
                    </Marker>
                  ))
                ) : (
                  <p>map</p>
                )}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
