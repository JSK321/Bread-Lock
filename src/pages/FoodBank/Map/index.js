import React from 'react'


// make API call from database  for locations
// 


export default function Map() {
    return (
            <div id="mapid" style="height: 600px; position: relative">

                

                <script>
                    var mymap = L.map('mapid').setView([{{ mapLocation }}], 18);

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
                    {/* var patchIcon = L.icon({
                        iconUrl: '',
                        iconSize: [50, 50],
                        iconAnchor: [22, 94],
                        popupAnchor: [-3, -76],
                        shadowUrl: '',
                        shadowSize: [0, 0],
                        shadowAnchor: [22, 94]
                    }); */}
                    //add markers for multiple garden locations:
                    {/* {{#each gardenPins }}
                    L.marker([{{ location }}], { icon: patchIcon }).addTo(mymap).bindPopup(" <a href = /gardens/{{this.id}}>{{this.name}}</a>").openPopup();
                    {{/each}} */}

                

              
                    {/* var popup = L.popup(); */}


                </script>


            </div>
          


    )
}
