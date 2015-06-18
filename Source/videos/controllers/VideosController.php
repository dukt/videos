<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

/**
 * Videos controller
 */
class VideosController extends BaseController
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

    /**
     * Field Preview
     */
    public function actionFieldPreview()
    {
        $this->requireAjaxRequest();

        $url = craft()->request->getParam('url');

        try
        {
            $video = craft()->videos->getVideoByUrl($url);

            if(!$video)
            {
                throw new Exception("Video not found");

            }
            $this->returnJson(
                array(
                    'video' => $video,
                    'preview' => craft()->templates->render('videos/field/preview', array('video' => $video))
                )
            );
        }
        catch(\Exception $e)
        {
            $this->returnErrorJson($e->getMessage());
        }
    }

    /**
     * Get videos
     */
    public function actionGetVideos()
    {
        try
        {
            $gatewayHandle = craft()->request->getParam('gateway');
            $gatewayHandle = strtolower($gatewayHandle);

            $method = craft()->request->getParam('method');
            $options = craft()->request->getParam('options');

            $gateway = craft()->videos->getGateway($gatewayHandle);

            if($gateway)
            {
                $videosResponse = $gateway->getVideos($method, $options);

                $response['html'] = craft()->templates->render('videos/explorer/videos', array(
                    'videos' => $videosResponse['videos']
                ));

                $this->returnJson($response);
            }
            else
            {
                throw new Exception("Gateway not available");
            }

        }
        catch(\Exception $e)
        {
            $this->returnErrorJson($e->getMessage());
        }
    }

    /**
     * Player
     */
    public function actionPlayer()
    {
        $gatewayHandle = craft()->request->getParam('gateway');
        $gatewayHandle = strtolower($gatewayHandle);

        $videoId = craft()->request->getParam('videoId');
        $video = craft()->videos->getVideoById($gatewayHandle, $videoId);

        if($video)
        {
            $html = craft()->templates->render('videos/modals/player', array(
                'video' => $video
            ));

            $this->returnJson(array(
                'html' => $html
            ));
        }
        else
        {
            $this->returnErrorJson("Video not found.");
        }
    }

    /**
     * Explorer
     *
     * @return null
     */
    public function actionExplorer()
    {
        $variables = array(
            'nav' => craft()->videos->getExplorerNav()
        );

        if (craft()->request->isAjaxRequest())
        {
            $html = craft()->templates->render('videos/modals/explorer', $variables);

            $this->returnJson(array(
                'html' => $html
            ));
        }
        else
        {
            $this->renderTemplate('videos/explorer', $variables);
        }
    }

    /**
     * Settings
     *
     * @return null
     */
    public function actionSettings()
    {
        $plugin = craft()->plugins->getPlugin('videos');
        $pluginDependencies = $plugin->getPluginDependencies();

        if (count($pluginDependencies) > 0)
        {
            $this->renderTemplate('videos/settings/_dependencies', ['pluginDependencies' => $pluginDependencies]);
        }
        else
        {
            if (isset(craft()->oauth))
            {
                $gateways = craft()->videos->getGateways(false);
                $variables['gateways'] = array();

                foreach($gateways as $gateway)
                {
                    $response = array(
                        'gateway' => $gateway,
                        'provider' => false,
                        'account' => false,
                        'token' => false,
                        'error' => false
                    );

                    $gatewayHandle = $gateway->getHandle();
                    $providerHandle = strtolower($gateway->getOAuthProvider());
                    $providerName = $gateway->getOAuthProvider();

                    $provider = craft()->oauth->getProvider($providerHandle, false);

                    if ($provider)
                    {
                        if($provider->isConfigured())
                        {
                            $token = craft()->videos->getToken($providerHandle);

                            if ($token)
                            {
                                $provider->setToken($token);

                                try
                                {
                                    $account = $provider->getAccount();

                                    if ($account)
                                    {
                                        $response['account'] = $account;
                                        $response['settings'] = $plugin->getSettings();
                                    }
                                }
                                catch(\Exception $e)
                                {
                                    Craft::log('Couldn’t get account. '.$e->getMessage(), LogLevel::Error);

                                    $response['error'] = $e->getMessage();
                                }
                            }

                            $response['token'] = $token;
                        }

                        $response['provider'] = $provider;
                    }

                    $variables['gateways'][$gatewayHandle] = $response;
                }

                $this->renderTemplate('videos/settings', $variables);
            }
            else
            {
                $this->renderTemplate('videos/settings/_oauthNotInstalled');
            }
        }
    }
}