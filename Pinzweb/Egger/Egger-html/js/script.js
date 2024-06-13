

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
jQuery("header .menu-item-has-children > a ").append('<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8"><g class="play-track-next" transform="translate(10) rotate(90)"><path class="Path_1029" data-name="Path 1029" d="M6,17l8-5L6,7Z" transform="translate(-6 -7)" fill="#000"></path></g></svg></span>');
jQuery( "header .menu-item-has-children > a").attr("data-clickcounter" , "0");
   jQuery( "header .menu-item-has-children > a" ).click(function( e ) {
     if(jQuery(this).attr("data-clickcounter") == 0)
     {
		jQuery('header .menu-item-has-children > a').attr("data-clickcounter" , '0');
		jQuery(this).attr("data-clickcounter" , '1');
        e.preventDefault();
		jQuery(this).parent().children('ul').slideToggle(500);
		jQuery(this).parent().siblings('li').find('ul').slideUp(500);
		jQuery(this).parent().siblings('li').removeClass('active');
		jQuery(this).parent().toggleClass('active');   
		e.stopPropagation();   
     }
     else { 
        window.location(jQuery(this).attr("href"));       
     }                
   });   





/*============ Slider Function End ============*/

