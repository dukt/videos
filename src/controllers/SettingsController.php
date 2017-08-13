<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\controllers;

use Craft;
use craft\web\Controller;
use dukt\videos\Plugin as Videos;
use dukt\videos\web\assets\settings\SettingsAsset;

/**
 * Settings controller
 */
class SettingsController extends Controller
{
    /**
     * Settings Index
     *
     * @return null
     */
    public function actionIndex()
    {
        $gateways = Videos::$plugin->getGateways()->getGateways(false);

        $accounts = [];

        foreach($gateways as $gateway) {
            $accounts[$gateway->getHandle()] = $gateway->getAccount();
        }

        Craft::$app->getView()->registerAssetBundle(SettingsAsset::class);

        return $this->renderTemplate('videos/settings/_index', [
            'gateways' => $gateways,
            'accounts' => $accounts,
        ]);
    }

    public function actionGateway($gatewayHandle)
    {
        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle, false);

        return $this->renderTemplate('videos/settings/_gateway', [
            'gatewayHandle' => $gatewayHandle,
            'gateway' => $gateway,
        ]);
    }

    public function actionGatewayOauth($gatewayHandle)
    {
        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle, false);

        return $this->renderTemplate('videos/settings/_oauth', [
            'gatewayHandle' => $gatewayHandle,
            'gateway' => $gateway,
        ]);
    }

    public function actionSaveGateway()
    {
        $gatewayHandle = Craft::$app->getRequest()->getParam('gatewayHandle');
        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle, false);

        $clientId = Craft::$app->getRequest()->getParam('clientId');
        $clientSecret = Craft::$app->getRequest()->getParam('clientSecret');

        $plugin = Craft::$app->getPlugins()->getPlugin('videos');

        $settings = (array) $plugin->getSettings();

        $settings['oauthProviderOptions'][$gateway->getOauthProviderHandle()] = [
            'clientId' => $clientId,
            'clientSecret' => $clientSecret,
        ];

        Craft::$app->getPlugins()->savePluginSettings($plugin, $settings);

        Craft::$app->getSession()->setNotice(Craft::t('videos', 'Gateway’s OAuth settings saved.'));

        return $this->redirectToPostedUrl();
    }
}
