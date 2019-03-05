var map;
var myLat = 0;
var myLng = 0;
var me = new google.maps.LatLng(myLat,myLng);
var myOptions = {
	zoom: 13,
	center: me,
};
var marker;
var infowindow = new google.maps.infowindow();
function init() {
	map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
	getMyLocation();
}
function getMyLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			renderMap();
		});
	} 
		else {
			alert("Geolocation is not supported by your browser. Sad.");
		}
}
function renderMap() {
	me = new google.maps.LatLng(myLat,myLng);
	map.panTo(me)
	marker = new google.maps.Marker ({
		position: me,
		title: "Here is me!"
	});
	marker.setMap(map);
	google.maps.event.addListener(marker,'click', function() {
		infowindow.setContent(this.title);
		inforwindow.open(map,this);
	});
}