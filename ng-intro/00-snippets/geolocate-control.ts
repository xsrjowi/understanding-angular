
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9lbG1hcyIsImEiOiJjbGhlbmk5ZjUwdGYwM2xtaDlndnYwcmFoIn0.o9fulDAeRKDjt2_bf_TDwg';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [ -24, 42 ], // starting center in [lng, lat]
    zoom: 1 // starting zoom
});
    
    // Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },

        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    })
);