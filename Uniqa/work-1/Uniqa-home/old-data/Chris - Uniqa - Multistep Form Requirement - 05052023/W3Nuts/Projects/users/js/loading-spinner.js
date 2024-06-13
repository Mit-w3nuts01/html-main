//loading animation if pageloads get data from exernal source
$('#show_imprint').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function(){
    setTimeout(removeLoader, 500); //wait for page load PLUS two seconds.
});
function removeLoader(){
        $( "#loadingDiv" ).fadeOut(500, function() {
            // fadeOut complete. Remove the loading div
            $( "#loadingDiv" ).remove(); //makes page more lightweight
    });
}