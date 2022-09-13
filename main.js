navigator.geolocation.getCurrentPosition(succsse,error)
function succsse(position){
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    randoMap([position.coords.latitude,position.coords.longitude])
};
function error(position){
console.log(position.message)
};

function randoMap(coords){
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFoNzd5IiwiYSI6ImNsODBuNWlhczA3dDczbm81NHp2emplYnUifQ.g-c-INRnj8fmMOlID78nqA';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: coords, // starting position [lng, lat]
    zoom: 9, // starting zoom
    });
    
 map.addControl(new mapboxgl.NavigationControl());
 map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'top-left'
    );
}
