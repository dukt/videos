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

class Videos_AjaxController extends BaseController
{
    // --------------------------------------------------------------------

    public function actionModal()
    {
        $this->renderTemplate('videos/_app');
    }

    // --------------------------------------------------------------------

    public function actionRefreshToken()
    {
        $providerClass = craft()->request->getParam('providerClass');

        $record = craft()->videos->refreshServiceToken($providerClass);

        $token = $record->token;
        $token = unserialize(base64_decode($token));

        $remaining = $token->expires - time();

        // redirect to service

        return $this->returnJson($remaining);
    }

    // --------------------------------------------------------------------

    public function actionRefreshServicesTokens()
    {
        $services = craft()->videos->servicesObjects();

        foreach($services as $s)
        {
            craft()->videos->refreshServiceToken($s->providerClass);
        }

        return $this->returnJson(true);
    }

    // --------------------------------------------------------------------

    public function actionServices()
    {

        $servicesRecords = craft()->videos->servicesRecords();

        $services = array();

        foreach($servicesRecords as $k => $v)
        {
            if($v->token)
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

        $embed = $video->getEmbed(array('autoplay' => '1', 'controls' => 1, 'showinfo' => 1, 'iv_load_policy' => 3, 'rel' => 0));

        // $charset = craft()->templates->getTwig()->getCharset();

        // $result = new \Twig_Markup($embed, $charset);

        $response = array();
        $response['embed'] = $embed;
        $response['video'] = $video;
        $response['isFavorite'] = $service->isFavorite(array('id' => $video->id));

        $this->returnJson($response);
    }

    // --------------------------------------------------------------------

    public function actionFieldEmbed()
    {
        $videoUrl = craft()->request->getParam('videoUrl');

        $video = craft()->videos->url($videoUrl);

        $embed = $video->embed(array('autoplay' => '0', 'controls' => 1, 'showinfo' => 1, 'iv_load_policy' => 3, 'rel' => 0));

        $response = array();
        $response['embed'] = $embed;

        $this->returnJson($response);
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
        }
        catch(\Exception $e)
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

    public function actionFavoriteAdd()
    {
        $videoId = craft()->request->getParam('id');

        $service = $this->getService();

        $params = array('id' => $videoId);

        $service->favoriteAdd($params);

        $this->returnJson(true);
    }

    // --------------------------------------------------------------------

    public function actionFavoriteRemove()
    {
        $videoId = craft()->request->getParam('id');

        $service = $this->getService();

        $params = array('id' => $videoId);

        $service->favoriteRemove($params);

        $this->returnJson(true);
    }

    // --------------------------------------------------------------------

    private function getService()
    {
        $providerClass = craft()->request->getParam('providerClass');

        $serviceRecord = craft()->videos->getServiceRecord($providerClass);


        // Retrieve token

        $token = $serviceRecord->token;
        $token = unserialize(base64_decode($token));


        // Create the OAuth provider

        $parameters['id'] = $serviceRecord->params['clientId'];
        $parameters['secret'] = $serviceRecord->params['clientSecret'];
        $parameters['redirect_url'] = \Craft\UrlHelper::getActionUrl('videos/settings/callback/'.$providerClass);

        $provider = \OAuth\OAuth::provider($providerClass, $parameters);


        // do we need to refresh token ?

        if(isset($token->expires))
        {
            $remaining = $token->expires - time();

            if($remaining < 240)
            {
                $accessToken = $provider->access($token->refresh_token, array('grant_type' => 'refresh_token'));


                // save token

                $token->access_token = $accessToken->access_token;
                $token->expires = $accessToken->expires;

                $serviceRecord->token = base64_encode(serialize($token));
                $serviceRecord->save();
            }
        }


        // set the already valid, or refreshed token

        $provider->setToken($token);


        // Create video service

        $service = \Dukt\Videos\Common\ServiceFactory::create($providerClass);
        $service->initialize($serviceRecord->params);
        $service->setProvider($provider);

        return $service;
    }

    // --------------------------------------------------------------------

    public function actionUserInfos()
    {
        $service = $this->getService();

        $userInfos = $service->userInfos();

        $this->returnJson($userInfos);
    }
}