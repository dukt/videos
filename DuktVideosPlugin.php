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
}