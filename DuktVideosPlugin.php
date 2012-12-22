<?php
namespace Blocks;

class DuktVideosPlugin extends BasePlugin
{
    function getName()
    {
        return Blocks::t('Dukt Videos');
    }

    function getVersion()
    {
        return '1.0';
    }

    function getDeveloper()
    {
        return 'Dukt';
    }

    function getDeveloperUrl()
    {
        return 'http://dukt.net/';
    }
    
    function getHtml()
    {
	    echo "yo";
    }
    
    public function hasCpSection()
    {
        return true;
    }
    
    public function hookRegisterCpRoutes()
    {
        return array(
            'duktvideos\/configure\/(?P<servicekey>.*)' => 'duktvideos/_configure',
        );
    }
    
    public function onAfterInstall()
	{
		
	}
}