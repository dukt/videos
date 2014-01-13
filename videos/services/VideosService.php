<?php

namespace Craft;

require(CRAFT_PLUGINS_PATH.'videos/vendor/autoload.php');

class VideosService extends BaseApplicationComponent
{
    public function getVideoByUrl($videoUrl, $errorsEnabled = false)
    {
        try {
            $video = $this->getVideoObjectFromUrl($videoUrl);

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

    public function getEmbed($videoUrl, $opts)
    {
        $video = $this->getVideoObjectFromUrl($videoUrl);

        return $video->getEmbed($opts);
    }

    private function getVideoObjectFromUrl($videoUrl)
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
                throw new Exception($e->getMessage());
            }
        }
    }

    private function getProviderOpts($gateway)
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

    private function getGateways()
    {
        $wrap = $this;

        $allGateways = array_map(

            function($providerClass) use ($wrap) {

                $gatewayHandle = strtolower($providerClass);

                try {
                    // provider

                    $providerOpts = $wrap->getProviderOpts($gatewayHandle);

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

                    $gatewayOpts = $wrap->getGatewayOpts($gatewayHandle);

                    $gateway = \Dukt\Videos\Common\ServiceFactory::create($gatewayOpts['class'], $provider->providerSource->_providerSource);

                    if(isset($gatewayOpts['parameters'])) {
                        $gateway->setParameters($gatewayOpts['parameters']);
                    }

                    return $gateway;

                } catch(\Exception $e) {
                    return array('error' => $e->getMessage());
                }
            },

            \Dukt\Videos\Common\ServiceFactory::find()
        );

        $gateways = array();

        foreach($allGateways as $g) {
            if(is_object($g)) {
                array_push($gateways, $g);
            }
        }

        return $gateways;
    }
}