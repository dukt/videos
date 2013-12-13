<?php

namespace Craft;

class VideosService extends BaseApplicationComponent
{
    public function config()
    {
        require(CRAFT_PLUGINS_PATH."videos/config.php");

        return $config;
    }

    public function getGatewayOpts($gateway)
    {
        $plugin = craft()->plugins->getPlugin('videos');
        $settings = $plugin->getSettings();

        $gatewayOpts = array(
            'youtube' => array(
                'class' => "YouTube",
                'parameters' => array(
                    'developerKey' => $settings['youtubeParameters']['developerKey']
                ),
            ),
            'vimeo' => array(
                'class' => "Vimeo"
            )
        );

        return $gatewayOpts[$gateway];
    }

    public function getProviderOpts($gateway)
    {
        $providerOpts = array(
            'youtube' => array(
                'handle' => 'google',
                'namespace' => 'videos.google'
            ),
            'vimeo' => array(
                'handle' => 'vimeo',
                'namespace' => 'videos.vimeo'
            )
        );

        return $providerOpts[$gateway];
    }

    public function getVideos($gatewayHandle, $uri, $params = array())
    {
        $providerOpts = $this->getProviderOpts($gatewayHandle);
        $gatewayOpts = $this->getGatewayOpts($gatewayHandle);

        try {
            // provider

            $token = craft()->oauth->getSystemToken($providerOpts['handle'], $providerOpts['namespace']);

            if($token) {

                $realToken = $token->getDecodedToken();

                if($realToken) {
                    $provider = craft()->oauth->getProvider($providerOpts['handle']);

                    $provider->setToken($realToken);


                    // gateway

                    $gateway = \Dukt\Videos\Common\ServiceFactory::create($gatewayOpts['class'], $provider->providerSource->_providerSource);

                    if(isset($gatewayOpts['parameters'])) {
                        $gateway->setParameters($gatewayOpts['parameters']);
                    }

                    return $gateway->getVideos($uri, $params);
                } else {
                    throw new Exception("Couldn't get real token");
                }

            } else {
                throw new Exception("Token doesn't exists");
            }

        } catch(\Exception $e) {
            return array('error' => $e->getMessage());
        }
    }

    public function getVideoObjectFromUrl($videoUrl, $errorsEnabled = false)
    {
        $gateways = $this->getGateways();

        foreach($gateways as $gateway)
        {
            $params['url'] = $videoUrl;

            try {
                $video = $gateway->videoFromUrl($params);

                if($video) {
                    return $video;
                }

            } catch(\Exception $e) {
                if($errorsEnabled) {
                    throw new Exception($e->getMessage());
                }
            }
        }
    }

    public function url($videoUrl, $errorsEnabled = false)
    {
        try {
            $video = $this->getVideoObjectFromUrl($videoUrl, $errorsEnabled);

            if($video) {

                $video = (array) $video;

                return Videos_VideoModel::populateModel($video);
            }
        } catch(\Exception $e) {
            if($errorsEnabled) {
                throw new Exception($e->getMessage());
            }
        }
    }

    public function getEmbed($video, $opts)
    {
        $embed = $video->getEmbed($opts);

        $charset = craft()->templates->getTwig()->getCharset();

        return new \Twig_Markup($embed, $charset);
    }

    private function getGateways()
    {
        $wrap = $this;

        $allServices = array_map(

            function($providerClass) use ($wrap) {

                $gatewayHandle = strtolower($providerClass);

                try {
                    // provider

                    $providerOpts = $this->getProviderOpts($gatewayHandle);

                    $token = craft()->oauth->getSystemToken($providerOpts['handle'], $providerOpts['namespace']);

                    if(!$token) {
                        throw new Exception("Token doesn't exists");
                    }

                    $realToken = $token->getDecodedToken();

                    if(!$realToken) {
                        throw new Exception("Couldn't get real token");
                    }

                    $provider = craft()->oauth->getProvider($providerOpts['handle']);

                    $provider->setToken($token->getDecodedToken());


                    // gateway

                    $gatewayOpts = $this->getGatewayOpts($gatewayHandle);

                    $gateway = \Dukt\Videos\Common\ServiceFactory::create($gatewayOpts['class'], $provider->providerSource->_providerSource);

                    if(isset($gatewayOpts['parameters'])) {
                        $gateway->setParameters($gatewayOpts['parameters']);
                    }

                    return $gateway;

                } catch(\Exception $e) {
                    return array('error' => $e->getMessage());
                }

                $gateway = \Dukt\Videos\Common\ServiceFactory::create($providerClass);

                // Retrieve token

                $gatewayHandle = $gateway->handle;

                $token = craft()->oauth->getSystemToken($providerOpts['handle'], $providerOpts['namespace']);

                $provider = craft()->oauth->getProvider($providerOpts['handle']);

                $provider->setToken($token->getDecodedToken());


                // refresh token

                if (isset($token->expires)) {
                    $remaining = $token->expires - time();

                    if ($remaining < 240) {
                        $accessToken = $provider->access($token->refresh_token, array('grant_type' => 'refresh_token'));

                        // save token

                        $token->access_token = $accessToken->access_token;
                        $token->expires = $accessToken->expires;

                        $gateway->token = $token;
                    }
                }


                // service set provider

                $gateway->setProvider($provider->providerSOurce);

                return $gateway;
            },

            \Dukt\Videos\Common\ServiceFactory::find()
        );

        $gateways = array();

        foreach($allServices as $s) {
            if(is_object($s)) {
                array_push($gateways, $s);
            }
        }

        return $gateways;
    }


    public function getGatewaysWithSections()
    {
        try {
            $gatewaysWithSections = array();

            $gateways = $this->getGateways();

            foreach($gateways as $gateway) {

                if($gateway) {
                    $class = '\Dukt\Videos\App\\'.$gateway->providerClass;

                    if($gateway->sections = $class::getSections($gateway)) {
                        array_push($gatewaysWithSections, $gateway);
                    }
                }
            }

            return $gatewaysWithSections;
        } catch(\Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

}