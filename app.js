$(function () {

	 $("input[name=sitelink-status]").on("change",function() {
         var siteLinks = $(this).val();
         $(".toggle-sitelinks").hide();
         $("."+siteLinks).show();
    });



	 //ad copy input
	 
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

	//add Callout Extensions
	
  

	$('#callout-1').keyup(function() {
	$('#ad-callout-1').text($(this).val());
	
	});

	$('#callout-2').keyup(function(){
	$('#ad-callout-2').text($(this).val());

	
	});



	//sitelink input - Sitelink 1


	$('#input-sitelink-headline-1').keyup(function() {
		$('#sitelink-headline-1').text($(this).val());
	});

	$('#input-sitelink-desc-1-1').keyup(function() {
		$('#sitelink-desc-1-1').text($(this).val());
	});
	$('#input-sitelink-desc-2-1').keyup(function() {
		$('#sitelink-desc-2-1').text($(this).val());
	});

	//sitelink input - Sitelink 2
	$('#input-sitelink-headline-2').keyup(function() {
		$('#sitelink-headline-2').text($(this).val());
	});

	$('#input-sitelink-desc-1-2').keyup(function() {
		$('#sitelink-desc-1-2').text($(this).val());
	});
	$('#input-sitelink-desc-2-2').keyup(function() {
		$('#sitelink-desc-2-2').text($(this).val());
	});

	//sitelink input - Sitelink 3
	$('#input-sitelink-headline-3').keyup(function() {
		$('#sitelink-headline-3').text($(this).val());
	});

	$('#input-sitelink-desc-1-3').keyup(function() {
		$('#sitelink-desc-1-3').text($(this).val());
	});
	$('#input-sitelink-desc-2-3').keyup(function() {
		$('#sitelink-desc-2-3').text($(this).val());
	});


	//sitelink input - Sitelink 4
	$('#input-sitelink-headline-4').keyup(function() {
		$('#sitelink-headline-4').text($(this).val());
	});

	$('#input-sitelink-desc-1-4').keyup(function() {
		$('#sitelink-desc-1-4').text($(this).val());
	});
	$('#input-sitelink-desc-2-4').keyup(function() {
		$('#sitelink-desc-2-4').text($(this).val());
	});

	    
});


// Learning material:
// http://stackoverflow.com/questions/2777139/how-to-use-jquery-to-show-hide-divs-based-on-radio-button-selection
// http://tympanus.net/codrops/2010/06/07/fancy-sliding-form-with-jquery/
//http://unslider.com/ add slider to the form!
