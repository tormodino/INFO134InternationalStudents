// Marker variables for different destinations
var uib = {lat: 60.387819, lng: 5.321563}; // University of Bergen (default)
var sc = {lat: 60.386707, lng: 5.323128}; // Student Center
var uph = {lat: 60.388475, lng: 5.323440} // Ulrikke Pihls Hus

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

/**
 * Updates the locations to users category request
 * Author (Øyvind Johannessen)
**/
function getLocationsByCatogary(value) {
  // Load every location that has a connection to Clubs and bars
  if(value.toString() == "drinking") {

  }

  // Load every location that has a connection to Uiniversity Of Bergen
  else if(value.toString() == "uib") {
    // Ulrike Pihls Hus
    document.getElementById("loc-image1").innerHTML = '<img class="img" src="img/locationImages/ulrikepihlshus.jpg" alt="Ulrike Pihls Hus">';
    document.getElementById("loc-name1").innerHTML = 'Ulrike Pihls Hus';
    document.getElementById("loc-description1").innerHTML = "In Ulrike Pihl's house you will find reading and computer halls for all students at the Faculty of Social Sciences."
    document.getElementById("mark-button").value = 'uph';
  }

  // Load every location that has a connection to Entertainment and culture
  else if(value.toString() == "culture") {

  }

    // Load every location that has a connection to Entertainment and culture
  else if(value.toString() == "hikes") {

  }

    // Load every location that has a connection to Nature hikes
  else if(value.toString() == "stores") {

  }

    // Load every location that has a connection to Useful shops
  else if(value.toString() == "drinking") {

  }
}
