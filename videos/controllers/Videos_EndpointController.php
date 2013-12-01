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

class Videos_EndpointController extends BaseController
{
	public function init()
	{
		$method = craft()->request->getParam('method');

		$this->{$method}();
	}

    public function app()
    {
    	$variables = array();

        $html = craft()->templates->render('videos/_includes/app', $variables);

        $this->returnJson(array(
        	'html' => $html
        ));
    }

    public function embed()
    {
        $videoUrl = craft()->request->getPost('videoUrl');

        $options = array(
            'autoplay' => '0',
            'controls' => 1,
            'showinfo' => 1,
            'iv_load_policy' => 3,
            'rel' => 0
        );

        if($embedOptions = craft()->request->getPost('embedOptions')) {
            array_merge($options, $embedOptions);
        }

        $video = craft()->videos->url($videoUrl);

        $embed = $video->getEmbedHtml($options);

        $this->returnJson(array(
        	'embed' => $embed
        ));
    }

    public function sources()
    {
        $sources = craft()->videos->getGatewaysWithSections();

        $this->returnJson(array(
            'sources' => $sources
        ));

        // // get providers

        // $sources = ee()->videos_lib->getSources();

        // foreach($sources as $k => $source) {

        //     $source->supportsOwnVideoLike = $source->supportsOwnVideoLike();

        //     // $source->sections =  $source->getSections();

        //     $class = '\\Videos\\Section\\'.$source->providerClass;

        //     $source->sections =  $class::getSections($source);

        //     $sources[$k] = $source;
        // }

        // $result = array('result' => $sources);

        // return Helper::returnJson($result);
    }

	// public function actionGetProviders()
	// {
	// 	craft()->videos->getProviders();
	// }

	// public function actionGetVideos()
	// {
	// 	craft()->videos->getVideos($provider, $request);
	// }

	// public function actionGetCollection()
	// {
	// 	craft()->videos->getCollection($provider, $request);
	// }

}