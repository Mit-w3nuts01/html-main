
/*============ Header Function Start ============*/
 
 

jQuery(document).ready(function(){
	jQuery(".menu-icon").click(function(){
		jQuery(this).addClass("active");
		jQuery("body").addClass("active-menu");
	});
	jQuery(".close-btn a").click(function(){
		jQuery(this).removeClass("active");
		jQuery("body").removeClass("active-menu");
	});
	new WOW().init();
	jQuery(window).scroll(function () {
		var sticky = jQuery('#header'),
			scroll = jQuery(window).scrollTop();

		if (scroll >= 1) sticky.addClass('fixed');
		else sticky.removeClass('fixed');
	});
	$(".testi-block-right .coman-class").on('click', function(e) {
		$(this).addClass('active');
		$(this).siblings('.coman-class').removeClass('active');
		//$(this).parent().toggleClass('active');
		e.stopPropagation();
	});

	if(jQuery('.bottom_scroll_div a').length > 0){
		jQuery(".bottom_scroll_div a").on('click', function(e) {
			e.preventDefault();
			var getheaderheight = jQuery('header#header').outerHeight();
			var offset = jQuery('.project-section-1').offset().top;
			jQuery('html, body').stop().animate({
				scrollTop: offset - getheaderheight
			}, 800);
			e.stopPropagation();
		});
	}

});
/*============ Header Function End ============*/

/*============ Slick-Slider Function Start ============*/
 

jQuery(document).ready(function(){
	 
	 jQuery("#music-podcast-slider").slick({
		slidesToShow: 5,
		centerPadding: '0px',
		infinite:true,
		speed:1000,
		dots:false,
		arrows:true,
		adaptiveHeight:true,
		centerMode: true,
		variableWidth: true
	});
});

	  
/*============ Slick-Slider Function End ============*/
if(jQuery('.services-listing-link').length > 0){


let menuItem = document.querySelectorAll(".services-listing-link");
	let menuImage = document.querySelectorAll(".menu__item-image");

	// adding eventListeners to all the menuItems.
	for (let i = 0; i < jQuery('.services-listing-link').length; i++) {
	//   image reveal animation
	const animation = gsap.to(menuImage[i], {
		opacity: 1,
		duration: 0.2,
		scale: 1,
		ease: "ease-in-out"
	});

	menuItem[i].addEventListener("mouseenter", () => animation.play());
	menuItem[i].addEventListener("mouseleave", () => animation.reverse());

	//   initialization
	animation.reverse();
	}
	let menuItemx = document.querySelectorAll(".services-listing-link").clientHeight;
	//   to move image along with cursor
	function moveText(e) {
	gsap.to([...menuImage], {
		css: {
		left: e.pageX - 50,
		top: e.menuItemx,
		},
		duration: 0.3,
	});
	}

	menuItem.forEach((el) => {
	el.addEventListener("mousemove", moveText);
	});
}