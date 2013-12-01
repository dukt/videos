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

require_once(CRAFT_PLUGINS_PATH.'videos/vendor/autoload.php');

class Videos_Endpoint extends BaseController
{

	public function actionGetProviders()
	{
		craft()->videos->getProviders();
	}

	public function actionGetVideos()
	{
		craft()->videos->getVideos($provider, $request);
	}

	public function actionGetCollection()
	{
		craft()->videos->getCollection($provider, $request);
	}

}