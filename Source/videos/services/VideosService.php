<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

require(CRAFT_PLUGINS_PATH.'videos/vendor/autoload.php');

class VideosService extends BaseApplicationComponent
{
    // Properties
    // =========================================================================

    private $_gateways = array();
    private $_allGateways = array();
    private $_gatewaysLoaded = false;
    private $tokens;

    // Public Methods
    // =========================================================================

    /**
     * Get Explorer Nav
     */
    public function getExplorerNav()
    {
        $nav = array();

        $gateways = craft()->videos->getGateways();

        foreach ($gateways as $gateway)
        {
            $nav[] = $gateway;
        }

        return $nav;
    }

    /**
     * Get a video from its URL
     */
    public function getVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        $video = $this->requestVideoByUrl($videoUrl, $enableCache, $cacheExpiry);

        if($video)
        {
            $attributes = (array) $video;

            $response = Videos_VideoModel::populateModel($attributes);

            // $response['thumbnail'] = $response->getThumbnail();

            return $response;
        }
    }

    /**
     * Get a video from its ID
     */
    public function getVideoById($gateway, $id)
    {
        $video = $this->requestVideoById($gateway, $id);

        if($video)
        {
            $video = (array) $video;

            $response = Videos_VideoModel::populateModel($video);

            // $response['thumbnail'] = $response->getThumbnail();

            return $response;
        }
    }

    /**
     * Get Embed HTML
     */
    public function getEmbedHtml($videoUrl, $opts)
    {
        $video = $this->requestVideoByUrl($videoUrl);

        $gateway = $this->getGateway($video['gatewayHandle']);

        return $gateway->getEmbedHtml($video['id'], $opts);
    }

    /**
     * Get Video Thumbnail
     */
    public function getVideoThumbnail($gateway, $id, $w = 340, $h = null)
    {
        $uri = 'videosthumbnails/'.$gateway.'/'.$id.'/';

        $uri .= $w;

        if(!$h)
        {
            // calculate hd ratio (1,280×720)
            $h = floor($w * 720 / 1280);
        }

        $uri .= '/'.$h;


        return UrlHelper::getResourceUrl($uri);
    }

    /**
     * Send Request
     */
    public function sendRequest(Videos_RequestCriteriaModel $criteria)
    {
        $gateway = $this->getGateway($criteria->gateway);

        return $gateway->api($criteria->method, $criteria->query);
    }

    /**
     * Request a video from its ID
     */
    public function requestVideoById($gatewayHandle, $id, $enableCache = true, $cacheExpiry = 3600)
    {
        if($enableCache)
        {
            $key = 'videos.video.'.$gatewayHandle.'.'.md5($id);

            $response = craft()->fileCache->get($key);

            if($response)
            {
                return $response;
            }
        }

        try
        {
            $gateways = $this->getGateways();

            foreach($gateways as $gateway)
            {
                if($gateway->getHandle() == $gatewayHandle)
                {

                    $response = $gateway->getVideo(array('id' => $id));

                    if($response)
                    {
                        if($enableCache)
                        {
                            craft()->fileCache->set($key, $response, $cacheExpiry);
                        }

                        return $response;
                    }
                }
            }

        }
        catch(\Exception $e)
        {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * Request a video from its URL
     */
    public function requestVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        if(craft()->config->get('disableCache', 'videos') == true)
        {
            $enableCache = false;
        }

        $enableCache = false;

        if($enableCache)
        {
            $key = 'videos.video.'.md5($videoUrl);

            $response = craft()->fileCache->get($key);

            if($response)
            {
                return $response;
            }
        }

        $gateways = $this->getGateways();


        foreach($gateways as $gateway)
        {
            $params['url'] = $videoUrl;

            try
            {
                $response = $gateway->videoFromUrl($params);

                if($response)
                {
                    if($enableCache)
                    {
                        craft()->fileCache->set($key, $response, $cacheExpiry);
                    }

                    return $response;
                }

            }
            catch(\Exception $e)
            {
                // todo
                // throw new Exception($e);
            }
        }

        return false;
    }

    /**
     * Get OAuth Token
     */
    public function getToken($handle)
    {
        if(!empty($this->tokens[$handle]))
        {
            return $this->tokens[$handle];
        }
        else
        {
            // get plugin
            $plugin = craft()->plugins->getPlugin('videos');

            // get settings
            $settings = $plugin->getSettings();

            // get tokens
            $tokens = $settings['tokens'];

            if(!empty($settings['tokens'][$handle]))
            {
                // get tokenId
                $tokenId = $tokens[$handle];

                // get token
                $token = craft()->oauth->getTokenById($tokenId);

                if($token)
                {
                    $this->tokens[$handle] = $token;
                    return $this->tokens[$handle];
                }
            }
        }
    }

    /**
     * Delete Token
     */
    public function deleteToken($handle)
    {
        $handle = strtolower($handle);

        // get plugin
        $plugin = craft()->plugins->getPlugin('videos');

        // get settings
        $settings = $plugin->getSettings();

        // get tokens
        $tokens = $settings['tokens'];

        // get token

        if(!empty($tokens[$handle]))
        {
            // get tokenId
            $tokenId = $tokens[$handle];

            // get token
            $token = craft()->oauth->getTokenById($tokenId);

            if($token)
            {
                craft()->oauth->deleteToken($token);
            }

            unset($tokens[$handle]);

            // save plugin settings
            $settings['tokens'] = $tokens;
            craft()->plugins->savePluginSettings($plugin, $settings);
        }
    }

    /**
     * Save OAuth Token
     */
    public function saveToken($handle, $token)
    {
        $handle = strtolower($handle);

        // get plugin
        $plugin = craft()->plugins->getPlugin('videos');

        // get settings
        $settings = $plugin->getSettings();

        // get tokens
        $tokens = $settings['tokens'];

        // get token

        if(!empty($tokens[$handle]))
        {
            // get tokenId
            $tokenId = $tokens[$handle];

            // get token
            // $model = craft()->oauth->getTokenById($tokenId);
            // $token->id = $tokenId;
            $existingToken = craft()->oauth->getTokenById($tokenId);
        }


        if(!$token)
        {
            $token = new Oauth_TokenModel;
        }

        if(isset($existingToken))
        {
            $token->id = $existingToken->id;
        }

        $token->providerHandle = $handle;
        $token->pluginHandle = 'videos';


        // save token
        craft()->oauth->saveToken($token);

        // set token ID
        $tokens[$handle] = $token->id;

        // save plugin settings
        $settings['tokens'] = $tokens;
        craft()->plugins->savePluginSettings($plugin, $settings);
    }

    /**
     * Get gateways
     */
    public function getGateways($enabledOnly = true)
    {
        $this->loadGateways();

        if($enabledOnly)
        {
            return $this->_gateways;
        }
        else
        {
            return $this->_allGateways;
        }
    }

    /**
     * Get a gateway from its handle
     */
    public function getGateway($gatewayHandle, $enabledOnly = true)
    {
        $this->loadGateways();

        if($enabledOnly)
        {
            $gateways = $this->_gateways;
        }
        else
        {
            $gateways = $this->_allGateways;
        }

        foreach($gateways as $g)
        {
            if($g->getHandle() == $gatewayHandle)
            {
                return $g;
            }
        }

        return null;
    }

    // Private Methods
    // =========================================================================

    /**
     * Load gateways
     */
    private function loadGateways()
    {

        if(!$this->_gatewaysLoaded)
        {
            $files = IOHelper::getFiles(CRAFT_PLUGINS_PATH.'videos/gateways');

            foreach($files as $file)
            {
                require_once($file);

                $gatewayName = IOHelper::getFilename($file, false);

                $nsClass = '\\Dukt\\Videos\\Gateways\\'.$gatewayName;


                // gateway

                $gateway = new $nsClass;


                // provider

                $handle = strtolower($gateway->getOAuthProvider());


                // token

                $token = $this->getToken($handle);

                if($token)
                {
                    $gateway->setToken($token);

                    // add to loaded gateways
                    $this->_gateways[] = $gateway;
                }


                // add to all gateways
                $this->_allGateways[] = $gateway;
            }

            $this->_gatewaysLoaded = true;
        }
    }
}
