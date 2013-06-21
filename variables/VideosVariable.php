<?php

/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://docs.dukt.net/craft/videos/license
 * @link      http://dukt.net/craft/videos
 */

namespace Craft;

require(CRAFT_PLUGINS_PATH.'videos/vendor/autoload.php');

class VideosVariable
{
    // --------------------------------------------------------------------

    public function render($template, $variables = array())
    {
        return craft()->videos->render($template, $variables);
    }

    public function app()
    {
        return craft()->videos->app();
    }

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
}