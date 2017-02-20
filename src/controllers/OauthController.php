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

/**
 * OAuth controller
 */
class OauthController extends Controller
{
    // Public Methods
    // =========================================================================

    /**
     * Connect
     *
     * @return null
     */
    public function actionConnect()
    {
        $gatewayHandle = Craft::$app->getRequest()->getParam('gateway');

        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle, false);

        Craft::$app->getSession()->set('videos.oauthGateway', $gatewayHandle);

        return $gateway->oauthConnect();
    }

    /**
     * Callback
     *
     * @return null
     */
    public function actionCallback()
    {
        $gatewayHandle = Craft::$app->getSession()->get('videos.oauthGateway');

        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle, false);

        return $gateway->oauthCallback();
    }

    /**
     * Disconnect
     *
     * @return null
     */
    public function actionDisconnect()
    {
        $gatewayHandle = Craft::$app->getRequest()->getParam('gateway');
        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle, false);

        $oauthProviderHandle = $gateway->getOauthProviderHandle();

        Videos::$plugin->getOauth()->deleteToken($gateway->getHandle());

        // set notice
        Craft::$app->getSession()->setNotice(Craft::t('app', "Disconnected."));


        // redirect

        $redirect = Craft::$app->getRequest()->referrer;

        return $this->redirect($redirect);
    }
}
