$(function () {
	$('#input-headline').keyup(function() {
		$('.ad-headline').text($(this).val());
	});
});

$(function () {
	$('#input-display-url').keyup(function() {
		$('.ad-display-url').text($(this).val());
	});
});

$(function () {
	$('#input-desc-1').keyup(function() {
		$('.ad-desc-1').text($(this).val());
	});
});

$(function () {
	$('#input-desc-2').keyup(function() {
		$('.ad-desc-2').text($(this).val());
	});
});

