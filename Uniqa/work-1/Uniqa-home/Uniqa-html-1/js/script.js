
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
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
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
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
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
						jQuery(currentelement).addClass('fill').removeClass('current').hide();
						jQuery(currentelement).next('.list_step_form').show().addClass('current');
				}

				if(stepid == 'step-10'){
					jQuery(currentelement).addClass('fill').removeClass('current').hide();
					jQuery(currentelement).next('.list_step_form').show().addClass('current');
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
				var stepidr = jQuery(currentelement).attr('id');
				if(stepidr == 'step-1'){
					jQuery('.main_blk_sec_description').show();
					jQuery('.main_stap_form_blk').hide();
				}
				
				countprogress()
			}else{
				jQuery('.main_blk_sec_description').show();
				jQuery('.main_stap_form_blk').hide();
			}
			
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

jQuery('.success').checked = true;

function mitcheck(){
	 
	jQuery('input[name="contry[]"]').change(function() {
		if(this.checked) {
			var id = jQuery(this).attr('data-id');
			jQuery('#conformation_modal').modal('show');
			jQuery('.confirm_btn_modal').attr('data-id',id);
			jQuery('.return_btn_modal').attr('data-id',id);
			jQuery('.language_conformation .btn-close').attr('data-id',id);
			jQuery(this).parent().attr('data-id',id);
		   }
		   else{
			var id = jQuery(this).attr('data-id');
			jQuery('#conformation_modal').modal('show');
			jQuery('.confirm_btn_modal').attr('data-id',id);
			jQuery('.return_btn_modal').attr('data-id',id);
			jQuery('.language_conformation .btn-close').attr('data-id',id);
			jQuery(this).parent().attr('data-id',id);
		   }
	   }); 
   
}

// document.addEventListener('DOMContentLoaded', (event) => {

// 	var dragSrcEl = null;
	
// 	function handleDragStart(e) {
// 	  this.style.opacity = '0.4';
	  
// 	  dragSrcEl = this;
  
// 	  e.dataTransfer.effectAllowed = 'move';
// 	  e.dataTransfer.setData('text/html', this.innerHTML);
// 	//   mitcheck();
// 	}
  
// 	function handleDragOver(e) {
// 		// mitcheck();
// 	  if (e.preventDefault) {
// 		e.preventDefault();
// 	  }
  
// 	  e.dataTransfer.dropEffect = 'move';
	  
// 	  return false;
// 	}
  
// 	function handleDragEnter(e) {
// 		// mitcheck();
// 	  this.classList.add('over');
// 	}
  
// 	function handleDragLeave(e) {
// 		// mitcheck();
// 	  this.classList.remove('over');
// 	}
  
// 	function handleDrop(e) {
// 		// mitcheck();
// 	  if (e.stopPropagation) {
// 		e.stopPropagation(); // stops the browser from redirecting.
// 	  }
	  
// 	  if (dragSrcEl != this) {
// 		dragSrcEl.innerHTML = this.innerHTML;
// 		this.innerHTML = e.dataTransfer.getData('text/html');
// 	  }
	  
// 	  return false;
// 	}
  
// 	function handleDragEnd(e) {
// 	  this.style.opacity = '1';
// 	  mitcheck();
// 	  items.forEach(function (item) {
// 		item.classList.remove('over');
// 	  });
// 	}
	
	
// 	let items = document.querySelectorAll('.form_row_select .dreg_select, .form_row_state .dreg_select');
// 	items.forEach(function(item) {
// 	  item.addEventListener('dragstart', handleDragStart, false);
// 	  item.addEventListener('dragenter', handleDragEnter, false);
// 	  item.addEventListener('dragover', handleDragOver, false);
// 	  item.addEventListener('dragleave', handleDragLeave, false);
// 	  item.addEventListener('drop', handleDrop, false);
// 	  item.addEventListener('dragend', handleDragEnd, false);
	  
// 	});
//   });
