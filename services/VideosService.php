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

class VideosService extends BaseApplicationComponent
{
    // --------------------------------------------------------------------
    // declare variables

    protected $serviceRecord;
    protected $_service;

    // --------------------------------------------------------------------
    // construct (with Videos_ServiceRecord initialization)

    public function __construct($serviceRecord = null)
    {
        $this->serviceRecord = $serviceRecord;

        if (is_null($this->serviceRecord)) {
            $this->serviceRecord = Videos_ServiceRecord::model();
        }

        // $this->_service = new \Dukt\Videos\Plugin\Craft\Service\VideosService();
    }

    // --------------------------------------------------------------------

    public function render($template, $variables = array())
    {
        //return craft()->path->getSiteTemplatesPath();

        $templatePath = craft()->path->getPluginsPath().'videos/templates/';

        craft()->path->setTemplatesPath($templatePath);

        $value = craft()->templates->render($template, $variables);

        $charset = craft()->templates->getTwig()->getCharset();
        return new \Twig_Markup($value, $charset);
    }

    // --------------------------------------------------------------------

    public function app()
    {
        return $this->render('_app');
    }

    // --------------------------------------------------------------------
    // returns: config array

    public function config()
    {
        require(CRAFT_PLUGINS_PATH."videos/config.php");

        return $config;

        // return craft()->videos->getService($providerClass);
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
            return $this->connectService($record);

        } else {

            $model->addErrors($record->getErrors());

            return false;
        }
    }

    // --------------------------------------------------------------------

    // returns : single or multiple Videos_ServiceRecord

    public function servicesRecords()
    {
        $records = Videos_ServiceRecord::model()->findAll();

        return $records;
    }

    // --------------------------------------------------------------------

    public function getService($providerClass)
    {
        $serviceModelClass = "\Craft\Videos_Service".$providerClass."Model";

        // get the option

        $record = Videos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));

        if ($record) {
            return $serviceModelClass::populateModel($record);
        }

        $obj = new $serviceModelClass();

        return $obj;
    }

    // --------------------------------------------------------------------

    public function getServiceRecord($providerClass)
    {
        return Videos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));
    }

    // --------------------------------------------------------------------
    // returns: \Dukt\Videos\[providerClass]\Service

    public function serviceLibrary($providerClass)
    {
        $service = \Dukt\Videos\Common\ServiceFactory::create($providerClass);

        return $service;
    }

    // --------------------------------------------------------------------
    // redirects / serialized token

    public function connectService($record)
    {

        $return = array(
                'error' => false,
                'redirect' => false
            );

        if(!isset($_SESSION))
        {
            session_start();
        }

        $providerClass = $record->providerClass;

        $params = (array) $record->params;

        $provider = \OAuth\OAuth::provider($providerClass, array(
            'id' => $params['clientId'],
            'secret' => $params['clientSecret'],
            //'redirect_url' => $params['redirect_uri']
            'redirect_url' => $this->_redirectUrl($providerClass)
        ));





        if(!isset($_SESSION['videos.referer']))
        {
            $_SESSION['videos.referer'] = $_SERVER['HTTP_REFERER'];
        }


        try {

            $provider = @$provider->process(function($url, $token = null) {

                if ($token) {
                    $_SESSION['token'] = base64_encode(serialize($token));
                }


                header("Location: {$url}");
                exit;

            }, function() {

                $token = unserialize(base64_decode($_SESSION['token']));


                return $token;
            });


            $token = $provider->token();
            // var_dump($token);
            // die();
            $record->token = base64_encode(serialize($token));
            $record->save();

            $redirectUrl = $_SESSION['videos.referer'];

            unset($_SESSION['videos.referer']);

            //\Dukt\Videos\Plugin\ExpressionEngine\Cms::redirect($redirectUrl);

            $return['redirect'] = $redirectUrl;

            return $return;
        }
        catch(\Exception $e)
        {
            $return['error'] = true;
            $return['errorMsg'] = $e->getMessage();
            $return['redirect'] = $_SESSION['videos.referer'];

            return $return;
        }
    }

    // --------------------------------------------------------------------

    public function resetService($providerClass)
    {
        $record = Videos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));

        $record->token = NULL;

        return $record->save();
    }

    // --------------------------------------------------------------------
    // returns : Videos_ServiceRecord

   function refreshServiceToken($providerClass)
    {
        $record = Videos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));

        // params

        if(is_object($record->params)) {
            $params = (object) $record->params;
            $params = $params->getAttributes();
        } else {
            $params = $record->params;
        }

        // token

        $token = $record->token;

        if(is_string($token)) {
            $token = unserialize(base64_decode($token));
        }


        // provider

        $provider = \OAuth\OAuth::provider($providerClass, array(
            'id' => $params['clientId'],
            'secret' => $params['clientSecret'],
            'redirect_url' => $this->_redirectUrl($providerClass)
        ));

        foreach($params as $k => $v) {
            switch($k) {
                case "clientId":
                case "clientSecret";

                // ignore clientId & clientSecret

                break;

                default:
                $providerParams[$k] = $v;
            }
        }

        // only refresh if the provider implements access

//        if(method_exists($provider, 'access')) {

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
    // returns : single or multiple *initialized* \Dukt\Videos\[providerClass]\Service

    public function servicesObjects()
    {
        $wrap = $this;

        $allServices = array_map(

            function($providerClass) use ($wrap) {
                $service = \Dukt\Videos\Common\ServiceFactory::create($providerClass);

                // Retrieve token

                $record = Videos_ServiceRecord::model()->find('providerClass=:providerClass', array(':providerClass' => $providerClass));

                if(!$record) {
                    // return service, unauthenticated

                    return $service;
                }


                // let's authenticate with the token

                $token = $record->token;
                // $token = unserialize(base64_decode($token));

                // Create the OAuth provider

                if(is_object($record->params)) {
                    $params = (object) $record->params;
                    $params = $params->getAttributes();
                } else {
                    $params = $record->params;
                }

                $providerParams = array(
                    'id' => $params['clientId'],
                    'secret' => $params['clientSecret'],
                    'redirect_url' => $wrap->_redirectUrl($providerClass)
                );


                // add custom parameters such as YT.developerKey

                // $providerParams = array_merge($providerParams, $record->params);


                if ($params) {
                    foreach($params as $k => $v) {
                        switch($k) {
                            case "clientId":
                            case "clientSecret";

                            // ignore clientId & clientSecret

                            break;

                            default:
                            $providerParams[$k] = $v;
                        }
                    }
                }

                $service->initialize($params);


                if (is_string($token)) {
                    $token = unserialize(base64_decode($token));
                }

                if (!$token) {
                    return $service;
                }




                // create provider

                $provider = \OAuth\OAuth::provider($service->getName(), $providerParams);

                $provider->setToken($token);


                // refresh token

                if (isset($token->expires)) {
                    $remaining = $token->expires - time();

                    if ($remaining < 240) {
                        $accessToken = $provider->access($token->refresh_token, array('grant_type' => 'refresh_token'));

                        // save token

                        $token->access_token = $accessToken->access_token;
                        $token->expires = $accessToken->expires;

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

        foreach($allServices as $s) {
            array_push($services, $s);
        }

        return $services;
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

                if($video) {
                    $video_object = new Videos_VideoModel($video);

                    return $video_object;
                }

                //return $video;
            } catch(\Exception $e) {
                //return $e->getMessage();
            }
        }


        return null;
    }

    // --------------------------------------------------------------------

    public function _redirectUrl($providerClass)
    {
        return UrlHelper::getActionUrl('videos/settings/serviceCallback', array('providerClass' => $providerClass));
    }

}

