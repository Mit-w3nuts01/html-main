
/*============ Header Function Start ============*/
jQuery(document).ready(function(){
	jQuery(".menu-toggler").click(function(){
		jQuery(this).toggleClass("active");
		jQuery(".header-navigation").toggleClass("open");
		jQuery("body").toggleClass("overflow-hidden");
	});
});
/*============ Header Function End ============*/

/*============ Floating-Icons Function Start ============*/
jQuery(document).ready(function(){
	jQuery(".floating-icons .iconbox .icon").click(function(event){
		event.preventDefault();
		jQuery(this).next(".textbox").fadeToggle(300);
		jQuery(this).parent(".iconbox").siblings().find(".textbox").fadeOut(300);
	});
});
/*============ Floating-Icons Function End ============*/