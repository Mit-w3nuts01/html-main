
/*============ Header Function Start ============*/

/*============ Header Function End ============*/

/*============ Slick-Slider Function Start ============*/
 

jQuery(document).ready(function(){
	if(jQuery('.discover_slider').length > 0){
		jQuery('.discover_slider').owlCarousel({
			loop:true,
			margin:33,
			smartSpeed:800,
			dots:false,
			navText: [
				'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="33" viewBox="0 0 17 33"><g transform="translate(0 -0.342)" style="isolation: isolate"><path id="path" d="M17,29.342v4l-17-16,17-17v4l-13,13Z" transform="translate(0 0)" fill="currentcolor" fill-rule="evenodd"/></g></svg>',
				'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="33" viewBox="0 0 17 33"><g transform="translate(-0.115 -0.342)" style="isolation: isolate"><path id="path" d="M.115,29.342v4l17-16-17-17v4l13,13Z" transform="translate(0 0)" fill="currentcolor" fill-rule="evenodd"/></g></svg>'
			],
			nav:true,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:4
				},
				1700:{
					items:5
				}
			}
		});
	}

		/*Mobile Menu Start*/
	jQuery(".hamburger-icon").click(function() {
		'use strict';
		jQuery(this).toggleClass('active');
		jQuery('.navigation_main').toggleClass('show');
		jQuery('body').toggleClass('open_menu');
	});
	/*Mobile Menu End*/

	jQuery("header .menu-item-has-children .sub-menu , .point_sale_submenu ").before('<span class="icon d-lg-none d-flex"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10" stroke="currentcolor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>');

	jQuery("header .navigation_main ul li .icon").on('click', function(e) {
		e.preventDefault();
		jQuery(this).parent().children('ul').slideToggle(500);
		jQuery(this).parent().siblings('li').find('ul').slideUp(500);
		jQuery(this).parent().siblings('li').removeClass('active');
		jQuery(this).parent().toggleClass('active');
		jQuery('.point_sale_box').removeClass('active');
		jQuery('.point_sale_box .point_sale_submenu').slideUp(500);
		e.stopPropagation();
	});
	jQuery(".point_sale_box .icon").on('click', function(e) {
		e.preventDefault();
		jQuery(this).parent().children('.point_sale_submenu').slideToggle(500);
		jQuery(this).parent().toggleClass('active');
		jQuery('header .navigation_main ul li').find('.sub-menu').slideUp(500);
		jQuery('header .navigation_main ul li.menu-item-has-children').removeClass('active');
		e.stopPropagation();
	});

	jQuery(".filter_main_box h6").append('<span class="icon d-lg-none d-flex"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10" stroke="currentcolor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>');
	jQuery(".filter_main_box h6").on('click', function(e) {
		e.preventDefault();
		if (jQuery(window).width() < 992) {
			jQuery(this).parent().children('.filter_select_wrap').slideToggle(500);
			jQuery(this).parent().children('.filter_select_wrap').toggleClass('active_toggle');
			jQuery(this).parent().siblings('.filter_main_box').find('.filter_select_wrap').slideUp(500);
			jQuery(this).parent().siblings('.filter_main_box').find('.filter_select_wrap').removeClass('active_toggle');
			jQuery(this).parent().siblings('.filter_main_box').removeClass('active');
			jQuery(this).parent().toggleClass('active');
		}
		
		e.stopPropagation();
	});
	jQuery(document).click(function(event) {
		var container = jQuery(".filter_main_box h6, .filter_select_wrap");
		if (
			!container.is(event.target) &&
			!container.has(event.target).length
		) {
			
			jQuery('.filter_select_wrap.active_toggle').slideUp(500);
			jQuery('.filter_main_box').removeClass('active');
		}
	});
	

});



function bluesticky()
{
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

jQuery(window).on('load' ,function() {
	bluesticky();
});
jQuery(window).resize(function() {
	bluesticky();
});
	  
/*============ Slick-Slider Function End ============*/