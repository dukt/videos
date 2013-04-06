var timer_keyboard = false;
var player_loaded = false;
google.load("swfobject", "2.1");



/*
* Polling the player for information
*/
function loadVideo(videoID)
{

	if(!player_loaded)
	{
		loadPlayer(videoID);
		player_loaded = true;
	}
	else
	{
		ytplayer.loadVideoById(videoID);
	}
}

// --------------------------------------------------

// Update a particular HTML element with a new value

function updateHTML(elmId, value)
{
	document.getElementById(elmId).innerHTML = value;
}

// --------------------------------------------------

// This function is called when an error is thrown by the player

function onPlayerError(errorCode)
{
	alert("An error occured of type:" + errorCode);
}

// --------------------------------------------------

// Set the loaded player to a specific height and width.

function resizePlayer(width, height)
{
	// var playerObj = document.getElementById("ytPlayer");
	// playerObj.height = height;
	// playerObj.width = width;
}

// --------------------------------------------------

// This function is called when the player changes state

function onPlayerStateChange(newState)
{
	updateHTML("playerState", newState);
	
	// next song
	
	if(newState == 0)
	{
		next();

		// var new_key = 0;
		
		// $('#songs li').each(function(k, v) {
		// 	if($(this).hasClass('selected') && (k + 1) < $('#songs li').length)
		// 	{
		// 		new_key = k + 1;
		// 	}
		// });
		
		// $($('#songs li')[new_key]).trigger('click');
/*
		var video_id = $($('#results li')[new_key]).data('video-id');
	    
	    loadVideo(video_id);
*/
	}
}

// --------------------------------------------------

// Display information about the current state of the player

function updatePlayerInfo()
{
	// Also check that at least one function exists since when IE unloads the
	// page, it will destroy the SWF before clearing the interval.
	
	
	if(ytplayer && ytplayer.getDuration)
	{
	  updateHTML("videoDuration", ytplayer.getDuration());
	  updateHTML("videoCurrentTime", ytplayer.getCurrentTime());
	  updateHTML("bytesTotal", ytplayer.getVideoBytesTotal());
	  updateHTML("startBytes", ytplayer.getVideoStartBytes());
	  updateHTML("bytesLoaded", ytplayer.getVideoBytesLoaded());
	}
}

// --------------------------------------------------

// This function is automatically called by the player once it loads

function onYouTubePlayerReady(playerId)
{
	ytplayer = document.getElementById("ytPlayer");
	// This causes the updatePlayerInfo function to be called every 250ms to
	// get fresh data from the player
	setInterval(updatePlayerInfo, 250);
	updatePlayerInfo();
	ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
	ytplayer.addEventListener("onError", "onPlayerError");
}

// --------------------------------------------------

// The "main method" of this sample. Called when someone clicks "Run".

function loadPlayer(videoID)
{
	// The video to load
	
	// Lets Flash from another domain call JavaScript
	var params = { allowScriptAccess: "always", allowFullScreen:"true" };
	// The element id of the Flash embed
	var atts = { id: "ytPlayer" };
	// All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)
	swfobject.embedSWF("http://www.youtube.com/v/" + videoID + 
	                   "?version=3&cc_load_policy=1&iv_load_policy=3&enablejsapi=1&playerapiid=player1&fs=1&autoplay=1", 
	                   "videoDiv", "300", "200", "9", null, null, params, atts);
	resize();
}

// --------------------------------------------------

function _run()
{
	console.log('_run');
	loadPlayer();
}

// --------------------------------------------------

google.setOnLoadCallback();

$(document).ready(function() {

	// create player overlay
	var playerOverlay = $('<div id="player-overlay"></div>');

	playerOverlay.click(function() {
		$('#player').css('visibility', 'hidden');
		$('#player-overlay').css('visibility', 'hidden');
		play_pause();
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

function next()
{
	console.log('next video');

	if($('.dv-videos li.active').next().length == 0)
	{
		var nextEl = $('.dv-videos li').first();

	}
	else
	{
		var nextEl = $('.dv-videos li.active').next();
	}

	nextEl.find('a').trigger('click');


	if(timer_keyboard == false)
	{
		timer_keyboard = setTimeout(function() {
			clearTimeout(timer_keyboard);
			timer_keyboard = false;
		}, 1000);
			
		var new_key = 0;


		// $('#songs li').each(function(k, v) {
		// 	if($(this).hasClass('selected') && (k + 1) < $('#songs li').length)
		// 	{
		// 		new_key = k + 1;
		// 	}
		// });
		
		// $($('#songs li')[new_key]).trigger('click');
	}
}

// --------------------------------------------------

function previous()
{
	if(timer_keyboard == false)
	{
		timer_keyboard = setTimeout(function() {
			clearTimeout(timer_keyboard);
			timer_keyboard = false;
		}, 1000);
		
		var new_key = 0;
		
		$('#songs li').each(function(k, v) {
			if($(this).hasClass('selected'))
			{
				new_key = k - 1;
			}
		});
		
		if(new_key >= 0)
		{
			$($('#songs li')[new_key]).trigger('click');
		}
	}
}

// --------------------------------------------------

function play_pause()
{
	if(timer_keyboard == false)
	{
		timer_keyboard = setTimeout(function() {
			clearTimeout(timer_keyboard);
			timer_keyboard = false;
		}, 1000);
		
		if(ytplayer)
		{
			var player_state = ytplayer.getPlayerState();
			
			if(player_state == 1)
			{
				ytplayer.pauseVideo();
			}
			else
			{
				ytplayer.playVideo();			
			}  
		}
	}
}

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