function initMap(position) {
  console.log("INIT MAP");
  var image = 'img/camper-van.svg';

  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;

  var position_camper = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: position_camper
  });
  var marker = new google.maps.Marker({
    position: position_camper,
    map: map,
    icon: image
  });


}


function getLocation() {
  console.log("get location");
  if (navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition(showPosition);
    navigator.geolocation.getCurrentPosition(initMap);

  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

var x = document.getElementById("demo");

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

$( document ).ready(function() {
  $("#getPosition").click(function() {
    getLocation();
  });

  $("#getTest").click(function() {
    console.log("test");
  });

});
