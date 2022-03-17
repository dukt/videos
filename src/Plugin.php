<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2021, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
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

/**
 * Videos plugin class.
 *
 * @author  Dukt <support@dukt.net>
 * @since   1.0
 */
class Plugin extends \craft\base\Plugin
{
    // Traits
    // =========================================================================

    use PluginTrait;

    // Properties
    // =========================================================================

    /**
     * @inheritDoc
     */
    public $schemaVersion = '1.0.3';

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

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;

        $this->_setPluginComponents();
        $this->_registerCpRoutes();
        $this->_registerFieldTypes();
        $this->_registerCacheOptions();
        $this->_registerVariable();
    }

    /**
     * @inheritdoc
     */
    public function getSettingsResponse()
    {
        $url = UrlHelper::cpUrl('videos/settings');

        return Craft::$app->controller->redirect($url);
    }

    /**
     * Get OAuth provider options.
     *
     * @param string $gatewayHandle
     * @param bool $parse
     * @return null|array
     * @throws \yii\base\InvalidConfigException
     */
    public function getOauthProviderOptions(string $gatewayHandle, bool $parse = true)
    {
        $options = null;

        $configSettings = Craft::$app->config->getConfigFromFile($this->id);

        if (isset($configSettings['oauthProviderOptions'][$gatewayHandle])) {
            $options = $configSettings['oauthProviderOptions'][$gatewayHandle];
        }

        $storedSettings = Craft::$app->plugins->getStoredPluginInfo($this->id)['settings'];

        if ($options === null && isset($storedSettings['oauthProviderOptions'][$gatewayHandle])) {
            $options = $storedSettings['oauthProviderOptions'][$gatewayHandle];
        }

        if (!isset($options['redirectUri'])) {
            $gateway = $this->getGateways()->getGateway($gatewayHandle, false);
            $options['redirectUri'] = $gateway->getRedirectUri();
        }

        return $parse ? array_map('Craft::parseEnv', $options) : $options;
    }

    // Protected Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    protected function createSettingsModel()
    {
        return new Settings();
    }

    // Protected Methods
    // =========================================================================

    /**
     * Set plugin components.
     */
    private function _setPluginComponents()
    {
        $this->setComponents([
            'videos' => \dukt\videos\services\Videos::class,
            'cache' => \dukt\videos\services\Cache::class,
            'gateways' => \dukt\videos\services\Gateways::class,
            'oauth' => \dukt\videos\services\Oauth::class,
            'tokens' => \dukt\videos\services\Tokens::class,
        ]);
    }

    /**
     * Register CP routes.
     */
    private function _registerCpRoutes()
    {
        Event::on(UrlManager::class, UrlManager::EVENT_REGISTER_CP_URL_RULES, function(RegisterUrlRulesEvent $event) {
            $rules = [
                'videos/settings' => 'videos/settings/index',
                'videos/settings/<gatewayHandle:{handle}>' => 'videos/settings/gateway',
                'videos/settings/<gatewayHandle:{handle}>/oauth' => 'videos/settings/gateway-oauth',
            ];

            $event->rules = array_merge($event->rules, $rules);
        });
    }

    /**
     * Register field types.
     */
    private function _registerFieldTypes()
    {
        Event::on(Fields::class, Fields::EVENT_REGISTER_FIELD_TYPES, function(RegisterComponentTypesEvent $event) {
            $event->types[] = VideoField::class;
        });
    }

    /**
     * Register cache options.
     */
    private function _registerCacheOptions()
    {
        Event::on(ClearCaches::class, ClearCaches::EVENT_REGISTER_CACHE_OPTIONS, function(RegisterCacheOptionsEvent $event) {
            $event->options[] = [
                'key' => 'videos-caches',
                'label' => Craft::t('videos', 'Videos caches'),
                'action' => Craft::$app->path->getRuntimePath() . '/videos'
            ];
        });
    }

    /**
     * Register template variable.
     */
    private function _registerVariable()
    {
        Event::on(CraftVariable::class, CraftVariable::EVENT_INIT, function(Event $event) {
            /** @var CraftVariable $variable */
            $variable = $event->sender;
            $variable->set('videos', VideosVariable::class);
        });
    }

}
