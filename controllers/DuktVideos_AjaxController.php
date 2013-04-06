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

require_once(CRAFT_PLUGINS_PATH.'duktvideos/vendor/autoload.php');

class DuktVideos_AjaxController extends BaseController
{
	/**
	 * Action Endpoint
	 */
    public function actionAngular()
    {		
		$method = craft()->request->getParam('method');
		
        $this->{$method}();
    }

    public function services()
    {
        $response = craft()->duktVideos_ajax->services();

        $services = array();

        foreach($response as $k => $v)
        {
            $services[$v->providerClass] = array(
                    'name' => $v->providerClass
                );
        }

        $this->returnJson($services);
    }

    public function embed()
    {
        $videoUrl = craft()->request->getParam('videoUrl');

        $service = $this->getService();

        $video = $service->videoFromUrl(array('url' => $videoUrl));

        $embed = $video->getEmbed(array('autoplay' => '1'));

        $this->returnJson($embed);
    }

    public function search()
    {
        $service = $this->getService();

        $q = craft()->request->getParam('searchQuery');

        $params = array(
                'q' => $q,
                'page' => craft()->request->getParam('page'),
                'perPage' => craft()->request->getParam('perPage')
            );

        $videos = $service->search($params);

        $this->returnJson($videos);
    }

    public function myvideos()
    {
        $service = $this->getService();

        $params = array(
                'page' => craft()->request->getParam('page'),
                'perPage' => craft()->request->getParam('perPage')
            );

        $videos = $service->uploads($params);

        $this->returnJson($videos);
    }

    public function favorites()
    {
        $service = $this->getService();

        $params = array(
                'page' => craft()->request->getParam('page'),
                'perPage' => craft()->request->getParam('perPage')
            );

        $videos = $service->favorites($params);

        $this->returnJson($videos);
    }

    private function getService()
    {
        $serviceKey = craft()->request->getParam('service');


        // Retrieve token

        $token = craft()->duktVideos_configure->get_option($serviceKey."_token");
        $token = unserialize(base64_decode($token));


        // Create the OAuth provider
        
        $parameters['id'] = craft()->duktVideos_configure->get_option($serviceKey."_id");
        $parameters['secret'] = craft()->duktVideos_configure->get_option($serviceKey."_secret");

        $provider = \OAuth\OAuth::provider($serviceKey, array(
            'id' => $parameters['id'],
            'secret' => $parameters['secret'],
            'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$serviceKey)
        ));

        $provider->setToken($token);


        // Create video service

        $service = \Dukt\Videos\Common\ServiceFactory::create($serviceKey);

        $service->setProvider($provider);

        return $service;
    }
}