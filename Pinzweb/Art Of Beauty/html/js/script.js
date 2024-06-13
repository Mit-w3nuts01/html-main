
//mobile menu
jQuery(".header_main .toggle-btn").click(function(e){
  jQuery(this).toggleClass("active");
  jQuery(".head_right").toggleClass("slide");
  jQuery("body").toggleClass("open-nav");
  jQuery("body").toggleClass("scrolldesable");
  e.preventDefault();
});

// jQuery(window).scroll(function(){
//   var sticky = jQuery('.header_main'),
//     scroll = jQuery(window).scrollTop();

//   if (scroll >= 1) sticky.addClass('fixed');
//   else sticky.removeClass('fixed');
// });


