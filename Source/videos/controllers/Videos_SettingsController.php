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
	    craft()->videos->requireDependencies();

	    $plugin = craft()->plugins->getPlugin('videos');
        $gateways = craft()->videos_gateways->getGateways(false);
        $variables['gatewayConfigs'] = array();

        foreach($gateways as $gateway)
        {
            $gatewayConfig = array(
                'gateway' => $gateway,
                'provider' => false,
                'account' => false,
                'token' => false,
                'error' => false
            );

            $gatewayHandle = $gateway->getHandle();
            $providerHandle = strtolower($gateway->getOauthProviderHandle());

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
                                try
                                {
                                    $account = craft()->videos_cache->get(['getAccount', $token]);

                                    if(!$account)
                                    {
                                        $account = $provider->getResourceOwner($token);
                                        craft()->videos_cache->set(['getAccount', $token], $account);
                                    }

                                    if ($account)
                                    {
                                        $gatewayConfig['account'] = $account;
                                        $gatewayConfig['settings'] = $plugin->getSettings();
                                    }
                                }
                                catch(\Exception $e)
                                {
                                    VideosPlugin::log('Couldn’t get account. '.$e->getMessage(), LogLevel::Error);

                                    $gatewayConfig['error'] = $e->getMessage();
                                }
                            }

                            if ($account)
                            {
                                $gatewayConfig['account'] = $account;
                                $gatewayConfig['settings'] = $plugin->getSettings();
                            }
                        }
                        catch(\Exception $e)
                        {
                            VideosPlugin::log('Couldn’t get account. '.$e->getMessage(), LogLevel::Error);

                            $gatewayConfig['error'] = $e->getMessage();
                        }
                    }

                    $gatewayConfig['token'] = $token;
                }

                $gatewayConfig['provider'] = $provider;
            }

            $variables['gatewayConfigs'][$gatewayHandle] = $gatewayConfig;
        }

        $this->renderTemplate('videos/settings/_index', $variables);
    }
}
