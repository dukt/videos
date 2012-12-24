<?php

namespace Blocks;

require_once(BLOCKS_PLUGINS_PATH."duktvideos/config.php");

class DuktVideos_ConfigureService extends BaseApplicationComponent
{	
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

