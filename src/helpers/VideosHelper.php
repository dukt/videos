<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2019, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\helpers;

use Craft;
use craft\helpers\FileHelper;
use dukt\videos\Plugin;

/**
 * Videos helper
 */
class VideosHelper
{
    // Public Methods
    // =========================================================================

    /**
     * Formats seconds to hh:mm:ss.
     *
     * @param $seconds
     *
     * @return string
     */
    public static function getDuration($seconds): string
    {
        $hours = (int)((int)$seconds / 3600);
        $minutes = (($seconds / 60) % 60);
        $seconds %= 60;

        $hms = '';

        if ($hours > 0) {
            $hms .= str_pad($hours, 2, '0', STR_PAD_LEFT).':';
        }

        $hms .= str_pad($minutes, 2, '0', STR_PAD_LEFT).':';

        $hms .= str_pad($seconds, 2, '0', STR_PAD_LEFT);

        return $hms;
    }

    /**
     * Formats seconds to ISO 8601 duration
     *
     * @param $seconds
     *
     * @return string
     */
    public function getDuration8601($seconds): string
    {
        $hours = (int)((int)$seconds / 3600);
        $minutes = (($seconds / 60) % 60);
        $seconds %= 60;

        $iso8601 = 'PT';

        if ($hours > 0) {
            $iso8601 .= "{$hours}H";
        }

        if ($minutes > 0) {
            $iso8601 .= "{$minutes}M";
        }

        $iso8601 .= "{$seconds}S";

        return $iso8601;
    }

    /**
     * Returns a video thumbnail’s published URL.
     *
     * @param $gatewayHandle
     * @param $videoId
     * @param $size
     *
     * @return null|string
     * @throws \GuzzleHttp\Exception\GuzzleException
     * @throws \craft\errors\ImageException
     * @throws \yii\base\Exception
     * @throws \yii\base\InvalidConfigException
     */
    public static function getVideoThumbnail($gatewayHandle, $videoId, $size)
    {
        $baseDir = Craft::$app->getPath()->getRuntimePath().DIRECTORY_SEPARATOR.'videos'.DIRECTORY_SEPARATOR.'thumbnails'.DIRECTORY_SEPARATOR.$gatewayHandle.DIRECTORY_SEPARATOR.$videoId;
        $originalDir = $baseDir.DIRECTORY_SEPARATOR.'original';
        $dir = $baseDir.DIRECTORY_SEPARATOR.$size;

        $file = self::getThumbnailFile($dir);

        if (!$file) {
            // Retrieve original image
            $originalPath = null;

            if (is_dir($originalDir)) {
                $originalFiles = FileHelper::findFiles($originalDir);

                if (\count($originalFiles) > 0) {
                    $originalPath = $originalFiles[0];
                }
            }

            if (!$originalPath) {
                $video = Plugin::$plugin->getVideos()->getVideoById($gatewayHandle, $videoId);
                $url = $video->thumbnailSource;

                $name = pathinfo($url, PATHINFO_BASENAME);
                $originalPath = $originalDir.DIRECTORY_SEPARATOR.$name;

                FileHelper::createDirectory($originalDir);
                $client = new \GuzzleHttp\Client();
                $response = $client->request('GET', $url, [
                    'save_to' => $originalPath,
                ]);

                if ($response->getStatusCode() !== 200) {
                    return null;
                }
            } else {
                $name = pathinfo($originalPath, PATHINFO_BASENAME);
            }

            // Generate the thumb
            $path = $dir.DIRECTORY_SEPARATOR.$name;
            FileHelper::createDirectory($dir);
            Craft::$app->getImages()->loadImage($originalPath, false, $size)
                ->scaleToFit($size, $size)
                ->saveAs(parse_url($path, PHP_URL_PATH));
        } else {
            $name = pathinfo($file, PATHINFO_BASENAME);
        }

        return Craft::$app->getAssetManager()->getPublishedUrl($dir, true)."/{$name}";
    }

    // Private Methods
    // =========================================================================

    /**
     * Get thumbnail file.
     *
     * @param $dir
     *
     * @return null|string
     */
    private static function getThumbnailFile($dir)
    {
        if (!is_dir($dir)) {
            return null;
        }

        $files = FileHelper::findFiles($dir);

        if (\count($files) === 0) {
            return null;
        }

        return $files[0];
    }
}
