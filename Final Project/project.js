// if I click on the top-left hand hamburger, a menu will drop down to reveal "about" and "blog"
// 	else nothing shows

// if I land on mainpage in a desktop browser, video will loop
// 	else still picture on a mobile phone or ipad device

$( document ).ready(function() {
	$( ".cross" ).hide();
	$( ".menu_list" ).hide();

	$( ".hamburger" ).click(function() {
		$( ".menu_list" ).slideToggle(function() {
		$( ".hamburger" ).hide();
		$( ".cross" ).show();
	});
});

	$( ".cross" ).click(function() {
		$( ".menu_list" ).slideToggle(function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	});
});

});