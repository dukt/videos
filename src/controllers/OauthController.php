<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\controllers;

use Craft;
use craft\web\Controller;

/**
 * Videos OAuth controller
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
        // referer

        $referer = Craft::$app->getSession()->get('videos.referer');

        if(!$referer)
        {
            $referer = Craft::$app->request->referrer;

            Craft::$app->getSession()->set('videos.referer', $referer);

            // VideosPlugin::log('Videos OAuth Connect Step 1: '."\r\n".print_r(['referer' => $referer], true), LogLevel::Info);
        }


        // connect

        $gatewayHandle = Craft::$app->request->getParam('gateway');

        $gateway = \dukt\videos\Plugin::getInstance()->videos_gateways->getGateway($gatewayHandle, false);
        
        if($response = \dukt\oauth\Plugin::getInstance()->oauth->connect(array(
            'plugin' => 'videos',
            'provider' => $gateway->getOauthProviderHandle(),
            'scope' => $gateway->getOauthScope(),
            'authorizationOptions' => $gateway->getOauthAuthorizationOptions(),
        )))
        {
            if($response && is_object($response) && !$response->data)
            {
                return $response;
            }

            if($response['success'])
            {
                // token
                $token = $response['token'];

                // save token
                \dukt\videos\Plugin::getInstance()->videos_oauth->saveToken($gateway->getOauthProviderHandle(), $token);

                // VideosPlugin::log('Videos OAuth Connect Step 2: '."\r\n".print_r(['token' => $token], true), LogLevel::Info);

                // session notice
                Craft::$app->getSession()->setNotice(Craft::t('app', "Connected."));
            }
            else
            {
                // session notice
                Craft::$app->getSession()->setError(Craft::t('app', $response['errorMsg']));
            }
        }
        else
        {
            // session error
            Craft::$app->getSession()->setError(Craft::t('app', "Couldn’t connect"));
        }


        // redirect

        Craft::$app->getSession()->remove('videos.referer');

        return $this->redirect($referer);
    }

    /**
     * Disconnect
     *
     * @return null
     */
    public function actionDisconnect()
    {
        $gatewayHandle = Craft::$app->request->getParam('gateway');
        $gateway = \dukt\videos\Plugin::getInstance()->videos_gateways->getGateway($gatewayHandle, false);

        $oauthProviderHandle = $gateway->getOauthProviderHandle();

        \dukt\videos\Plugin::getInstance()->videos_oauth->deleteToken($oauthProviderHandle);

        // set notice
        Craft::$app->getSession()->setNotice(Craft::t('app', "Disconnected."));


        // redirect

        $redirect = Craft::$app->request->referrer;

        return $this->redirect($redirect);
    }
}
