import React from 'react';





export default function Map() {
    return (
            <div id="mapid" style="height: 600px; position: relative">

                <script>
                    var mymap = L.map('map').setView([47.6062,122.3321], 18);

                    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                        maxZoom: 18,
                        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                        id: 'mapbox/streets-v11',
                        tileSize: 512,
                        zoomOffset: -1
                    }).addTo(mymap);



                    //custom icon setting for food bank locations
                    {/* var fBankIcon = L.icon({
                        iconUrl: '',
                        iconSize: [50, 50],
                        iconAnchor: [22, 94],
                        popupAnchor: [-3, -76],
                        shadowUrl: '',
                        shadowSize: [0, 0],
                        shadowAnchor: [22, 94]
                    });
                    //add markers for multiple garden locations:
                    {{#each fBankPins }}
                    L.marker([{{ location }}], { icon: fBankIcon }).addTo(mymap).bindPopup(" ").openPopup();
                    {{/each}} */}

                

              
                    {/* var popup = L.popup(); */}


                </script>


            </div>
          


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