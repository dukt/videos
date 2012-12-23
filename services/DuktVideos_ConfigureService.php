<?php

namespace Blocks;

require_once(BLOCKS_PLUGINS_PATH."duktvideos/config.php");

class DuktVideos_ConfigureService extends BaseApplicationComponent
{

/*
	function get_option($k)
	{
		$option = DuktVideos_OptionRecord::model()->find('option_name=:option_name', array(':option_name' => $k));
		
		if($option)
		{
    		// insert
    		
    		return $option->option_value;
		}
		
		return false;
	}
*/

	public function getServices($service = false)
	{
		require_once(DUKT_VIDEOS_PATH.'libraries/dukt_videos_app.php');		

		require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/dukt_lib.php');
		
		$dukt_lib = new \DuktVideos\Dukt_lib(array('basepath' => DUKT_VIDEOS_UNIVERSAL_PATH));;
		
		$dukt_videos = new \DuktVideos\Dukt_videos_app;
		
		$api_mode = true;
		
		$services = $dukt_videos->get_services($api_mode);
		
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
	
	// --------------------------------------------------------------------
	
	function set_option($k, $v)
	{
		$data = array(
			'option_name' => $k,
			'option_value' => $v
		);
		
		
		// get the option
		
		$option = DuktVideos_OptionRecord::model()->find('option_name=:option_name', array(':option_name' => $k));
		
		if(!$option)
		{
    		// insert
    		
    		blx()->db->createCommand()->insert('duktvideos_options', $data);
		}
		else
		{
    		// update
    		
    		$where = array('option_name' => $k);

    		blx()->db->createCommand()->update('duktvideos_options', $data, $where);
		}
	}
	
	// --------------------------------------------------------------------
	
	function reset_service($service_key)
	{		
		$condition = "option_name LIKE :match";
		
		$params = array(':match' => $service_key."%token%%");
		
	    DuktVideos_OptionRecord::model()->deleteAll($condition, $params);
	}
}

