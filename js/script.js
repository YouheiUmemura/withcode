window.onunload = function() {};

function sizecheck() {
	// base window size
	w = window.innerWidth ? window.innerWidth : $(window).width();
	h = window.innerHeight ? window.innerHeight : $(window).height();
}
sizecheck();

$(function () {

	if (w > 769) { // for PC



	} else { // for SP

		$("header .drawer").click(function(){
			$('body').toggleClass('nav-open');
			$('header .navbar').fadeToggle(200);
		});

		$("header li a").click(function(){
			$('body').toggleClass('nav-open');
			$('header .navbar').fadeToggle(200);
		});

		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 100) {
				$('header').addClass('scrolled');
			} else {
				$('header').removeClass('scrolled');
			}
		});

	} //for PCSP


	/* fadein */
	new WOW().init();



	$('a[href^="#"]').click(function(){
		var headerHight = $('header').outerHeight();
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		//var position = target.offset().top - headerHight - 50;
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});

}); //end ready

window.addEventListener('DOMContentLoaded', function(){
	new ScrollHint('.wrap-tbl', {
		i18n: {
			scrollable: '繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｧ縺阪∪縺�'
		}
	});
});
