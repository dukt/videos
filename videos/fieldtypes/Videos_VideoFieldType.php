<?php

/**
 * Videos plugin for Craft CMS
 *
 * @package   Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2014, Dukt
 * @link      https://dukt.net/craft/videos/
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

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
		$video = false;

		// get the prepped value (the video object)
		if(is_object($value))
		{
			$video = $value;
		}

		// get the unprepped value (the video url)
		if($this->element)
		{
			$value = $this->element->getContent()->getAttribute($this->model->handle);
		}


	    // Reformat the input name into something that looks more like an ID
	    $id = craft()->templates->formatInputId($name);


	    // Figure out what that ID is going to look like once it has been namespaced

	    $namespacedId = craft()->templates->namespaceInputId($id);

	    $settings = $this->getSettings();


	    // Resources

		craft()->templates->includeCssResource('videos/common/css/field.css');

		craft()->templates->includeJsResource('videos/common/js/knockout-3.0.0.js');
		craft()->templates->includeJsResource('videos/js/dukt.base.js');
		craft()->templates->includeJsResource('videos/common/js/dukt.js');
		craft()->templates->includeJsResource('videos/common/js/field.js');
		craft()->templates->includeJsResource('videos/common/js/manager.js');
		craft()->templates->includeJsResource('videos/common/js/manager.ko.js');

		craft()->templates->includeJs('new VideoField("'.craft()->templates->namespaceInputId($id).'");');

		$preview = craft()->templates->render('videos/field/preview', array('video' => $video));


	    // Render HTML

		return craft()->templates->render('videos/field/index', array(
			'id'    => $id,
			'name'  => $name,
			'value' => $value,
			'preview' => $preview
		));
	}

	/**
	 * Prep value
	 */

	public function prepValue($videoUrl)
	{
		try {
			$video = craft()->videos->getVideoByUrl($videoUrl);

			if($video)
			{
				return $video;
			}
		}
		catch(\Exception $e)
		{
			Craft::log("Couldn't get video in field prepValue: ".$e->getMessage(), LogLevel::Info, true);

			return null;
		}
	}
}
