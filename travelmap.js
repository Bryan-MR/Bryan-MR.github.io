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

let circleMarker = L.circle(coordinates, {
  color: "cyan",
  fillcolor: "white",
  fillopacity: 0.25,
  radius: 50
}).bindPopup(`<iframe width="280" height="260" src="https://www.youtube.com/embed/eE65MVsnI4Y?si=drc0mSiupgsDeYr5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`).addTo(map);
