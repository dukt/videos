<?php

namespace Blocks;

require_once(DUKT_VIDEOS_PATH.'libraries/app.php');

class DuktVideosVariable
{
  	/*
  	* Find a video
  	*
  	*/
    public function find($video_url)
    {		
		$app = new \DuktVideos\App;
		
		$video = $app->get_video($video_url);
		
		$charset = blx()->templates->getTwig()->getCharset();

		$video_object = new DuktVideos_VideoModel();
		
		foreach($video as $k => $v)
		{
			$video_object->{$k} = $video[$k];	
		}

		return $video_object;
    }
    
    // --------------------------------------------------------------------
    
  	/*
  	* Services (CP only)
  	*
  	*/
    public function services($service = false)
    {	    	
		if (!blx()->request->isCpRequest() )
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