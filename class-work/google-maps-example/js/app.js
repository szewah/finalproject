var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.758896, lng: -73.985130},
          zoom: 13
    });

    var marker = new google.maps.Marker({
	  position: {lat: 40.758896, lng: -73.985130},
	  map: map,
	  title: 'New York, NY'
	});

var locations = [
	  {
	    lat: 40.7484444,
	    lng: -73.9878441,
	    title: 'Empire State Building',
	  },
	  {
	    lat: 40.7516248,
	    lng: -73.9776907,
	    title: 'Chrysler Building',
	  },
	  {
	  	// lat, lng and title are keys with values after them
	    lat: 40.7339877,
	    lng: -73.980817,
	    title: 'Flatiron Building',
	  },
	];

locations.forEach(processLocation);
// for every item in the array, run the processLocation function

	function processLocation (location) {
		var marker = new google.maps.Marker ({
			position: {
				lat: location.lat,
				lng: location.lng,
			},
			title: location.title,
			map: map,
		});

	//   console.log(location)
	// }
}
}


initMap ()