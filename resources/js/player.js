$(document).ready(function() {

	// create player overlay
	var playerOverlay = $('<div id="player-overlay"></div>');

	playerOverlay.click(function() {
		$('#player').css('visibility', 'hidden');
		$('#player-overlay').css('visibility', 'hidden');
		$('#player #videoDiv').html('');
	});

	playerOverlay.appendTo('body');
	$('#player').appendTo('body');
	resize();
});

// --------------------------------------------------

$(window).resize(function() {
	resize();
});

// --------------------------------------------------

function resize()
{
	var winH = $(window).height();
	var winW = $(window).width();
	
	var playerTop = (winH / 2) - $('#player').outerHeight() / 2;
	var playerLeft = (winW / 2) - $('#player').outerWidth() / 2;
	$('#player').css('top', playerTop);
	$('#player').css('left', playerLeft);
	//resizePlayer(videoW, videoH);
}