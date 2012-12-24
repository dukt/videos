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
		require_once(DUKT_VIDEOS_PATH.'libraries/app.php');
	
		$video_opts = array(
			'url' => $video_url,
		);
		
		$embed_opts = array();
		
		$video = \DuktVideos\App::get_video($video_opts, $embed_opts);
		
		$video_object = new DuktVideos_VideoModel();
		
		foreach($video as $k => $v)
		{
			$video_object->{$k} = $video[$k];	
		}
				
		return $video_object;
	}
}