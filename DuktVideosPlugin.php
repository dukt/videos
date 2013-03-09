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

class DuktVideosPlugin extends BasePlugin
{
	/**
	 * Get Name
	 */
    function getName()
    {
        return Craft::t('Dukt Videos');
    }
    
	// --------------------------------------------------------------------

	/**
	 * Get Version
	 */
    function getVersion()
    {
        return '1.0';
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
            'duktvideos\/configure\/(?P<servicekey>.*)' => 'duktvideos/_configure',
        );
    }
}