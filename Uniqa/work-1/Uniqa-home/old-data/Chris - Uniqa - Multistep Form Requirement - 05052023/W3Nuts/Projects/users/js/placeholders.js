var ph_Imprint = "<div class='alert alert-danger' role='alert'><strong>Information:</strong> Das Impressum konnte aktuell nicht geladen werden! Bitte versuchen Sie es sp&auml;ter erneut.</div>";
var ph_TeamMembers = "<div class='alert alert-danger' role='alert'><strong>Information:</strong> Das Impressum konnte aktuell nicht geladen werden! Bitte versuchen Sie es sp&auml;ter erneut.</div>";


if(window.location.origin.indexOf("mysc")<0){

    divs = document.getElementsByClassName( 'infoBox-placeholder-imprint' );
    [].slice.call( divs ).forEach(function ( div ) {
    	div.innerHTML = ph_Imprint;
    });

    divs = document.getElementsByClassName( 'infoBox-placeholder-teammembers' );
    [].slice.call( divs ).forEach(function ( div ) {
    	div.innerHTML = ph_TeamMembers;
    });

}
