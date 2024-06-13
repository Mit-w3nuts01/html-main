

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



/*============ slider Function Start ============*/

jQuery(document).ready(function(){
	
	jQuery(".hair_pigmentation_select_box").on('click', function(e) {

		jQuery(this).addClass('active_selector_btn');
		jQuery(this).parents('li').siblings('li').find('.hair_pigmentation_select_box').removeClass('active_selector_btn');
		var get_ids = jQuery(this).attr('data-select-btn'); //Get Attribute
		jQuery('.hair_pigmentation_img_box img[data-image-id='+get_ids+']').addClass('active_image');
		jQuery('.hair_pigmentation_img_box img[data-image-id='+get_ids+']').siblings('img').removeClass('active_image');
	});
	
});


/*============ Slider Function End ============*/

