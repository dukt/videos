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

require(CRAFT_PLUGINS_PATH.'videos/vendor/autoload.php');

class VideosVariable
{
    // --------------------------------------------------------------------

    public function getService($providerClass)
    {
        return craft()->videos->getService($providerClass); // returns a service model
    }

    // --------------------------------------------------------------------

    public function url($videoUrl)
    {
        return craft()->videos->url($videoUrl); // return a video model
    }

    // --------------------------------------------------------------------

    // CP reserved variables

    // --------------------------------------------------------------------

    public function cpConfig()
    {
        return craft()->videos->config(); // returns a config array
    }

    // --------------------------------------------------------------------

    public function cpServiceLibrary($providerClass)
    {
        return craft()->videos->serviceLibrary($providerClass); // returns a service library
    }

    // --------------------------------------------------------------------

    public function cpServicesObjects()
    {
        return craft()->videos->servicesObjects(); // returns an initialized service library
    }

    // --------------------------------------------------------------------

    public function cpServiceRecord($providerClass)
    {
        return craft()->videos->serviceRecord($providerClass); // returns a service record
    }

    // --------------------------------------------------------------------
}