<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
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
     * Field Preview
     *
     * @return null
     */
    public function actionFieldPreview()
    {
        $this->requireAjaxRequest();

        $url = craft()->request->getParam('url');

        try
        {
            $video = craft()->videos_cache->get(['fieldPreview', $url]);

            if(!$video)
            {
                $video = craft()->videos->getVideoByUrl($url);

                if(!$video)
                {
                    throw new Exception("Video not found");
                }

                craft()->videos_cache->set(['fieldPreview', $url], $video);
            }

            $this->returnJson(
                array(
                    'video' => $video,
                    'preview' => craft()->templates->render('videos/_elements/fieldPreview', array('video' => $video))
                )
            );
        }
        catch(\Exception $e)
        {
            Craft::log('Couldn’t get field preview: '.$e->getMessage(), LogLevel::Error);

            $this->returnErrorJson($e->getMessage());
        }
    }

    /**
     * Get Explorer Modal
     *
     * @return null
     */
    public function actionGetExplorerModal()
    {
        $namespaceInputId = craft()->request->getPost('namespaceInputId');

        $this->renderTemplate('videos/_elements/explorer', [
            'namespaceInputId' => $namespaceInputId,
            'nav' => craft()->videos->getExplorerNav()
        ]);
    }

    /**
     * Get Videos
     *
     * @return null
     */
    public function actionGetVideos()
    {
        $this->requireAjaxRequest();

        try
        {
            $gatewayHandle = craft()->request->getParam('gateway');
            $gatewayHandle = strtolower($gatewayHandle);

            $method = craft()->request->getParam('method');
            $options = craft()->request->getParam('options');

            $gateway = craft()->videos_gateways->getGateway($gatewayHandle);

            if($gateway)
            {
                $videosResponse = $gateway->getVideos($method, $options);

                $html = craft()->templates->render('videos/_elements/videos', array(
                    'videos' => $videosResponse['videos']
                ));

                $this->returnJson(array(
                    'html' => $html,
                    'more' => $videosResponse['more'],
                    'moreToken' => $videosResponse['moreToken']
                ));
            }
            else
            {
                throw new Exception("Gateway not available");
            }
        }
        catch(\Exception $e)
        {
            Craft::log('Couldn’t get videos: '.$e->getMessage(), LogLevel::Error);

            $this->returnErrorJson($e->getMessage());
        }
    }

    /**
     * Player
     *
     * @return null
     */
    public function actionPlayer()
    {
        $this->requireAjaxRequest();

        $gatewayHandle = craft()->request->getParam('gateway');
        $gatewayHandle = strtolower($gatewayHandle);

        $videoId = craft()->request->getParam('videoId');

        try {
            $video = craft()->videos->getVideoById($gatewayHandle, $videoId);
        }
        catch(\Exception $e)
        {
            $errorMsg = $e->getMessage();
        }

        if(isset($video))
        {
            $html = craft()->templates->render('videos/_elements/player', array(
                'video' => $video
            ));

            $this->returnJson(array(
                'html' => $html
            ));
        }
        elseif(isset($errorMsg))
        {
            Craft::log('Couldn’t get videos: '.$errorMsg, LogLevel::Error);

            $this->returnErrorJson("Couldn't load video: ".$errorMsg);
        }
        else
        {
            Craft::log('Couldn’t get videos: Video not found', LogLevel::Error);

            $this->returnErrorJson("Video not found.");
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
                $gateways = craft()->videos_gateways->getGateways(false);
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
                    $providerHandle = strtolower($gateway->getOauthProvider());
                    $providerName = $gateway->getOauthProvider();

                    $provider = craft()->oauth->getProvider($providerHandle, false);

                    if ($provider)
                    {
                        if($provider->isConfigured())
                        {
                            $token = craft()->videos_oauth->getToken($providerHandle);

                            if ($token)
                            {
                                try
                                {
                                    $account = craft()->videos_cache->get(['getAccount', $token]);

                                    if(!$account)
                                    {
                                        $account = $provider->getAccount($token);
                                        craft()->videos_cache->set(['getAccount', $token], $account);
                                    }

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
