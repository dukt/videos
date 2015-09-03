<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class VideosVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Request the API
     */
    public function api($attributes = null)
    {
        return new Videos_RequestCriteriaModel($attributes);
    }

    /**
     * Get Embed
     */
    public function getEmbed($videoUrl, $options = array())
    {
        return $this->getEmbedHtml($videoUrl, $options);
    }

    /**
     * Get gateway
     */
    public function getGateway($handle)
    {
        return craft()->videos->getGateway($handle);
    }

    /**
     * Get gateways
     */
    public function getGateways()
    {
        return craft()->videos->getGateways();
    }

    /**
     * Get token
     */
    public function getToken($handle)
    {
        return craft()->videos_oauth->getToken($handle);
    }

    /**
     * Get a video from its URL
     */
    public function getVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        try
        {
            return craft()->videos->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
        }
        catch(\Exception $e)
        {
            // todo
        }
    }

    /**
     * Alias for getVideoByUrl()
     */
    public function url($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        $this->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
    }
}
