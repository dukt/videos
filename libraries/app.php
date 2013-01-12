<?php

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
	
	
	/**
	 * Userdata
	 *
	 * @access	public
	 */
	public static function userdata($k)
	{
		switch($k)
		{
			case "time_format":
			return "fr";
			break;
		}
/*
		$EE =& get_instance();
		return $EE->session->userdata[$k];
*/
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
		
		
		
		//$EE =& get_instance();
		
		//return $EE->lang->line($k);
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
		// $EE =& get_instance();
		
		// return $EE->lang->user_lang;
	}
	
	// --------------------------------------------------------------------

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
				
				
				// redirects urls
				
					// VIMEO

						// oauth_redirect_uri
						
						// admin_redirect
						// oauth_success_url
						
					// YouTube
						
						// oauth_redirect_uri
						// service_configure_callback_url
						// service_configure_url
						
						// success_redirect
						
						// (oauth_authorization_endpoint)
						// (oauth_token_endpoint)
					
					// BOTH
						
						// redirect_url configure/callback/$service_key
						// success_url configure/$service_key

/*
				$service_obj->admin_redirect = \Blocks\UrlHelper::getUrl('duktvideos/configure/'.$service_key);
				$service_obj->oauth_redirect_uri = \Blocks\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$service_key);
				$service_obj->oauth_success_url = \Blocks\UrlHelper::getUrl('duktvideos/configure/'.$service_key);
				$service_obj->success_redirect = \Blocks\UrlHelper::getActionUrl('duktvideos/configure/saveService/'.$service_key);
				
				$service_obj->service_configure_url = \Blocks\UrlHelper::getUrl('duktvideos/configure/'.$service_key);
				$service_obj->service_configure_callback_url = \Blocks\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$service_key);
				$service_obj->service_configure_save_service_url = \Blocks\UrlHelper::getActionUrl('duktvideos/configure/saveService/'.$service_key);
*/
				
				// Vimeo
				
/*
				$service_obj->oauth_redirect_uri = \Blocks\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$service_key);
				$service_obj->admin_redirect = \Blocks\UrlHelper::getUrl('duktvideos/configure/'.$service_key);
				$service_obj->oauth_success_url = \Blocks\UrlHelper::getUrl('duktvideos/configure/'.$service_key);
*/
				$service_obj->redirect_url = \Blocks\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$service_key);
				$service_obj->success_url = \Blocks\UrlHelper::getUrl('duktvideos/configure/'.$service_key);
				$service_obj->problem_url = \Blocks\UrlHelper::getUrl('duktvideos/configure/'.$service_key);
				
				
				// YouTube
				
				//$service_obj->save_service_url = \Blocks\UrlHelper::getActionUrl('duktvideos/configure/saveService/'.$service_key);
/*
				$service_obj->oauth_redirect_uri = \Blocks\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$service_key);
				$service_obj->service_configure_callback_url = \Blocks\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$service_key);
				$service_obj->service_configure_url = \Blocks\UrlHelper::getUrl('duktvideos/configure/'.$service_key);
				$service_obj->success_redirect = \Blocks\UrlHelper::getActionUrl('duktvideos/configure/saveService/'.$service_key);
*/
				
								
				$services[$service_key] = $service_obj;	
			}
		}
		
		return $services;
	}
	
	// --------------------------------------------------------------------
	
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
	
	public static function redirect($url)
	{
    	\Blocks\BaseController::redirect($url);
	}
	
	
	
	

	/**
	 * Get callback_url
	 *
	 * @access	public static
	 */	
	public static function callback_url($service_key)
	{
		return \Blocks\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$service_key);
	}
	
	
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
		
		$EE =& get_instance();
		
		$EE->load->library('logger');
		
		$debug = \DuktVideos\Config::item('debug');
		
		if($debug)
		{
			$EE->logger->developer("Dukt Videos : ".$msg, TRUE);	
		}
	}
	
	
	// --------------------------------------------------------------------
	
	public function problem($msg)
	{
/* 		$this->EE->session->set_flashdata('message_failure', $msg); */
	}
	
	// --------------------------------------------------------------------
	
	public function success($msg)
	{
/* 		$this->EE->session->set_flashdata('message_success', $msg); */
	}
	
	// --------------------------------------------------------------------

	public function cp_link($more = false)
	{
		$url = BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=dukt_videos';
		
		if($more)
		{
			$url .= AMP.$more;
		}
		
		return $url;
	}
	
	// --------------------------------------------------------------------

	/**
	 * Insert JS code
	 *
	 * @access	public
	 * @param	string
	 * @return	void
	 */
	public function insert_js($str)
	{
		$this->EE->cp->add_to_head('<script type="text/javascript">' . $str . '</script>');
	}

	// --------------------------------------------------------------------

	/**
	 * Insert JS file
	 *
	 * @access	public
	 * @param	string
	 * @return	void
	 */
	public function insert_js_file($file)
	{
		$this->EE->cp->add_to_head('<script charset="utf-8" type="text/javascript" src="'.$this->_theme_url().$file.'?'.$this->version.'"></script>');
	}

	// --------------------------------------------------------------------

	/**
	 * Insert CSS file
	 *
	 * @access	public
	 * @param	string
	 * @return	void
	 */
	public function insert_css_file($file)
	{
		$this->EE->cp->add_to_head('<link rel="stylesheet" type="text/css" href="'.$this->_theme_url().$file.'?'.$this->version.'" />');
	}

	// --------------------------------------------------------------------

	/**
	 * Load heading files once (load_head_files)
	 *
	 * @access	private
	 * @return	void
	 */
	public function include_resources()
	{
		$js = "	var Dukt_videos = Dukt_videos ? Dukt_videos : new Object();
				Dukt_videos.ajax_endpoint = '".$this->endpoint_url()."';
				Dukt_videos.site_id = '".$this->EE->config->item('site_id')."';
			";

		$this->insert_js($js);

		$this->insert_css_file('universal/css/box.css');
		$this->insert_css_file('expressionengine/css/box.css');
		$this->insert_css_file('expressionengine/css/field.css');

		$this->insert_js_file('universal/js/jquery.easing.1.3.js');
		$this->insert_js_file('universal/js/spin.min.js');
		$this->insert_js_file('universal/js/box.js');
		
		$this->insert_js_file('expressionengine/js/field.js');
	}

	// --------------------------------------------------------------------
	
	/**
	 * Theme URL
	 *
	 * @access	private
	 * @return	string
	 */
	public function _theme_url()
	{
		$url = $this->EE->config->item('theme_folder_url')."third_party/dukt_videos/";
		return $url;
	}
	
	// --------------------------------------------------------------------

	/**
	 * Endpoint base URL for frontend & cp
	 *
	 * @access	public
	 * @return	void
	 */
	function endpoint_url()
	{
		$site_url = $this->EE->functions->fetch_site_index(0, 0);

		if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on')
		{
			$site_url = str_replace('http://', 'https://', $site_url);
		}

		$action_id = $this->fetch_action_id('Dukt_videos', 'ajax');

		$url = $site_url.QUERY_MARKER.'ACT='.$action_id;

		return $url;
	}
	
	// --------------------------------------------------------------------

	/**
	 * A copy of the standard fetch_action_id method that was unavailable from here
	 *
	 * @access	private
	 * @return	void
	 */
	private function fetch_action_id($class, $method)
	{
		$this->EE->db->select('action_id');
		$this->EE->db->where('class', $class);
		$this->EE->db->where('method', $method);
		$query = $this->EE->db->get('actions');

		if ($query->num_rows() == 0)
		{
			return FALSE;
		}

		return $query->row('action_id');
	}
}

/* End of file Someclass.php */