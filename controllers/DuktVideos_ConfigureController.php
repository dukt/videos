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

require_once(CRAFT_PLUGINS_PATH."duktvideos/config.php");
require_once(DUKT_VIDEOS_PATH.'libraries/app.php');

require(CRAFT_PLUGINS_PATH.'duktvideos/vendor/autoload.php');


class DuktVideos_ConfigureController extends BaseController
{

	public function actionTest()
	{
		
		$serviceKey = craft()->request->getSegment(5);

		// Retrieve token

		$token = craft()->duktVideos_configure->get_option($serviceKey."_token");
		$token = unserialize(base64_decode($token));


		// Create the OAuth provider

		
		$parameters['id'] = craft()->duktVideos_configure->get_option($serviceKey."_id");
		$parameters['secret'] = craft()->duktVideos_configure->get_option($serviceKey."_secret");

	    $provider = \OAuth\OAuth::provider($serviceKey, array(
	        'id' => $parameters['id'],
	        'secret' => $parameters['secret'],
	        'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$serviceKey)
	    ));


		$provider->setToken($token);


		// Create video service

		$service = \Dukt\Videos\Common\ServiceFactory::create($serviceKey);
		$service->setProvider($provider);

		$userInfos = $service->userInfos();
		var_dump($userInfos);
		die();
	}
	/**
	 * Action Save Service
	 */	
    public function actionSaveService()
    {
    	// save options
    	
	    if(isset($_POST['options']))
	    {
	    	foreach($_POST['options'] as $k => $v)
	    	{
	    		craft()->duktVideos_configure->set_option($k, $v);
	    	}
	    }
	    
	    
	    // try to connect
	    
	    $service_key = craft()->request->getSegment(5);
	    
	    if(!$service_key)
	    {
		    $service_key = $_POST['service'];
	    }

	    if(isset($_POST['connect']))
	    {
	    	$this->connectService($service_key);
	    }


	    if(isset($_POST['reset']))
	    {
	    	$this->resetService($service_key);
	    }

	    if(isset($_POST['refresh']))
	    {
	    	$this->refreshService($service_key);
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
	    
		craft()->duktVideos_configure->set_option($option_key, 1);

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
	    
		craft()->duktVideos_configure->set_option($option_key, 0);

		$this->redirect('duktvideos'); 
    }
    
	// --------------------------------------------------------------------

	/**
	 * Action Reset Service
	 */
    public function resetService()
    {
		$service_key = craft()->request->getSegment(5);
		
		craft()->duktVideos_configure->reset_service($service_key);

		$this->redirect($_POST['redirect']); 
    }
    
    public function refreshService()
    {
    	$serviceKey = craft()->request->getSegment(3);
    	$token = craft()->duktVideos_configure->get_option($serviceKey."_token");
    	$token = unserialize(base64_decode($token));

	    $parameters = array();
		$parameters['id'] = craft()->duktVideos_configure->get_option($serviceKey."_id");
		$parameters['secret'] = craft()->duktVideos_configure->get_option($serviceKey."_secret");

	    $provider = \OAuth\OAuth::provider($serviceKey, array(
	        'id' => $parameters['id'],
	        'secret' => $parameters['secret'],
	        'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$serviceKey)
	    ));


    	$provider->access($token);

    	var_dump($token);
    	die();
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

    private function connectService($serviceKey)
    {
	    $service = \Dukt\Videos\Common\ServiceFactory::create($serviceKey);

	    $parameters = array();
		$parameters['id'] = craft()->duktVideos_configure->get_option($serviceKey."_id");
		$parameters['secret'] = craft()->duktVideos_configure->get_option($serviceKey."_secret");

	    $service->initialize((array) $parameters);

	    $provider = \OAuth\OAuth::provider($service->getProviderClass(), array(
	        'id' => $parameters['id'],
	        'secret' => $parameters['secret'],
	        'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$serviceKey)
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

	    craft()->duktVideos_configure->set_option($serviceKey."_token", $parameters['token']);


	    // redirect to service

	    return $this->redirect(\Craft\UrlHelper::getUrl('duktvideos/settings/'.$serviceKey));
    }
	/**
	 * Connect Service
	 */
    private function connectServiceOld($serviceKey)
    {		
		$service = \Dukt\Videos\Common\ServiceFactory::create($serviceKey);
		
		$parameters['id'] = craft()->duktVideos_configure->get_option($serviceKey."_id");
		$parameters['secret'] = craft()->duktVideos_configure->get_option($serviceKey."_secret");

	    $provider = \OAuth\OAuth::provider($service->getProviderClass(), array(
	        'id' => $parameters['id'],
	        'secret' => $parameters['secret'],
	        'redirect_url' => \Craft\UrlHelper::getActionUrl('duktvideos/configure/callback/'.$serviceKey)
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

	    // $app['session']->set($sessionVar, $parameters);

	    craft()->duktVideos_configure->set_option($serviceKey."_token", $parameters['token']);
    }
}