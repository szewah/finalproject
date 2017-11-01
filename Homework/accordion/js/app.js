// The following can be written in 3 lines of jQuery/JavaScript!

// 1. Add a .click() handler to elements with the class of .row
// 2. Associate this .click() handler with an anoymous function (in other words, "pass" .click() 
// and anonymous function)
// 3. Inside the body of the anonymous function, use the concept of $(this) to .find() 
// the <div class="wrapper">
// 4. Once you find the .wrapper, use the .slideToggle() function to trigger the desired behavior

$('.row').click(slideRow)

function slideRow() {
	$(this).find('.wrapper').slideToggle() 
}


// $('.postBoxShowAll').click(function(){
//     $('.postBoxContent').slideToggle('fast', function(){
//         if($(this).is(':hidden')){
   // $('.postBoxShowAll').html('Show all');
   //      }else{
   //          $('.postBoxShowAll').html('Hide all');
   //      }


// function slideRow() {
// 	var findRow = $(this).find('.wrapper')
// 	$(findRow).slideToggle()	
// }



// 1. click on .row
// 2. reveals .wrapper 

// $('#wrapper').children()
// $('#wrapper').find('.post').css('color', 'red')

	// $('p').hide('slow')

	// $('p').show('fast')