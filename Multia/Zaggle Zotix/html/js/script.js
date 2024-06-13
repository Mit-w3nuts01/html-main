
/*============ Header Function Start ============*/
 
(function($){
	$(document).on('click', 'nav.navigation_main ul li a', function(e){
		var hash_val = $(this).attr('href').split('#')[1];
		if( $('#' + hash_val).length > 0 ){
			$('html, body').animate({
				scrollTop: $('#' + hash_val).offset().top - 80
			}, 800);
			return false;
		}
	});

	if (window.location.hash) {
		var hash = window.location.hash;
		if ($(hash).length) {
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 80
			}, 800);
		}
	}

	$(window).on('scroll', function(){
		$('nav.navigation_main ul li a').each(function( index ){
			var $nav_el = $(this);
			var hash_val = $nav_el.attr('href').split('#')[1];
			var $el = $('#' + hash_val);
    		var scrollTop = $(document).scrollTop();
    		var offset = $el.offset();
	        var el_top = (offset.top - 90);
	        var el_height = $el.outerHeight();
			var el_bot = (el_top + el_height);
			if( el_top <= scrollTop && el_bot >= scrollTop ){
				$nav_el.parent().addClass('active');
			}else{
				$nav_el.parent().removeClass('active');
			}
		});
	});
})(jQuery);

jQuery(document).ready(function(){
	jQuery(".lifestyle-menu-toggler").click(function(){
		jQuery(this).toggleClass("active");
		jQuery(".lifestyle-header-navbar").slideToggle(300);
	});
});
/*============ Header Function End ============*/

/*============ Slick-Slider Function Start ============*/
 

jQuery(document).ready(function(){
	jQuery(document).ready(function() {
		jQuery('select.input_field').niceSelect();
	});
	jQuery(".custom_acorrdian_box .title_acorrdian h4").on('click', function(e) {
		jQuery(this).parents('.custom_acorrdian_box').children('.custom_acorrdian_dtl').slideDown(500);
		jQuery(this).parents('.custom_acorrdian_box').siblings('.custom_acorrdian_box').find('.custom_acorrdian_dtl').slideUp(500);
		jQuery(this).parents('.custom_acorrdian_box').siblings('.custom_acorrdian_box').removeClass('active');
		jQuery(this).parents('.custom_acorrdian_box').addClass('active');
		
		var getattribute = jQuery(this).parents('.custom_acorrdian_box').attr('data-accordian-image');
		jQuery('.image_accordian_box').removeClass('active-image');
		jQuery('.image_accordian_box[data-accordian-image-show="'+getattribute+'"]').addClass('active-image');
		e.stopPropagation();
	});
	
	new WOW().init();
	
	

	jQuery(".title_faq h4").on('click', function(e) {
		if(jQuery(window).width() > 1200){
			jQuery(this).parents('.faq_box').children('.faq_dtl').fadeIn();
			jQuery(this).parents('.faq_box').siblings('.faq_box').find('.faq_dtl').fadeOut();
			jQuery(this).parents('.faq_box').siblings('.faq_box').removeClass('active');
			jQuery(this).parents('.faq_box').addClass('active');
		}
		else{
			jQuery(this).parents('.faq_box').children('.faq_dtl').slideDown(500);
			jQuery(this).parents('.faq_box').siblings('.faq_box').find('.faq_dtl').slideUp(500);
			jQuery(this).parents('.faq_box').siblings('.faq_box').removeClass('active');
			jQuery(this).parents('.faq_box').addClass('active');
		}
		e.stopPropagation();
	});


	
	

});

	  
/*============ Slick-Slider Function End ============*/


/*============ Home-Banner-Images Start ============*/
const homeZoyerImg = gsap.timeline({
	scrollTrigger: {
		trigger: ".home_banner",
		start: "top center",
		end: "+=50%",
		once: true,
	}
});
homeZoyerImg.from(".home_banner_img_main", { x:100, opacity:0, duration:0.8, ease:"power1.out"})
.from(".home_banner_mobile", { x:-100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.5")
.from(".home_banner_card", { scale:0.5, x:100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.3")
/*============ Home-Banner-Images End ============*/

/*============ Business Benefits Start ============*/
const business_benefits = gsap.timeline({
	scrollTrigger: {
		trigger: ".deshboard_img",
		start: "top center",
		end: "+=50%",
		once: true,
	}
});
business_benefits.from(".deshboard_img", { opacity:0, duration:0.8, ease:"power1.out"})
.from(".card_img_busines_benefits", { scale:0.5, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.3")
.from(".business_benefits_cont_box_1 .business_cont_list:first-child", { x:100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.3")
.from(".business_benefits_cont_box_2 .business_cont_list:first-child", { x:-100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.8")
.from(".business_benefits_cont_box_1 .business_cont_list:nth-child(2)", { x:100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.3")
.from(".business_benefits_cont_box_2 .business_cont_list:nth-child(2)", { x:-100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.8")
.from(".business_benefits_cont_box_1 .business_cont_list:nth-child(3)", { x:100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.3")
.from(".business_benefits_cont_box_2 .business_cont_list:nth-child(3)", { x:-100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.8")

/*============ Business Benefits End ============*/

/*============ Employee Benefits Start ============*/
const employee_benefits = gsap.timeline({
	scrollTrigger: {
		trigger: ".employee_benefits_bottom",
		start: "top center",
		end: "+=50%",
		once: true,
	}
});
employee_benefits.from(".employee_benefits_img", { opacity:0, duration:0.5, ease:"power1.out"})
.from(".employee_benefits_bottom_1 .employee_cont_list:first-child", { x:100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.3")
.from(".employee_benefits_bottom_2 .employee_cont_list:first-child", { x:-100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.3")
.from(".employee_benefits_bottom_1 .employee_cont_list:nth-child(2)", { x:100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.3")
.from(".employee_benefits_bottom_2 .employee_cont_list:nth-child(2)", { x:-100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.3")

/*============ Employee Benefits End ============*/

/*============ Contact Banner Effect Start ============*/
const contact_banner = gsap.timeline({
	scrollTrigger: {
		trigger: ".contact_banner_inner",
		start: "top center",
		end: "+=50%",
		once: true,
	}
});
contact_banner.from(".contact_banner_img_main", { opacity:0, duration:1, ease:"power1.out"})
.from(".contact_balance_banner", { scale:0.5, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.5")
.from(".contact_banner_img .contact_card_box", { x:-100, opacity:0, duration:0.8, ease:"power1.out"}, "-=0.3")


/*============ Contact Banner Effect End ============*/

/*============ Contact Effect Start ============*/
const contact_bottom = gsap.timeline({
	scrollTrigger: {
		trigger: ".contact_secbottom",
		start: "top center",
		end: "+=50%",
		once: true,
	}
});
contact_bottom.from(".contact_secbottom", { opacity:0, duration:1, ease:"power1.out"})


/*============ Contact Effect End ============*/


/*============ Ready to Optimise Section Start ============*/
const business_travel_ani = gsap.timeline({
	scrollTrigger: {
		trigger: ".business_travel_img",
		start: "top center",
		end: "+=50%",
		once: true,
	}
});
business_travel_ani.from(".business_travel_img_inner", { opacity:0, x:'100%', duration:1, ease:"power1.out"})

/*============ Ready to Optimise Section End ============*/

jQuery(window).on('load',function(){
	jQuery(".list").mCustomScrollbar();
	jQuery( ".mCustomScrollbar" ).each(function( index ) {
		var $rail = jQuery(this).find('.mCSB_draggerRail');
		var $target = jQuery(this).find('.mCSB_draggerContainer');
		if ($rail.length > 0 && $rail.parent().hasClass('mCSB_dragger') ) {
				$rail.appendTo($target);
		}
	});
});