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

    public function actionRefreshToken()
    {
        $serviceKey = craft()->request->getParam('serviceKey');

        $token = craft()->duktVideos_configure->get_option($serviceKey."_token");
        $token = unserialize(base64_decode($token));



        // refresh  token

        $parameters = array();
        $parameters['id'] = craft()->duktVideos_configure->get_option($serviceKey."_id");
        $parameters['secret'] = craft()->duktVideos_configure->get_option($serviceKey."_secret");

        $provider = \OAuth\OAuth::provider($serviceKey, array(
            'id' => $parameters['id'],
            'secret' => $parameters['secret'],
            'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$serviceKey)
        ));


        // var_dump($token->refresh_token);

        // die();

        $accessToken = $provider->access($token->refresh_token, array('grant_type' => 'refresh_token'));

        

        // save token

        $token->access_token = $accessToken->access_token;
        $token->expires = $accessToken->expires;


        $remaining = $token->expires - time();

        $token = base64_encode(serialize($token));

        craft()->duktVideos_configure->set_option($serviceKey."_token", $token);

        // redirect to service

        return $this->returnJson($remaining);
    }

    public function refreshServicesTokens()
    {
        return $this->services();
        //return $this->returnJson("Hello world");
    }

    public function services()
    {
        $response = craft()->duktVideos_ajax->services();

        $services = array();

        foreach($response as $k => $v)
        {


            $token = craft()->duktVideos_configure->get_option($v->getName()."_token");
            $token = unserialize(base64_decode($token));

            if(isset($token->expires))
            {
                $remaining = $token->expires - time();

                if($remaining < 240)
                {
                    // refresh token


                    $accessToken = $v->provider->access($token->refresh_token, array('grant_type' => 'refresh_token'));

                    

                    // save token

                    $token->access_token = $accessToken->access_token;
                    $token->expires = $accessToken->expires;


                    $remaining = $token->expires - time();

                    $serializedToken = base64_encode(serialize($token));

                    craft()->duktVideos_configure->set_option($v->getName()."_token", $serializedToken  );
                }
            }

            if($v->isAuthenticated())
            {
                $services[$v->providerClass] = array(
                        'name' => $v->providerClass
                    );
            }
        }

        $this->returnJson($services);
    }

    public function playlists()
    {
        try {
            $service = $this->getService();

            $params = array();

        
            $playlists = $service->playlists($params);
        } catch(\Exception $e)
        {
            $playlists = $e->getMessage();
        }

        $this->returnJson($playlists);
    }

    public function playlist()
    {
        try {
            $service = $this->getService();

            $playlistId = craft()->request->getParam('playlistId');

            $params = array(
                'id' => $playlistId,
                'page' => craft()->request->getParam('page'),
                'perPage' => craft()->request->getParam('perPage')
            );


        
            $videos = $service->playlistVideos($params);
        } catch(\Exception $e)
        {
            $videos = $e->getMessage();
        }

        $this->returnJson($videos);
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

    public function uploads()
    {
        try {
            $service = $this->getService();

            $params = array(
                    'page' => craft()->request->getParam('page'),
                    'perPage' => craft()->request->getParam('perPage')
                );

        
            $videos = $service->uploads($params);
        } catch(\Exception $e)
        {
            $videos = $e->getMessage();
        }

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
        $parameters['developerKey'] = craft()->duktVideos_configure->get_option($serviceKey."_developerKey");

        $provider = \OAuth\OAuth::provider($serviceKey, array(
            'id' => $parameters['id'],
            'secret' => $parameters['secret'],
            'developerKey' => $parameters['developerKey'],
            'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$serviceKey)
        ));

        $provider->setToken($token);


        // Create video service

        $service = \Dukt\Videos\Common\ServiceFactory::create($serviceKey);

        $service->setProvider($provider);

        return $service;
    }
}