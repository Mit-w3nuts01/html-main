

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
jQuery("header .menu-item-has-children > a ").append('<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="14.754" height="8.564" viewBox="0 0 14.754 8.564"><path id="angle-left" d="M14.1,17.959a.658.658,0,0,1-.469-.195l-6.19-6.19a.662.662,0,0,1,0-.937l6.19-6.19a.663.663,0,0,1,.937.937L8.852,11.106l5.721,5.722a.663.663,0,0,1-.469,1.132Z" transform="translate(-3.705 15.314) rotate(-90)" fill="currentcolor" stroke="currentcolor" stroke-width="1"/></svg></span>');
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
    
   (function ($) {
    $(document).ready(function () {
        $("#tabs-nav li:first-child").addClass("active"),
			$(".tab-content").hide(),
			$(".tab-content:first").show(),
            $("#tabs-nav li").click(function () {
                $("#tabs-nav li").removeClass("active"), $(this).addClass("active"), $(".tab-content").hide();
                var b = $(this).find("a").attr("href");
                return $(b).fadeIn(), !1;
            }),
            $(".accordion > li:eq(0) a").addClass("active").next().slideDown(),
            $(".accordion a").click(function (c) {
                var b = $(this).closest("li").find(".acc_content");
                $(this).closest(".accordion").find(".acc_content").not(b).slideUp(),
					$(this).hasClass("active") ? $(this).removeClass("active") : ($(this).closest(".accordion").find("a.active").removeClass("active"), $(this).addClass("active")),
                    b.stop(!1, !0).slideToggle(),
                    c.preventDefault();
            });
    });
})(jQuery);




/*============ Slider Function End ============*/

