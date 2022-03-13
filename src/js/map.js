mapboxgl.accessToken = 'pk.eyJ1Ijoienhjc2t5IiwiYSI6ImNrdTdqMDhlbDAweXQycXJreDJrbXB4dGUifQ.IyXxggsenkkeisy1x-V9vA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 16,
center: [2.3364, 48.86091],
style: 'mapbox://styles/zxcsky/cku7j66eo01ar17mpjc21b9r7',
});


map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker({
  color: "#000000",
  draggable: false
}).setLngLat([2.3364, 48.86091]).addTo(map);

const marker2 = new mapboxgl.Marker({
  color: "#757575",
  draggable: false
}).setLngLat([2.3333, 48.8602]).addTo(map);

const marker3 = new mapboxgl.Marker({
  color: "#757575",
  draggable: false
}).setLngLat([2.3397, 48.8607]).addTo(map);

const marker4 = new mapboxgl.Marker({
  color: "#757575",
  draggable: false
}).setLngLat([2.3330, 48.8619]).addTo(map);

const marker5 = new mapboxgl.Marker({
  color: "#757575",
  draggable: false
}).setLngLat([2.3365, 48.8625]).addTo(map);