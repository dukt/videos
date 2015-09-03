<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

require(CRAFT_PLUGINS_PATH.'videos/vendor/autoload.php');

class VideosService extends BaseApplicationComponent
{
    // Properties
    // =========================================================================

    private $_gateways = array();
    private $_allGateways = array();
    private $_gatewaysLoaded = false;
    private $tokens;

    // Public Methods
    // =========================================================================

    public function getExplorerNav()
    {
        $nav = [];

        $gateways = craft()->videos->getGateways();

        foreach ($gateways as $gateway)
        {
            $nav[] = $gateway;
        }

        return $nav;
    }

    /**
     * Get a video from its ID
     */
    public function getVideoById($gateway, $id)
    {
        $video = $this->requestVideoById($gateway, $id);

        if($video)
        {
            return $video;
        }
    }

    /**
     * Get a video from its URL
     */
    public function getVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        $video = $this->requestVideoByUrl($videoUrl, $enableCache, $cacheExpiry);

        if($video)
        {
            return $video;
        }
    }

    /**
     * Send Request
     */
    public function sendRequest(Videos_RequestCriteriaModel $criteria)
    {
        $gateway = $this->getGateway($criteria->gateway);
        return $gateway->api($criteria->method, $criteria->query);
    }

    /**
     * Get a gateway from its handle
     */
    public function getGateway($gatewayHandle, $enabledOnly = true)
    {
        $this->loadGateways();

        if($enabledOnly)
        {
            $gateways = $this->_gateways;
        }
        else
        {
            $gateways = $this->_allGateways;
        }

        foreach($gateways as $g)
        {
            if($g->getHandle() == $gatewayHandle)
            {
                return $g;
            }
        }

        return null;
    }

    /**
     * Get gateways
     */
    public function getGateways($enabledOnly = true)
    {
        $this->loadGateways();

        if($enabledOnly)
        {
            return $this->_gateways;
        }
        else
        {
            return $this->_allGateways;
        }
    }

    // Private Methods
    // =========================================================================

    /**
     * Request a video from its ID
     */
    private function requestVideoById($gatewayHandle, $id, $enableCache = true, $cacheExpiry = 3600)
    {
        if($enableCache)
        {
            $key = 'videos.video.'.$gatewayHandle.'.'.md5($id);

            $response = craft()->fileCache->get($key);

            if($response)
            {
                return $response;
            }
        }

        $gateway = $this->getGateway($gatewayHandle);

        $response = $gateway->getVideo(array('id' => $id));

        if($response)
        {
            if($enableCache)
            {
                craft()->fileCache->set($key, $response, $cacheExpiry);
            }

            return $response;
        }
    }

    /**
     * Request a video from its URL
     */
    private function requestVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        if(craft()->config->get('enableCache', 'videos') === false)
        {
            $enableCache = false;
        }

        if($enableCache)
        {
            $key = 'videos.video.'.md5($videoUrl);

            $response = craft()->fileCache->get($key);

            if($response)
            {
                return $response;
            }
        }

        $gateways = $this->getGateways();

        foreach($gateways as $gateway)
        {
            $params['url'] = $videoUrl;

            try
            {
                $video = $gateway->getVideoByUrl($params);

                if($video)
                {
                    if($enableCache)
                    {
                        craft()->fileCache->set($key, $video, $cacheExpiry);
                    }

                    return $video;
                }

            }
            catch(\Exception $e)
            {
                // todo
                // throw new Exception($e);
            }
        }

        return false;
    }

    /**
     * Load gateways
     */
    private function loadGateways()
    {
        if(!$this->_gatewaysLoaded)
        {
            $files = IOHelper::getFiles(CRAFT_PLUGINS_PATH.'videos/gateways');

            foreach($files as $file)
            {
                require_once($file);

                $gatewayName = IOHelper::getFilename($file, false);

                $nsClass = '\\Dukt\\Videos\\Gateways\\'.$gatewayName;


                // gateway

                $gateway = new $nsClass;


                // provider

                $handle = strtolower($gateway->getOAuthProvider());


                // token

                $token = craft()->videos_oauth->getToken($handle);

                if($token)
                {
                    $gateway->setToken($token);

                    // add to loaded gateways
                    $this->_gateways[] = $gateway;
                }


                // add to all gateways
                $this->_allGateways[] = $gateway;
            }

            $this->_gatewaysLoaded = true;
        }
    }
}
