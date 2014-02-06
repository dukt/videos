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

use Symfony\Component\Finder\Finder;

class VideosService extends BaseApplicationComponent
{
    private $_gateways = array();
    private $_gatewaysLoaded = false;

    public function init()
    {
        $this->loadGateways();

        parent::init();
    }

    public function getVideoThumbnail($gateway, $id, $w = 340, $h = null)
    {
        $uri = 'videosthumbnails/'.$gateway.'/'.$id.'/';

        $uri .= $w;

        if(!$h) {
            // calculate hd ratio (1,280×720)

            $h = floor($w * 720 / 1280);
        }

        $uri .= '/'.$h;


        return UrlHelper::getResourceUrl($uri);
    }

    public function getVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        $video = $this->_getVideoObjectByUrl($videoUrl, $enableCache, $cacheExpiry);

        if($video) {

            $attributes = (array) $video;

            $response = Videos_VideoModel::populateModel($attributes);

            $response['thumbnail'] = $response->getThumbnail();

            return $response;
        }
    }

    public function getVideoById($gateway, $id)
    {
        $video = $this->_getVideoObjectById($gateway, $id);

        if($video) {

            $video = (array) $video;

            $response = Videos_VideoModel::populateModel($video);

            $response['thumbnail'] = $response->getThumbnail();

            return $response;
        }
    }

    public function getEmbed($videoUrl, $opts)
    {
        $video = $this->_getVideoObjectByUrl($videoUrl);

        return $video->getEmbed($opts);
    }

    public function _getVideoObjectById($gatewayHandle, $id, $enableCache = true, $cacheExpiry = 3600)
    {
        if($enableCache) {
            $key = 'videos.video.'.$gatewayHandle.'.'.md5($id);

            $response = craft()->fileCache->get($key);

            if($response) {
                return $response;
            }
        }

        try {

            $gateways = $this->getGateways();

            foreach($gateways as $gateway)
            {
                if($gateway->handle == $gatewayHandle) {

                    $response = $gateway->getVideo(array('id' => $id));

                    if($response) {
                        craft()->fileCache->set($key, $response, $cacheExpiry);

                        return $response;
                    }
                }
            }

        } catch(\Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    private function _getVideoObjectByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {

        if($enableCache) {
            $key = 'videos.video.'.md5($videoUrl);

            $response = craft()->fileCache->get($key);

            if($response) {
                return $response;
            }
        }

        $gateways = $this->getGateways();

        foreach($gateways as $gateway)
        {
            $params['url'] = $videoUrl;

            try {
                $response = $gateway->videoFromUrl($params);

                if($response) {
                    craft()->fileCache->set($key, $response, $cacheExpiry);

                    return $response;
                }

            } catch(\Exception $e) {
                // throw new Exception($e->getMessage());
            }
        }
    }

    private function getGatewayOpts($gateway)
    {
        $plugin = craft()->plugins->getPlugin('videos');

        $settings = $plugin->getSettings();

        $gatewayOpts = array(
            'youtube' => array(
                'class' => "YouTube",
                'parameters' => array(
                    'developerKey' => $settings['youtubeParameters']['developerKey']
                ),
            ),
            'vimeo' => array(
                'class' => "Vimeo"
            )
        );

        return $gatewayOpts[$gateway];
    }

    private function getProviderOpts($gateway)
    {
        $providerOpts = array(
            'youtube' => array(
                'handle' => 'google',
                'namespace' => 'videos.google'
            ),
            'vimeo' => array(
                'handle' => 'vimeo',
                'namespace' => 'videos.vimeo'
            )
        );

        return $providerOpts[$gateway];
    }



    public function getGateways()
    {
        return $this->_gateways;
    }

    public function getGateway($gatewayHandle)
    {
        foreach($this->_gateways as $g)
        {
            if($g->handle == $gatewayHandle)
            {
                return $g;
            }
        }

        return null;
    }



    public function deprecated_getGateways()
    {
        $wrap = $this;

        $allGateways = array_map(

            function($providerClass) use ($wrap) {

                $gatewayHandle = strtolower($providerClass);

                try {
                    // provider

                    $providerOpts = $wrap->getProviderOpts($gatewayHandle);

                    $token = craft()->oauth->getSystemToken($providerOpts['handle'], $providerOpts['namespace']);

                    if(!$token) {
                        throw new Exception("Token doesn't exists");
                    }

                    $realToken = $token->getDecodedToken();

                    if(!$realToken) {
                        throw new Exception("Couldn't get real token");
                    }

                    $provider = craft()->oauth->getProvider($providerOpts['handle']);

                    $provider->setToken($token->getDecodedToken());


                    // gateway

                    $gatewayOpts = $wrap->getGatewayOpts($gatewayHandle);

                    $gateway = \Dukt\Videos\Common\ServiceFactory::create($gatewayOpts['class'], $provider->providerSource->_providerSource);

                    if(isset($gatewayOpts['parameters'])) {
                        $gateway->setParameters($gatewayOpts['parameters']);
                    }

                    return $gateway;

                } catch(\Exception $e) {
                    return array('error' => $e->getMessage());
                }
            },

            \Dukt\Videos\Common\ServiceFactory::find()
        );

        $gateways = array();

        foreach($allGateways as $g) {
            if(is_object($g)) {
                $gateways[$g->handle] = $g;
            }
        }

        return $gateways;
    }

    public function getGatewaysWithSections()
    {
        try {
            $gatewaysWithSections = array();

            $gateways = $this->getGateways();

            foreach($gateways as $gateway) {

                if($gateway) {
                    $class = '\Dukt\Videos\App\\'.$gateway->providerClass;

                    if($gateway->sections = $class::getSections($gateway)) {
                        array_push($gatewaysWithSections, $gateway);
                    }
                }
            }

            return $gatewaysWithSections;
        } catch(\Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    private function loadGateways()
    {
        if(!$this->_gatewaysLoaded)
        {
            $this->_gatewaysLoaded = true;

            $finder = new Finder();

            $directories = $finder->directories()->depth(0)->in(CRAFT_PLUGINS_PATH.'videos/vendor/dukt/videos/src/Dukt/Videos/');

            foreach($directories as $directory)
            {

                $pathName = $directory->getRelativePathName();

                if($pathName == 'Common')
                {
                    continue;
                }

                $nsClass = '\\Dukt\\Videos\\'.$pathName.'\\Service';
                $gateway = new $nsClass;

                // load gateway settings


                //$token = craft()->oauth->getSystemToken($gateway->oauthProvider, 'videos.'.strtolower($gateway->oauthProvider));

                $oauthProvider = craft()->oauth->getProvider($gateway->oauthProvider);
                $accessToken = craft()->oauth->getSystemToken($gateway->oauthProvider, 'videos.'.strtolower($gateway->oauthProvider));


                // $gatewayRecord = $this->getGatewayRecord($gateway->handle);

                if($oauthProvider)
                {

                   if(!empty($oauthProvider->clientId))
                   {
                        $gateway->clientId = $oauthProvider->clientId;
                   }

                   if(!empty($oauthProvider->clientSecret))
                   {
                        $gateway->clientSecret = $oauthProvider->clientSecret;
                   }

                   if(!empty($accessToken))
                   {
                        $gateway->accessToken = $accessToken->getRealToken();
                   }
                }

                $this->_gateways[] = $gateway;
            }
        }
    }
}