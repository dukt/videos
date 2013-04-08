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

namespace Craft;

require_once(CRAFT_PLUGINS_PATH."duktvideos/config.php");

class DuktVideos_VideoFieldType extends BaseFieldType
{
	
	/**
	 * Block type name
	 */
	public function getName()
	{
		
		return Craft::t('Dukt Videos');
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
		
		return craft()->templates->render('duktvideos/field', array(
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
		// $video = \DuktVideos\App::get_video($video_url);
		
		$video_object = new DuktVideos_VideoModel();

		return $video_object; // temporary
		
		if($video)
		{
			foreach($video as $k => $v)
			{
				$video_object->{$k} = $video[$k];	
			}
			
			return $video_object;
		}
		
		return false;
	}
}
