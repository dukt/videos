<?php

/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2014, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 * @link      https://dukt.net/craft/videos
 */

namespace Craft;

class VideosPlugin extends BasePlugin
{
    /**
     * Get Name
     */
    function getName()
    {
        return Craft::t('Videos');
    }

    /**
     * Get Version
     */
    function getVersion()
    {
        return '1.0.18';
    }

    /**
     * Get Developer
     */
    function getDeveloper()
    {
        return 'Dukt';
    }

    /**
     * Get Developer URL
     */
    function getDeveloperUrl()
    {
        return 'https://dukt.net/';
    }

    /**
     * Has CP Section
     */
    public function hasCpSection()
    {
        return false;
    }

    /**
     * Hook Register CP Routes
     */
    public function registerCpRoutes()
    {
        return array(
            'videos\/settings\/(?P<providerClass>.*)' => 'videos/settings/_configure',
        );
    }

    /**
     * Settings
     */
    protected function defineSettings()
    {
        return array(
            'youtubeParameters' => array(AttributeType::Mixed),
            'tokens' => array(AttributeType::Mixed),
        );
    }

    public function getSettingsHtml()
    {
        if(craft()->request->getPath() == 'settings/plugins')
        {
            return true;
        }

        return craft()->templates->render('videos/settings', array(
            'settings' => $this->getSettings()
        ));
    }

    /**
     * Adds support for video thumbnail resource paths.
     *
     * @param string $path
     * @return string|null
     */
    public function getResourcePath($path)
    {
        // Are they requesting a video thumbnail?
        if (strncmp($path, 'videosthumbnails/', 17) === 0)
        {

            $parts = array_merge(array_filter(explode('/', $path)));

            if (count($parts) != 4 && count($parts) != 5)
            {
                return;
            }

            $gateway = $parts[1];
            $videoId = $parts[2];
            $width = $parts[3];
            $height = null;

            $size = $width;

            if(isset($parts[4]))
            {
                $height = $parts[4];
                $size .= "x".$height;
            }

            $baseThumbnailsPath = craft()->path->getRuntimePath().'videos/thumbnails/'.$gateway.'/'.$videoId.'/';

            $sizedFolderPath = $baseThumbnailsPath.$size.'/';

            $originalFolderPath = $baseThumbnailsPath.'original/';

            // Have we already downloaded this user's image at this size?
            $contents = IOHelper::getFolderContents($sizedFolderPath, false);

            if ($contents)
            {
                return $contents[0];
            }
            else
            {
                // get video from its id,
                // but we don't want a Videos_VideoModel object
                // otherwise it's gonna loops forever with thumbnail generation

                $video = craft()->videos->_getVideoObjectById($gateway, $videoId);
                $video = (array) $video;


                IOHelper::ensureFolderExists($sizedFolderPath);
                IOHelper::ensureFolderExists($originalFolderPath);

                $url = $video['thumbnailSourceLarge'];

                $fileName = pathinfo($url, PATHINFO_BASENAME);
                $originalPath = $originalFolderPath.$fileName;

                $response = \Guzzle\Http\StaticClient::get($url, array(
                    'save_to' => $originalPath
                ));

                if (!$response->isSuccessful())
                {
                    return;
                }


                // Resize it to the requested size
                $fileName = pathinfo($originalPath, PATHINFO_BASENAME);
                $sizedPath = $sizedFolderPath.$fileName;

                craft()->images->loadImage($originalPath)
                    ->scaleAndCrop($width, $height)
                    ->saveAs($sizedPath);

                return $sizedPath;
            }
        }
    }

    /**
     * Adds craft/storage/runtime/videos/ to the list of things the Clear Caches tool can delete.
     *
     * @return array
     */
    public function registerCachePaths()
    {
        return array(
            craft()->path->getRuntimePath().'videos/' => Craft::t('Videos resources'),
        );
    }

    /**
     * On Before Uninstall
     */
    public function onBeforeUninstall()
    {
        craft()->oauth->deleteTokensByPlugin('videos');
    }
}
