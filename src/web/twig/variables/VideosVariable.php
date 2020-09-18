<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2020, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\web\twig\variables;

use Craft;
use dukt\videos\Plugin as Videos;

class VideosVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Get Embed.
     *
     * @param       $videoUrl
     * @param array $embedOptions
     *
     * @return mixed
     * @throws \yii\base\InvalidConfigException
     */
    public function getEmbed($videoUrl, array $embedOptions = [])
    {
        return Videos::$plugin->getVideos()->getEmbed($videoUrl, $embedOptions);
    }

    /**
     * Get a video from its URL.
     *
     * @param      $videoUrl
     * @param bool $enableCache
     * @param int  $cacheExpiry
     *
     * @return bool|null
     */
    public function getVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        try {
            return Videos::$plugin->getVideos()->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
        } catch (\Exception $e) {
            Craft::info('Couldn’t get video from its url ('.$videoUrl.'): '.$e->getMessage(), __METHOD__);
        }

        return null;
    }

    /**
     * Alias for the `getVideoByUrl()` method.
     *
     * @param      $videoUrl
     * @param bool $enableCache
     * @param int  $cacheExpiry
     */
    public function url($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        $this->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
    }
}
