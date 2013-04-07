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

        $allServices = array_map(
            function($className) {
                $service = \Dukt\Videos\Common\ServiceFactory::create($className);


                // Retrieve token

                $token = craft()->duktVideos_configure->get_option($service->getName()."_token");
                $token = unserialize(base64_decode($token));

                if(!$token)
                {
                    return $service;
                }

                // Create the OAuth provider

                
                $parameters['id'] = craft()->duktVideos_configure->get_option($service->getName()."_id");
                $parameters['secret'] = craft()->duktVideos_configure->get_option($service->getName()."_secret");
                $parameters['developerKey'] = craft()->duktVideos_configure->get_option($service->getName()."_developerKey");

                $provider = \OAuth\OAuth::provider($service->getName(), array(
                    'id' => $parameters['id'],
                    'secret' => $parameters['secret'],
                    'developerKey' => $parameters['developerKey'],
                    'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$service->getName())
                ));


                $provider->setToken($token);

                $service->setProvider($provider);

                return $service;
            },

            \Dukt\Videos\Common\ServiceFactory::find()
        );

        $services = array();

        foreach($allServices as $s)
        {
            array_push($services, $s);
        }

        return $services;
    }
}

