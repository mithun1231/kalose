jQuery(function($) {'use strict';

	// min height
	$(document).ready(function() {
		function setHeight() {
			var windowHeight = $(window).height();
				$('.height-100').css('min-height', windowHeight);
			}
		setHeight();
		$(window).resize(function() {
			setHeight();
		});
	});

	var dealSlider = new Swiper('.product_suite_slide', {
		slidesPerView: 3,
		spaceBetween: 50,
		// loop: true,
		watchSlidesVisibility: true,
		disableOnInteraction: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.dsNextBtn',
			prevEl: '.dsPrevBtn'
		},
		breakpoints: {
			1199: {
				slidesPerView:3
			},
			991: {
				slidesPerView:3
			},
			575: {
				slidesPerView: 2
			},
			0: {
				slidesPerView: 1
			}
		},		
	});

	$(".product_suite_slide").mouseenter(function() {
		dealSlider.autoplay.stop();
	});

	$(".product_suite_slide").mouseleave(function() {
		dealSlider.autoplay.start();
	});

	// Main Menu
	$(document).ready(function() {		 
		$('#nav_list').click(function() {
			/*$(this).toggleClass('active');*/
            $('#toggle-icon').toggleClass("open");
			$('.pushmenu-push').toggleClass('pushmenu-push-toright');
			$('.pushmenu-left').toggleClass('pushmenu-open');
		});    
	});

	//back to top
	$('#back-to-top').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	});
	
});