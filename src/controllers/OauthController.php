<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2018, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\controllers;

use Craft;
use craft\web\Controller;
use dukt\videos\Plugin as Videos;
use yii\web\Response;

/**
 * OAuth controller
 */
class OauthController extends Controller
{
    // Public Methods
    // =========================================================================

    /**
     * Connect.
     *
     * @return null
     * @throws \yii\base\InvalidConfigException
     */
    public function actionConnect()
    {
        $gatewayHandle = Craft::$app->getRequest()->getParam('gateway');

        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle, false);

        Craft::$app->getSession()->set('videos.oauthGateway', $gatewayHandle);

        return $gateway->oauthConnect();
    }

    /**
     * Callback.
     *
     * @return null
     * @throws \yii\base\InvalidConfigException
     */
    public function actionCallback()
    {
        $gatewayHandle = Craft::$app->getSession()->get('videos.oauthGateway');

        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle, false);

        return $gateway->oauthCallback();
    }

    /**
     * Disconnect.
     *
     * @return Response
     * @throws \yii\base\InvalidConfigException
     */
    public function actionDisconnect()
    {
        $gatewayHandle = Craft::$app->getRequest()->getParam('gateway');
        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle, false);

        Videos::$plugin->getOauth()->deleteToken($gateway->getHandle());

        // set notice
        Craft::$app->getSession()->setNotice(Craft::t('videos', "Disconnected."));


        // redirect

        $redirect = Craft::$app->getRequest()->referrer;

        return $this->redirect($redirect);
    }
}
