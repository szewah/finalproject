var myHeading = document.querySelector('h1');
myHeading.textContent='Hello World!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc=myImage.getAttribute('scr');
	if (mySrc==='images/firefox-icon.png') {
	myImage.setAttribute('scr','images/shopimage.jpg');
	} else {
		myImage.setAttribute('scr','images/firefox-icon.png');
	}	
}


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}