<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_YoutubeVideoModel extends Videos_VideoModel
{
	protected function defineAttributes()
	{
		return array_merge(parent::defineAttributes(), array(
			'kind' => AttributeType::String,
			'etag' => AttributeType::String,
			'snippet' => AttributeType::Mixed,
			'contentDetails' => AttributeType::Mixed,
			'statistics' => AttributeType::Mixed,
		));
	}
}
