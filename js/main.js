// Inicijuojamas žemėlapis su MapLibre GL JS
var map = new maplibregl.Map({
    container: "map", // container id
    style: "https://demotiles.maplibre.org/style.json", // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});