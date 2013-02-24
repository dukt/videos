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

namespace Blocks;

require_once(BLOCKS_PLUGINS_PATH."duktvideos/config.php");
require_once(DUKT_VIDEOS_PATH.'libraries/app.php');

class DuktVideos_ConfigureController extends BaseController
{
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
	    		blx()->duktVideos_configure->set_option($k, $v);
	    	}
	    }
	    
	    
	    // try to connect
	    
	    $service_key = blx()->request->getSegment(5);
	    
	    if(!$service_key)
	    {
		    $service_key = $_POST['service'];
	    }

	    $this->connectService($service_key);
	    
	    
	    // redirect

		$this->redirect($_POST['redirect']);  
    }
    
	// --------------------------------------------------------------------

	/**
	 * Action Enable Service
	 */
    public function actionEnableService()
    {
	    $service_key = blx()->request->getSegment(5);
	    
	    $option_key = $service_key."_enabled";
	    
		blx()->duktVideos_configure->set_option($option_key, 1);

		$this->redirect('duktvideos'); 
    }
    
	// --------------------------------------------------------------------

	/**
	 * Action Disable Service
	 */
    public function actionDisableService()
    {
	    $service_key = blx()->request->getSegment(5);
	    
	    $option_key = $service_key."_enabled";
	    
		blx()->duktVideos_configure->set_option($option_key, 0);

		$this->redirect('duktvideos'); 
    }
    
	// --------------------------------------------------------------------

	/**
	 * Action Reset Service
	 */
    public function actionResetService()
    {
		$service_key = $_POST['service'];
		
		blx()->duktVideos_configure->reset_service($service_key);

		$this->redirect($_POST['redirect']); 
    }
    
	// --------------------------------------------------------------------

	/**
	 * Action Callback
	 */
    public function actionCallback()
    {	    
	    $service_key = blx()->request->getSegment(5);
	    
	    $services = \DuktVideos\App::get_services();
	    
	    $service = $services[$service_key];
	    
	    
		// lib & app
		
		$lib = new \DuktVideos\Lib(array('basepath' => DUKT_VIDEOS_UNIVERSAL_PATH));;
		
		$app = new \DuktVideos\App;
		
		
		// service connect callback
	    
	    $service->connect_callback($lib, $app);
    }
    
	// --------------------------------------------------------------------

	/**
	 * Connect Service
	 */
    private function connectService($service_key)
    {		
		// get service from reloaded services
		
	    $services = \DuktVideos\App::get_services();
		
		$service = $services[$service_key];
		
		
		// lib & app
		
		$lib = new \DuktVideos\Lib(array('basepath' => DUKT_VIDEOS_UNIVERSAL_PATH));;
		
		$app = new \DuktVideos\App;
		
		
		// connect
		
		$service->connect($lib, $app);
    }
}