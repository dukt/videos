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

class DuktVideosService extends BaseApplicationComponent
{
    /*
    * Retrieves a video from its URL
    *
    */
    public function url($videoUrl)
    {
        $services = $this->services();

        foreach($services as $s)
        {
            $params['url'] = $videoUrl;

            try {
                $video = $s->videoFromUrl($params);

                $video_object = new DuktVideos_VideoModel($video);


                return $video_object;

                //return $video;
            }
            catch(\Exception $e)
            {
                // return $e->getMessage();
            }
        }

        return false;
    }

    // --------------------------------------------------------------------

    /**
     * Services
     */
    public function services($service = false)
    {           
        // if (!craft()->request->isCpRequest() )
        // { 
        //     return false; 
        // }

        if($service)
        {
            return \Dukt\Videos\Common\ServiceFactory::create($service);
        }

        $allServices = array_map(
            function($className) {
                $service = \Dukt\Videos\Common\ServiceFactory::create($className);


                // Retrieve token

                $token = craft()->duktVideos->getOption($service->getName()."_token");
                $token = unserialize(base64_decode($token));

                if(!$token)
                {
                    return $service;
                }


                // Create the OAuth provider

                $parameters['id'] = craft()->duktVideos->getOption($service->getName()."_id");
                $parameters['secret'] = craft()->duktVideos->getOption($service->getName()."_secret");
                $parameters['developerKey'] = craft()->duktVideos->getOption($service->getName()."_developerKey");

                $provider = \OAuth\OAuth::provider($service->getName(), array(
                    'id' => $parameters['id'],
                    'secret' => $parameters['secret'],
                    'developerKey' => $parameters['developerKey'],
                    'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/settings/callback/'.$service->getName())
                ));


                $provider->setToken($token);


                // refresh token
                
                if(isset($token->expires))
                {
                    $remaining = $token->expires - time();

                    if($remaining < 240)
                    {
                        $accessToken = $provider->access($token->refresh_token, array('grant_type' => 'refresh_token'));


                        // save token

                        $token->access_token = $accessToken->access_token;
                        $token->expires = $accessToken->expires;


                        $remaining = $token->expires - time();

                        $serializedToken = base64_encode(serialize($token));

                        craft()->duktVideos->setOption($service->getName()."_token", $serializedToken  );
                    }
                }


                // service set provider

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
    
    // --------------------------------------------------------------------

    /**
     * Set Option
     */
    function setOption($k, $v)
    {
        $data = array(
            'option_name' => $k,
            'option_value' => $v
        );
        
        
        // get the option
        
        $option = DuktVideos_OptionRecord::model()->find('option_name=:option_name', array(':option_name' => $k));
        
        if(!$option)
        {
            // insert
            
            craft()->db->createCommand()->insert('duktvideos_options', $data);
        }
        else
        {
            // update
            
            $where = array('option_name' => $k);

            craft()->db->createCommand()->update('duktvideos_options', $data, $where);
        }
    }
    
    // --------------------------------------------------------------------

    /**
     * Get Option
     */
    function getOption($k)
    {
        $option =  DuktVideos_OptionRecord::model()->find('option_name=:option_name', array(':option_name' => $k));

        if(is_object($option))
        {
            return $option->option_value;
        }
        
        return false;
    }

    // --------------------------------------------------------------------
    
    /**
     * Reset Service
     */
    function resetService($service_key)
    {       
        $condition = "option_name LIKE :match";
        
        $params = array(':match' => $service_key."%token%%");
        
        DuktVideos_OptionRecord::model()->deleteAll($condition, $params);
    }
}

