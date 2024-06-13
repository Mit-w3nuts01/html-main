
/*============ Header Function Start ============*/
 
 

jQuery(document).ready(function(){
	jQuery(".lifestyle-menu-toggler").click(function(){
		jQuery(this).toggleClass("active");
		jQuery(".lifestyle-header-navbar").slideToggle(300);
	});
});
/*============ Header Function End ============*/

/*============ Slick-Slider Function Start ============*/
 

jQuery(document).ready(function(){
	 
	 
	
 

	// jQuery(".how_it_slider").slick({
		 
	// 	slidesToShow: 3,
	// 	centerPadding: '0px',
	// 	infinite:true,
	// 	speed:1000,
	// 	dots:false,
	// 	arrows:false,
	// 	autoplay:true,
	// 	autoplaySpeed:5000,
	// });
	let howitslider = jQuery('.how_it_slider');
	howitslider.owlCarousel({
		loop:true,
		margin:0,
		smartSpeed:800,
		autoplay:true,
		autoplayTimeout:5000,
		
        dotsContainer: '.how_it_slider_dots',
		responsive:{
			0:{
				items:1
			},
			992:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	jQuery(".how_it_slider_owl_next > a").click(function () {
		howitslider.trigger("next.owl.carousel");
	});
	jQuery(".how_it_slider_owl_prev > a").click(function () {
		howitslider.trigger("prev.owl.carousel");
	});
	jQuery(".how_it_slider_owl_prev > a").addClass("disabled");
	jQuery(howitslider).on("translated.owl.carousel", function (event) {
		if (jQuery(".owl-prev").hasClass("disabled")) {
			jQuery(".how_it_slider_owl_prev > a").addClass("disabled");
		} else {
			jQuery(".how_it_slider_owl_prev > a").removeClass("disabled");
		}
		if (jQuery(".owl-next").hasClass("disabled")) {
			jQuery(".how_it_slider_owl_next > a").addClass("disabled");
		} else {
			jQuery(".how_it_slider_owl_next > a").removeClass("disabled");
		}
	});


	jQuery(".modal_main_step .w3n_btn_wrp a").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		jQuery(this).parents('.modal_main_step').next('.step_form_modal').show();
		jQuery(this).parents('.modal_main_step').hide();
	});
	jQuery(".step_form_modal_step-1 .w3n_btn_wrp .w3n_btn").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		jQuery(this).parents('.step_form_modal_step-1').next('.step_form_modal_step-2').show();
		jQuery('.step_form_modal_step-2').addClass('active');
		jQuery(this).parents('.step_form_modal_step-1').hide();
		jQuery('.step_form_modal_step-1').removeClass('active');
		jQuery('.step_for_pagi li.active').removeClass('active').next().addClass('active');
	});
	jQuery(".step_form_modal_step-2 .w3n_btn_wrp .w3n_btn").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		jQuery(this).parents('.step_form_modal_step-2').next('.step_form_modal_step-3').show();
		jQuery('.step_form_modal_step-3').addClass('active');
		jQuery(this).parents('.step_form_modal_step-2').hide();
		jQuery('.step_form_modal_step-2').removeClass('active');
		jQuery('.step_for_pagi li.active').removeClass('active').next().addClass('active');
	});
	jQuery(".search_filter_list li a").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		jQuery(this).parents('.step_form_modal_step-3').next('.step_form_modal_step-4').show();
		jQuery('.step_form_modal_step-4').addClass('active');
		jQuery(this).parents('.step_form_modal_step-3').hide();
		jQuery('.step_form_modal_step-3').removeClass('active');
		jQuery('.step_for_pagi li.active').removeClass('active').next().addClass('active');
	});
	jQuery(".step_form_modal_step-4 .w3n_btn_wrp .w3n_btn").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		jQuery(this).parents('.step_form_modal').next('.sent_modal_box').show();
		jQuery(this).parents('.step_form_modal').hide();
	});

	jQuery(".see_record_btn a").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		jQuery(this).parents('.sent_modal_box').prev('.step_form_modal').show();
		jQuery(this).parents('.sent_modal_box').hide();
	});

	jQuery(".tab_entri_left_inner .tab_entri_box .tab_entri_title").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		jQuery(this).addClass('active');
		jQuery(this).parents('.tab_entri_box').find('.tab_entri_content').slideDown();
		jQuery(this).parents('.tab_entri_box').siblings('.tab_entri_box').find('.tab_entri_title').removeClass('active');
		jQuery(this).parents('.tab_entri_box').siblings('.tab_entri_box').find('.tab_entri_content').slideUp();

		jQuery('.tab_entri_right_inner .tab_entri_right_box[data-entri-data="'+jQuery(this).attr('data-entri-title')+'"]').siblings('.tab_entri_right_box').removeClass('show');
		setTimeout(() => {
			jQuery('.tab_entri_right_inner .tab_entri_right_box[data-entri-data="'+jQuery(this).attr('data-entri-title')+'"]').siblings('.tab_entri_right_box').removeClass('active');
			jQuery('.tab_entri_right_inner .tab_entri_right_box[data-entri-data="'+jQuery(this).attr('data-entri-title')+'"]').addClass('active show');
		}, 300);

		// jQuery('.tab_entri_right_inner .tab_entri_right_box[data-entri-data="'+jQuery(this).attr('data-entri-title')+'"]').siblings('.tab_entri_right_box').fadeOut();

	});
	jQuery(".step_back a").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		// console.log("jQuery('.step_form_modal_step-1')" , jQuery('.step_form_modal_step-1').show())
		// console.log("jQuery('.step_form_modal_step-2')" , jQuery('.step_form_modal_step-2').show())
		// console.log("jQuery('.step_form_modal_step-3')" , jQuery('.step_form_modal_step-3').show())
		// console.log("jQuery('.step_form_modal_step-4')" , jQuery('.step_form_modal_step-4').show())
		if(jQuery('.step_form_modal_step-1').hasClass('active')){
			jQuery(this).parents('.step_form_modal').prev('.modal_main_step').show();
			jQuery(this).parents('.step_form_modal').hide();
		}
		if(jQuery('.step_form_modal_step-2').hasClass('active')){
			jQuery('.step_form_modal_step-1').show();
			jQuery('.step_form_modal_step-1').addClass('active');
			jQuery('.step_form_modal_step-2').hide();
			jQuery('.step_form_modal_step-2').removeClass('active');
			jQuery('.step_for_pagi li.active').removeClass('active').prev().addClass('active');
		}
		else if(jQuery('.step_form_modal_step-3').hasClass('active')){
			jQuery('.step_form_modal_step-2').show();
			jQuery('.step_form_modal_step-2').addClass('active');
			jQuery('.step_form_modal_step-3').hide();
			jQuery('.step_form_modal_step-3').removeClass('active');
			jQuery('.step_for_pagi li.active').removeClass('active').prev().addClass('active');
		}
		else if(jQuery('.step_form_modal_step-4').hasClass('active')){
			jQuery('.step_form_modal_step-3').show();
			jQuery('.step_form_modal_step-3').addClass('active');
			jQuery('.step_form_modal_step-4').hide();
			jQuery('.step_form_modal_step-4').removeClass('active');
			jQuery('.step_for_pagi li.active').removeClass('active').prev().addClass('active');
		}
	});
	/*Mobile Menu Start*/
	jQuery(".menu-btn").click(function(e) {
		'use strict';
		e.stopPropagation();
		e.preventDefault();
		jQuery(this).toggleClass('active');
		jQuery('.navigation_main').toggleClass('show');
		jQuery('body').toggleClass('open-nav');
	});
	/*Mobile Menu End*/


	var homeSlider = jQuery(".solutionslider");

		jQuery(window).resize(function() {
		showHomeSlider();
		});

		function showHomeSlider() {
		if (homeSlider.data("owlCarousel") !== "undefined") {
			if (window.matchMedia('(max-width: 767px)').matches) {
			initialHomeSlider();
			} else {
			destroyHomeSlider();
			}
		}
		}
		showHomeSlider();

		function initialHomeSlider() {
		homeSlider.addClass("owl-carousel").owlCarousel({
			items: 1,
			margin:30,
			loop: true,
			smartSpeed: 800,
			dotsContainer: '.solutionslider_dots',
		});
		jQuery(".solutionslider_owl_next > a").click(function () {
			homeSlider.trigger("next.owl.carousel");
		});
		jQuery(".solutionslider_owl_prev > a").click(function () {
			homeSlider.trigger("prev.owl.carousel");
		});
		jQuery(".solutionslider_owl_prev > a").addClass("disabled");
		jQuery(homeSlider).on("translated.owl.carousel", function (event) {
			if (jQuery(".owl-prev").hasClass("disabled")) {
				jQuery(".solutionslider_owl_prev > a").addClass("disabled");
			} else {
				jQuery(".solutionslider_owl_prev > a").removeClass("disabled");
			}
			if (jQuery(".owl-next").hasClass("disabled")) {
				jQuery(".solutionslider_owl_next > a").addClass("disabled");
			} else {
				jQuery(".solutionslider_owl_next > a").removeClass("disabled");
			}
		});
		}

		function destroyHomeSlider() {
		homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
		}

});

	  
/*============ Slick-Slider Function End ============*/