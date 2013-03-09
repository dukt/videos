/**
 * Dukt Videos
 *
 * @package		Dukt Videos
 * @version		Version 1.0b1
 * @author		Benjamin David
 * @copyright	Copyright (c) 2012 - DUKT
 * @link		http://dukt.net/videos/
 *
 */
console.log('hello field.js');

(function($) {

  	// plugin definition

	$.fn.dukt_videos_field = function(options)
	{		
		// build main options before element iteration
		// iterate and reformat each matched element

		return this.each(
			function()
			{
				field = $(this);

				$.fn.dukt_videos_field.init_field(field);
			}
		);
	};
	
	$.fn.dukt_videos_field.current_field = false;
	
	$.fn.dukt_videos_field.init = function()
	{
		dukt_log('field.js : ', '$.fn.dukt_videos_field.init()');
		
		// load box
	
		var data = {
			method: 'box',
			site_id: Dukt_videos.site_id,
		};
		
		$.ajax({
			url: Dukt_videos.ajax_endpoint,
			type:"post",
			data : data,
			success: function(data)
			{
				$('body').append(data);
			
				// init dukt videos box
				
				dukt_videos_box.box.init(function() {
					if($('.dv-overlay').css('display') != 'none')
					{
						dukt_videos_box.lightbox.show();
					}
				});
			}
		});
		

		// cancel
		
		$('body').on('click', '.dv-cancel', function(e) {
			dukt_videos_box.lightbox.hide();

			e.preventDefault();
		});
		
		
		// submit
		
		$('body').on('click', '.dv-submit', function() {
			var field = $.fn.dukt_videos_field.current_field;
			var video_url = $('.dv-current').data('video-url');
			
			$('input', field).val(video_url);
			
			dukt_videos_box.lightbox.hide();
			
			$.fn.dukt_videos_field.callback_add();
		});
		
		
  		// matrix compatibility

  		if(typeof(Matrix) != "undefined")
  		{
			Matrix.bind("dukt_videos", "display", function(cell) {

				// we remove event triggers because they are all going to be redefined
				// will be improved with single field initialization

				if (cell.row.isNew)
				{
					var field = $('> .dv-field', cell.dom.$td);

					$.fn.dukt_videos_field.init_field(field);
				}
			});
		}		
	};
	
	
	$.fn.dukt_videos_field.init_field = function(field)
	{
		inputValue = $('input', field).val();

		//console.log('$.fn.dukt_videos_field.init_field = function(field) : ', $('input', field).val());

		if(inputValue != "")
		{
			field.find('.dv-preview').html('');
			field.find('.dv-preview').css('display', 'block');
			field.find('.dv-preview').addClass('videoplayer-field-preview-loading');

			video_page = inputValue;

			data = {
				'method': 'field_preview',
				'video_page': video_page,
				'site_id': Dukt_videos.site_id
			};

			$('input[type="hidden"]', field).val(video_page);

			$.ajax({
			  url: Dukt_videos.ajax_endpoint,
			  type:"post",
			  data : data,
			  success: function(data)
			  {
		  		field.find('.dv-preview').html(data);
				field.find('.dv-preview').removeClass('dv-field-preview-loading');
			  }
			});

			$('.change', field).css('display', 'inline-block');
			$('.remove', field).css('display', 'inline-block');
		}
		else
		{
			$('.add', field).css('display', 'inline-block');
		}

		$('.add', field).click(function(){
			$.fn.dukt_videos_field.add(field);
		});
	
	
		$('.change', field).click(function(){
			$.fn.dukt_videos_field.change(field);
		});
	
		$('.remove', field).click(function(){
			$.fn.dukt_videos_field.remove(field);
		});
	
		$('body').on('click', '.dv-field-embed-btn', function() {
			$('.dv-overlay').css('display', 'block');
			$('.dv-overlay').addClass('dv-overlay-loading');
	
			data = {
				'method': $(this).data('method'),
				'video_page': $(this).data('video-page'),
				'site_id': VideoPlayer.site_id
			};
	
			$.ajax({
			  url: VideoPlayer.ajax_endpoint,
			  type:"post",
			  data : data,
			  success: function( data ) {
	
		  		$('body').append(data);
	
				$('.dv-overlay').removeClass('dv-overlay-loading');
				$.fn.dukt_videos_field.lightbox.resize();
	
			  }
			});
		});
	
	};
	
	$.fn.dukt_videos_field.callback_add = function()
	{
		field = $.fn.dukt_videos_field.current_field;
	
		field.find('.add').css('display', 'none');
		field.find('.change').css('display', 'inline-block');
		field.find('.remove').css('display', 'inline-block');
		field.find('.dv-preview').html('');
		field.find('.dv-preview').css('display', 'block');
		field.find('.dv-preview').addClass('dv-field-preview-loading');
	
			video_page = $('.dv-preview').data('video-page');
	
		data = {
			'method': 'field_preview',
			'video_page': video_page,
			'site_id': Dukt_videos.site_id
		};
	
			$('input[type="hidden"]', field).val(video_page);
	
		$.ajax({
		  url: Dukt_videos.ajax_endpoint,
		  type:"post",
		  data : data,
		  success: function( data ) {
	
			//console.log('after ajax');
	
	  		field.find('.dv-preview').html(data);
			field.find('.dv-preview').removeClass('dv-field-preview-loading');
		  }
		});
	};
	
		
	$.fn.dukt_videos_field.add = function(field)
	{
		$.fn.dukt_videos_field.current_field = field;
		
		dukt_videos_box.lightbox.show();
		
		//$.fn.dukt_videos_field.open();
	};
	
	$.fn.dukt_videos_field.change = function(field)
	{
		$.fn.dukt_videos_field.current_field = field;
		dukt_videos_box.lightbox.show();
		
		// video page
		
		var video_page = field.find('input').val();
		var current_service = $('.dv-services li.selected a.dv-service').data('service');
		
		// ajax browse to account
		
		var data = {
			method: 'box_preview',
			// service: current_service,
			site_id: Dukt_videos.site_id,
			video_page: video_page,
			autoplay: 0
		}
		
		$('.dv-preview').data('video-page', video_page);
		
		
		dukt_videos_box.browser.go(data, 'preview', function() {
			$('.dv-controls').css('display', 'block');
		});
	};
	
	$.fn.dukt_videos_field.remove = function(field)
	{
		dukt_videos_box.lightbox.hide();
		
		field.find('input').val('');
		
		field.find('.add').css('display', 'inline-block');
		field.find('.change').css('display', 'none');
		field.find('.remove').css('display', 'none');
		field.find('.dv-preview').css('display', 'none');
	};


	// Initialization

	$(document).ready(function() {
		$.fn.dukt_videos_field.init();
	});


})(jQuery);

$().ready(function()
{
	console.log('Videos field on this page : ', $('.dv-field').length);
	$('.dv-field').dukt_videos_field();
});

/* End of file videoplayer.field.js */
/* Location: ./themes/third_party/videoplayer/js/videoplayer.field.js */