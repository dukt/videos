<?php

namespace Blocks;

class DuktVideosVariable
{
    public function services($service = false)
    {
		/*
			require_once(DUKT_VIDEOS_PATH.'libraries/dukt_videos_app.php');
			
			$dukt_videos = new \DuktVideos\Dukt_videos_app;
			
			return $this->dukt_videos->get_service($service);
		*/
		
        return blx()->duktVideos_configure->getServices($service);
    }
    
	// --------------------------------------------------------------------
    
    public function find($video_url)
    {
		$video_opts = array(
			'url' => $video_url,
		);
	    
		require_once(DUKT_VIDEOS_PATH.'libraries/dukt_videos_app.php');
		
		$dukt_videos = new \DuktVideos\Dukt_videos_app;
		
		$video = $dukt_videos->get_video($video_opts);

		$charset = blx()->templates->getTwig()->getCharset();

		$video_object = new DuktVideos_VideoModel();
		
		foreach($video as $k => $v)
		{
			$video_object->{$k} = $video[$k];	
		}

		return $video_object;
    }
}