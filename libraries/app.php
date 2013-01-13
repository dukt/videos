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

require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/config.php');

/* App Interface */

require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'interfaces/app.php');

class App implements iApp {

	// --------------------------------------------------------------------
	
	function __construct()
	{		
		require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/lib.php');
		
		$this->lib = new \DuktVideos\Lib(array('basepath' => DUKT_VIDEOS_UNIVERSAL_PATH));
	}
	
	// --------------------------------------------------------------------
	
	/**
	 * User Data
	 */
	public static function userdata($k)
	{
		switch($k)
		{
			case "time_format":
			return "fr";
			break;
		}
	}
	
	// --------------------------------------------------------------------

	/**
	 * Lang Line
	 *
	 * @access	public
	 */
	public static function lang_line($k)
	{
		$current_language = self::current_language();

		ob_start();

		include(DUKT_VIDEOS_UNIVERSAL_PATH.'language/'.$current_language.'/dukt_videos_lang.php');
		
		$buffer = ob_get_contents();
		
		@ob_end_clean();
		
		if(isset($lang[$k]))
		{
			return $lang[$k];
		}
		else
		{
			return $k;
		}
	}

	// --------------------------------------------------------------------

	/**
	 * Current Language
	 *
	 * @access	public
	 */
	public static function current_language()
	{
		return "english";
	}
	
	// --------------------------------------------------------------------
	
	/**
	 * Get Service
	 */
	public static function get_service($service_key=false)
	{
        $fn = array('self', 'get_services');
        
		$services = call_user_func($fn);
		
		if($service_key)
		{
			if(isset($services[$service_key]))
			{
				return $services[$service_key];
			}
		}
		
		return false;
	}
	
	// --------------------------------------------------------------------
	
	/**
	 * Get Services
	 */
	public static function get_services()
	{
		require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/lib.php');
		
		$lib = new \DuktVideos\Lib(array('basepath' => DUKT_VIDEOS_UNIVERSAL_PATH));
		
		$lib->load_helper('directory');
		
		require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/service.php');
		
		$services = array();

		$map = directory_map(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/services/', 1);

		foreach($map as $service_key)
		{
			$service_key = substr($service_key, 0, -4);
			
			$service_class_file = DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/services/'.$service_key.'.php';

			if(file_exists($service_class_file))
			{			
				include_once($service_class_file);
				
				$service_class = '\\DuktVideos\\'.ucwords($service_key);


				$service_obj = new $service_class();
				
				
				// enabled
				
				$option_name = 'enabled';
				
				$condition = 'option_name=:option_name';

				$params = array(':option_name' => $service_key.'_'.$option_name);

				$db_option = \Blocks\DuktVideos_OptionRecord::model()->find($condition, $params);	
							
				if($db_option)
				{
					$service_obj->enabled = $db_option->option_value;
				}
				
				
				// api options
				
				foreach($service_obj->api_options as $option_name => $option_value)
				{
					$condition = 'option_name=:option_name';

					$params = array(':option_name' => $service_key.'_'.$option_name);

					$db_option = \Blocks\DuktVideos_OptionRecord::model()->find($condition, $params);
				
					if($db_option)
					{
						$service_obj->api_options[$option_name] = $db_option->option_value;
					}
				}
				
				
				// token options
				
				foreach($service_obj->token_options as $option_name => $option_value)
				{
					$condition = 'option_name=:option_name';

					$params = array(':option_name' => $service_key.'_'.$option_name);

					$db_option = \Blocks\DuktVideos_OptionRecord::model()->find($condition, $params);
				
					if($db_option)
					{
						$service_obj->token_options[$option_name] = $db_option->option_value;
					}
				}
				
				$service_obj->redirect_url = \Blocks\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$service_key);
				$service_obj->success_url = \Blocks\UrlHelper::getUrl('duktvideos/configure/'.$service_key);
				$service_obj->problem_url = \Blocks\UrlHelper::getUrl('duktvideos/configure/'.$service_key);
								
				$services[$service_key] = $service_obj;	
			}
		}
		
		return $services;
	}
	
	// --------------------------------------------------------------------
	
	/**
	 * Get Video
	 */
	public static function get_video($video_url)
	{
        $fn = array('self', 'get_services');
        
		$services = call_user_func($fn);
		
		foreach($services as $service)
		{
			$video = $service->get_video($video_url);

			if($video)
			{		
				return $video;	
			}
		}
		
		return false;
	}
	
	// --------------------------------------------------------------------
	
	/**
	 * Get Option
	 */
	public static function get_option($service, $k, $default=false)
	{
		$option_name = $service."_".$k;
		
		$option = \Blocks\DuktVideos_OptionRecord::model()->find('option_name=:option_name', array(':option_name' => $option_name));
		
		if($option)
		{
			return $option->option_value;
		}
		
		return false;
	}
	
	// --------------------------------------------------------------------
	
	/**
	 * Set Option
	 */	
	public static function set_option($service, $k, $v)
	{
		$option_name = $service."_".$k;
		
		$data = array(
			'option_name' => $option_name,
			'option_value' => $v
		);

		$option = \Blocks\DuktVideos_OptionRecord::model()->find('option_name=:option_name', array(':option_name' => $option_name));
		
		if(!$option)
		{
    		// insert
    		
    		\Blocks\blx()->db->createCommand()->insert('duktvideos_options', $data);
		}
		else
		{
    		// update
    		
    		$where = array('option_name' => $option_name);

    		\Blocks\blx()->db->createCommand()->update('duktvideos_options', $data, $where);
		}
	}

	// --------------------------------------------------------------------
	
	/**
	 * Redirect
	 */
	public static function redirect($url)
	{
    	\Blocks\BaseController::redirect($url);
	}
	
	// --------------------------------------------------------------------

	/**
	 * Get callback_url
	 *
	 * @access	public static
	 */	
	public static function callback_url($service_key)
	{
		return \Blocks\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$service_key);
	}
	
	// --------------------------------------------------------------------
	
	/**
	 * Cache Path
	 */
	public static function cache_path()
	{
		return false;
	}
	
	// --------------------------------------------------------------------

	/**
	 * Developer Log
	 *
	 * @access	public
	 */
	public static function developer_log($msg)
	{
		return false;
		
		/*
		$EE =& get_instance();
		
		$EE->load->library('logger');
		
		$debug = \DuktVideos\Config::item('debug');
		
		if($debug)
		{
			$EE->logger->developer("Dukt Videos : ".$msg, TRUE);	
		}
		*/
	}
	
	// --------------------------------------------------------------------
	
	/**
	 * Problem
	 */
	public function problem($msg)
	{
		\Blocks\blx()->userSession->setError($msg);
	}
	
	// --------------------------------------------------------------------
	
	/**
	 * Success
	 */
	public function success($msg)
	{
		\Blocks\blx()->userSession->setNotice($msg);
	}
}

/* End of file Someclass.php */