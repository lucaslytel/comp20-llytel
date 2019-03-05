var map;
var myLat = 0;
var myLng = 0;
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {
 zoom: 13,
 center: me, };
var marker;
// var infowindow = new google.maps.infowindow();
function initMap() {
	map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
    getMyLocation();
}
function getMyLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			renderMap();
			userdata();
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
//	google.maps.event.addListener(marker,'click', function() {
//		infowindow.setContent(this.title);
//		inforwindow.open(map,this);
//	});
}
function userdata() {
	var request = new XMLHttpRequest();
	var data = 'username=ajNnfhJj&lat='+myLat+'&lng='+myLng;
	var url = 'https://hans-moleman.herokuapp.com/rides';
	request.open('POST', url, true)
	
	request.setRequestHeader('Content-type','application/x-www-form-urlencoded')
	
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			userdata = JSON.parse(request.responseText);
			console.log(userdata);
			displaymarkers(userdata);		
		}
	}
	request.send(data);
}
function displaymarkers(userdata) {
	if (userdata.passangers) 
		var img = new Image (){
	for (i = 0; i < userdata.passangers.length, i++;) {
		if (userdata.passangers.username == WEINERMOBILE) {
			// display distance from WEINERMOBILE if true
		}
		var marker = new google.maps.Marker 
			position: userdata.lng, userdata.lat;

	}
	}
}