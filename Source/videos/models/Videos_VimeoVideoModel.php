<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_VimeoVideoModel extends Videos_VideoModel
{
    protected function defineAttributes()
    {
        return array_merge(parent::defineAttributes(), array(
	        'uri' => AttributeType::String,
	        'name' => AttributeType::String,
	        'link' => AttributeType::String,
	        'width' => AttributeType::Number,
	        'language' => AttributeType::String,
	        'height' => AttributeType::Number,
	        'embed' => AttributeType::Mixed,
	        'createdTime' => AttributeType::DateTime,
	        'modifiedTime' => AttributeType::DateTime,
	        'contentRating' => AttributeType::Mixed,
	        'license' => AttributeType::String,
	        'privacy' => AttributeType::Mixed,
	        'pictures' => AttributeType::Mixed,
	        'tags' => AttributeType::Mixed,
	        'stats' => AttributeType::Mixed,
	        'metadata' => AttributeType::Mixed,
	        'user' => AttributeType::Mixed,
	        'status' => AttributeType::String,
	        'resourceKey' => AttributeType::String,
			'privacy' => AttributeType::Mixed,
			'downloads' => AttributeType::Mixed,
		));
    }
}
