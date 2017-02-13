<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

use dukt\videos\Plugin as Videos;

class VideosVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Get Embed
     */
    public function getEmbed($videoUrl, $embedOptions = array())
    {
        return Videos::$plugin->videos->getEmbed($videoUrl, $embedOptions);
    }

    /**
     * Get a video from its URL
     */
    public function getVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        try
        {
            return Videos::$plugin->videos->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
        }
        catch(\Exception $e)
        {
            // VideosPlugin::log('Couldn’t get video from its url ('.$videoUrl.'): '.$e->getMessage(), LogLevel::Error);
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
