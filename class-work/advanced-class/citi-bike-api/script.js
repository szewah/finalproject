var map = new google.maps.Map(document.querySelector('#map'), {
	center: {
		lat: 40.7128,
		lng: -74.0059
  	},
  	zoom: 12,
});

var marker = new google.maps.Marker({
	position: {
		lat: 40.7128,
		lng: -74.0059
	},
	map: map,
});


$.ajax({
  	type: 'GET',
  	url: 'http://api.citybik.es/citi-bike-nyc.json',
  	success: function (response) {
  		// console.log(response)
  	response.forEach(handleStation)
  	// response[40]

	},
	// error: function () {
	// 	alert('It does not work');
	// }
});


// function handleStation(station) {
// 	console.log(station.name);
// }

function handleStation(station) {
	var marker = new google.maps.Marker({
		position: {
			lat: station.lat /1000000,
			lng: station.lng /1000000,
		},
		map: map,
		title: station.name  + ' bikes free ' +  station.free,
});

}
// 	console.log(station.name);
// 	$('#container')
// 	.append('<p>' + station.name + '</p')
// 	.append('<div>Spots free ' + station.free + '</div')
// 	.append('<div>Bikes available ' + station.bikes + '</div')
// 	.append('<hr>')
// }
