/* Version 1.0.2 */

function isAdminHost() {
  return window.location.origin.indexOf("myagentur") !== -1
    || window.location.origin.indexOf("mykanzlei") !== -1
    || window.location.origin.indexOf("mywp") !== -1
    || window.location.origin.indexOf("mysc") !== -1
    || window.location.origin.indexOf("localhost") !== -1
    || window.location.origin.indexOf("null") !== -1;
}

/*
###################################
GET AGENCY DATA AS JSON
###################################
*/
/*start-data-block='agency-data-json'*/
var agencyDataOriginal = {{agency_data_json}};
/*end-data-block='agency-data-json'*/


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


$(document).ready(function(){
    let ieVersion = getIEVersion();
    if (0 < ieVersion && ieVersion < 11) {
        alert('Die Webseite funktioniert nur in moderne Webbrowsers!');
    }

    let urlBase = "./edbic/";
    let agencyHash = $('#agency_hash').val();
    let agencyDataRaw = sessionStorage.getItem('agencyData');
    let agencyData = agencyDataRaw ? JSON.parse(agencyDataRaw) : null;

    if (!agencyData) {
        $.ajax({
            url: urlBase + 'getServicecenterData?agency_hash=' + agencyHash,
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (response) {
                let agencyData = response.getServicecenterData;

                handleAgencyDataCallback(agencyData);
            },
            error: function (response) {
                handleAgencyDataCallback(agencyDataOriginal);
            }
        });
    } else {
        handleAgencyDataCallback(agencyData);
    }

    function handleAgencyDataCallback(agencyDataInner) {
        handleAgencyModules(agencyDataInner);

        sessionStorage.setItem('agencyData' + agencyHash, JSON.stringify(agencyDataInner));

        let token = gup('token', window.location.href);

        if (token !== null) {
            sessionStorage.setItem('token', token);
        }

        // @TODO: remove the token check from here and move it to the company area page.
        if (token === null && sessionStorage.getItem('token')) {
            token = sessionStorage.getItem('token');
        }

        if (typeof isCompanyDashboard !== "undefined" && token === null) {
            window.location.href = agencyDataInner.url;
        }

        if (checkModuleVisibility('has_google_ratings', agencyDataInner) && typeof agencyDataInner.google_place_id !== 'undefined') {
            if (map === null) {
                doInitMap();
            }

            if (map === null) {
                return;
            }

            let request = {
                placeId: agencyDataInner.google_place_id,
                fields: ['name', 'rating', 'formatted_phone_number']
            };

		    if (typeof agencyDataInner.rating !== 'undefined') {
				var rating_obj = jQuery.parseJSON(agencyDataInner.rating);
				googleRatingsCallback(rating_obj.google, 'OK');
			}
        }
    }

    /*
    ###################################
    GET OPENING HOURS FOR AGENCIES
    ###################################
    */
    $.ajax({
        url: urlBase + 'getServiceCenterOpeningHours?agency_hash=' + agencyHash,
        headers: {
            'Content-Type': 'application/json'
        },
        success: function(response) {
            let openingHours = '';
			var gotResults = 0;
            openingHours += '<div class="row">';
            for (var i = 0; i < response.getServiceCenterOpeningHours.length; i++) {
                let openingHour = response.getServiceCenterOpeningHours[i];

                openingHours += '<div class="col-4">';
                openingHours += openingHour.week_day + ': ';
                openingHours += '</div><div class="col-8">';

				if (openingHour.opening_status == 1) {
	                openingHours += 'nach Terminvereinbarung <br />';
	            }

	            if (openingHour.opening_status == 2) {
	                openingHours += 'geschlossen <br />';
	            }

	            if (openingHour.opening_status == 0) {

					if (openingHour.am_from) {

						gotResults = 1;

		                let openingHoursValidFormatAMFrom = openingHour.am_from
		                var [ date, time ] = openingHoursValidFormatAMFrom.split(' ')
		                var [ year, month, day ] = date.split('-')
		                var [ hour, minute ] = time.split(':')

		                var newOpeningHoursValidFormatAMFrom = new Date(year, month - 1, day, hour, minute, 0)

		                let openingHoursValidFormatAMTo = openingHour.am_to
		                var [ date, time ] = openingHoursValidFormatAMTo.split(' ')
		                var [ year, month, day ] = date.split('-')
		                var [ hour, minute ] = time.split(':')

		                var newOpeningHoursValidFormatAMTo = new Date(year, month - 1, day, hour, minute, 0)


						if ((parseTime(newOpeningHoursValidFormatAMFrom)!='00:00') && (parseTime(newOpeningHoursValidFormatAMTo)!='00:00')) {
			                openingHours += parseTime(newOpeningHoursValidFormatAMFrom) + ' - ' + parseTime(newOpeningHoursValidFormatAMTo) + ' Uhr <br />';
						}
					}

	                if (openingHour.pm_from && openingHour.pm_to) {

						gotResults = 1;

						let openingHoursValidFormatPMFrom = openingHour.pm_from
						var [ date, time ] = openingHoursValidFormatPMFrom.split(' ')
						var [ year, month, day ] = date.split('-')
						var [ hour, minute ] = time.split(':')

						var newOpeningHoursValidFormatPMFrom = new Date(year, month - 1, day, hour, minute, 0)

						let openingHoursValidFormatPMTo = openingHour.pm_to
						var [ date, time ] = openingHoursValidFormatPMTo.split(' ')
						var [ year, month, day ] = date.split('-')
						var [ hour, minute ] = time.split(':')

						var newOpeningHoursValidFormatPMTo = new Date(year, month - 1, day, hour, minute, 0)

						if ((parseTime(newOpeningHoursValidFormatPMFrom)!='00:00') && (parseTime(newOpeningHoursValidFormatPMTo)!='00:00')) {
							openingHours += parseTime(newOpeningHoursValidFormatPMFrom) + ' - ' + parseTime(newOpeningHoursValidFormatPMTo)  + ' Uhr <br />';
						}
					}

					if ((parseTime(newOpeningHoursValidFormatAMFrom)=='00:00') && (parseTime(newOpeningHoursValidFormatAMTo)=='00:00') && (parseTime(newOpeningHoursValidFormatPMFrom)=='00:00') && (parseTime(newOpeningHoursValidFormatPMTo)=='00:00')) {
						openingHours += 'geschlossen <br />';
					}

				}
                openingHours += '</div>';
            }
            openingHours += '<br>';
            openingHours += '</div><br />';

			if (gotResults == 0) {;
	            openingHours = "Termine nach Vereinbarung";
            }

            $('.opening-hours').html(openingHours);
            let openingHoursString = getOpeningString(response.getServiceCenterOpeningHours);
            $('.opening_hours_bottom').html(openingHoursString);
            $('#opening_hours_top').html(openingHoursString);
        },
        error: function(response) {
               let openingHours = '';
            openingHours += '<div class="row mb-3 mt-3"><div class="col-12">nach Terminvereinbarung</div></div>';
            $('.opening-hours').html(openingHours);
            $('.opening_hours_bottom').html('Termine nach Vereinbarung');
            $('#opening_hours_top').html('Termine jederzeit nach Vereinbarung.');

        },
        complete: function() {

        }
    });
});

/*
###################################
FUNCTION: GET INTERNET EXPLORER VERSION
###################################
*/
function getIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0)
        return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./))
        return 11;

    else
        return 0; //It is not IE
}

/*
###################################
FUNCTION: PARSE TIME TO TOW DIGITS
###################################
*/
function parseTime(time) {
	if (time) {
    let dateTime = new Date(time);
	var dateTimeResult = dateTime.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute:'2-digit'
    });
	if (dateTimeResult=='Invalid Date') {
		if (time) {
			thisFullArr = time.split(' ');
			thisArr = thisFullArr[1].split(':');
			dateTimeResult = thisArr[0] + ':' + thisArr[1];
		} else {
			dateTimeResult = '';
		}

	}
    return dateTimeResult;
	}
}


/*
###################################
FUNCTION: MAP WEEK DAYS
###################################
*/
var daysOfWeekMapping = [
    'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa',
];

/*
###################################
FUNCTION: GET OPENING STRING FOR OPENING HOURS BOX
###################################
*/
function getOpeningString(openingHours) {

	let today = new Date();
    let currentDayOfWeek = today.getDay();
    let dayString = daysOfWeekMapping[currentDayOfWeek];

    let openingHour = null;
    let thisDayIndex = 0;
    let thisFoundEntry = 0;

    for (let i = 0; i < openingHours.length; i++) {
        let hour = openingHours[i];
        if (hour.week_day_short === dayString) {
            openingHour = hour;
			thisDayIndex = i;
			thisFoundEntry = 1;
            break;
        }
    }

	let thisDayRecord = openingHours[thisDayIndex];

	if ((((thisDayRecord.am_from === '1970-01-01 00:00:00') || (!thisDayRecord.am_from)) && ((thisDayRecord.pm_from === '1970-01-01 00:00:00') || (!thisDayRecord.pm_from))) || (thisFoundEntry == 0)) {
		// heute geschlossen
	    for (let i = (currentDayOfWeek - 1); i < openingHours.length; i++) {
	        let thisDayRecord = openingHours[i];
			if (((i>=0) && (i > thisDayIndex)) || ((i==0) && (thisDayIndex==0))) { // Wochentag NACH heute
		        if ((thisDayRecord.am_from != '1970-01-01 00:00:00') && (thisDayRecord.am_from)) {
			        return 'Öffnet am ' + thisDayRecord.week_day + ' um ' + parseTime(thisDayRecord.am_from) + ' Uhr';
		        }
		    }
	    }
		// --> in laufender Woche nichts gefunden -> neuen Durchlauf von nächstem Wochenanfang
	    for (let i = 0; i < openingHours.length; i++) {
	        let thisDayRecord = openingHours[i];
	        if ((thisDayRecord.am_from != '1970-01-01 00:00:00') && (thisDayRecord.am_from)) {
				return 'Öffnet am nächsten ' + thisDayRecord.week_day + ' um ' + parseTime(thisDayRecord.am_from) + ' Uhr';
			}
	    }

	} else {
		// heute geöffnet
		let thisDayRecord = openingHours[thisDayIndex];

		if (thisDayRecord.am_from) {
			let am_from_formatted = thisDayRecord.am_from;
			var [ date, time ] = am_from_formatted.split(' ')
			var [ year, month, day ] = date.split('-')
			var [ hour, minute ] = time.split(':')
			var am_from_date = new Date(year, month - 1, day, hour, minute, 0)
			var thisAmFromDate = new Date(am_from_date);
		}

		if (thisDayRecord.am_to) {
			let am_to_formatted = thisDayRecord.am_to;
			var [ date, time ] = am_to_formatted.split(' ')
			var [ year, month, day ] = date.split('-')
			var [ hour, minute ] = time.split(':')
			var am_to_date = new Date(year, month - 1, day, hour, minute, 0)
			var thisAmToDate = new Date(am_to_date);
		}

		if (thisDayRecord.pm_from) {
			let pm_from_formatted = thisDayRecord.pm_from;
			var [ date, time ] = pm_from_formatted.split(' ')
			var [ year, month, day ] = date.split('-')
			var [ hour, minute ] = time.split(':')
			var pm_from_date = new Date(year, month - 1, day, hour, minute, 0)
			var thisPmFromDate = new Date(pm_from_date);
		}

		if (thisDayRecord.pm_to) {
			let pm_to_formatted = thisDayRecord.pm_to;
			var [ date, time ] = pm_to_formatted.split(' ')
			var [ year, month, day ] = date.split('-')
			var [ hour, minute ] = time.split(':')
			var pm_to_date = new Date(year, month - 1, day, hour, minute, 0)
			var thisPmToDate = new Date(pm_to_date);
		}


		if (today.getHours() < thisAmFromDate.getHours()) {
			return 'Öffnet um ' + parseTime(am_from_date) + ' Uhr';
		}

		if ((thisAmFromDate) && (thisAmToDate)) {
			if (today.getHours() >= thisAmFromDate.getHours() && today.getHours() < thisAmToDate.getHours()) {
				if (thisPmToDate) {
					if (thisPmToDate.getHours()) {
						return 'Offen bis ' + parseTime(pm_to_date) + ' Uhr';
					} else {
						return 'Offen bis ' + parseTime(am_to_date) + ' Uhr';
					}
				} else {
					return 'Offen bis ' + parseTime(am_to_date) + ' Uhr';
				}
			}
		}

		if (thisPmFromDate) {
			if (today.getHours() < thisPmFromDate.getHours()) {
				return 'Mittagspause - Öffnet wieder um ' + parseTime(pm_from_date) + ' Uhr';
			}
		}

		if ((thisPmFromDate) && (thisPmToDate)) {
			if (today.getHours() >= thisPmFromDate.getHours() && today.getHours() < thisPmToDate.getHours()) {
				return 'Offen bis ' + parseTime(pm_to_date) + ' Uhr';
			}
		}

		// nichts zutreffend -> nächsten gültigen Tag suchen

	    for (let i = thisDayIndex; i < openingHours.length; i++) {
	        let thisDayRecord = openingHours[i];
			if (((i>=0) && (i > thisDayIndex)) || ((i==0) && (thisDayIndex==0))) { // Wochentag NACH heute
		        if ((thisDayRecord.am_from != '1970-01-01 00:00:00') && (thisDayRecord.am_from)) {
		console.log('D');
			        return 'Öffnet am ' + thisDayRecord.week_day + ' um ' + parseTime(thisDayRecord.am_from) + ' Uhr';
		        }
		    }
	    }
		// --> in laufender Woche nichts gefunden -> neuen Durchlauf von nächstem Wochenanfang
	    for (let i = 0; i < openingHours.length; i++) {
	        let thisDayRecord = openingHours[i];
	        if ((thisDayRecord.am_from != '1970-01-01 00:00:00') && (thisDayRecord.am_from)) {
				return 'Öffnet am nächsten ' + thisDayRecord.week_day + ' um ' + parseTime(thisDayRecord.am_from) + ' Uhr';
			}
	    }

	}

}


function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    let regexS = "[\\?&]"+name+"=([^&#]*)";
    let regex = new RegExp( regexS );
    let results = regex.exec( url );
    return results == null ? null : results[1];
}

/*
###################################
FUNCTION: GET BASE URL FOR EDBIC
###################################
*/
function getUrlBase() {
    let urlBase = "./edbic/";

    return urlBase;
}

/*
###################################
FUNCTION: GET SHARED CONTENT URL
###################################
*/
function getSharedContentUrl() {
    return './shared_content/files/pdf/';
}

/*
###################################
FUNCTION: SHOW/HIDE MODULES DEPENDING ON SETTINGS
###################################
*/
function handleAgencyModules(agencyData) {

    if (checkModuleVisibility('has_employee_insurance', agencyData)) {
        $('.check-insurance').show();
    } else {
        $('.check-insurance').hide();
    }

    if (checkModuleVisibility('has_news_module', agencyData)) {
        $('.module-news').show();
    } else {
        $('.module-news').hide();
    }

    if (checkModuleVisibility('has_jobs_module', agencyData)) {
        $('.module-jobs').show();
    } else {
        $('.module-jobs').hide();
    }

    if (checkModuleVisibility('has_events_module', agencyData)) {
        $('.module-events').show();
    } else {
        $('.module-events').hide();
    }

    if (checkModuleVisibility('has_car_registration_module', agencyData)) {
        $('.module-car-registration').show();
    } else {
        $('.module-car-registration').hide();
    }

    if (checkClassVisibility('imprint_commercial_register_number', agencyData)) {
        $('.class-has-companynumber').show();
    } else {
        $('.class-has-companynumber').hide();
    }

    if (checkClassVisibility('imprint_commercial_register_court', agencyData)) {
        $('.class-has-companycourt').show();
    } else {
        $('.class-has-companycourt').hide();
    }

    if (checkClassVisibility('imprint_uid_number', agencyData)) {
        $('.class-has-uidnumber').show();
    } else {
        $('.class-has-uidnumber').hide();
    }

}


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function checkModuleVisibility(moduleKey, agencyData) {
    return typeof agencyData !== 'undefined' && (agencyData[moduleKey].toString() === 'true');
}

function checkClassVisibility(moduleKey, agencyData) {
    if (typeof agencyData !== 'undefined' && agencyData != 'null') {
         if (agencyData[moduleKey]) {
               if ((agencyData[moduleKey].length !== 0) && (agencyData[moduleKey] != 'null')) {
                    return true;
               }
         }
    }
}



/*
###################################
Remove is-resolver Class on Frontend
###################################
*/

if(isAdminHost()) {
    console.log(agencyDataOriginal.agency_hash);
} else {
    document.querySelectorAll('.is-resolver').forEach(item => {
        item.classList.remove('is-resolver');
    });
}
