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

require(CRAFT_PLUGINS_PATH.'duktvideos/vendor/autoload.php');


class DuktVideos_SettingsController extends BaseController
{
	/**
	 * Action Save Service
	 */	
    public function actionSaveService()
    {
        $serviceKey = craft()->request->getSegment(3);

        // validation service options

        $options = craft()->request->getPost('options');


        // validate service parameters

        $service = craft()->duktVideos->services($serviceKey);

        $func = '\Craft\DuktVideos_Service' . $serviceKey . 'Model';

        $attributes = $func::populateModel($options);

        $validate = $attributes->validate();
        // $params = $service->getDefaultParameters();

        // save options
        
        if (isset($_POST['options'])) {
            foreach ($_POST['options'] as $k => $v) {
                craft()->duktVideos->setOption($serviceKey."_".$k, $v);
            }
        }
        
        if($validate)
        {


            
            
            // try to connect
            
            if (!$serviceKey) {
                $serviceKey = $_POST['service'];
            }

            if (isset($_POST['connect'])) {
                try {
                    $this->connectService($serviceKey);
                }
                catch(\Exception $e)
                {
                    craft()->userSession->setError(Craft::t('Couldn’t connect to service, check your credentials.'));
                }
            }


            if (isset($_POST['reset'])) {
                $this->resetService($serviceKey);
                craft()->userSession->setNotice(Craft::t('Service token reset.'));
                $this->redirectToPostedUrl();
            }

            if (isset($_POST['refresh'])) {
                $this->refreshService($serviceKey);
                craft()->userSession->setNotice(Craft::t('Service token refreshed.'));
                $this->redirectToPostedUrl();
            }
        }
        else
        {
            // craft()->userSession->setNotice(Craft::t('Email settings saved.'));
            craft()->userSession->setError(Craft::t('Couldn’t save service.'));
        }

	    // redirect

		//$this->redirect($_POST['redirect']);  
    }
    
	// --------------------------------------------------------------------

	/**
	 * Action Enable Service
	 */
    public function actionEnableService()
    {
	    $service_key = craft()->request->getSegment(5);
	    
	    $option_key = $service_key."_enabled";
	    
		craft()->duktVideos->setOption($option_key, 1);

		$this->redirect('duktvideos'); 
    }
    
	// --------------------------------------------------------------------

	/**
	 * Action Disable Service
	 */
    public function actionDisableService()
    {
	    $service_key = craft()->request->getSegment(5);
	    
	    $option_key = $service_key."_enabled";
	    
		craft()->duktVideos->setOption($option_key, 0);

		$this->redirect('duktvideos'); 
    }
    
	// --------------------------------------------------------------------

	/**
	 * Action Callback
	 */
    public function actionCallback()
    {	    
	    $serviceKey = craft()->request->getSegment(5);
	    
		$service = \Dukt\Videos\Common\ServiceFactory::create($serviceKey);


	    // save token for this provider

		$this->connectService($serviceKey);
    }
    
    // --------------------------------------------------------------------

	/**
	 * Action Reset Service
	 */
    private function resetService()
    {
		$service_key = craft()->request->getSegment(3);
		
		craft()->duktVideos->resetService($service_key);

		//$this->redirect($_POST['redirect']); 
    }

    // --------------------------------------------------------------------
    
    private function refreshService()
    {
    	$serviceKey = craft()->request->getSegment(3);

    	$token = craft()->duktVideos->getOption($serviceKey."_token");
    	$token = unserialize(base64_decode($token));

	    $parameters = array();
		$parameters['id'] = craft()->duktVideos->getOption($serviceKey."_id");
		$parameters['secret'] = craft()->duktVideos->getOption($serviceKey."_secret");

	    $provider = \OAuth\OAuth::provider($serviceKey, array(
	        'id' => $parameters['id'],
	        'secret' => $parameters['secret'],
	        'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/settings/callback/'.$serviceKey)
	    ));

	    // token

    	$accessToken = $provider->access($token->refresh_token, array('grant_type' => 'refresh_token'));


	    // save token

	    $token->access_token = $accessToken->access_token;
	    $token->expires = $accessToken->expires;

	    $token = base64_encode(serialize($token));

		craft()->duktVideos->setOption($serviceKey."_token", $token);


	    // redirect to service

	    //return $this->redirect(\Craft\UrlHelper::getUrl('duktvideos/settings/'.$serviceKey));

    }

	// --------------------------------------------------------------------

    private function connectService($serviceKey)
    {
	    $service = \Dukt\Videos\Common\ServiceFactory::create($serviceKey);

	    $parameters = array();
		$parameters['id'] = craft()->duktVideos->getOption($serviceKey."_id");
		$parameters['secret'] = craft()->duktVideos->getOption($serviceKey."_secret");

	    $service->initialize((array) $parameters);

	    $provider = \OAuth\OAuth::provider($service->getProviderClass(), array(
	        'id' => $parameters['id'],
	        'secret' => $parameters['secret'],
	        'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/settings/callback/'.$serviceKey)
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

	    // save token

	    $parameters['token'] = $provider->token();
	    $parameters['token'] = base64_encode(serialize($parameters['token']));

	    craft()->duktVideos->setOption($serviceKey."_token", $parameters['token']);
        craft()->userSession->setNotice(Craft::t('Service connected.'));


	    // redirect to service

        craft()->userSession->setNotice(Craft::t('Service connected.'));

	    return $this->redirect(\Craft\UrlHelper::getUrl('duktvideos/settings/'.$serviceKey));
    }
}