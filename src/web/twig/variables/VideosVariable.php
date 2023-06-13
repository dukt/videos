<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\web\twig\variables;

use Craft;
use dukt\videos\models\Video;
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
     * @return Video|null
     */
    public function getVideoByUrl($videoUrl, bool $enableCache = true, int $cacheExpiry = null): ?\dukt\videos\models\Video
    {
        try {
            return Videos::$plugin->getVideos()->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
        } catch (\Exception $exception) {
            Craft::info('Couldn’t get video from its url (' . $videoUrl . '): ' . $exception->getMessage(), __METHOD__);
        }

        return null;
    }

    /**
     * Alias for the `getVideoByUrl()` method.
     *
     * @param      $videoUrl
     * @param bool $enableCache
     * @param int  $cacheExpiry
     * @return Video|null
     */
    public function url($videoUrl, bool $enableCache = true, int $cacheExpiry = null): ?\dukt\videos\models\Video
    {
        return $this->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
    }
}
