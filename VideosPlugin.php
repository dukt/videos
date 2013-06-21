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

class VideosPlugin extends BasePlugin
{
	/**
	 * Get Name
	 */
    function getName()
    {
        return Craft::t('Videos');
    }

	// --------------------------------------------------------------------

	/**
	 * Get Version
	 */
    function getVersion()
    {
        return '0.9.3';
    }

	// --------------------------------------------------------------------

	/**
	 * Get Developer
	 */
    function getDeveloper()
    {
        return 'Dukt';
    }

	// --------------------------------------------------------------------

	/**
	 * Get Developer URL
	 */
    function getDeveloperUrl()
    {
        return 'http://dukt.net/';
    }

	// --------------------------------------------------------------------

	/**
	 * Has CP Section
	 */
    public function hasCpSection()
    {
        return true;
    }

	// --------------------------------------------------------------------

	/**
	 * Hook Register CP Routes
	 */
    public function hookRegisterCpRoutes()
    {
        return array(
            'videos\/settings\/(?P<providerClass>.*)' => 'videos/settings/_configure',
        );
    }
}