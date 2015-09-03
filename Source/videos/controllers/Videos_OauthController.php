<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
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
        }


        // connect

        $gatewayHandle = craft()->request->getParam('gateway');

        $gateway = craft()->videos->getGateway($gatewayHandle, false);

        if($response = craft()->oauth->connect(array(
            'plugin' => 'videos',
            'provider' => $gateway->getOAuthProvider(),
            'scopes' => $gateway->getOAuthScope(),
            'params' => $gateway->getOAuthParams()
        )))
        {
            if($response['success'])
            {
                // token
                $token = $response['token'];

                // save token
                craft()->videos->saveToken($gateway->getOAuthProvider(), $token);

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
        $gateway = craft()->videos->getGateway($gatewayHandle, false);

        $oauthProviderHandle = $gateway->getOAuthProvider();

        craft()->videos->deleteToken($oauthProviderHandle);

        // set notice
        craft()->userSession->setNotice(Craft::t("Disconnected."));

        // redirect
        $redirect = craft()->request->getUrlReferrer();
        $this->redirect($redirect);
    }
}
