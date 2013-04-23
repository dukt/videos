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
    // --------------------------------------------------------------------

  	public function __construct()
  	{
  		require(CRAFT_PLUGINS_PATH."videos/config.php");

  		$this->pagination_per_page = $config['pagination_per_page'];
  	}

    // --------------------------------------------------------------------

    public function getService($providerClass)
    {
        return craft()->videos->getService($providerClass);
    }

    // --------------------------------------------------------------------

    public function url($videoUrl)
    {
        return craft()->videos->url($videoUrl);
    }

    // --------------------------------------------------------------------

    // CP reserved variables

    // --------------------------------------------------------------------

    public function cpServices($service = false)
    {
        return craft()->videos->services($service);
    }

    // --------------------------------------------------------------------

    public function cpGetServiceLibrary($providerClass)
    {
        return craft()->videos->getServiceLibrary($providerClass);
    }

    // --------------------------------------------------------------------

    function cpGetServiceRecord($providerClass)
    {
        return craft()->videos->getServiceRecord($providerClass);
    }

    // --------------------------------------------------------------------
}