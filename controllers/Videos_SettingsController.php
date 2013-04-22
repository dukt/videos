<?php

/**
 * Craft Videos
 *
 * @package		Craft Videos
 * @version		Version 1.0
 * @author		Benjamin David
 * @copyright	Copyright (c) 2013 - DUKT
 * @link		http://dukt.net/add-ons/expressionengine/dukt-videos/
 *
 */

namespace Craft;

require(CRAFT_PLUGINS_PATH.'videos/vendor/autoload.php');


class Videos_SettingsController extends BaseController
{
	/**
	 * Action Save Service
	 */
    public function actionSaveService()
    {
        $providerClass = craft()->request->getSegment(3);

        $serviceModelClass = "\Craft\Videos_Service".$providerClass."Model";

        $model = new $serviceModelClass();

        $attributes = craft()->request->getPost('service');

        $attributes['providerClass'] = $providerClass;

        $model->setAttributes($attributes);

        if (craft()->videos->saveService($model)) {

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

		craft()->videos->setOption($option_key, 1);

		$this->redirect('videos');
    }

	// --------------------------------------------------------------------

	/**
	 * Action Disable Service
	 */
    public function actionDisableService()
    {
	    $service_key = craft()->request->getSegment(5);

	    $option_key = $service_key."_enabled";

		craft()->videos->setOption($option_key, 0);

		$this->redirect('videos');
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
        craft()->videos->connectService();
    }

    // --------------------------------------------------------------------

	/**
	 * Action Reset Service
	 */
    public function actionResetService()
    {
		$providerClass = craft()->request->getParam('providerClass');

		craft()->videos->resetService($providerClass);

		$this->redirect('videos/settings/'.$providerClass);
    }

    // --------------------------------------------------------------------

    public function actionRefreshServiceToken()
    {
        $providerClass = craft()->request->getParam('providerClass');

        craft()->videos->refreshServiceToken($providerClass);

        $this->redirect('videos/settings/'.$providerClass);
    }

	// --------------------------------------------------------------------

    private function connectService($serviceKey)
    {
	    $service = \Dukt\Videos\Common\ServiceFactory::create($serviceKey);

	    $parameters = array();
		$parameters['id'] = craft()->videos->getOption($serviceKey."_id");
		$parameters['secret'] = craft()->videos->getOption($serviceKey."_secret");

	    $service->initialize((array) $parameters);

	    $provider = \OAuth\OAuth::provider($service->getProviderClass(), array(
	        'id' => $parameters['id'],
	        'secret' => $parameters['secret'],
	        'redirect_url' => \Craft\UrlHelper::getActionUrl('videos/settings/callback/'.$serviceKey)
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

	    craft()->videos->setOption($serviceKey."_token", $parameters['token']);
        craft()->userSession->setNotice(Craft::t('Service connected.'));


	    // redirect to service

        craft()->userSession->setNotice(Craft::t('Service connected.'));

	    return $this->redirect(\Craft\UrlHelper::getUrl('videos/settings/'.$serviceKey));
    }
}