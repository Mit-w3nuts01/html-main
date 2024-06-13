
/*============ Header Function Start ============*/
jQuery(document).ready(function(){
	jQuery(".header_main .menu-btn").click(function(e){
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery("body").toggleClass("open-nav");
	});	
	

    jQuery(window).scroll(function(){
	  var sticky = jQuery('.header_main'),
		  scroll = jQuery(window).scrollTop();
	
	  if (scroll >= 1) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
});



	
/*============ Header Function End ============*/


jQuery(document).ready(function(){
	// slider
	jQuery(function () {
	  jQuery(".bxslider").bxSlider({
		mode: "fade",
		captions: false,
		pager: true,
		auto: true,
		pause: 10000,
		speed: 1000,
		autoStart: true,
		autoControls: true,
		
	  });
	});
  });
