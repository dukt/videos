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
            'handle' => 'vimeo',
            'namespace' => 'videos.vimeo'
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

    public function config()
    {
        require(CRAFT_PLUGINS_PATH."videos/config.php");

        return $config;

        // return craft()->videos->getService($providerClass);
    }

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

    public function url($videoUrl)
    {

        $gateways = $this->gateways();

        foreach($gateways as $s)
        {
            $params['url'] = $videoUrl;

            try {

                $video = $s->videoFromUrl($params);

                if($video) {

                    return $video;
                    // $video_object = new Videos_VideoModel($video);

                    // return $video_object;
                }

                //return $video;
            } catch(\Exception $e) {
                die($e->getMessage());
                //return $e->getMessage();
            }
        }


        return null;
    }


    private function gateways()
    {
        $wrap = $this;

        $allServices = array_map(

            function($providerClass) use ($wrap) {

                $gatewayHandle = strtolower($providerClass);

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

                    return $gateway;

                } catch(\Exception $e) {
                    return array('error' => $e->getMessage());
                }

                // $gateway = \Dukt\Videos\Common\ServiceFactory::create($providerClass);

                // // Retrieve token

                // $gatewayHandle = $gateway->handle;

                // $token = craft()->oauth->getSystemToken($this->providerOpts[$gatewayHandle]['handle'], $this->providerOpts[$gatewayHandle]['namespace']);

                // $provider = craft()->oauth->getProvider($this->providerOpts[$gatewayHandle]['handle']);

                // $provider->setToken($token->getDecodedToken());


                // // refresh token

                // if (isset($token->expires)) {
                //     $remaining = $token->expires - time();

                //     if ($remaining < 240) {
                //         $accessToken = $provider->access($token->refresh_token, array('grant_type' => 'refresh_token'));

                //         // save token

                //         $token->access_token = $accessToken->access_token;
                //         $token->expires = $accessToken->expires;

                //         $gateway->token = $token;
                //     }
                // }


                // // service set provider

                // $gateway->setProvider($provider->providerSOurce);

                // return $gateway;
            },

            \Dukt\Videos\Common\ServiceFactory::find()
        );

        $gateways = array();

        foreach($allServices as $s) {
            array_push($gateways, $s);
        }

        return $gateways;
    }

}