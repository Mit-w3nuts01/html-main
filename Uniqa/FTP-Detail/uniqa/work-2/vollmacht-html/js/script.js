
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
		// var gettotalform = jQuery('.list_step_form_main .list_step_form').length;
		// var fillform = jQuery('.list_step_form_main .list_step_form.fill').length;
		// var countnext = parseInt((100 / gettotalform) * fillform);
		// jQuery('.form_progressbar_count span').text(countnext);
		// jQuery('.form_progressbar .form_progressbar_inner').css('width',countnext+'%' )
	}

	// countprogress();
	jQuery(".step_btn .next_btn").on('click', function(e) {
		var currentelement = jQuery('.list_step_form.current');
		if(jQuery(this).hasClass('next_btn')){
				e.preventDefault()
				var el = $(this);
				var validation = true;
				el.parents('#commentForm').find('input').removeClass('error');
				el.parents('#commentForm').find('input').addClass('success');
				var stepid = jQuery(currentelement).attr('id');
				jQuery('.pre_btn_returnd').hide();
				// jQuery('.pre_btn').show();
				if(stepid == 'step-1'){
					var radio_val = jQuery("input[type='radio'][name='name_vollmacht_radiobox1']:checked").val();
					if(!radio_val){
						jQuery('input[name="name_vollmacht_radiobox1"]').removeClass('success');
						jQuery('input[name="name_vollmacht_radiobox1"]').addClass('error');
						jQuery('input[name="name_vollmacht_radiobox1"]').parents('.list_step_form').find('.error_msg_bottom').show();
					}
					else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery('input[name="name_vollmacht_radiobox1"]').removeClass('error');
						jQuery('input[name="name_vollmacht_radiobox1"]').parents('.list_step_form').find('.error_msg_bottom').hide();
						var radio_val_main_part = jQuery('input[type="radio"][name="name_vollmacht_radiobox1"]:checked').val();
						console.log(radio_val_main_part);
						if(radio_val_main_part == 'natürliche_person'){
							// jQuery(this).parents('.list_nonstep_form').addClass('correct_select');
							// jQuery(this).parents('.list_nonstep_form').find('.notification').show();
							jQuery('.npstep_blks').show();
							jQuery('.npstep_blks .list_step_form#npstep-2').addClass('current').show();
							
						}else
						{
							jQuery('.fvstep_blks').show();
							jQuery('.fvstep_blks .list_step_form#fvstep-2').addClass('current').show();
							// jQuery(this).parents('.list_nonstep_form').removeClass('correct_select');
							// jQuery(this).parents('.list_nonstep_form').find('.notification').hide();
						}
						// jQuery(currentelement).next('.list_step_form').show().addClass('current');
						jQuery('.step_btn .pre_btn').show();

						jQuery('.main_stap_progressbar_col[data-progress-step="1"]').removeClass('current_step').addClass('fill_progrs')
						jQuery('.main_stap_progressbar_col[data-progress-step="2"]').addClass('current_step')
						jQuery('body').addClass('start_step_form');
						
					}
				}
				// NP Step Start 
				if(stepid == 'npstep-2'){
					var intitle = jQuery('input[name="datenvollmachtgeberintitle"]').val();
					var invorname = jQuery('input[name="datenvollmachtgeberinvorname"]').val();
					var innachname = jQuery('input[name="datenvollmachtgeberinnachname"]').val();
					var ingeburtsdatum = jQuery('input[name="datenvollmachtgeberingeburtsdatum"]').val();
					var instrabe = jQuery('input[name="datenvollmachtgeberinStraße"]').val();
					var innummer = jQuery('input[name="datenvollmachtgeberinNummer"]').val();
					var inplz = jQuery('input[name="datenvollmachtgeberinPLZ"]').val();
					var inort = jQuery('input[name="datenvollmachtgeberinOrt"]').val();
					
					if(!intitle){
						// jQuery('input[name="datenvollmachtgeberintitle"]').removeClass('success');
						jQuery('input[name="datenvollmachtgeberintitle"]').addClass('error');
					}

					if(!invorname){
						jQuery('input[name="datenvollmachtgeberinvorname"]').addClass('error');
					}

					if(!innachname){
						jQuery('input[name="datenvollmachtgeberinnachname"]').addClass('error');
					}

					if(!ingeburtsdatum){
						jQuery('input[name="datenvollmachtgeberingeburtsdatum"]').addClass('error');
					}
					if(!instrabe){
						jQuery('input[name="datenvollmachtgeberinStraße"]').addClass('error');
					}
					if(!innummer){
						jQuery('input[name="datenvollmachtgeberinNummer"]').addClass('error');
					}
					if(!inplz){
						jQuery('input[name="datenvollmachtgeberinPLZ"]').addClass('error');
					}
					if(!inort){
						jQuery('input[name="datenvollmachtgeberinOrt"]').addClass('error');
					}

					

					if(intitle != '' && invorname != '' && innachname != '' && ingeburtsdatum != '' && instrabe != '' && innummer != '' && inort != '' && inplz != ''){
						
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
						
					}
					else{
						jQuery('input[name="email"]').addClass('error');
					}
				}
				if(stepid == 'npstep-3'){
					var rtitle = jQuery('input[name="datenvollmachtgeberrtitle"]').val();
					var rvorname = jQuery('input[name="datenvollmachtgeberrvorname"]').val();
					var rnachname = jQuery('input[name="datenvollmachtgeberrnachname"]').val();
										
					if(!rtitle){
						// jQuery('input[name="datenvollmachtgeberrtitle"]').removeClass('success');
						jQuery('input[name="datenvollmachtgeberrtitle"]').addClass('error');
					}

					if(!rvorname){
						jQuery('input[name="datenvollmachtgeberrvorname"]').addClass('error');
					}

					if(!rnachname){
						jQuery('input[name="datenvollmachtgeberrnachname"]').addClass('error');
					}

					if(rtitle != '' && rvorname != '' && rnachname != ''){
						
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
						jQuery('.main_stap_progressbar_col[data-progress-step="2"]').removeClass('current_step').addClass('fill_progrs')
						jQuery('.main_stap_progressbar_col[data-progress-step="3"]').addClass('current_step')
					}
					else{
						jQuery('input[name="email"]').addClass('error');
					}
				}
				if(stepid == 'npstep-4'){
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
					jQuery('.main_stap_progressbar_col[data-progress-step="3"]').removeClass('current_step').addClass('fill_progrs')
					jQuery('.main_stap_progressbar_col[data-progress-step="4"]').addClass('current_step')
				}
				if(stepid == 'npstep-5'){
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
					jQuery('.main_stap_progressbar_col[data-progress-step="4"]').removeClass('current_step').addClass('fill_progrs')
					jQuery('.main_stap_progressbar_col[data-progress-step="5"]').addClass('current_step')
				}
				if(stepid == 'npstep-6'){
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery('.list_step_form').removeClass('fill');
					jQuery('.list_step_form#step-1').show().addClass('current');
					jQuery('.main_stap_progressbar_col[data-progress-step="5"]').removeClass('current_step').addClass('fill_progrs');
					jQuery('.thankyou_parts').show()
					jQuery('.step_forms').hide();
				}
				// NP Step End 
				// FV Step Start
				if(stepid == 'fvstep-2'){
					var fvname = jQuery('input[name="datenvollmachtgeberfvtitle"]').val();
					var fvStraße = jQuery('input[name="datenvollmachtgeberfvvorname"]').val();
					var fvNummer = jQuery('input[name="datenvollmachtgeberfvNummer"]').val();
					var fvplz = jQuery('input[name="datenvollmachtgeberfvPLZ"]').val();
					var fvort = jQuery('input[name="datenvollmachtgeberfvOrt"]').val();
					var fvVertretungsbefugte = jQuery('input[name="vertretungsbefugte_personenit_firmenbuch"]').val();
					var fvdaten_bevollmächtigterfvtitle = jQuery('input[name="daten_bevollmächtigterfvtitle"]').val();
					var fvdaten_bevollmächtigterfvvorname = jQuery('input[name="daten_bevollmächtigterfvvorname"]').val();
					var fvdaten_bevollmächtigterfvnachname = jQuery('input[name="daten_bevollmächtigterfvnachname"]').val();

					
					if(!fvname){
						// jQuery('input[name="datenvollmachtgeberintitle"]').removeClass('success');
						jQuery('input[name="datenvollmachtgeberfvtitle"]').addClass('error');
					}
					if(!fvStraße){
						jQuery('input[name="datenvollmachtgeberfvvorname"]').addClass('error');
					}
					if(!fvNummer){
						jQuery('input[name="datenvollmachtgeberfvNummer"]').addClass('error');
					}
					if(!fvplz){
						jQuery('input[name="datenvollmachtgeberfvPLZ"]').addClass('error');
					}
					if(!fvort){
						jQuery('input[name="datenvollmachtgeberfvOrt"]').addClass('error');
					}
					if(!fvVertretungsbefugte){
						jQuery('input[name="vertretungsbefugte_personenit_firmenbuch"]').addClass('error');
					}
					if(!fvdaten_bevollmächtigterfvtitle){
						jQuery('input[name="daten_bevollmächtigterfvtitle"]').addClass('error');
					}
					if(!fvdaten_bevollmächtigterfvvorname){
						jQuery('input[name="daten_bevollmächtigterfvvorname"]').addClass('error');
					}
					if(!fvdaten_bevollmächtigterfvnachname){
						jQuery('input[name="daten_bevollmächtigterfvnachname"]').addClass('error');
					}

					

					if(fvname != '' && fvStraße != '' && fvNummer != '' && fvplz != '' && fvort != '' && fvVertretungsbefugte != '' && fvdaten_bevollmächtigterfvtitle != '' && fvdaten_bevollmächtigterfvvorname != '' && fvdaten_bevollmächtigterfvnachname != ''){
			
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
						jQuery('.main_stap_progressbar_col[data-progress-step="2"]').removeClass('current_step').addClass('fill_progrs')
						jQuery('.main_stap_progressbar_col[data-progress-step="3"]').addClass('current_step')
						
					}
					else{
						jQuery('input[name="email"]').addClass('error');
					}
				}
				if(stepid == 'fvstep-3'){
				
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
					jQuery('.main_stap_progressbar_col[data-progress-step="3"]').removeClass('current_step').addClass('fill_progrs')
					jQuery('.main_stap_progressbar_col[data-progress-step="4"]').addClass('current_step')
				
				}
				if(stepid == 'fvstep-4'){
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
					jQuery('.main_stap_progressbar_col[data-progress-step="4"]').removeClass('current_step').addClass('fill_progrs')
					jQuery('.main_stap_progressbar_col[data-progress-step="5"]').addClass('current_step')
				}
				if(stepid == 'fvstep-5'){
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
					jQuery('.main_stap_progressbar_col[data-progress-step="5"]').removeClass('current_step').addClass('fill_progrs');
					jQuery('.list_step_form').removeClass('fill');
					jQuery('.list_step_form#step-1').show().addClass('current');
					jQuery('.thankyou_parts').show()
					jQuery('.step_forms').hide();
				}
				// FV Step End 
			

			
			
		}else{
			
			
		}
		
	});

	jQuery(".step_btn .pre_btn").on('click', function(e) {
		var currentelement = jQuery('.list_step_form.current');
		var stepid = jQuery(currentelement).attr('id');
		// NP Step Start 
		if(stepid == 'npstep-2'){
			jQuery(currentelement).removeClass('current').hide();
			jQuery(currentelement).parents('.npstep_blks').hide();
			jQuery('#step-1').removeClass('fill').addClass('current').show();
			// jQuery(currentelement).last().prev('.list_step_form').show().addClass('current');
			jQuery('body').removeClass('start_step_form');
			jQuery('.step_btn button.pre_btn').hide();
			jQuery('.main_stap_progressbar_col.current_step').removeClass('current_step').last().prev().removeClass('fill_progrs').addClass('current_step');
		}
		if(stepid == 'npstep-3'){
			jQuery(currentelement).removeClass('current fill').hide().last().prev('.list_step_form').show().removeClass(' fill').addClass('current');
			// jQuery('.main_stap_progressbar_col.current_step').removeClass('current_step').last().prev().removeClass('fill_progrs').addClass('current_step');
			// jQuery(currentelement).last().prev('.list_step_form').show().addClass('current');
		}
		if(stepid == 'npstep-4'){
			jQuery(currentelement).removeClass('current').hide().last().prev('.list_step_form').show().removeClass(' fill').addClass('current');
			jQuery('.main_stap_progressbar_col.current_step').removeClass('current_step').last().prev().removeClass('fill_progrs').addClass('current_step');
			// jQuery(currentelement).last().prev('.list_step_form').show().addClass('current');
		}
		if(stepid == 'npstep-5'){
			jQuery(currentelement).removeClass('current').hide().last().prev('.list_step_form').show().removeClass(' fill').addClass('current');
			jQuery('.main_stap_progressbar_col.current_step').removeClass('current_step').last().prev().removeClass('fill_progrs').addClass('current_step');
			// jQuery(currentelement).last().prev('.list_step_form').show().addClass('current');
		}
		if(stepid == 'npstep-6'){
			jQuery(currentelement).removeClass('current').hide().last().prev('.list_step_form').show().removeClass(' fill').addClass('current');
			jQuery('.main_stap_progressbar_col.current_step').removeClass('current_step').last().prev().removeClass('fill_progrs').addClass('current_step');
			// jQuery(currentelement).last().prev('.list_step_form').show().addClass('current');
		}
		// NP Step End

		// FV Step Start
		if(stepid == 'fvstep-2'){
			jQuery(currentelement).removeClass('current').hide();
			jQuery(currentelement).parents('.fvstep_blks').hide();
			jQuery('#step-1').removeClass('fill').addClass('current').show();
			// jQuery(currentelement).last().prev('.list_step_form').show().addClass('current');
			jQuery('body').removeClass('start_step_form');
			jQuery('.step_btn button.pre_btn').hide();
			jQuery('.main_stap_progressbar_col.current_step').removeClass('current_step').last().prev().removeClass('fill_progrs').addClass('current_step');
		}
		if(stepid == 'fvstep-3'){
			jQuery(currentelement).removeClass('current').hide().last().prev('.list_step_form').show().removeClass(' fill').addClass('current');
			jQuery('.main_stap_progressbar_col.current_step').removeClass('current_step').last().prev().removeClass('fill_progrs').addClass('current_step');
			// jQuery(currentelement).last().prev('.list_step_form').show().addClass('current');
		}
		if(stepid == 'fvstep-4'){
			jQuery(currentelement).removeClass('current').hide().last().prev('.list_step_form').show().removeClass(' fill').addClass('current');
			jQuery('.main_stap_progressbar_col.current_step').removeClass('current_step').last().prev().removeClass('fill_progrs').addClass('current_step');
			// jQuery(currentelement).last().prev('.list_step_form').show().addClass('current');
		}
		if(stepid == 'fvstep-5'){
			jQuery(currentelement).removeClass('current').hide().last().prev('.list_step_form').show().removeClass(' fill').addClass('current');
			jQuery('.main_stap_progressbar_col.current_step').removeClass('current_step').last().prev().removeClass('fill_progrs').addClass('current_step');
			// jQuery(currentelement).last().prev('.list_step_form').show().addClass('current');
		}
		if(stepid == 'fvstep-6'){
			jQuery(currentelement).removeClass('current').hide().last().prev('.list_step_form').show().removeClass(' fill').addClass('current');
			jQuery('.main_stap_progressbar_col.current_step').removeClass('current_step').last().prev().removeClass('fill_progrs').addClass('current_step');
			// jQuery(currentelement).last().prev('.list_step_form').show().addClass('current');
		}
		// FV Step End
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

jQuery(".list_step_form_title .tooltip_icon").click(function() {
	'use strict';
	jQuery(this).parents('.list_step_form_title').toggleClass('active-tooltip');
});
jQuery(".list_step_form_title .closetooltip").click(function() {
	'use strict';
	jQuery(this).parents('.list_step_form_title').removeClass('active-tooltip');
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

