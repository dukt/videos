<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;


class VideosPlugin extends BasePlugin
{
    // Public Methods
    // =========================================================================

    public function init()
    {
        require_once(CRAFT_PLUGINS_PATH.'videos/gateways/IGateway.php');
        require_once(CRAFT_PLUGINS_PATH.'videos/gateways/BaseGateway.php');

        parent::init();
    }

    /**
     * Get Name
     */
    public function getName()
    {
        return Craft::t('Videos');
    }

    /**
     * Get Description
     */
    public function getDescription()
    {
        return Craft::t('Connect to YouTube & Vimeo and publish social videos on your website.');
    }

	/**
	 * Get Version
	 */
	public function getVersion()
	{
		return '1.2.4';
	}

    /**
     * Get Schema Version
     *
     * @return string
     */
    public function getSchemaVersion()
    {
        return '1.0.0';
    }

    /**
     * Get Required Plugins
     */
    public function getRequiredPlugins()
    {
        return array(
            array(
                'name' => "OAuth",
                'handle' => 'oauth',
                'url' => 'https://dukt.net/craft/oauth',
                'version' => '1.0.0'
            )
        );
    }

    /**
     * Get Developer
     */
    public function getDeveloper()
    {
        return 'Dukt';
    }

    /**
     * Get Developer URL
     */
    public function getDeveloperUrl()
    {
        return 'https://dukt.net/';
    }

    /**
     * Get OAuth Providers
     */
    public function getVideosGateways()
    {
        require_once(CRAFT_PLUGINS_PATH.'videos/gateways/Vimeo.php');
        require_once(CRAFT_PLUGINS_PATH.'videos/gateways/YouTube.php');

        return [
            'Dukt\Videos\Gateways\Vimeo',
            'Dukt\Videos\Gateways\YouTube',
        ];
    }

    /**
     * Get Documentation URL
     */
    public function getDocumentationUrl()
    {
        return 'https://dukt.net/craft/videos/docs/';
    }

	/**
	 * Get Release Feed URL
	 */
	public function getReleaseFeedUrl()
	{
		return 'https://dukt.net/craft/videos/updates.json';
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
            'videos/install' => array('action' => "videos/install/index"),
            'videos/settings' => array('action' => "videos/settings/index")
        );
    }

    /**
     * Get Settings URL
     */
    public function getSettingsUrl()
    {
        return 'videos/settings';
    }

    /**
     * Adds support for video thumbnail resource paths.
     *
     * @param string $path
     * @return string|null
     */
    public function getResourcePath($path)
    {
        $segs = explode('/', $path);

        if($segs[0] == 'videosthumbnails')
        {
            $gateway = $segs[1];
            $videoId = $segs[2];
            $size = $segs[3];

            if (!is_numeric($size) && $size != "original")
            {
                return false;
            }

            $video = craft()->videos->getVideoById($gateway, $videoId);
            $url = $video->thumbnailSource;

            $basePath = craft()->path->getRuntimePath().'videosthumbnails/';
            IOHelper::ensureFolderExists($basePath);

            $filename = pathinfo($url, PATHINFO_BASENAME);

	        if(strpos($filename, '?') !== false)
	        {
	        	$filename = substr($filename, 0, strpos($filename, '?'));
	        }

            $thumbnailsFolderPath = $basePath.$gateway.'/'.$videoId.'/';

            $originalFolderPath = $thumbnailsFolderPath.'original/';
            $originalThumbnailPath = $originalFolderPath.$filename;

            $sizedThumbnailFolder = $thumbnailsFolderPath.$size.'/';
            $sizedThumbnailPath = $sizedThumbnailFolder.$filename;

            // If the photo doesn't exist at this size, create it.
            if (!IOHelper::fileExists($sizedThumbnailPath))
            {
                if (!IOHelper::fileExists($originalThumbnailPath))
                {
                    IOHelper::ensureFolderExists($originalFolderPath);

                    $response = \Guzzle\Http\StaticClient::get($url, array(
                        'save_to' => $originalThumbnailPath
                    ));

                    if (!$response->isSuccessful())
                    {
                        return;
                    }
                }

                IOHelper::ensureFolderExists($sizedThumbnailFolder);

                if (IOHelper::isWritable($sizedThumbnailFolder))
                {
                    craft()->images->loadImage($originalThumbnailPath, $size, $size)
                        ->resize($size)
                        ->saveAs($sizedThumbnailPath);
                }
                else
                {
                    VideosPlugin::log('Tried to write to target folder and could not: '.$sizedIconFolder, LogLevel::Error);
                }
            }

            return $sizedThumbnailPath;
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
        if(isset(craft()->oauth))
        {
            craft()->oauth->deleteTokensByPlugin('videos');
        }
    }

    // Protected Methods
    // =========================================================================

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
}
