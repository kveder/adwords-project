$(function () {

	$('#sitelink-select').change(function() {
   	$('.sitelink').hide();
   	$('.' + $(this).val()).show();
	});

	$('#input-headline').keyup(function() {
		$('.ad-headline').text($(this).val());
	});

	$('#input-display-url').keyup(function() {
		$('.ad-display-url').text($(this).val());
	});

	$('#input-desc-1').keyup(function() {
		$('.ad-desc-1').text($(this).val());
	});

	$('#input-sitelink-headline-1').keyup(function() {
		$('#sitelink-headline-1').text($(this).val());
	});

	$('#input-sitelink-desc-1-1').keyup(function() {
		$('#sitelink-desc-1-1').text($(this).val());
	});
	$('#input-sitelink-desc-2-1').keyup(function() {
		$('#sitelink-desc-2-1').text($(this).val());
	});
});




// http://stackoverflow.com/questions/2777139/how-to-use-jquery-to-show-hide-divs-based-on-radio-button-selection