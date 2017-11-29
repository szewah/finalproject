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
