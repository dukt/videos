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
 
namespace Blocks;

class DuktVideos_VideoModel extends BaseModel
{
	var $services;
	
	// --------------------------------------------------------------------
	
	public function __construct()
	{
		require_once(DUKT_VIDEOS_PATH.'libraries/app.php');
		
		$this->services = \DuktVideos\App::get_services();
	}
    
	// --------------------------------------------------------------------
	
	/**
	 * Define Attributes
	 */	
    public function defineAttributes()
    {
    	$attributes = array();

		foreach($this->services as $service)
		{
			foreach($service->model_options as $k => $v)
			{
				$attributes[$k] = AttributeType::String;
			}
		}
		
        return $attributes;
    }
    
	// --------------------------------------------------------------------
	
	/**
	 * Embed
	 */	
    public function embed($embed_options = array())
    {
    	$service = $this->services[$this->service_key];
    	
    	$video_id = $this->id;
    	
    	$embed = $service->get_embed($video_id, $embed_options);

		$charset = blx()->templates->getTwig()->getCharset();
		
		$embed = new \Twig_Markup($embed, $charset);
    	
	    return $embed;
    }
}