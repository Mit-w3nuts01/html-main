
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

	function countprogress(){
		var gettotalform = jQuery('.list_step_form_main .list_step_form').length;
		var fillform = jQuery('.list_step_form_main .list_step_form.fill').length;
		var countnext = parseInt((100 / gettotalform) * fillform);
		jQuery('.form_progressbar_count span').text(countnext);
		jQuery('.form_progressbar .form_progressbar_inner').css('width',countnext+'%' )
	}

	countprogress();
	jQuery(".step_btn button").on('click', function(e) {
		var currentelement = jQuery('.list_step_form.current');
		if(jQuery(this).hasClass('next_btn')){
			if(jQuery('.list_step_form_main .list_step_form.fill').length <	 jQuery('.list_step_form_main .list_step_form').length - 1){
				jQuery(currentelement).addClass('fill').removeClass('current').hide();
				jQuery(currentelement).next('.list_step_form').show().addClass('current');
				countprogress()
			}

			
			
		}else{
			if(jQuery('.list_step_form_main .list_step_form.fill').length > 0){
				jQuery(currentelement).removeClass('current').hide().last().prev().show().addClass('current').removeClass('fill');
				countprogress()
			}
		}
		
	});

	jQuery(document).ready(function() {
		jQuery('.select').niceSelect();
	  });
});

	  
/*============ Slick-Slider Function End ============*/