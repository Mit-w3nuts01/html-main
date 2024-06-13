/*============ Consultants-Form Function Start ============*/
jQuery(document).ready(function(){

	var totalPage = jQuery(".consultants-form .form-step").length;
	var currentPage = jQuery(".consultants-form .form-step.active").data("index");

	jQuery(".consultants-form .form-footer .number-box .current-num").text(currentPage);
	jQuery(".consultants-form .form-footer .number-box .total-num").text(totalPage);

	jQuery(".consultants-form .form-step input[name*='radio-group-']").change(function(){
		jQuery(this).closest(".form-radio").find(".radio-label").removeClass("error");
	});

	jQuery("#nextBtn").click(function(){
		var $radioGroup1 = jQuery("input[name='radio-group-1']:checked").val();
		var $radioGroup2 = jQuery("input[name='radio-group-2']:checked").val();
		var $radioGroup3 = jQuery("input[name='radio-group-3']:checked").val();

		var $activeStep = jQuery(".consultants-form .form-step.active");
		var $nextStep = jQuery(".consultants-form .form-step.active").next(".form-step");

		if (jQuery(".consultants-form .step-1").hasClass('active') && $radioGroup1 == null) {
			$activeStep.find(".radio-label").addClass("error");
		} else if (jQuery(".consultants-form .step-2").hasClass('active') && $radioGroup2 == null) {
			$activeStep.find(".radio-label").addClass("error");
		} else if (jQuery(".consultants-form .step-3").hasClass('active') && $radioGroup3 == null) {
			$activeStep.find(".radio-label").addClass("error");
		} else {
			$nextStep.addClass("active");
			$activeStep.removeClass("active");
			jQuery(".consultants-form .form-footer .selected-value").show();
			jQuery(".consultants-form .form-footer .prev-btnbox").show();

			if($radioGroup1 != '' && $radioGroup1 != null){
				jQuery(".consultants-form .form-footer .selected-value .step-1-value").text($radioGroup1);
			}
			if($radioGroup2 != '' && $radioGroup2 != null){
				jQuery(".consultants-form .form-footer .selected-value .step-2-value").text(', '+$radioGroup2);	
			}
			if($radioGroup3 != '' && $radioGroup3 != null){
				jQuery(".consultants-form .form-footer .selected-value .step-3-value").text(', '+$radioGroup3);
				jQuery(this).closest(".consultants-form").hide();
				jQuery(this).closest(".consultants-main").find(".consultants-result").show();
				jQuery(this).closest(".consultants-wrap").find(".consultants-btnbox").show();
			}
			currentPage = jQuery(".consultants-form .form-step.active").data("index");
			jQuery(".consultants-form .form-footer .number-box .current-num").text(currentPage);
		}
	});

	jQuery("#prevBtn").click(function(){
		var $activeStep = jQuery(".consultants-form .form-step.active");
		var $prevStep = jQuery(".consultants-form .form-step.active").prev(".form-step");
		$prevStep.addClass("active");
		if (jQuery(".consultants-form .step-1").hasClass("active")) {
			jQuery(".consultants-form .form-footer .selected-value .step-1-value").text('');
		} else if (jQuery(".consultants-form .step-2").hasClass("active")) {
			jQuery(".consultants-form .form-footer .selected-value .step-2-value").text('');
		} else if (jQuery(".consultants-form .step-3").hasClass("active")) {
			jQuery(".consultants-form .form-footer .selected-value .step-3-value").text('');
		}
		$activeStep.removeClass("active");
		currentPage = jQuery(".consultants-form .form-step.active").data("index");
		jQuery(".consultants-form .form-footer .number-box .current-num").text(currentPage);
	});

	jQuery(".consultants-btnbox .button").click(function(){
		jQuery(this).closest(".consultants-wrap").find(".consultants-result .consultants-list").show();
	});

});
/*============ Consultants-Form Function End ============*/