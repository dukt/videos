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
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;

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
        $accounts = [];
        $accountErrors = [];

        $gateways = Videos::$plugin->getGateways()->getGateways(false);

        foreach ($gateways as $gateway) {
            try {
                $accounts[$gateway->getHandle()] = $gateway->getAccount();
                $accountErrors[$gateway->getHandle()] = false;
            } catch (IdentityProviderException $e) {
                $error = $e->getMessage();

                $data = $e->getResponseBody();

                if (isset($data['error_description'])) {
                    $error = $data['error_description'];
                }

                $accounts[$gateway->getHandle()] = false;
                $accountErrors[$gateway->getHandle()] = $error;
            }
        }

        Craft::$app->getView()->registerAssetBundle(SettingsAsset::class);

        return $this->renderTemplate('videos/settings/_index', [
            'gateways' => $gateways,
            'accounts' => $accounts,
            'accountErrors' => $accountErrors,
        ]);
    }

    public function actionGateway($gatewayHandle)
    {
        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle, false);

        try {
            $gateway->getAccount();
        } catch (IdentityProviderException $e) {
            $error = $e->getMessage();

            $data = $e->getResponseBody();

            if (isset($data['error_description'])) {
                $error = $data['error_description'];
            }
        }

        return $this->renderTemplate('videos/settings/_gateway', [
            'gatewayHandle' => $gatewayHandle,
            'gateway' => $gateway,
            'error' => (isset($error) ? $error : null)
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

        $settings = (array)$plugin->getSettings();

        $settings['oauthProviderOptions'][$gateway->getHandle()] = [
            'clientId' => $clientId,
            'clientSecret' => $clientSecret,
        ];

        Craft::$app->getPlugins()->savePluginSettings($plugin, $settings);

        Craft::$app->getSession()->setNotice(Craft::t('videos', 'Gateway’s OAuth settings saved.'));

        return $this->redirectToPostedUrl();
    }
}
