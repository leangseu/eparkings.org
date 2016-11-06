$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

function initMap() {

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 9,
  center: {lat: 42.094300, lng: -75.958470}
});

// Create an array of alphabetical characters used to label the markers.
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Add some markers to the map.
// Note: The code uses the JavaScript Array.prototype.map() method to
// create an array of markers based on a given "locations" array.
// The map() method here has nothing to do with the Google Maps API.
var image = "https://s14.postimg.org/6kuanaxw1/icon.png";
var markers = locations.map(function(location, i) {
  return new google.maps.Marker({
    position: location,
    label: labels[i % labels.length],
    icon: image
  });
});

// Add a marker clusterer to manage the markers.
var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

var locations = [
{lat: 42.094300, lng: -75.958470},
{lat: 42.194300, lng: -75.958470},
{lat: 42.294300, lng: -75.958470},
{lat: 42.394300, lng: -75.958470},
{lat: 42.494300, lng: -75.958470},
{lat: 42.594300, lng: -75.958470},
{lat: 42.094300, lng: -76.058470},
{lat: 42.094300, lng: -76.158470},
{lat: 42.094300, lng: -76.258470},
{lat: 42.094300, lng: -76.358470}
];

var login = false;
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username === "admin" && password === "1234"){
        alert ("Login successfully");
        //window.location = "index.html"; // Redirecting to other page.
        login = true;
        return false;
    }
    document.getElementById("login-display").innerHTML = "Admin";
}

