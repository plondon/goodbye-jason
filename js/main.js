$(document).ready(function() {

var max = 10;
var init = false;
var animating = false;
var currentIndex = -1;

var getKeyCode = function(e) {
	if ( e.keyCode === 40 ) {
		goto(currentIndex + 1);
	} else if ( e.keyCode === 38 ) {
		goto(currentIndex - 1);
	} else if ( e.keyCode === 13 ) {
		goto(currentIndex + 1);
	}
}

var goto = function(idx) {
	if ( animating ) { return; }

	animating = true;

	setTimeout(function() {
		animating = false;
	}, 6000);

	if ( idx < 0 ) { idx = max }
	if ( idx > max ) { end(); }

	if ( !init ) {
		$('#main > div').removeClass('active');
		$($('#main > div')[idx]).addClass('active');

		init = true;
	} else {
		setTimeout(function() {
			$('#main > div').removeClass('active');
			$($('#main > div')[idx]).addClass('active');
		}, 1000);
	}

	$('p.copy').removeClass('active');
	$($('p.copy')[idx]).addClass('active');

	currentIndex = idx;

	$('.intro').addClass('hide');
};

var end = function() {
	$('#main > div').removeClass('active');
	$('.end').addClass('active');
}

$(window).on('keyup', getKeyCode);

});