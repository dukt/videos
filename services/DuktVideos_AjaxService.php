<?php


/**
 * Dukt Videos
 *
 * @package     Dukt Videos
 * @version     Version 1.0
 * @author      Benjamin David
 * @copyright   Copyright (c) 2013 - DUKT
 * @link        http://dukt.net/add-ons/expressionengine/dukt-videos/
 *
 */

namespace Craft;


class DuktVideos_AjaxService extends BaseApplicationComponent
{   
    public function services($service = false)
    {           
        if (!craft()->request->isCpRequest() )
        { 
            return false; 
        }

        if($service)
        {
            return \Dukt\Videos\Common\ServiceFactory::create($service);
        }

        $services = array_map(
            function($className) {
                return \Dukt\Videos\Common\ServiceFactory::create($className);
            },

            \Dukt\Videos\Common\ServiceFactory::find()
        );


        return $services;
    }
}

