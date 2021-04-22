
$(document).ready(function() {
	// $('body').hide()

const swiper = new Swiper('.main-slider', {
	// Optional parameters
	loop: true,
	autoplay:{
		dalay:3000,
	},
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
		prevEl: '.swiper__prev',
	  	nextEl: '.swiper__next',
	  
	}
  
  });
})