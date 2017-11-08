$('#myForm').submit(handleSubmit);

function handleSubmit (event) {
	event.preventDefault();
	console.log(event);
	var myName = $('#name-input').val();
	$('#target').html(name);
}
// each time you submit, the page refreshes for you. 

