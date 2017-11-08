// Notes from 11/06

$('#clickme').click(handleClick); 

function handleClick() {
	var newItem = $('#item').val();
	appendItem(newItem);
	if(newItem) {
		$('#item').val();
	} else {
		alert('Please add an item');
	}
		$('#item')
			.focus()
			.val('')
}


function appendItem(text){
	$('#list').append('<li>' + text + '</li>');
	$('li').click(function() {
    	$(this).remove();
    });
}


    


// function clearItem(clear) {
// 	$('item').val()
// }


// $('#submit').click(function () {
//   // 1. create a variable to store the value from #input-name
//    var input = $('#input-name').val(); 
//    // 2. call the function writeName; make sure to pass in the variable you just created as an argument!
//   writeName(input);
// })

// function writeName (name) {
//   // 3. output `name` into #output-name using .text() or .html()
//   $('#output-name').html(name);
// }


// why change events
// radio buttons (picking the item)
// change value in shopping site that is a .change event
// used in forms to buy something or get some form of output (LinkedIn)


