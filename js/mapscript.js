// Marker variables for different destinations
var uib = {lat: 60.387819, lng: 5.321563}; // University of Bergen (default)
var sc = {lat: 60.386707, lng: 5.323128}; // Student Center
var uph = {lat: 60.388588, lng: 5.323424} // Ulrikke Pihls Hus

// Adjustable marker position depending on user input
var markerPosition = uib;

/**
 * Function for adjusting the lat and lng to users request
 * Author: (Øyvind Johannessen)
**/
function markerByInput(input) {
  if(input == "uib") {
    markerPosition = uib;
  }
  else if(input == "sc") {
    markerPosition = sc;
  }
  else if (input == "uph") {
    markerPosition = uph;
  }
  initMap();
}

/**
 * Javascript for a visible Google map
 * As Default the map centers at Norway/Bergen/University of Bergen (60.387819, 5.321563)
 * ID: map
 * Author: (Øyvind Johannessen)
**/
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: markerPosition
  });
  var marker = new google.maps.Marker({
    position: markerPosition,
    map: map
  });
}
