<?php

namespace Craft;

class VideosService extends BaseApplicationComponent
{
    public $providerOpts = array(
        'youtube' => array(
            'handle' => 'google',
            'namespace' => 'videos.google'
        ),
        'vimeo' => array(
            'handle' => 'google',
            'namespace' => 'videos.google'
        )
    );

    public $gatewayOpts = array(
        'youtube' => array(
            'class' => "YouTube",
            'parameters' => array(
                'developerKey' => 'AI39si5pb7QkcLpWXy3ysZU1q3yB8jJMQTuin2kix09vDhOme53-4vU869k1SFefohY5-BXnDDYonZkNwjNwMSzAAATsm5UFAg'
            ),
        ),
        'vimeo' => array(
            'class' => "Vimeo"
        )
    );

    public function getVideos($gatewayHandle, $uri, $params = array())
    {
        try {
            // provider

            $token = craft()->oauth->getSystemToken($this->providerOpts[$gatewayHandle]['handle'], $this->providerOpts[$gatewayHandle]['namespace']);

            $provider = craft()->oauth->getProvider($this->providerOpts[$gatewayHandle]['handle']);

            $provider->setToken($token->getDecodedToken());


            // gateway

            $gateway = \Dukt\Videos\Common\ServiceFactory::create($this->gatewayOpts[$gatewayHandle]['class'], $provider->providerSource->_providerSource);

            if(isset($this->gatewayOpts[$gatewayHandle]['parameters'])) {
                $gateway->setParameters($this->gatewayOpts[$gatewayHandle]['parameters']);
            }

            return $gateway->getVideos($uri, $params);

        } catch(\Exception $e) {
            return array('error' => $e->getMessage());
        }
    }
}