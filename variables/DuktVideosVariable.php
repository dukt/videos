<?php

namespace Blocks;

require_once(DUKT_VIDEOS_PATH.'libraries/app.php');

class DuktVideosVariable
{
    public function services($service = false)
    {	
    	// for CP only
    	
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
    
	// --------------------------------------------------------------------
    
    public function find($video_url)
    {
		$video_opts = array(
			'url' => $video_url,
		);
		
		$app = new \DuktVideos\App;
		
		$video = $app->get_video($video_opts);
		
		$charset = blx()->templates->getTwig()->getCharset();

		$video_object = new DuktVideos_VideoModel();
		
		foreach($video as $k => $v)
		{
			$video_object->{$k} = $video[$k];	
		}

		return $video_object;
    }
}