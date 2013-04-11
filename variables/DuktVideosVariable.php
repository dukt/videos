<?php

/**
 * Dukt Videos
 *
 * @package		Dukt Videos
 * @version		Version 1.0
 * @author		Benjamin David
 * @copyright	Copyright (c) 2013 - DUKT
 * @link		http://dukt.net/add-ons/expressionengine/dukt-videos/
 *
 */
 
namespace Craft;

require(CRAFT_PLUGINS_PATH."duktvideos/config.php");

require(CRAFT_PLUGINS_PATH.'duktvideos/vendor/autoload.php');

class DuktVideosVariable
{
  	public function __construct()
  	{
  		require(CRAFT_PLUGINS_PATH."duktvideos/config.php");

  		$this->pagination_per_page = $config['pagination_per_page'];
  	}

    public function getServiceByProviderClass($providerClass)
    {
        return craft()->duktVideos->getServiceByProviderClass($providerClass);
    }
    
    // --------------------------------------------------------------------

    // Public variables

    // --------------------------------------------------------------------

    /*
    * Retrieves a video from its URL
    *
    */
    public function url($videoUrl)
    {
        return craft()->duktVideos->url($videoUrl);
    }

    // --------------------------------------------------------------------

    // CP reserved variables

    // --------------------------------------------------------------------

    public function cpGetOption($k)
    {
        return craft()->duktVideos->getOption($k);
    }

    // --------------------------------------------------------------------

    public function cpGetToken($serviceKey)
    {
        $option = craft()->duktVideos->getOption($serviceKey."_token");

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
        return craft()->duktVideos->serviceTokenExpires($providerClass);
    }

    // --------------------------------------------------------------------

    public function cpSupportsRefresh($providerClass)
    {
        return craft()->duktVideos->serviceSupportsRefresh($providerClass);
    }

    // --------------------------------------------------------------------
    
    public function cpServices($service = false)
    {       
        return craft()->duktVideos->services($service);
    }

    function cpGetServiceRecord($providerClass)
    {
        return craft()->duktVideos->getServiceRecord($providerClass);
    }
}