// Users should be able to:
// 1. Enter an item into #item
// 2. Click on #clickme
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #item should clear

// Requirements: Create a separate function, called appendItem, that accepts one argument, item, 
// that is called when #clickme is clicked and appends the <li> to #list

// Bonus: Focus on #item after the item is added (research jQuery focus method)
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user (if/else conditions)
// Legendary Bonus: Remove individual <li> elements when they are clicked (will have to use $(this) + research how to remove dynamically added elements)

// To Get Started:
// 1. Attach a .click() event to #clickme
// 2. This .click() should call a function, named handleClick
// 3. handleClick should create a variable, named newItem, that is equal to the value of #item
// 4. handleClick should call a separate function, named appendItem, and pass it the variable newItem
// 5. handleClick should then clear the text inside of #item
// 6. Finally, write the function, appendItem (see above)

$('#clickme').click(handleClick); 

function handleClick() {
	var newItem = $('#item').val();
	appendItem(newItem);
	if(newItem) {
		$('#item').val();
	} else {
		alert('Please add an item');
	}
	$('#item').val('');
}


function appendItem(text){
	// $('#list').html(text);
	$('#list').append('<li>' + text + '</li>');
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


