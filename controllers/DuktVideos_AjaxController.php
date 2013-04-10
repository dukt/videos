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
    public function actionModal()
    {		

        $this->renderTemplate('duktvideos/modal');
    }

    // --------------------------------------------------------------------

    public function actionRefreshToken()
    {
        $serviceKey = craft()->request->getParam('serviceKey');

        $token = craft()->duktVideos->getOption($serviceKey."_token");
        $token = unserialize(base64_decode($token));



        // refresh  token

        $parameters = array();
        $parameters['id'] = craft()->duktVideos->getOption($serviceKey."_id");
        $parameters['secret'] = craft()->duktVideos->getOption($serviceKey."_secret");

        $provider = \OAuth\OAuth::provider($serviceKey, array(
            'id' => $parameters['id'],
            'secret' => $parameters['secret'],
            'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/settings/callback/'.$serviceKey)
        ));

        $accessToken = $provider->access($token->refresh_token, array('grant_type' => 'refresh_token'));


        // save token

        $token->access_token = $accessToken->access_token;
        $token->expires = $accessToken->expires;


        $remaining = $token->expires - time();

        $token = base64_encode(serialize($token));

        craft()->duktVideos->setOption($serviceKey."_token", $token);

        // redirect to service

        return $this->returnJson($remaining);
    }

    // --------------------------------------------------------------------

    public function actionRefreshServicesTokens()
    {
        return $this->services();
    }

    // --------------------------------------------------------------------

    public function actionServices()
    {
        $response = craft()->duktVideos->services();

        $services = array();

        foreach($response as $k => $v)
        {
            if($v->isAuthenticated())
            {
                $services[$v->providerClass] = array(
                        'name' => $v->providerClass
                    );
            }
        }

        $this->returnJson($services);
    }

    // --------------------------------------------------------------------

    public function actionPlaylists()
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

    // --------------------------------------------------------------------

    public function actionPlaylist()
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

    // --------------------------------------------------------------------

    public function actionEmbed()
    {
        $videoUrl = craft()->request->getParam('videoUrl');

        $service = $this->getService();

        $video = $service->videoFromUrl(array('url' => $videoUrl));

        $embed = $video->getEmbed(array('autoplay' => '1', 'controls' => 0, 'showinfo' => 0));

        // $charset = craft()->templates->getTwig()->getCharset();

        // $result = new \Twig_Markup($embed, $charset);

        $this->returnJson($embed);
    }

    // --------------------------------------------------------------------

    public function actionFieldEmbed()
    {
        $videoUrl = craft()->request->getParam('videoUrl');

        $video = craft()->duktVideos->url($videoUrl);

        $embed = $video->embed(array('autoplay' => '0', 'controls' => 0, 'showinfo' => 0));

        $this->returnJson($embed);
    }

    // --------------------------------------------------------------------

    public function actionSearch()
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

    // --------------------------------------------------------------------

    public function actionUploads()
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

    // --------------------------------------------------------------------

    public function actionFavorites()
    {
        $service = $this->getService();

        $params = array(
                'page' => craft()->request->getParam('page'),
                'perPage' => craft()->request->getParam('perPage')
            );

        $videos = $service->favorites($params);

        $this->returnJson($videos);
    }

    // --------------------------------------------------------------------

    private function getService()
    {
        $serviceKey = craft()->request->getParam('service');


        // Retrieve token

        $token = craft()->duktVideos->getOption($serviceKey."_token");
        $token = unserialize(base64_decode($token));


        // Create the OAuth provider
        
        $parameters['id'] = craft()->duktVideos->getOption($serviceKey."_id");
        $parameters['secret'] = craft()->duktVideos->getOption($serviceKey."_secret");
        $parameters['developerKey'] = craft()->duktVideos->getOption($serviceKey."_developerKey");

        $provider = \OAuth\OAuth::provider($serviceKey, array(
            'id' => $parameters['id'],
            'secret' => $parameters['secret'],
            'developerKey' => $parameters['developerKey'],
            'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/settings/callback/'.$serviceKey)
        ));

        $provider->setToken($token);


        // Create video service

        $service = \Dukt\Videos\Common\ServiceFactory::create($serviceKey);

        $service->setProvider($provider);

        return $service;
    }
}