<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class VideosService extends BaseApplicationComponent
{
    private $explorerNav;

    // Public Methods
    // =========================================================================

    /**
     * Get Embed
     */
    public function getEmbed($videoUrl, $embedOptions = array())
    {
        $video = $this->getVideoByUrl($videoUrl);

        if($video)
        {
            return $video->getEmbed($embedOptions);
        }
    }

    /**
     * Explorer Nav
     */
    public function getExplorerNav()
    {
        if(!$this->explorerNav)
        {
            $gatewaySections = [];

            $gateways = craft()->videos_gateways->getGateways();

            foreach ($gateways as $gateway)
            {
                $gatewaySections[] = $gateway->getSections();
            }

            $this->explorerNav = [
                'gateways' => $gateways,
                'gatewaySections' => $gatewaySections
            ];
        }

        return $this->explorerNav;
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

            $response = craft()->videos_cache->get([$key]);

            if($response)
            {
                return $response;
            }
        }

        $gateway = craft()->videos_gateways->getGateway($gatewayHandle);

        $response = $gateway->getVideo(array('id' => $id));

        if($response)
        {
            if($enableCache)
            {
                craft()->videos_cache->set([$key], $response, $cacheExpiry);
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

            $response = craft()->videos_cache->get([$key]);

            if($response)
            {
                return $response;
            }
        }

        $gateways = craft()->videos_gateways->getGateways();

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
                        craft()->videos_cache->set([$key], $video, $cacheExpiry);
                    }

                    return $video;
                }

            }
            catch(\Exception $e)
            {
                VideosPlugin::log('Couldn’t get video: '.$e->getMessage(), LogLevel::Error);
            }
        }

        return false;
    }
}
