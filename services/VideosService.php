<?php

/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://dukt.net/addons/craft/videos/license
 * @link      http://dukt.net/addons/craft/videos/
 */

namespace Craft;

class VideosService extends BaseApplicationComponent
{
    protected $serviceRecord;

    // --------------------------------------------------------------------

    // construct (with Videos_ServiceRecord initialization)

    public function __construct($serviceRecord = null)
    {
        $this->serviceRecord = $serviceRecord;

        if (is_null($this->serviceRecord)) {
            $this->serviceRecord = Videos_ServiceRecord::model();
        }
    }

    // --------------------------------------------------------------------

    // returns: config array

    public function config()
    {
        require(CRAFT_PLUGINS_PATH."videos/config.php");

        return $config;

        return craft()->videos->getService($providerClass);
    }

    // --------------------------------------------------------------------

    // returns : Videos_ServiceRecord

    function refreshServiceToken($providerClass)
    {
        $record = Videos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));

        $token = unserialize(base64_decode($record->token));

        $provider = \OAuth\OAuth::provider($providerClass, array(
            'id' => $record->params['clientId'],
            'secret' => $record->params['clientSecret'],
            'redirect_url' => \Craft\UrlHelper::getActionUrl('videos/settings/callback/'.$providerClass)
        ));

        // only refresh if the provider implements access

        if(method_exists($provider, 'access')) {
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

    // --------------------------------------------------------------------

    // returns : true/false

    public function saveService(&$model)
    {
        $class = $model->getAttribute('providerClass');

        if (null === ($record = Videos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $class)))) {
            $record = $this->serviceRecord->create();
        }

        $params = $model->getAttributes();

        $record->setAttributes($model->getAttributes());
        $record->params = $model->getAttribute('params');

        //var_dump($model->getAttribute('params'));

        if ($record->save()) {
            // update id on model (for new records)

            $model->setAttribute('id', $record->getAttribute('id'));

            // Connect Service

           $this->connectService($record);

            return true;

        } else {
            //echo "no";

            var_dump($record->getErrors());

            $model->addErrors($record->getErrors());

            return false;
        }
    }

    // --------------------------------------------------------------------

    // redirects / serialized token

    public function connectService($record = false)
    {
        if(!$record)
        {
            $class = craft()->request->getParam('providerClass');

            $record = Videos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $class));
        }


        $providerClass = $record->providerClass;

        $provider = \OAuth\OAuth::provider($providerClass, array(
            'id' => $record->params['clientId'],
            'secret' => $record->params['clientSecret'],
            'redirect_url' => \Craft\UrlHelper::getActionUrl('videos/settings/serviceCallback/', array('providerClass' => $providerClass))
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

        craft()->request->redirect(UrlHelper::getUrl('videos/settings/'.$providerClass));

    }

    // --------------------------------------------------------------------

    // returns: \Dukt\Videos\[providerClass]\Service

    public function serviceLibrary($providerClass)
    {
        $service = \Dukt\Videos\Common\ServiceFactory::create($providerClass);

        return $service;
    }

    // --------------------------------------------------------------------

    // returns : Videos_Service[providerClass]Model

    public function getService($providerClass)
    {
        $serviceModelClass = "\Craft\Videos_Service".$providerClass."Model";

        // get the option

        $record = Videos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));

        if ($record) {

            return $serviceModelClass::populateModel($record);
        }

        return new $serviceModelClass();
    }

    // --------------------------------------------------------------------

    // returns : single or multiple Videos_ServiceRecord

    public function servicesRecords()
    {
        $records = Videos_ServiceRecord::model()->findAll();

        return $records;
    }

    // --------------------------------------------------------------------

    // returns : single or multiple *initialized* \Dukt\Videos\[providerClass]\Service

    public function servicesObjects()
    {
        // if (!craft()->request->isCpRequest() )
        // {
        //     return false;
        // }

        $allServices = array_map(
            function($className) {
                $service = \Dukt\Videos\Common\ServiceFactory::create($className);


                // Retrieve token

                $record = Videos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $className));

                if(!$record)
                {
                    // return service, unauthenticated

                    return $service;
                }

                $token = $record->token;
                $token = unserialize(base64_decode($token));

                $service->initialize($record->params);

                if(!$token)
                {
                    return $service;
                }



                // Create the OAuth provider

                $providerParams = array(
                    'id' => $record->params['clientId'],
                    'secret' => $record->params['clientSecret'],
                    'redirect_url' => \Craft\UrlHelper::getActionUrl('videos/settings/callback/'.$service->getName())
                );

                // add custom parameters such as YT.developerKey

                //$providerParams = array_merge($providerParams, $record->params);


                // create provider

                $provider = \OAuth\OAuth::provider($service->getName(), $providerParams);


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


                        // $remaining = $token->expires - time();

                        // $serializedToken = base64_encode(serialize($token));

                        // craft()->videos->setOption($service->getName()."_token", $serializedToken  );

                        $service->token = $token;
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

    public function resetService($providerClass)
    {
        $record = Videos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));
        $record->token = NULL;
        return $record->save();
    }

    // --------------------------------------------------------------------

    // returns : Videos_VideoModel

    public function url($videoUrl)
    {
        $services = $this->servicesObjects();

        foreach($services as $s)
        {

            $params['url'] = $videoUrl;

            try {

                $video = $s->videoFromUrl($params);

                if($video)
                {

                    $video_object = new Videos_VideoModel($video);

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
}

