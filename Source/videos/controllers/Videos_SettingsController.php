<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

/**
 * Videos Settings controller
 */
class Videos_SettingsController extends BaseController
{
    /**
     * Settings Index
     *
     * @return null
     */
    public function actionIndex()
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
                    $providerHandle = strtolower($gateway->getOauthProviderHandle());
                    $providerName = $gateway->getOauthProviderHandle();

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
                                    VideosPlugin::log('Couldn’t get account. '.$e->getMessage(), LogLevel::Error);

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
