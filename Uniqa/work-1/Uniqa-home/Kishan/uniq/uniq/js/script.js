
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

				e.preventDefault()
				var el = $(this);
				var validation = true;
				el.parents('#commentForm').find('input').removeClass('error');
				el.parents('#commentForm').find('input').addClass('success');

				const validateEmail = (email) => {
					return email.match(
					  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					);
				};

				var stepid = jQuery(currentelement).attr('id');
				var vorname = jQuery('input[name="vorname"]').val();
				var nachname = jQuery('input[name="nachname"]').val();
				var geburtsdatum = jQuery('input[name="geburtsdatum"]').val();
				var email = jQuery('input[name="email"]').val();
				var tel = jQuery('input[name="tel"]').val();
				if(stepid == 'step-1'){
					if(!vorname){
						jQuery('input[name="vorname"]').removeClass('success');
						jQuery('input[name="vorname"]').addClass('error');
					}

					if(!nachname){
						jQuery('input[name="nachname"]').addClass('error');
					}

					if(!geburtsdatum){
						jQuery('input[name="geburtsdatum"]').addClass('error');
					}

					if(!email){
						jQuery('input[name="email"]').addClass('error');
					}

					if(!tel){
						jQuery('input[name="tel"]').addClass('error');
					}

					if(vorname != '' && nachname != '' && geburtsdatum != '' && email != '' && tel != ''){
						if(validateEmail(email)){
							jQuery(currentelement).addClass('fill').removeClass('current').hide();
							jQuery(currentelement).next('.list_step_form').show().addClass('current');
						} else{
							jQuery('input[name="email"]').addClass('error');
						}
					}
				}

				if(stepid == 'step-2'){
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
				}

				if(stepid == 'step-3'){
					var ert_state = document.getElementById("state-dropdown");
					var state_text = ert_state.options[ert_state.selectedIndex].text;

					var ert_location = document.getElementById("location-dropdown");
					var location_text = ert_location.options[ert_location.selectedIndex].text;

					var ert_workus = document.getElementById("workus-dropdown");
					var workus_text = ert_workus.options[ert_workus.selectedIndex].text;
					if(!state_text){
						jQuery('#state-dropdown').addClass('error');
					}

					if(!location_text){
						jQuery('#location-dropdown').addClass('error');
					}

					if(!ert_workus){
						jQuery('#workus-dropdown').addClass('error');
					}

					if(state_text != '' && location_text != '' && ert_workus != ''){
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-4'){
					var serviceeinheit = jQuery('input[name="serviceeinheit"]').val();
					if(!serviceeinheit){
						jQuery('input[name="serviceeinheit"]').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-5'){
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
						jQuery('input[name="contry[]"]').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-6'){
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
				}

				if(stepid == 'step-7'){
					var checkbox1 = jQuery('input[name="checkbox1[]"]').val();
					var checkboxes_rt = document.getElementsByName('checkbox1[]');
					var checkbox1_vals = "";
					for (var i=0, n=checkboxes_rt.length;i<n;i++) 
					{
						if (checkboxes_rt[i].checked) 
						{
							checkbox1_vals += ","+checkboxes_rt[i].value;
						}
					}

					if(!checkbox1_vals){
						jQuery('input[name="checkbox1[]"]').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-8'){
					var checkbox2 = jQuery('input[name="checkbox2[]"]').val();
					var checkboxes2_rt = document.getElementsByName('checkbox2[]');
					var checkbox2_vals = "";
					for (var i=0, n=checkboxes2_rt.length;i<n;i++) 
					{
						if (checkboxes2_rt[i].checked) 
						{
							checkbox2_vals += ","+checkboxes2_rt[i].value;
						}
					}

					if(!checkbox2_vals){
						jQuery('input[name="checkbox2[]"]').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-9'){
					var checkbox3 = jQuery('input[name="checkbox3[]"]').val();
					var checkboxes3_rt = document.getElementsByName('checkbox3[]');
					var checkbox3_vals = "";
					for (var i=0, n=checkboxes3_rt.length;i<n;i++) 
					{
						if (checkboxes3_rt[i].checked) 
						{
							checkbox3_vals += ","+checkboxes3_rt[i].value;
						}
					}

					if(!checkbox3_vals){
						jQuery('input[name="checkbox3[]"]').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-10'){
					var checkbox4 = jQuery('input[name="checkbox4[]"]').val();
					var checkboxes4_rt = document.getElementsByName('checkbox4[]');
					var checkbox4_vals = "";
					for (var i=0, n=checkboxes4_rt.length;i<n;i++) 
					{
						if (checkboxes4_rt[i].checked) 
						{
							checkbox4_vals += ","+checkboxes4_rt[i].value;
						}
					}

					if(!checkbox4_vals){
						jQuery('input[name="checkbox4[]"]').addClass('error');
					}else{
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-11'){
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
				}

				if(stepid == 'step-12'){
					var linksocialmedia = jQuery('input[name="linksocialmedia"]').val();
					var biography = jQuery('#comment-short-biography-consultant-form').val();
					if(!linksocialmedia){
						jQuery('input[name="linksocialmedia"]').addClass('error');
					}
					if(!biography){
						jQuery('#comment-short-biography-consultant-form').addClass('error');
					}
					if(linksocialmedia != '' && biography != ''){
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
					}
				}

				if(stepid == 'step-13'){
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
				}

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
});

jQuery('.confirm_btn_modal').click(function() {
	var dataid = jQuery(this).attr('data-id');
	document.getElementById(dataid).checked = true;
	jQuery("#conformation_modal").modal('hide');
});

jQuery('.return_btn_modal').click(function() {
	var dataid = jQuery(this).attr('data-id');
	document.getElementById(dataid).checked = false;
	jQuery("#conformation_modal").modal('hide');
});

jQuery('.language_conformation .btn-close').click(function() {
	var dataid = jQuery(this).attr('data-id');
	document.getElementById(dataid).checked = false;
	jQuery("#conformation_modal").modal('hide');
});


/*============ Slick-Slider Function End ============*/