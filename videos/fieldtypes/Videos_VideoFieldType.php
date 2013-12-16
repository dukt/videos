<?php

/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 * @link      https://dukt.net/craft/videos
 */

namespace Craft;

require_once(CRAFT_PLUGINS_PATH."videos/config.php");

require(CRAFT_PLUGINS_PATH.'videos/vendor/autoload.php');

class Videos_VideoFieldType extends BaseFieldType
{
	public function getName()
	{

		return Craft::t('Videos');
	}

	/**
	 * Save it
	 */
	public function defineContentAttribute()
	{
		return AttributeType::String;
	}

	/**
	 * Show field
	 */
	public function getInputHtml($name, $value)
	{
		// Get video url from object

		if(is_object($value)) {
			$value = $value->url;
		}


	    // Reformat the input name into something that looks more like an ID

	    $id = craft()->templates->formatInputId($name);


	    // Figure out what that ID is going to look like once it has been namespaced

	    $namespacedId = craft()->templates->namespaceInputId($id);


	    // Include our Javascript

	    craft()->templates->includeJs("$('#{$namespacedId}').videosField();");


	    // Render HTML

		return craft()->templates->render('videos/field', array(
			'id'    => $id,
			'name'  => $name,
			'value' => $value
		));
	}

	/**
	 * Prep value
	 */
	public function prepValue($videoUrl)
	{
		$video = craft()->videos->url($videoUrl);

		return $video;
	}

	/**
	 * Search Keywords
	 */
	public function getSearchKeywords($value)
	{
		return '';
	}
}
