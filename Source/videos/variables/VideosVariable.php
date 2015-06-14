<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class VideosVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Request the API.
     */
    public function api($attributes = null)
    {
        return new Videos_RequestCriteriaModel($attributes);
    }

    public function nav()
    {
        $nav = array();

        $gateways = craft()->videos->getGateways();

        foreach ($gateways as $gateway)
        {
            $nav[] = $gateway;
        }

        return $nav;
    }

    public function getGateways()
    {
        return craft()->videos->getGateways();
    }

    public function getGateway($handle)
    {
        return craft()->videos->getGateway($handle);
    }

    public function getGatewayOpts($handle)
    {
        return craft()->videos->getGatewayOpts($handle);
    }

    public function getToken($handle)
    {
        return craft()->videos->getToken($handle);
    }

    public function getEmbed($videoUrl, $options = array())
    {
        $embed = craft()->videos->getEmbed($videoUrl, $options);

        $charset = craft()->templates->getTwig()->getCharset();

        return new \Twig_Markup($embed, $charset);
    }

    public function getVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        try
        {
            return craft()->videos->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
        }
        catch(\Exception $e)
        {
            return null;

            // if(craft()->config->get('devMode'))
            // {
            //     throw $e;
            // }
            // else
            // {
            //     Craft::log("Couldn't get video from URL : ".$videoUrl.'. '.$e->getMessage(), LogLevel::Info, true);
            // }
        }
    }

    // alias for getVideoByUrl

    public function url($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        $this->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
    }
}
