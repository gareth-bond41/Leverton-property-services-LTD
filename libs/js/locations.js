var mymap = L.map('mapid').setView([53.5024, -1.0745], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ2F6YjQxIiwiYSI6ImNrbjhwaXluNDA2ZHQzMG55NWJ0MW82dnoifQ.ih2xONMvk8GoscWMom8SHQ'
}).addTo(mymap);

var marker = L.marker([53.5024, -1.0745]).addTo(mymap);

marker.bindPopup("<h1><b>Our base of operations!</b></h1>").openPopup();