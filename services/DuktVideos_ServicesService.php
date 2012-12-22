<?php

namespace Blocks;

require_once(BLOCKS_PLUGINS_PATH."duktvideos/config.php");

class DuktVideos_ServicesService extends BaseApplicationComponent
{
	var $dukt_lib;
	var $dukt_videos;
	
	public function getServices($service = false)
	{	
		// load dukt videos

		require_once(DUKT_VIDEOS_PATH.'libraries/dukt_videos_app.php');		

		require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/dukt_lib.php');
		
		$this->dukt_lib = new \DuktVideos\Dukt_lib(array('basepath' => DUKT_VIDEOS_UNIVERSAL_PATH));;
		
		$this->dukt_videos = new \DuktVideos\Dukt_videos_app;
		
		$api_mode = true;
		
		$services = $this->dukt_videos->get_services($api_mode);
		
		if($service)
		{
			foreach($services as $s)
			{
				if($s->service_key == $service)
				{					
					return $s;	
				}
			}
		
		}
		
		return $services;
	}
	
	public function options()
	{
		$options = DuktVideos_OptionRecord::model()->findAll();
		
		foreach($options as $k => $option)
		{
			echo $option->option_name.' : ';
			echo $option->option_value;
			
			echo '<br />';
		}
	}
}

