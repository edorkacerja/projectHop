function main(){

$('.button1').click(function(){
	$('.button2').removeClass('active');
	$('.button3').removeClass('active');
	$('.button1').addClass('active');
});

$('.button2').click(function(){
	$('.button1').removeClass('active');
	$('.button3').removeClass('active');
	$('.button2').addClass('active');
});

$('.button3').click(function(){
	$('.button1').removeClass('active');
	$('.button2').removeClass('active');
	$('.button3').addClass('active');
});





	$('.arrow-next').click(function(){
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();
		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if(nextSlide.length === 0){
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		}

		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');
		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');

	});

	$('.arrow-prev').click(function(){
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();
		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		if(prevSlide.length === 0){
			prevSlide = $('.slide').last();
			prevDot = $('.dot').last();
		}

		currentSlide.fadeOut(600).removeClass('active-slide');
		prevSlide.fadeIn(600).addClass('active-slide');
		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	});

	$('.dot1').click(function(){
		$('.slide2').fadeOut(600).removeClass('active-slide');
		$('.slide3').fadeOut(600).removeClass('active-slide');
		$('.slide1').fadeIn(600).addClass('active-slide');

		$('.dot2').removeClass('active-dot');
		$('.dot3').removeClass('active-dot');
		$('.dot1').fadeIn(600).addClass('active-dot');
	});
	$('.dot2').click(function(){
		$('.slide1').fadeOut(600).removeClass('active-slide');
		$('.slide3').fadeOut(600).removeClass('active-slide');
		$('.slide2').fadeIn(600).addClass('active-slide');

		$('.dot1').removeClass('active-dot');
		$('.dot3').removeClass('active-dot');
		$('.dot2').addClass('active-dot');
	});
	$('.dot3').click(function(){
		$('.slide2').fadeOut(600).removeClass('active-slide');
		$('.slide1').fadeOut(600).removeClass('active-slide');
		$('.slide3').fadeIn(600).addClass('active-slide');

		$('.dot2').removeClass('active-dot');
		$('.dot1').removeClass('active-dot');
		$('.dot3').addClass('active-dot');
	});



}

$(document).ready(main); 

