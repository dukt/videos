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
 
namespace Craft;

require(CRAFT_PLUGINS_PATH."duktvideos/config.php");
require_once(DUKT_VIDEOS_PATH.'libraries/app.php');

class DuktVideosVariable
{
  	/*
  	* Find a video
  	*
  	*/

  	public function __construct()
  	{
  		require(CRAFT_PLUGINS_PATH."duktvideos/config.php");

  		$this->pagination_per_page = $config['pagination_per_page'];
  	}

    public function find($video_url)
    {		
		$app = new \DuktVideos\App;
		
		$video = $app->get_video($video_url);
		
		$charset = craft()->templates->getTwig()->getCharset();

		$video_object = new DuktVideos_VideoModel();
		
		foreach($video as $k => $v)
		{
			$video_object->{$k} = $video[$k];	
		}

		return $video_object;
    }

    public function aze() {
    	return craft()->duktVideos->aze();
    }
    
    // --------------------------------------------------------------------
    
  	/*
  	* Services (CP only)
  	*
  	*/
    public function services($service = false)
    {	    	
		if (!craft()->request->isCpRequest() )
		{ 
			return false; 
		}
		
		if($service)
		{
			return \DuktVideos\App::get_service($service);		
		}
		else
		{
			return \DuktVideos\App::get_services();
		}
    }
}