<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

require_once(CRAFT_PLUGINS_PATH.'videos/base/BaseGateway.php');

class VideosPlugin extends BasePlugin
{
    // Public Methods
    // =========================================================================

    /**
     * Get Name
     */
    public function getName()
    {
        return Craft::t('Videos');
    }

    /**
     * Get Version
     */
    public function getVersion()
    {
        return '1.1.39';
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
     * Get Documentation URL
     */
    public function getDocumentationUrl()
    {
        return 'https://dukt.net/craft/videos/docs/';
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
            'videos/settings' => array('action' => "videos/settings")
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
                    Craft::log('Tried to write to target folder and could not: '.$sizedIconFolder, LogLevel::Error);
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

    /**
     * Get Plugin Dependencies
     */
    public function getPluginDependencies($missingOnly = true)
    {
        $dependencies = array();

        $plugins = $this->getRequiredPlugins();

        foreach($plugins as $key => $plugin)
        {
            $dependency = $this->getPluginDependency($plugin);

            if($missingOnly)
            {
                if($dependency['isMissing'])
                {
                    $dependencies[] = $dependency;
                }
            }
            else
            {
                $dependencies[] = $dependency;
            }
        }

        return $dependencies;
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

    // Private Methods
    // =========================================================================

    /**
     * Get Plugin Dependency
     */
    private function getPluginDependency($dependency)
    {
        $isMissing = true;
        $isInstalled = true;

        $plugin = craft()->plugins->getPlugin($dependency['handle'], false);

        if($plugin)
        {
            $currentVersion = $plugin->version;


            // requires update ?

            if(version_compare($currentVersion, $dependency['version']) >= 0)
            {
                // no (requirements OK)

                if($plugin->isInstalled && $plugin->isEnabled)
                {
                    $isMissing = false;
                }
            }
            else
            {
                // yes (requirement not OK)
            }
        }
        else
        {
            // not installed
        }

        $dependency['isMissing'] = $isMissing;
        $dependency['plugin'] = $plugin;
        $dependency['pluginUrl'] = 'https://dukt.net/craft/'.$dependency['handle'];

        return $dependency;
    }
}
