<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos;

use Craft;
use craft\events\RegisterCacheOptionsEvent;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterUrlRulesEvent;
use craft\helpers\UrlHelper;
use craft\services\Fields;
use craft\utilities\ClearCaches;
use craft\web\twig\variables\CraftVariable;
use craft\web\UrlManager;
use dukt\videos\base\PluginTrait;
use dukt\videos\fields\Video as VideoField;
use dukt\videos\models\Settings;
use dukt\videos\web\twig\variables\VideosVariable;
use yii\base\Event;

class Plugin extends \craft\base\Plugin
{
    // Traits
    // =========================================================================

    use PluginTrait;

    // Properties
    // =========================================================================

    /**
     * @var bool
     */
    public $hasCpSettings = true;

    /**
     * @var \dukt\videos\Plugin The plugin instance.
     */
    public static $plugin;

    // Public Methods
    // =========================================================================

    public function init()
    {
        parent::init();
        self::$plugin = $this;

        $this->setComponents([
            'videos' => \dukt\videos\services\Videos::class,
            'cache' => \dukt\videos\services\Cache::class,
            'gateways' => \dukt\videos\services\Gateways::class,
            'oauth' => \dukt\videos\services\Oauth::class,
        ]);

        Event::on(UrlManager::class, UrlManager::EVENT_REGISTER_CP_URL_RULES, [$this, 'registerCpUrlRules']);

        Event::on(Fields::class, Fields::EVENT_REGISTER_FIELD_TYPES, function(RegisterComponentTypesEvent $event) {
            $event->types[] = VideoField::class;
        });

        Event::on(ClearCaches::class, ClearCaches::EVENT_REGISTER_CACHE_OPTIONS, function(RegisterCacheOptionsEvent $event) {
            $event->options[] = [
                'key' => 'videos-caches',
                'label' => Craft::t('videos', 'Videos caches'),
                'action' => Craft::$app->path->getRuntimePath().'/videos'
            ];
        });

        Event::on(CraftVariable::class, CraftVariable::EVENT_INIT, function(Event $event) {
            /** @var CraftVariable $variable */
            $variable = $event->sender;
            $variable->set('videos', VideosVariable::class);
        });
    }

    public function registerCpUrlRules(RegisterUrlRulesEvent $event)
    {
        $rules = [
            'videos/settings' => 'videos/settings/index',
            'videos/settings/<gatewayHandle:{handle}>' => 'videos/settings/gateway',
            'videos/settings/<gatewayHandle:{handle}>/oauth' => 'videos/settings/gateway-oauth',
        ];

        $event->rules = array_merge($event->rules, $rules);
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
        $url = UrlHelper::cpUrl('videos/settings');

        Craft::$app->controller->redirect($url);

        return '';
    }
}
