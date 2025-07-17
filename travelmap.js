//45.4685° N, 9.1824° E
var coordinates = [45.4685, 9.1824];

let map = L.map("map", {
  center: coordinates,
  zoom: 10
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
