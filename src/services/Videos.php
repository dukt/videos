<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\services;

use yii\base\Component;
use dukt\videos\base\VideosTrait;

// require_once(CRAFT_PLUGINS_PATH.'videos/base/VideosTrait.php');

class Videos extends Component
{
	// Traits
	// =========================================================================

	use VideosTrait;

    // Public Methods
    // =========================================================================

	/**
	 * Returns the HTML of the embed from a video URL
	 *
	 * @param       $videoUrl
	 * @param array $embedOptions
	 *
	 * @return mixed
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
	 * Get video by ID
	 *
	 * @param $gateway
	 * @param $id
	 *
	 * @return mixed
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
	 * Get video by URL
	 *
	 * @param      $videoUrl
	 * @param bool $enableCache
	 * @param int  $cacheExpiry
	 *
	 * @return bool
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
	 * Request video by ID
	 *
	 * @param      $gatewayHandle
	 * @param      $id
	 * @param bool $enableCache
	 * @param int  $cacheExpiry
	 *
	 * @return mixed
	 */
	private function requestVideoById($gatewayHandle, $id, $enableCache = true, $cacheExpiry = 3600)
    {
        if($enableCache)
        {
            $key = 'videos.video.'.$gatewayHandle.'.'.md5($id);

            $response = \dukt\videos\Plugin::getInstance()->videos_cache->get([$key]);

            if($response)
            {
                return $response;
            }
        }

        $gateway = \dukt\videos\Plugin::getInstance()->videos_gateways->getGateway($gatewayHandle);

        $response = $gateway->getVideoById($id);

        if($response)
        {
            if($enableCache)
            {
                \dukt\videos\Plugin::getInstance()->videos_cache->set([$key], $response, $cacheExpiry);
            }

            return $response;
        }
    }

	/**
	 * Request video by URL
	 *
	 * @param      $videoUrl
	 * @param bool $enableCache
	 * @param int  $cacheExpiry
	 *
	 * @return bool
	 */
	private function requestVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        if(Craft::$app->config->get('enableCache', 'videos') === false)
        {
            $enableCache = false;
        }

        if($enableCache)
        {
            $key = 'videos.video.'.md5($videoUrl);

            $response = \dukt\videos\Plugin::getInstance()->videos_cache->get([$key]);

            if($response)
            {
                return $response;
            }
        }

        $gateways = \dukt\videos\Plugin::getInstance()->videos_gateways->getGateways();

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
                        \dukt\videos\Plugin::getInstance()->videos_cache->set([$key], $video, $cacheExpiry);
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
