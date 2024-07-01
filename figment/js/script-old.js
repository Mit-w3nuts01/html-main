"use strict";


jQuery(document).ready(function(){
	jQuery(".header_inner .right_menu a").on('click', function(e) {
		e.preventDefault();
		jQuery('body').addClass('open_menu');
		e.stopPropagation();
	});
	jQuery(".backdrop_bg ,.navigation_main .menu_closed_icon a").click(function(e) {
		e.preventDefault();
		jQuery('body').removeClass('open_menu');
		e.stopPropagation();
	});
	jQuery(".read_more_btn a").click(function(e) {
		e.preventDefault();
		jQuery(this).parents('.client_say_dtl_top').find('.client_say_dtl_top_content').toggleClass('content_open');
		jQuery(this).toggleClass('readmore');
		if(jQuery(this).hasClass('readmore')){
			jQuery(this).text(jQuery(this).attr('data-less'));
		}else {
			jQuery(this).text(jQuery(this).attr('data-show'));
		}
		e.stopPropagation();
	});

	function getFullHeight(element) {
		var originalMaxHeight = element.css('max-height').replace('px','');
		
		element.css('max-height', 'none');
		var fullHeight = element.height();
		var fullHeightpx = fullHeight+'px'
		var fullscreenpx ='1440px';
		var fullscreenvwfull = parseInt(fullHeightpx, 10) / parseInt(fullscreenpx, 10) * 100;
		// console.log(fullscreenvwfull);
		element.css({'--max-height-px': fullHeight+'px','--max-height-vw': fullscreenvwfull+'vw', 'max-height': ''});
		console.log(originalMaxHeight);
		if(originalMaxHeight < fullHeight ){
			element.parents('.client_say_dtl_top').addClass('toggle_btn')
		}
		
		return fullHeight;
	}

	jQuery('.client_say_dtl_top_content p').each(function() {
		var fullHeight = getFullHeight(jQuery(this));
		// console.log('Full height of the p tag:', fullHeight);
	});

	new WOW().init();
	
});

function bluesticky()
{
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

jQuery(window).on('load' ,function() {
	bluesticky();
});
jQuery(window).resize(function() {
	bluesticky();
});


 /***click to smooth scroll start ***/

 jQuery(".main-menu li a, .right_part_col .f_menu a").click(function(e){
	e.preventDefault();
	var section = jQuery(this).attr("href");    
	var url = jQuery(this).attr("href");
	
	// console.log('section click = ' + section)
	if(isValidURL(section)){
		var format = /[#]+/;
		if(format.test(section)){
		var link = section.split("#");
		section = "#"+link[1];
		} else {
		window.location = section
		}
	
	}
	
	var link = section.split("#");
	section = "#"+link[1];
	var headerOuterHeight = jQuery('.header_wapper').outerHeight();
	if(jQuery(section).length > 0){
		var scrol = jQuery(section).offset().top;
		// console.log(Math.pow(Math.abs(window.scrollY - jQuery(section).offset().top),2/3)*5);
		jQuery('html, body').animate({ 
		scrollTop: scrol
		}, Math.pow(Math.abs(window.scrollY - jQuery(section).offset().top),2/3)*5, 'linear');
		}else{
		window.location = url
		}
		jQuery('body').removeClass('open_menu');
	});
	
	function isValidURL(string) {
	var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
	return (res !== null)
	};
	
	/*on page load start*/ 
	var pageURL = jQuery(location).attr("href");
	var target = window.location.hash,
	target = target.replace('#', '');
	// delete hash so the page won't scroll to it
	window.location.hash = "";
		jQuery(document).ready(function(){
		var href = pageURL.split('#');
		var section = "#"+href[1];
		// console.log("section = " + section);
		var headerOuterHeight = jQuery('.header_wapper').outerHeight();
		if(jQuery(section).length > 0)
		{
			var scrol = jQuery(section).offset().top;
			jQuery('html, body').animate({ 
			scrollTop: scrol
			}, Math.pow(Math.abs(window.scrollY - jQuery(section).offset().top),2/3)*6, 'linear');
			// console.log(section);
			jQuery('.main-menu li a, .right_part_col .f_menu a').each(function(){
			var $this = jQuery(this).attr('href');
			var ele = jQuery(this); 
			if($this.indexOf(section) !== -1){
			ele.parent().addClass('active');
			}   
			});
		}
	});
	/*on page load end*/