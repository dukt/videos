<?php

namespace Blocks;

class DuktVideos_VideoBlockType extends BaseBlockType
{
	
	/**
	 * Block type name
	 */
	public function getName()
	{
		return Blocks::t('Dukt Videos');
	}
    
	// --------------------------------------------------------------------

	/**
	 * Save it
	 */
	public function defineContentAttribute()
	{
		return AttributeType::String;
	}
    
	// --------------------------------------------------------------------

	/**
	 * Show field
	 */
	public function getInputHtml($name, $value)
	{		
		if(isset($value->url))
		{
			$value = $value->url;
		}
		else
		{
			$value = "";
		}
		
		return blx()->templates->render('duktvideos/field', array(
			'name'       => $name,
			'videoValue'  => $value
		));
	}
    
	// --------------------------------------------------------------------

	/**
	 * Prep value
	 */
	public function prepValue($video_url)
	{		
		require_once(DUKT_VIDEOS_PATH.'libraries/dukt_videos_app.php');
		
		$dukt_videos = new \DuktVideos\Dukt_videos_app;
	
		$video_opts = array(
			'url' => $video_url,
		);
		
		$embed_opts = array();
		
		$video = $dukt_videos->get_video($video_opts, $embed_opts);

		$charset = blx()->templates->getTwig()->getCharset();
		
		$video['embed'] = new \Twig_Markup($video['embed'], $charset);
		
		$vid = new DuktVideos_VideoModel();
		
		foreach($video as $k => $v)
		{
			$vid->{$k} = $video[$k];	
		}
				
		return $vid;
	}
}