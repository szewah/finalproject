var total = 0;

// click on #a10
// add 10 to 'total'
$('#a10').click(add10);
$('#a20').click(add20);
$('#a30').click(add30);
$('#n10').click(subtractn10);
$('#n20').click(subtractn20);
$('#n30').click(subtractn30);
$('#clear').click(clear);

// output updated 'total;' to #out

function add10 () {
	console.log('checking')
	total = total + 10  
	console.log(total)
	$("#out").html(total)
}

function add20 () {
	console.log('checking')
	total = total + 20  
	console.log(total)
	$("#out").html(total)
}

function add30 () {
	console.log('checking')
	total = total + 30  
	console.log(total)
	$("#out").html(total)
}

function subtractn10 () {
	console.log('checking')
	total = total - 10  
	console.log(total)
	$('#out').html(total)
}

function subtractn20 () {
	console.log('checking')
	total = total - 20  
	console.log(total)
	$('#out').html(total)
}

function subtractn30 () {
	console.log('checking');
	total = total - 30  
	console.log(total)
	$('#out').html(total);
}

$('#out').click(clear);

function clear () {
	var total = 0;   
	$('#out').html(total);
	$('#out').css('background-color' , 'white' )
}

$('#red').click(changeRed);

$('#blue').click(changeBlue);

function changeRed () {
	console.log('red')
	$('#out').css('background-color' , 'red')

}

function changeBlue () {
	$('#out').css('background-color' , 'blue')
}


