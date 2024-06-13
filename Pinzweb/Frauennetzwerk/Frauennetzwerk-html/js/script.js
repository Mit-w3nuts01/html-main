

/*============ Header Function Start ============*/
jQuery(document).ready(function(){
	jQuery(".header_main .menu-btn").click(function(e){
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery("body").toggleClass("open-nav");
	});	
	

    jQuery(window).scroll(function(){
        var getheaderwidth = jQuery('.header_main').outerHeight()
	  var sticky = jQuery('.header_main'),
		  scroll = jQuery(window).scrollTop();
	
	  if (scroll >= getheaderwidth) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
});



	
/*============ Header Function End ============*/



/*============ slider Function Start ============*/
jQuery("header .menu-item-has-children > a ").append('<span class="icon hide-desktop"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><g id="Group_40" data-name="Group 40" transform="translate(363 254) rotate(180)"><path id="Down_Arrow_3_" d="M26.7,47.309a.607.607,0,0,1-.431-.178l-6.091-6.091a.609.609,0,0,1,.861-.861l5.66,5.66,5.66-5.66a.609.609,0,0,1,.861.861L27.13,47.13A.607.607,0,0,1,26.7,47.309Z" transform="translate(372.399 279.309) rotate(180)" fill="#fff"/><g id="Ellipse_9" data-name="Ellipse 9" transform="translate(328 219)" fill="none" stroke="#fff" stroke-width="1"><circle cx="17.5" cy="17.5" r="17.5" stroke="none"/><circle cx="17.5" cy="17.5" r="17" fill="none"/></g></g></svg></span>');
   jQuery( "header .menu-item-has-children > a" ).click(function( e ) {
	   e.preventDefault();
		if (jQuery(window).width() <= 991) {
			jQuery(this).parent().children('ul').slideToggle(500);
			jQuery(this).parent().siblings('li').find('ul').slideUp(500);
			jQuery(this).parent().siblings('li').removeClass('active');
			jQuery(this).parent().toggleClass('active');   
		}
		e.stopPropagation();   
});  
    

var swiper = new Swiper(".news_slider", {
    direction: 'horizontal',
    slidesPerView: "auto",
    loop: false,
    autoplay: false,
    freeMode: false,
    spaceBetween: 0,
    breakpoints: {
        1441: {
            slidesPerView: 4,
            // spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            // spaceBetween: 20,
        },
        320: {
            // spaceBetween: 20,
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        // dragSize: 500
    }
}); 


/*============ Slider Function End ============*/

