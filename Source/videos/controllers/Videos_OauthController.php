<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

/**
 * Videos OAuth controller
 */
class Videos_OauthController extends BaseController
{
    // Public Methods
    // =========================================================================

    /**
     * Connect
     */
    public function actionConnect()
    {
        // referer

        $referer = craft()->httpSession->get('videos.referer');

        if(!$referer)
        {
            $referer = craft()->request->getUrlReferrer();

            craft()->httpSession->add('videos.referer', $referer);

            VideosPlugin::log('Videos OAuth Connect Step 1: '."\r\n".print_r(['referer' => $referer], true), LogLevel::Info);
        }


        // connect

        $gatewayHandle = craft()->request->getParam('gateway');

        $gateway = craft()->videos_gateways->getGateway($gatewayHandle, false);

        if($response = craft()->oauth->connect(array(
            'plugin' => 'videos',
            'provider' => $gateway->getOauthProvider(),
            'scope' => $gateway->getOauthScope(),
            'authorizationOptions' => $gateway->getOauthAuthorizationOptions()
        )))
        {
            if($response['success'])
            {
                // token
                $token = $response['token'];

                // save token
                craft()->videos_oauth->saveToken($gateway->getOauthProvider(), $token);

                VideosPlugin::log('Videos OAuth Connect Step 2: '."\r\n".print_r(['token' => $token], true), LogLevel::Info);

                // session notice
                craft()->userSession->setNotice(Craft::t("Connected."));
            }
            else
            {
                // session notice
                craft()->userSession->setError(Craft::t($response['errorMsg']));
            }
        }
        else
        {
            // session error
            craft()->userSession->setError(Craft::t("Couldn’t connect"));
        }


        // redirect

        craft()->httpSession->remove('videos.referer');

        $this->redirect($referer);
    }

    /**
     * Disconnect
     */
    public function actionDisconnect()
    {
        $gatewayHandle = craft()->request->getParam('gateway');
        $gateway = craft()->videos_gateways->getGateway($gatewayHandle, false);

        $oauthProviderHandle = $gateway->getOauthProvider();

        craft()->videos_oauth->deleteToken($oauthProviderHandle);

        // set notice
        craft()->userSession->setNotice(Craft::t("Disconnected."));

        // redirect
        $redirect = craft()->request->getUrlReferrer();
        $this->redirect($redirect);
    }
}
