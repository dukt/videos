<?php

/**
 * Dukt Videos
 *
 * @package		Dukt Videos
 * @version		Version 1.0
 * @author		Benjamin David
 * @copyright	Copyright (c) 2013 - DUKT
 * @link		http://dukt.net/add-ons/expressionengine/dukt-videos/
 *
 */
 
namespace DuktVideos;

require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/ajax.php');
require_once(DUKT_VIDEOS_PATH.'libraries/app.php');
 
class Ajax_blocks extends Ajax {

	public function __construct()
	{
		parent::__construct();
	}
	
	// --------------------------------------------------------------------

	/**
	 * Field Preview
	 */
	public function field_preview()
	{
		$vars['embed'] = false;
		
		$services = \DuktVideos\App::get_services();
		
		$video_url = $this->lib->input_post('video_page');
		
		
		// get video
		
		$vars['video'] = \DuktVideos\App::get_video($video_url);
		
		
		// get embed
				
		$embed_options = array(
			'width' => 500,
			'height' => 282,
			'autohide' => true
		);

		if($vars['video'])
		{
			$service = $services[$vars['video']['service_key']];
			
			$vars['embed'] = $service->get_embed($vars['video']['id'], $embed_options);
    	}

		echo $this->lib->load_view('field/preview', $vars, true, 'expressionengine');
		
		exit;
	}
}