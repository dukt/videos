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
    protected $serviceRecord;

    public function __construct($serviceRecord = null)
    {
        $this->serviceRecord = $serviceRecord;
        if (is_null($this->serviceRecord)) {
            $this->serviceRecord = DuktVideos_ServiceRecord::model();
        }
    }
    function refreshServiceToken($providerClass)
    {
        $record = DuktVideos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));

        $token = unserialize(base64_decode($record->token));
        

        $parameters = array();
        $parameters['id'] = $record->clientId;
        $parameters['secret'] = $record->clientSecret;

        $provider = \OAuth\OAuth::provider($providerClass, array(
            'id' => $parameters['id'],
            'secret' => $parameters['secret'],
            'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/settings/callback/'.$providerClass)
        ));

        // only refresh if the provider implements access

        if(method_exists($provider, 'access'))
        {
            $accessToken = $provider->access($token->refresh_token, array('grant_type' => 'refresh_token'));


            // save token

            $token->access_token = $accessToken->access_token;
            $token->expires = $accessToken->expires;

            $token = base64_encode(serialize($token));

            $record->token = $token;

            $record->save();
        }

        return $record;
    }
    
    function serviceSupportsRefresh($providerClass)
    {
        $record = DuktVideos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));

        if(!$record)
        {
          return false;
        }

        $token = unserialize(base64_decode($record->token));

        if(isset($token->refresh_token))
        {
          return true;
        }
        
        return false;
    }

    function serviceTokenExpires($providerClass)
    {
        $record = DuktVideos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));

        if(!$record)
        {
          return false;
        }

        $token = unserialize(base64_decode($record->token));

        $expires = ($token->expires - time());

        return $expires;
    }

    public function saveService(DuktVideos_ServiceModel &$model)
    {
        $class = $model->getAttribute('providerClass');

        if (null === ($record = DuktVideos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $class)))) {
            $record = $this->serviceRecord->create();
        }

        $params = $model->getAttributes();
        
        $record->setAttributes($model->getAttributes());

        $record->params = $model->getAttribute('params');

        if ($record->save()) {
            // update id on model (for new records)

            $model->setAttribute('id', $record->getAttribute('id'));

            // Connect Service

           $this->connectService($record);

            return true;
        } else {

            $model->addErrors($record->getErrors());

            return false;
        }
    }



    public function connectService($record = false)
    {
        if(!$record)
        {
            $class = craft()->request->getParam('providerClass');

            $record = DuktVideos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $class));
        }


        $providerClass = $record->providerClass;

        $provider = \OAuth\OAuth::provider($providerClass, array(
            'id' => $record->clientId,
            'secret' => $record->clientSecret,
            'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/settings/serviceCallback/', array('providerClass' => $providerClass))
        ));

        $provider = $provider->process(function($url, $token = null) {

            if ($token) {
                $_SESSION['token'] = base64_encode(serialize($token));
            }

            header("Location: {$url}");

            exit;

        }, function() {
            return unserialize(base64_decode($_SESSION['token']));
        });


        $token = $provider->token();

        $record->token = base64_encode(serialize($token));

        $record->save();


        craft()->request->redirect(UrlHelper::getUrl('duktvideos/settings/'.$providerClass));

    }

    public function getServiceRecord($providerClass)
    {
        // get the option
        
        $record = DuktVideos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));

        if ($record) {

            return DuktVideos_ServiceModel::populateModel($record);
        }

        return false;
    }

    public function getServiceByProviderClass($providerClass)
    {        
        
        // get the option
        
        $record = DuktVideos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));

        if ($record) {

            return DuktVideos_ServiceModel::populateModel($record);
        }

        return new DuktVideos_ServiceModel();
    }

    public function url($videoUrl)
    {
        $services = $this->services();

        foreach($services as $s)
        {

            $params['url'] = $videoUrl;

            try {
                
                $video = $s->videoFromUrl($params);

                if($video)
                {

                    $video_object = new DuktVideos_VideoModel($video);

                    return $video_object;
                }

                //return $video;
            }
            catch(\Exception $e)
            {

                //return $e->getMessage();
            }
        }


        return false;
    }

    // --------------------------------------------------------------------
    public function servicesRecords()
    {
        $records = DuktVideos_ServiceRecord::model()->findAll();

        return $records;
    }
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

                $record = DuktVideos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $className));

                $token = $record->token;
                $token = unserialize(base64_decode($token));

                if(!$token)
                {
                    return $service;
                }


                // Create the OAuth provider

                $parameters['id'] = $record->clientId;
                $parameters['secret'] = $record->clientSecret;

                $parameters['developerKey'] = "";

                if(isset($record->params['developerKey']))
                {
                    $parameters['developerKey'] = $record->params['developerKey'];    
                }
                

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
    function resetService($providerClass)
    {       
        $record = DuktVideos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));
        $record->token = NULL;
        return $record->save();

    }
}

