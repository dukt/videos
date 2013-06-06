<?php

/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://docs.dukt.net/craft/videos/license
 * @link      http://dukt.net/craft/videos
 */

namespace Craft;

require_once(CRAFT_PLUGINS_PATH."videos/config.php");

require(CRAFT_PLUGINS_PATH.'videos/vendor/autoload.php');

class Videos_VideoFieldType extends BaseFieldType
{

	/**
	 * Block type name
	 */
	public function getName()
	{

		return Craft::t('Videos');
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

		return craft()->templates->render('videos/field', array(
			'name'       => $name,
			'videoValue'  => $value
		));
	}

	// --------------------------------------------------------------------

	/**
	 * Prep value
	 */
	public function prepValue($videoUrl)
	{
		$video = craft()->videos->url($videoUrl);


		$videoObject = new Videos_VideoModel();

		if($video)
		{
			foreach($video as $k => $v)
			{
				$videoObject->{$k} = $video[$k];
			}

			return $videoObject;
		}

		return false;
	}
}
