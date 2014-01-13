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
		// Get video url from object



	    // Reformat the input name into something that looks more like an ID

	    $id = craft()->templates->formatInputId($name);


	    // Figure out what that ID is going to look like once it has been namespaced

	    $namespacedId = craft()->templates->namespaceInputId($id);


	    // Resources

		craft()->templates->includeCssResource('videos/css/field.css');
		craft()->templates->includeJsResource('videos/js/VideoInput.js');
		craft()->templates->includeJs('new VideoInput("'.craft()->templates->namespaceInputId($id).'");');


		// Preview

		$preview = '<div class="dkv-video-preview"></div>';

		if(!empty($value->url)) {

		    $preview = '
		    <div class="dkv-video-preview">

		    	<img src="'.$value['thumbnail'].'" alt="'.$value['title'].'" title="'.$value['title'].'" />

		    	<div class="dkv-text">
		    		<p class="dkv-title"><strong title="'.$value['title'].'">'.$value['title'].'</strong></p>

		    		<ul class="light">
						<li><strong>Duration:</strong> '.$value['duration'].'</li>
						<li><strong>By</strong> <a href="'.$value['authorUrl'].'">'.$value['authorName'].'</a></li>
						<li>'.$value['plays'].' views</li>
		    		</ul>
		    	</div>
		    </div>';
	    }


	    // value

		if(is_object($value)) {
			$value = $value->url;
		}

	    // Render HTML

		return craft()->templates->render('videos/field', array(
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
		$video = craft()->videos->getVideoByUrl($videoUrl);

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
