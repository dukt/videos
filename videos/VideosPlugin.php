<?php

/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 * @link      https://dukt.net/craft/videos
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

	/**
	 * Get Version
	 */
    function getVersion()
    {
        return '0.9.6';
    }

	/**
	 * Get Developer
	 */
    function getDeveloper()
    {
        return 'Dukt';
    }

	/**
	 * Get Developer URL
	 */
    function getDeveloperUrl()
    {
        return 'http://dukt.net/';
    }

	/**
	 * Has CP Section
	 */
    public function hasCpSection()
    {
        return false;
    }

	/**
	 * Hook Register CP Routes
	 */
    public function hookRegisterCpRoutes()
    {
        return array(
            'videos\/settings\/(?P<providerClass>.*)' => 'videos/settings/_configure',
        );
    }

    /**
     * Settings
     */
    protected function defineSettings()
    {
        return array(
            'youtubeParameters' => array(AttributeType::Mixed)
        );
    }

    public function getSettingsHtml()
    {
        if(craft()->request->getPath() == 'settings/plugins') {
            return true;
        }

        return craft()->templates->render('videos/settings', array(
            'settings' => $this->getSettings()
        ));
    }
}