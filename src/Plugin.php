<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos;

use Craft;
use yii\base\Event;
use craft\web\UrlManager;
use craft\events\RegisterUrlRulesEvent;
use dukt\videos\models\Settings;
use craft\services\Fields;
use dukt\videos\fields\Video as VideoField;
use craft\events\RegisterComponentTypesEvent;

class Plugin extends \craft\base\Plugin
{
    // Properties
    // =========================================================================

    public $hasSettings = true;

    // Public Methods
    // =========================================================================

    public function init()
    {
        parent::init();

        $this->setComponents([
            'videos' => \dukt\videos\services\Videos::class,
            'videos_cache' => \dukt\videos\services\Cache::class,
            'videos_gateways' => \dukt\videos\services\Gateways::class,
            'videos_oauth' => \dukt\videos\services\Oauth::class,
        ]);

        Event::on(UrlManager::class, UrlManager::EVENT_REGISTER_CP_URL_RULES, [$this, 'registerCpUrlRules']);

        Event::on(Fields::class, Fields::EVENT_REGISTER_FIELD_TYPES, function(RegisterComponentTypesEvent $event) {
            $event->types[] = VideoField::class;
        });
    }

    public function registerCpUrlRules(RegisterUrlRulesEvent $event)
    {
        $rules = [
            'videos/settings' => 'videos/settings/index',
            'videos/install' => 'videos/install/index',
        ];

        $event->rules = array_merge($event->rules, $rules);
    }

    /**
     * Get Name
     */
    public function getName()
    {
        return Craft::t('app', 'Videos');
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
        return [
            'dukt\videos\gateways\Vimeo',
            'dukt\videos\gateways\YouTube',
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

            $video = \dukt\videos\Plugin::getInstance()->videos->getVideoById($gateway, $videoId);
            $url = $video->thumbnailSource;

            $basePath = Craft::$app->path->getRuntimePath().'videosthumbnails/';
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
                    Craft::$app->images->loadImage($originalThumbnailPath, $size, $size)
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
            Craft::$app->path->getRuntimePath().'videos/' => Craft::t('app', 'Videos resources'),
        );
    }

    /**
     * On Before Uninstall
     */
    public function onBeforeUninstall()
    {
        if(isset(\dukt\oauth\Plugin::getInstance()->oauth))
        {
            \dukt\oauth\Plugin::getInstance()->oauth->deleteTokensByPlugin('videos');
        }
    }

    /**
     * Creates and returns the model used to store the plugin’s settings.
     *
     * @return \craft\base\Model|null
     */
    protected function createSettingsModel()
    {
        return new Settings();
    }

    /**
     * Returns the rendered settings HTML, which will be inserted into the content
     * block on the settings page.
     *
     * @return string The rendered settings HTML
     */
    public function getSettingsResponse()
    {
        $url = \craft\helpers\UrlHelper::cpUrl('videos/settings');

        \Craft::$app->controller->redirect($url);

        return '';
    }
}
