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

        if(method_exists($this, $method)) {
		  $this->{$method}();
        } else {
            $this->returnErrorJson("Endpoint method ".$method." doesn't exists");
        }
	}

    public function localization()
    {
        $locale = craft()->locale->id;
        $path = CRAFT_PLUGINS_PATH.'videos/translations/'.$locale.'.php';

        // default

        if(!file_exists($path)) {
            $locale = 'en_us';
            $path = CRAFT_PLUGINS_PATH.'videos/translations/'.$locale.'.php';
        }

        if(!file_exists($path)) {
            $this->returnErrorJson("Translation file not found : ".$path);
        }

        $localizationData = include($path);

        $localization = array();

        foreach ($localizationData as $key => $value) {
            $item = array();
            $item['key'] = $key;
            $item['value'] = $value;
            array_push($localization, $item);
        }

        $this->returnJson($localization);
    }

    public function app()
    {
    	$variables = array();

        $html = craft()->templates->render('videos/_includes/app', $variables);

        $this->returnJson(array(
        	'html' => $html
        ));
    }

    private function _embedOptions()
    {
        $options = array(
            'autoplay' => '0',
            'controls' => 1,
            'showinfo' => 1,
            'iv_load_policy' => 3,
            'rel' => 0
        );

        $post = $this->_requestPayload();

        if(!empty($post['embedOptions'])) {
            $options = array_merge($options, $post['embedOptions']);
        }

        return $options;
    }

    public function embed()
    {
        $videoUrl = craft()->request->getPost('videoUrl');

        $opts = $this->_embedOptions();

        try {
            $embed = craft()->videos->getEmbed($videoUrl, $opts);

            if(!$embed) {
                throw new Exception("Embed not found : ".$videoUrl);
            }

            $this->returnJson(array(
            	'embed' => $embed
            ));
        } catch(\Exception $e) {
            $this->returnErrorJson("Couldn't load embed : ".$e->getMessage());
        }
    }

    public function embedUrl()
    {
        // video

        $post = $this->_requestPayload();

        $videoUrl = $post['videoUrl'];

        $video = craft()->videos->url($videoUrl);

        // embed

        $options = $this->_embedOptions();

        $embedUrl = $video->getEmbedUrl($options);


        // return json

        $this->returnJson(array(
            'embedUrl' => $embedUrl
        ));
    }

    public function sources()
    {
        try {
            $sources = craft()->videos->getGatewaysWithSections();

            $this->returnJson(array(
                'sources' => $sources
            ));

        } catch(\Exception $e) {
            $this->returnErrorJson($e->getMessage());
        }
    }

    public function routeRequest()
    {
        $post = $this->_requestPayload();

        $uri = $post['path'];

        $uri = trim($uri, "/");

        $segments = explode("/", $uri);

        $gatewayHandle = $segments[0];

        $params = array();

        if(!empty($segments[2])) {
            $params['id'] = $segments[2];
        }

        if(!empty($post['page'])) {
            $params['page'] = $post['page'];
        }

        if(!empty($post['perPage'])) {
            $params['perPage'] = $post['perPage'];
        }

        $request = substr($post['path'], strlen("/".$gatewayHandle."/"));

        $videos = craft()->videos->getVideos($gatewayHandle, $request, $params);

        $this->returnJson($videos);
    }

	public function getVideos()
	{
        $gateway = craft()->request->getParam('gateway');

        $params = $this->_requestPayload();

        if(!empty($post['page'])) {
            $params['page'] = $post['page'];
        }

        if(!empty($post['perPage'])) {
            $params['perPage'] = $post['perPage'];
        }

        $request = $params['request'];

        try {
            $videos = craft()->videos->getVideos($gateway, $request, $params);
            $this->returnJson($videos);
        } catch(\Exception $e) {
            $this->returnErrorJson($e->getMessage());
        }
	}

    private function _requestPayload()
    {
        $post = "";

        $fp = fopen("php://input", "r");

        while (!feof($fp)) {
           $line = fgets($fp);
           $post .= $line;
        }

        fclose($fp);

        $post = json_decode($post, true);

        return $post;
    }
}