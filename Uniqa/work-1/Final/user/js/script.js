
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
	jQuery(".step_btn .next_btn").on('click', function(e) {
		var currentelement = jQuery('.list_step_form.current');
		if(jQuery(this).hasClass('next_btn')){
			if(jQuery('.list_step_form_main .list_step_form.fill').length <	 jQuery('.list_step_form_main .list_step_form').length - 1){
				e.preventDefault()
				var el = $(this);
				var validation = true;
				el.parents('#commentForm').find('input').removeClass('error');
				el.parents('#commentForm').find('input').addClass('success');
				var stepid = jQuery(currentelement).attr('id');
				jQuery('.pre_btn_returnd').hide();
				jQuery('.pre_btn').show();
				if(stepid == 'step-1'){
					var ert_state = document.getElementById("choose-your-state-form");
					var state_text = ert_state.options[ert_state.selectedIndex].text;
					if(!state_text){
						jQuery('#state-dropdown').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-2'){
					var serviceeinheit = jQuery('input[name="contry[]"]').val();
					var checkboxes = document.getElementsByName('contry[]');
					var contry_vals = "";
					for (var i=0, n=checkboxes.length;i<n;i++) 
					{
						if (checkboxes[i].checked) 
						{
							contry_vals += ","+checkboxes[i].value;
						}
					}
					if(!contry_vals){
						jQuery('input[name="contry[]"]').removeClass('success');
						jQuery('input[name="contry[]"]').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-3'){
					var checkbox2 = jQuery('input[name="user-checkbox1[]"]').val();
					var checkboxes2_rt = document.getElementsByName('user-checkbox1[]');
					var checkbox2_vals = "";
					for (var i=0, n=checkboxes2_rt.length;i<n;i++) 
					{
						if (checkboxes2_rt[i].checked) 
						{
							checkbox2_vals += ","+checkboxes2_rt[i].value;
						}
					}

					if(!checkbox2_vals){
						jQuery('input[name="user-checkbox1[]"]').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-4'){
					var checkbox2 = jQuery('input[name="user-checkbox2[]"]').val();
					var checkboxes2 = document.getElementsByName('user-checkbox2[]');
					var checkbox2_valsr = "";
					for (var i=0, n=checkboxes2.length;i<n;i++) 
					{
						if (checkboxes2[i].checked) 
						{
							checkbox2_valsr += ","+checkboxes2[i].value;
						}
					}

					if(!checkbox2_valsr){
						jQuery('input[name="user-checkbox2[]"]').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-5'){
					var radio_val_new3 = jQuery("input[type='radio'][name='user-checkbox3']:checked").val();
					if(!radio_val_new3){
						jQuery('input[name="user-checkbox3"]').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-6'){
					var radio_val_new4 = jQuery("input[type='radio'][name='user-checkbox4']:checked").val();
					if(!radio_val_new4){
						jQuery('input[name="user-checkbox4"]').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-7'){
					var radio_val1 = jQuery("input[type='radio'][name='user-rating8']:checked").val();
					var radio_val2 = jQuery("input[type='radio'][name='user-rating9']:checked").val();
					var radio_val3 = jQuery("input[type='radio'][name='user-rating10']:checked").val();
					var radio_val4 = jQuery("input[type='radio'][name='user-rating11']:checked").val();
					var radio_val5 = jQuery("input[type='radio'][name='user-rating12']:checked").val();
					if((!radio_val1) || (!radio_val2) || (!radio_val3) || (!radio_val4) || (!radio_val5)){
						jQuery('.error_message').show();
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
						jQuery('.step_btn .matchbtn').show();
						jQuery('.step_btn .next_btn:not(.matchbtn)').hide();
					}
				}

				if(stepid == 'step-8'){
					var radio_val_new5 = jQuery("input[type='radio'][name='user-checkbox5']:checked").val();
					if(!radio_val_new5){
						jQuery('input[name="user-checkbox5"]').addClass('error');
					}else{
						jQuery('.counsaltant_main_section').show();
						jQuery('.main_steps_section').hide();
						
						// jQuery(currentelement).addClass('fill').removeClass('current').hide();
						// jQuery(currentelement).next('.list_step_form').show().addClass('current');
						// jQuery('.step_btn').hide();
					}
				}

				if(stepid == 'step-9'){
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
				}
				countprogress()
			}

			
			
		}else{
			if(jQuery('.list_step_form_main .list_step_form.fill').length > 0){
				jQuery(currentelement).removeClass('current').hide().last().prev().show().addClass('current').removeClass('fill');
				var stepidr = jQuery(currentelement).attr('id');
				if(stepidr == 'step-2'){
					jQuery('.pre_btn_returnd').show();
					jQuery('.pre_btn').hide();
				}

				countprogress()
			}
		}
		
	});

	jQuery(".step_btn .pre_btn").on('click', function(e) {
		var currentelement = jQuery('.list_step_form.current');
		jQuery('.step_btn .matchbtn').hide();
		jQuery('.step_btn .next_btn:not(.matchbtn)').show();
		if(jQuery('.list_step_form_main .list_step_form.fill').length > 0){
			jQuery(currentelement).removeClass('current').hide().last().prev().show().addClass('current').removeClass('fill');
			jQuery('.step_btn').show();
			var stepidr = jQuery(currentelement).attr('id');
			if(stepidr == 'step-2'){
				jQuery('.pre_btn_returnd').show();
				jQuery('.pre_btn').hide();
			}
			countprogress()
		}
	});	

	jQuery(".bottom_extra_btn_dtl .pre_btn").on('click', function(e) {
		jQuery('.step_btn .matchbtn').hide();
		jQuery('.step_btn .next_btn:not(.matchbtn)').show();
		var currentelement = jQuery('.list_step_form.current');
		if(jQuery('.list_step_form_main .list_step_form.fill').length > 0){
			jQuery(currentelement).removeClass('current').hide().last().prev().show().addClass('current').removeClass('fill');
			jQuery('.step_btn').show();
			var stepidr = jQuery(currentelement).attr('id');
			if(stepidr == 'step-2'){
				jQuery('.pre_btn_returnd').show();
				jQuery('.pre_btn').hide();
			}
			countprogress()
		}
	});	

	jQuery(document).ready(function() {
		jQuery('.select').niceSelect();
	});

	/*Mobile Menu Start*/
	jQuery(".menu-toggler").click(function() {
		'use strict';
		jQuery(this).toggleClass('active');
		jQuery('.header-right').toggleClass('open');
		jQuery('body').toggleClass('open_menu');
	});
	/*Mobile Menu End*/

});

jQuery('.next_btn_retruned').hide();

jQuery(".user_profile_sec .w3n_btn_link a").click(function() {
	jQuery('.counsaltant_main_section').hide();
	jQuery('.main_steps_section').show();
	jQuery('.form-step-8').addClass('fill').removeClass('current').hide();
	jQuery('.form-step-9').show().addClass('current');
	jQuery('.step_btn').hide();
});

jQuery(".gostep_btn a").click(function() {
	stepid = jQuery(this).attr('data-rid');
	jQuery('.form-step-9').addClass('fill').removeClass('current').hide();
	jQuery('.form-'+stepid).show().addClass('current');
	jQuery('.step_btn').show();
	jQuery('.next_btn').hide();
	jQuery('.next_btn_retruned').show();
	jQuery('.next_btn_retruned').attr('id',stepid);
	jQuery('.step_btn .pre_btn').attr('id','');
	if(stepid == 'step-1'){
		jQuery('.pre_btn_returnd').show();
		jQuery('.pre_btn').hide();
	}else{
		jQuery('.pre_btn_returnd').hide();
		jQuery('.step_btn .pre_btn').hide();
	}

	const destination = jQuery(".inner_wrap");
	jQuery('html,body').animate({
		scrollTop: destination.offset().top - 72
	},300);
	
	//countprogress();
});

jQuery(".next_btn_retruned").click(function() {
	stepid = jQuery(this).attr('id');
	jQuery('.list_step_form').removeClass('current').hide();
	jQuery('.form-'+stepid).addClass('fill').removeClass('current').hide();
	jQuery('.step_btn').hide();
	jQuery('.step_btn .pre_btn').show();
	jQuery('.step_btn .pre_btn_returnd').hide();
	jQuery('.bottom_extra_btn_dtl .pre_btn').show();
	jQuery('.form-step-9').show().addClass('current');
	jQuery('.next_btn').show();
	jQuery('.next_btn_retruned').hide();
});

jQuery(".pre_btn_returnd").click(function() {
	jQuery('.list_nonstep_form').hide();
	jQuery('.main_stap_form_progressbar').addClass('progressbar_hide');
	jQuery('.step_btn').show();
	jQuery('.nostapform .list_nonstep_form .next_btn').show();
	jQuery('.nostapform').show();
	jQuery('.nonstep_form_3').show();
	jQuery('.step_forms').hide();
});


	  
/*============ Slick-Slider Function End ============*/


$('input').on('change keyup', function() {
	if ($(this).val().length > 0) {
		$(this).removeClass('error');
		$(this).addClass('success');
	}else{
		$(this).removeClass('success');
		$(this).addClass('error');
	} 
});


jQuery('.form_row_state .form_col_state .state_indicate_box label').click(function() {
	var id = jQuery(this).attr('data-id');
	jQuery('#conformation_modal').modal('show');
	jQuery('.confirm_btn_modal').attr('data-id',id);
	jQuery('.return_btn_modal').attr('data-id',id);
	jQuery('.language_conformation .btn-close').attr('data-id',id);
	jQuery(this).parent().attr('data-id',id);
});

jQuery('.confirm_btn_modal').click(function() {
	var dataid = jQuery(this).attr('data-id');
	document.getElementById(dataid).checked = true;
	jQuery('#'+dataid).attr('checked','');
	jQuery("#conformation_modal").modal('hide');
});

jQuery('.return_btn_modal').click(function() {
	var dataid = jQuery(this).attr('data-id');
	document.getElementById(dataid).checked = false;
	jQuery("#conformation_modal").modal('hide');
	jQuery('#'+dataid).removeAttr('checked');
});

jQuery('.language_conformation .btn-close').click(function() {
	var dataid = jQuery(this).attr('data-id');
	document.getElementById(dataid).checked = false;
	jQuery("#conformation_modal").modal('hide');
	jQuery('#'+dataid).removeAttr('checked');
});