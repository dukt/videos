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
        $class = craft()->request->getSegment(3);
        
        $model = new DuktVideos_ServiceModel();



        $attributes = craft()->request->getPost('service');
        
        $attributes['providerClass'] = $class;

        $model->setAttributes($attributes);


        if (craft()->duktVideos->saveService($model)) {

            craft()->userSession->setNotice(Craft::t('Service saved.'));

            $this->redirectToPostedUrl();
        } else {

            craft()->userSession->setError(Craft::t("Couldn't save service."));

            craft()->urlManager->setRouteVariables(array('service' => $model));
        }
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


    public function actionServiceCallback()
    {
        craft()->duktVideos->connectService();
    }
    
    // --------------------------------------------------------------------

	/**
	 * Action Reset Service
	 */
    public function actionResetService()
    {
		$providerClass = craft()->request->getParam('providerClass');
		
		craft()->duktVideos->resetService($providerClass);

		$this->redirect('duktvideos/settings/'.$providerClass); 
    }

    // --------------------------------------------------------------------
    
    public function actionRefreshServiceToken()
    {
        $providerClass = craft()->request->getParam('providerClass');

        craft()->duktVideos->refreshServiceToken($providerClass);

        $this->redirect('duktvideos/settings/'.$providerClass); 
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