<?php

namespace Blocks;

class DuktVideos_VideoModel extends BaseModel
{
	var $services;
	
	public function __construct()
	{
		require_once(DUKT_VIDEOS_PATH.'libraries/app.php');
		
		$this->services = \DuktVideos\App::get_services();
	}
    
	// --------------------------------------------------------------------
	
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
    
    public function embed($embed_options)
    {
    	$service = $this->services[$this->service_key];
    	
    	$video_id = $this->id;
    	
    	$embed = $service->get_embed($video_id, $embed_options);
    	

		$charset = blx()->templates->getTwig()->getCharset();
		
		$embed = new \Twig_Markup($embed, $charset);
    	
	    return $embed;
    }
}