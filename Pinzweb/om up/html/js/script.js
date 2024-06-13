
// ====== header fixed ======

jQuery(window).scroll(function(){
	var sticky = $('.header'),
	scroll = $(window).scrollTop();
  
	if (scroll >= 1) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
});


jQuery(window).scroll(function() {
	var banner1 = jQuery('.banner_ani').outerHeight() / 2;
	var height = jQuery(document).scrollTop(); 
	if(height  > banner1) {
		jQuery("body").addClass("active-logo");
	} else{
		jQuery("body").removeClass("active-logo");
	}
	// console.log($banner1);
});
// ====== header fixed ======


// ====== mobile menu ======

jQuery(".header .toggle-btn").click(function(e){
	jQuery(this).toggleClass("active");
	jQuery(".nav_wrap").toggleClass("slide");
	jQuery("body").toggleClass("open-nav");
	jQuery(".navigation ul li.menu-item-has-children").find('.sub-menu').slideUp(500);
    jQuery(".navigation ul li.menu-item-has-children").removeClass('active');
	e.preventDefault();
});

jQuery(".menu-has-children > a").click(function(e){
	jQuery(this).parent().children('.sub-menu').slideToggle(500);
	jQuery(this).parent().siblings('li').find('.sub-menu').slideUp(500);
	jQuery(this).parent().siblings('li').removeClass('active');
	jQuery(this).parent().toggleClass('active');
	e.stopPropagation();
});

// ====== mobile menu ======


jQuery('.bnr_arrow a').click(function() {
	let headerHeight = jQuery('header').outerHeight();
	let section = jQuery('#intro_sec').offset().top;
	jQuery('html, body').animate({
		scrollTop: (section - headerHeight)
	}, 1000);
});


// ====== accordian ======

(function($) {
	$( document ).ready(function() {
		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
		$('.accordion a').click(function(j) {
			var dropDown = $(this).closest('li').find('p');

			$(this).closest('.accordion').find('p').not(dropDown).slideUp();

			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}

			dropDown.stop(false, true).slideToggle();

			j.preventDefault();
		});
	});
})(jQuery);

// ====== accordian ======