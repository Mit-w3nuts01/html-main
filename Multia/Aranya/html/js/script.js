
/*============ Header Function Start ============*/
 
 

jQuery(document).ready(function(){
	jQuery(".lifestyle-menu-toggler").click(function(){
		jQuery(this).toggleClass("active");
		jQuery(".lifestyle-header-navbar").slideToggle(300);
	});
});


/*jQuery(window).on('load',function() {
	'use strict';

	jQuery('body').addClass('loaded');

});*/

/*============ Header Function End ============*/

/*============ Slick-Slider Function Start ============*/
 

jQuery(document).ready(function(){
	if(jQuery('.home_slider').length > 0){
		jQuery('.home_slider').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:6000,
			smartSpeed:1000,
			margin:0,
			nav:true,
			navText: [
				'<svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.25 38L18.75 30.5L26.25 23" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M41.25 30.5L22.5 30.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.75 30.5L22.5 30.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 5.5C16.1929 5.5 5 16.6929 5 30.5C5 44.3071 16.1929 55.5 30 55.5C43.8071 55.5 55 44.3071 55 30.5C55 16.6929 43.8071 5.5 30 5.5Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  fill="none"/></svg>',
				'<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.5762 23L42.0762 30.5L34.5762 38" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M19.5762 30.5H38.3262" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M42.0762 30.5H38.3262" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M30.8262 55.5C44.6333 55.5 55.8262 44.3071 55.8262 30.5C55.8262 16.6929 44.6333 5.5 30.8262 5.5C17.0191 5.5 5.82617 16.6929 5.82617 30.5C5.82617 44.3071 17.0191 55.5 30.8262 55.5Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  fill="none"/></svg>'
			],
			dots: false,
			items:1,
		});
	}
	if(jQuery('.rooms_slider_1').length > 0){
		jQuery('.rooms_slider_1').owlCarousel({
			loop:true,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed:1000,
			margin:0,
			nav:false,
			dots: true,
			items:1,
		});
	}

	/*Mobile Menu Start*/
	jQuery(".navigation_main .main-menu li a").attr("data-scroll-to" , "");
	jQuery(".hamburger-icon").click(function() {
		'use strict';
		jQuery(this).toggleClass('active');
		jQuery('.navigation_main').toggleClass('show');
		jQuery('body').toggleClass('open_menu');
	});
	jQuery(".navigation_main .main-menu li a").click(function() {
		'use strict';
		jQuery('.hamburger-icon').removeClass('active');
		jQuery('.navigation_main').removeClass('show');
		jQuery('body').removeClass('open_menu');
	});
	/*Mobile Menu End*/
});

window.addEventListener("load", () => {
	jQuery('body').removeClass("scroll-not-loaded")

	setTimeout(() => {
		jQuery('body').removeClass("scroll-not-loaded-tran")
	}, 400)

	const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		scrollFromAnywhere: false,
		multiplier: 1,
		getDirection: true,
		reloadOnContextChange: true,
		touchMultiplier: 3,
		smoothMobile: 0,
		smartphone: {
			smooth: !0,
			breakpoint: 766
		},
		tablet: {
			smooth: !0,
			breakpoint: 1010
		},
	});
	// Add .active class on buttons when scrolling (highlight it)
	document.addEventListener( 'wpcf7submit', function( event ) {
		setTimeout(function(){
			scroll.update();
			// console.log('Update');
		}, 1000);
		// Your code
	  }, false );
	setTimeout(function(){
		scroll.update();
	}, 2000);

	jQuery(document).on("click", "#menu-main-menu li a", function(e){
		e.preventDefault();
		const sectionId = jQuery(this).attr("href");
		scroll.scrollTo(document.querySelector(sectionId));
	})


	function handleMenuActiveState() {
      const scrollCenter = scroll.scroll.instance.scroll.y + window.innerHeight / 2;

      /*if(scroll.scroll.instance.scroll.y > 5){
  		jQuery("#header").css({"position": "absolute", "top": 0});
      }else{
      	jQuery("#header").removeAttr("style")
      }*/


      jQuery('section.lending_page .aranya_land').each(function() {
        const sectionTop = scroll.scroll.instance.scroll.y + jQuery(this).offset().top;
        const sectionBottom = sectionTop + jQuery(this).outerHeight();
        // console.log(scroll.scroll.instance.scroll.y);
        if(scroll.scroll.instance.scroll.y <= 1){
        	jQuery('#menu-main-menu li').removeClass('active');
    		jQuery('#menu-main-menu li').first().addClass('active');
        }else if (scrollCenter >= sectionTop && scrollCenter <= sectionBottom) {
        	jQuery('#menu-main-menu li').first().removeClass('active');
          	const sectionId = jQuery(this).attr('id');
          	jQuery('a[href="#' + sectionId + '"]').parent().addClass('active');
        } else {
          	const sectionId = jQuery(this).attr('id');
          	jQuery('a[href="#' + sectionId + '"]').parent().removeClass('active');
        }
      });
    }

    handleMenuActiveState();
    scroll.on('scroll', function() {
    	handleMenuActiveState();
    });
	var isscrolldis = false;
	setInterval(() => {
		if(jQuery('.nice-select').hasClass('open') && !isscrolldis){
			isscrolldis = true;
			scroll.stop();
		}else if(!jQuery('.nice-select').hasClass('open') && isscrolldis){
			isscrolldis = false;
			scroll.start();
		}
	}, 100);
});



// jQuery(".form_row .form_col.form_btn_col .form_btn").click(function() {
// 	setTimeout(() => {
// 		// complete: function() {
			
// 		// }
// 	}, 8000);
// });


/*============ Slick-Slider Function End ============*/

jQuery(document).ready(function() {
	jQuery('.contact_row select.input_form').niceSelect();

	document.addEventListener( 'wpcf7mailsent', function( event ) {
		jQuery('.contact_row select.input_form').niceSelect('destroy');
		setTimeout(function(){
			jQuery('.contact_row select.input_form').niceSelect();
		}, 500);
		
	  }, false );

  });