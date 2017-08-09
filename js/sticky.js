$(document).ready(function() {

			var distTop = $('.menu_nav').offset().top;

	$(window).scroll(function(){
		var scrollPosition = $(window).scrollTop();

		if (scrollPosition >= distTop) {
			$('.menu_nav').addClass('active');

		} else {
			$('.menu_nav').removeClass('active');
		}

	});

});


	$('.mobile-btn').click(function(){

		$('.mobile-btn').toggleClass('active'),
		$('.menu_nav').toggleClass('activex');
	});