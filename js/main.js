
$('.slide > :first').addClass('active');


(function(){

function iniSlide(){

	var activeSlide = $('.slide_item.active'),
		nextSlide = activeSlide.next();

	if(nextSlide.length == 0){
		nextSlide = $('.slide > :first');
	}

	activeSlide.removeClass('active');
	nextSlide.addClass('active');
}

setInterval(iniSlide, 6000);

})();

(function(){
	setTimeout(function () {
		$(".descricao_cover h1").addClass("slideinup");
	}, 200);

	setTimeout(function () {
		$(".descricao_cover h2").addClass("slideindown");
	}, 200);

})();


$('.mobile-btn').click(function(){

		$('.mobile-btn').toggleClass('active'),
		$('.menu_nav').toggleClass('active'),
		$('.slide_item .descricao_imagem').toggleClass('active');
		$('.section_cover .descricao_cover').toggleClass('active');


});