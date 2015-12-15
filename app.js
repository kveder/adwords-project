$(function () {

	 $("input[name=sitelink-status]").on("change",function() {
         var test = $(this).val();
         $(".hide-sitelinks").hide();
         $("."+test).show();
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
	
	$('#input-desc-2').keyup(function() {
		$('.ad-desc-2').text($(this).val());
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


// Learning material:
// http://stackoverflow.com/questions/2777139/how-to-use-jquery-to-show-hide-divs-based-on-radio-button-selection
// http://tympanus.net/codrops/2010/06/07/fancy-sliding-form-with-jquery/