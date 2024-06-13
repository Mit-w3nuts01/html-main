/*!
 * jQuery Form Validations
 *
 * https://www.comesio.com
 *
 * Copyright (c) 2020 Christoph Czellary
 */

var spinner = $('#loader');

function googleDataLayerPush (frmlocation, frmevent, frmname) {
	window.dataLayer.push({
		'formLocation': frmlocation,
		'event': frmevent,
		'form': frmname
	});
	var datalayer = window.datalayer = window.datalayer || [];
}

$(document).ready(function (e) {

    // add method for letters only in form field
    jQuery.validator.addMethod("lettersonly", function(value, element)
    {
    return this.optional(element) || /^[a-zß-ü," "]+$/i.test(value);
    }, "Letters and spaces only please");

    //add method for real email with tld check
    $.validator.addMethod('emailtld', function(val, elem){
       var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

       if(!filter.test(val)) {
           return false;
       } else {
           return true;
       }
    }, '*');

    //add method to check phone numbers
    $.validator.addMethod('phoneDE', function(value,element) {
        if (this.optional(element)) {
            return true;
        }
    var numbers = value.split(/\d/).length - 1;
    return (1 <= numbers && numbers <= 20 && value.match(/^(\+){0,1}(\d|\s|\(|\)){6,20}$/)); }, 'Please enter a valid phone number');

    // add method to get timeframe of allowed years
    $.validator.addMethod("validYear", function(value, element) {
        if (this.optional(element)) {
            return true;
        }
        var currentYear = new Date().getFullYear();
        return ((parseInt(value) > 1899) && parseInt(value) <= currentYear);
    }, "Year should  be between 1899 and now");

    // add method to get timeframe of allowed months
    $.validator.addMethod("validMonth", function(value, element) {
        if (this.optional(element)) {
            return true;
        }
        var currentMonth = new Date().getMonth();
        return ((parseInt(value) < 12) && parseInt(value) <= currentMonth);
    }, "Month is not valid");

    // add method to get timeframe of allowed days
    $.validator.addMethod("validDay", function(value, element) {
        if (this.optional(element)) {
            return true;
        }
        var currentDay = new Date().getDate()
        return ((parseInt(value) <=31) && parseInt(value) <= currentDay);

    }, "Day is not valid");

    //ad method to check if time is correct
    $.validator.addMethod("time24", function(value, element) {
        if (this.optional(element)) {
            return true;
        }
        if (!/^\d{2}:\d{2}$/.test(value)) return false;
        var parts = value.split(':');
        if (parts[0] > 16 || parts[1] > 59 || parts[2] > 59) return false;
        return true;
    }, "Invalid time format.");


    $("#firstfrm").validate({
        onkeyup: function (element, event) {
            if (event.which === 9 && this.elementValue(element) === "") {
                return;
            } else {
                this.element(element);
            }
        },

        ignore: ":not(:visible)",

        // RULES
        rules: {
            /*
            consultation_date_1: {
                required: true
            },

            consultation_time_1: {
                time24: true
            },

            consultation_date_2: {
                required: true,
                minlength: 3
            },

            consultation_time_2: {
                time24: true
            },
            */

            onhfield: {
                maxlength:0
            },

            'vorname[]': {
                required: true,
                minlength: 3 ,
                lettersonly: true
            },

            'nachname[]': {
                required: true,
                minlength: 3 ,
                lettersonly: true
            },

            type_of_insurance: {
                required: true
            },

            car_brand: {
                required: true,
                minlength: 3
            },

            car_model: {
                required: true,
                minlength: 2
            },

            car_deductible: {
                required: true
            },

            car_insurance_level: {
                required: true
            },

            car_insurance_inmates: {
                required: true
            },

            car_driver_protection: {
                required: true
            },

            car_construction_year: {
                required: true,
                minlength: 3
            },

            car_ps: {
                required: true,
                minlength: 3
            },

            car_bonus_malus: {
                required: true,
                minlength: 3
            },

            car_co2: {
                required: true,
                minlength: 2
            },

            flat_or_property: {
                required: true
            },


            home_street: {
                minlength: 3,
                lettersonly:true
            },

            home_plz: {
                minlength: 4,
                maxlength: 4,
                number:true
            },

            home_ort: {
                minlength: 3
            },

            home_housenumber: {
                minlength: 1
            },

            flat_street: {
                minlength: 3,
                lettersonly:true
            },

            flat_plz: {
                minlength: 4,
                maxlength: 4,
                number:true
            },

            flat_ort: {
                minlength: 3
            },

            flat_housenumber: {
                minlength: 1
            },

            choose_box: {
                required: true
            },

            vorname: {
                required: true,
                minlength: 3 ,
                lettersonly: true
            },

            nachname: {
                required: true,
                minlength: 3,
                lettersonly:true
            },

            firstname: {
                required: true,
                minlength: 3 ,
                lettersonly: true
            },

            lastname: {
                required: true,
                minlength: 3,
                lettersonly:true
            },

            phone: {
                phoneDE:true,
                required: true
            },

            email: {
                required: true,
                emailtld: true
            },


            street: {
                required: true,
                minlength: 3,
                lettersonly:true
            },

            plz: {
                required: true,
                minlength: 4,
                maxlength: 4,
                digits:true
            },

            ort: {
                required: true,
                minlength: 3,
                lettersonly:true
            },

            housenumber: {
                required: true,
                minlength: 0
            },

            dd: {
                digits: true,
                range: [1, 31],
                minlength: 2,
                maxlength: 2,
                validDay: true
            },

            mm: {
                digits: true,
                range: [1, 12],
                minlength: 2,
                maxlength: 2,
                validMonth:true
            },

            yy: {
                digits: true,
                validYear: true,
                minlength: 4,
                maxlength: 4
            },

            'dd[]': {
                digits: true,
                range: [1, 31],
                minlength: 2,
                maxlength: 2
            },

            'mm[]': {
                digits: true,
                range: [1, 12],
                minlength: 2,
                maxlength: 2
            },

            'yy[]': {
                digits: true,
                validYear: true,
                minlength: 4,
                maxlength: 4
            },

            message: {
                required: true,
                minlength: 5
            },

            bevorzugte_zeit: {
                time24: true,
                required: true
            },

            dsgvo_check: "required"

        },

        groups: {
            birthday: "dd mm yy",
			contact_via: "customRadio1 customRadio2"
        },
		
		


        errorPlacement: function(error, element) {
          if (element.attr("name") == "plz") {
             error.insertAfter(".error-plz");
          } else {
             error.insertAfter(element);
          }
        },

        errorPlacement: function(error, element) {
          if (element.attr("name") == "ort") {
             error.insertAfter(".error-ort");
          } else {
             error.insertAfter(element);
          }
        },

        errorClass: 'error help-inline',
        validClass: 'selected',
        errorElement: 'span',

        highlight: function (element, errorClass, validClass) {
                $(element).parents("div.control-group").addClass(errorClass).removeClass(validClass);
        },

        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".error").removeClass(errorClass).addClass(validClass);
        },


        // MESSAGES
        messages: {

            'vorname[]': "Bitte geben Sie einen gültigen Vornamen an.",
            'nachname[]': "Bitte geben Sie einen gültigen Nachnamen an.",

            type_of_insurance: "",

            flat_or_property: "Bitte treffen Sie eine Auswahl.",
            home_street: "Bitte geben Sie eine gültigen Straßennamen an.",
            home_plz: "Bitte geben Sie eine gültige Postleitzahl an.",
            home_ort: "Bitte geben Sie einen gültigen Ort an.",
            home_housenumber: "Bitte geben Sie eine gültige Hausnummer an.",
            flat_street: "Bitte geben Sie eine gültigen Straßennamen an.",
            flat_plz: "Bitte geben Sie eine gültige Postleitzahl an.",
            flat_ort: "Bitte geben Sie einen gültigen Ort an.",
            flat_housenumber: "Bitte geben Sie eine gültige Hausnummer an.",

            car_brand: "Bitte geben Sie Ihre Automarke an.",
            car_model: "Bitte geben Sie Ihr Modell ein.",
            car_construction_year: "Bitte geben Sie das Baujahr ein.",
            car_ps: "Bitte geben Sie die PS des Autos an.",
            car_deductible: "Bitte wählen Sie Ihren Selbstbehalt.",
            car_insurance_level: "Bitte treffen Sie eine Auswahl.",
            car_insurance_inmates: "Bitte treffen Sie eine Auswahl.",
            car_driver_protection: "Bitte treffen Sie eine Auswahl.",
            car_bonus_malus: "Bitte geben Sie Ihre Bonus/Malus Stufe an.",
            car_co2: "Bitte geben Sie den CO2 Wert des Fahrzeuges an.",

            vorname:{
                required: "Bitte geben Sie einen gültigen Vornamen an.",
                lettersonly: "Keine Zahlen oder Sonderzeichen erlaubt.",
                minlength: "Ihr Vorname muss mind. 3 Buchstaben haben."
            },
            nachname:{
                required: "Bitte geben Sie einen gültigen Nachnamen an.",
                lettersonly: "Keine Zahlen oder Sonderzeichen erlaubt.",
                minlength: "Ihr Nachname muss mind. 3 Buchstaben haben."
            },
            firstname:{
                required: "Bitte geben Sie einen gültigen Vornamen an.",
                lettersonly: "Keine Zahlen oder Sonderzeichen erlaubt.",
                minlength: "Ihr Vorname muss mind. 3 Buchstaben haben."
            },
            lastname:{
                required: "Bitte geben Sie einen gültigen Nachnamen an.",
                lettersonly: "Keine Zahlen oder Sonderzeichen erlaubt.",
                minlength: "Ihr Nachname muss mind. 3 Buchstaben haben."
            },
            email:{
                required: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
                emailtld: "Keine gültige E-Mail Adresse.",
            },
            phone:{
                required: "Bitte geben Sie Ihre Telefonnummer bekannt.",
                phoneDE: "Telefonnummer zu kurz oder falsches Format."
            },

            bevorzugte_zeit:{
                required: "Bitte geben Sie eine gültige Uhrzeit an.",
                time24: "Uhrzeit nicht akzeptiert. Falsches Format oder ungültige Uhrzeit."
            },

            dd:{
                digits: "Es sind nur Zahlen erlaubt",
                range: "Es sind nur Zahlen zwischen 1 und 31 erlaubt",
                minlength: "Die Mindestlänge sind 2 Zahlen für dieses Feld",
                maxlength: "Die Maximallänge sind 2 Zahlen für dieses Feld",
            },
            mm:{
                digits: "Es sind nur Zahlen erlaubt",
                range: "Es sind nur Zahlen zwischen 1 und 31 erlaubt",
                minlength: "Die Mindestlänge sind 2 Zahlen für dieses Feld",
                maxlength: "Die Maximallänge sind 2 Zahlen für dieses Feld",
                validMonth: "Kein gültiges Monat"
            },
            yy:{
                digits: "Es sind nur Zahlen erlaubt",
                validYear: "",
                minlength: "Die Mindestlänge sind 4 Zahlen für dieses Feld",
                maxlength: "Die Maximallänge sind 4 Zahlen für dieses Feld",
            },

            'dd[]':{
                digits: "Es sind nur Zahlen erlaubt",
                range: "Es sind nur Zahlen zwischen 1 und 31 erlaubt",
                minlength: "Die Mindestlänge sind 2 Zahlen für dieses Feld",
                maxlength: "Die Maximallänge sind 2 Zahlen für dieses Feld",
            },
            'mm[]':{
                digits: "Es sind nur Zahlen erlaubt",
                range: "Es sind nur Zahlen zwischen 1 und 31 erlaubt",
                minlength: "Die Mindestlänge sind 2 Zahlen für dieses Feld",
                maxlength: "Die Maximallänge sind 2 Zahlen für dieses Feld",
            },
            'yy[]':{
                digits: "Es sind nur Zahlen erlaubt",
                validYear: "",
                minlength: "Die Mindestlänge sind 4 Zahlen für dieses Feld",
                maxlength: "Die Maximallänge sind 4 Zahlen für dieses Feld",
            },

            message:{
                required: "",
                minlength: "Ihre Nachricht muss aus mindestnes 5 Zeichen bestehen. Bitte beschreiben Sie uns Ihr Anliegen.",
            },
            /*
            consultation_date_1:{
                required: ""
            },

            consultation_time_1:{
                time24: "Ungültige Uhrzeit oder falsches Format"
            },

            consultation_date_2:{
                required: ""
            },

            consultation_time_2:{
                time24: "Ungültige Uhrzeit oder falsches Format"
            },
            */
            street: "Bitte geben Sie einen gültigen Straßennamen an.",

            plz: "",

            ort:{
                required: "Sie haben ein ungültiges Uhrzeitformat eingegeben.",
                lettersonly: "Keine Zahlen oder Sonderzeichen erlaubt."
            },
            /*
            housenumber:{
                required: "Bitte geben Sie eine gültige Hausnummer an.",
                minlength: ""
            },
            */
            housenumber: "Bitte geben Sie eine gültige Hausnummer an.",

            choose_box:{
                required: "Bitte treffen Sie eine Auswahl.",
            },

            contact_via: "",
            dsgvo_check: ""

        },

        // FORM SUBMIT HANDLER
        submitHandler: function(form) {
            spinner.show();
            $.ajax({
                url: $(form).attr('action'),
                type: 'post',
                dataType: 'json',
                data: $(form).serialize(),
                success: function(data) {
                    form.reset();
                    $('#frmfirstform').notify("Anfrage wurde verschickt.", 'success', {
                        position: 'center'
                    });
                },
                statusCode: {
                    200: function (response) {
                        googleDataLayerPush ($("#google_location").val(), $("#google_event").val(), $("#google_formname").val());
                        form.reset();
                        $('#phoneDiv').fadeOut('slow');

                        $('#frmfirstform').notify("Anfrage wurde verschickt.", 'success', {
                            position: 'center'
                        });
                        spinner.hide();
                        $("#successModal").modal("show");
                    }
                }
            });
        },
    });

});