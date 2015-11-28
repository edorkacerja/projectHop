function main(){

$('.button1').click(function(){
	$('.button2').removeClass('active');
	$('.button3').removeClass('active');
	$('.button1').toggleClass('active');
})

$('.button2').click(function(){
	$('.button1').removeClass('active');
	$('.button3').removeClass('active');
	$('.button2').toggleClass('active');
})

$('.button3').click(function(){
	$('.button1').removeClass('active');
	$('.button2').removeClass('active');
	$('.button3').toggleClass('active');
})




}

$(document).ready(main); 

