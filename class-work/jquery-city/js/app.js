// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// $('#swap').click(swapKeanuForGary) 

// function swapKeanuForGary() {
//   $('#movie-person').attr('src', 'http://i2.mirror.co.uk/incoming/article4130261.ece/ALTERNATES/s615/CBBGary.jpg_')
// }


// $('#first').click(showCityOne)

$('.thumb').click(changeImages)

function changeImages(){
	var newImages = $(this).attr('src')
	$('#bigimage').attr('src' , newImages)
}


// lessons
//DOM = document object model
// HTML + CSS. DOM goes to Javascript

//read source only
// $('#bigimage').attr('src')


// First try
// function showCityOne(){
// 	$('#bigimage').attr('src' , 'img/1.jpg')
// }


// $('#second').click(showCityTwo)

// function showCityTwo() {
// 	$('#bigimage').attr('src' , 'img/2.jpg')
// }

// $('#third').click(showCityThree)

// function showCityThree() {
// 	$('#bigimage').attr('src' , 'img/3.jpg')
// }

// $('#fourth').click(showCityFour)

// function showCityFour() {
// 	$('#bigimage').attr('src' , 'img/4.jpg')
// }
