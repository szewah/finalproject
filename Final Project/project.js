// $(document).ready(function(){
// 	$('.menu_list').hide();
// 	$('#toggle').click(function(){
// 		$(this).toggleClass('open');
// 		$('.menu_list').show();
// 	});
// });

$('#toggle').click(function(){
	$(this).toggleClass('open');
	$('.menu_list').toggle(250);

});

$(document).ready(function() {
	$('.thumbnail').hover(function() {
		$(this).addClass('transition');
	}, function() {
		$(this).removeClass('transition');
	});
});

$('.helpparagraph').click(slideRow)
function slideRow() {
	$(this).find('.article').slideToggle() 
}