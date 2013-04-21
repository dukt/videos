<?php

/**
 * Craft Videos
 *
 * @package		Craft Videos
 * @version		Version 1.0
 * @author		Benjamin David
 * @copyright	Copyright (c) 2013 - DUKT
 * @link		http://dukt.net/add-ons/expressionengine/dukt-videos/
 *
 */

namespace Craft;

require(CRAFT_PLUGINS_PATH."videos/config.php");

require(CRAFT_PLUGINS_PATH.'videos/vendor/autoload.php');


class VideosVariable
{
  	public function __construct()
  	{
  		require(CRAFT_PLUGINS_PATH."videos/config.php");

  		$this->pagination_per_page = $config['pagination_per_page'];
  	}

    public function getServiceByProviderClass($providerClass)
    {
        return craft()->videos->getServiceByProviderClass($providerClass);
    }

    // --------------------------------------------------------------------

    // Public variables

    // --------------------------------------------------------------------


    public function getServiceProvider($providerClass)
    {
        $service = \Dukt\Videos\Common\ServiceFactory::create($providerClass);

        return $service;
    }

    /*
    * Retrieves a video from its URL
    *
    */
    public function url($videoUrl)
    {
        return craft()->videos->url($videoUrl);
    }

    // --------------------------------------------------------------------

    // CP reserved variables

    // --------------------------------------------------------------------

    public function cpGetOption($k)
    {
        return craft()->videos->getOption($k);
    }

    // --------------------------------------------------------------------

    public function cpGetToken($serviceKey)
    {
        $option = craft()->videos->getOption($serviceKey."_token");

        if(!$option)
        {
          return false;
        }
        $option = unserialize(base64_decode($option));

        // $option = date(DATE_RSS, $option->expires);

        return $option;
    }

    // --------------------------------------------------------------------

    public function cpTokenExpires($providerClass)
    {
        return craft()->videos->serviceTokenExpires($providerClass);
    }

    // --------------------------------------------------------------------

    public function cpSupportsRefresh($providerClass)
    {
        return craft()->videos->serviceSupportsRefresh($providerClass);
    }

    // --------------------------------------------------------------------

    public function cpServices($service = false)
    {
        return craft()->videos->services($service);
    }

    function cpGetServiceRecord($providerClass)
    {
        return craft()->videos->getServiceRecord($providerClass);
    }
}