<?php

namespace Blocks;

class DuktVideos_ConfigureController extends BaseController
{
	var $dukt_lib;
	var $dukt_videos;
	var $services;
    
	// --------------------------------------------------------------------
	
	public function __construct()
	{
		// load libs
		
		require_once(DUKT_VIDEOS_PATH.'libraries/dukt_videos_app.php');		

		require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/dukt_lib.php');
		
		$this->dukt_lib = new \DuktVideos\Dukt_lib(array('basepath' => DUKT_VIDEOS_UNIVERSAL_PATH));;
		
		$this->dukt_videos = new \DuktVideos\Dukt_videos_app;
		
		
		// load services
		
		$this->services = $this->dukt_videos->get_services();
	}
	
	// --------------------------------------------------------------------
	
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
    
    public function actionEnableService()
    {
	    $service_key = blx()->request->getSegment(5);
	    
	    $option_key = $service_key."_enabled";
	    
		blx()->duktVideos_configure->set_option($option_key, 1);

		$this->redirect('duktvideos'); 
    }
    
	// --------------------------------------------------------------------
    
    public function actionDisableService()
    {
	    $service_key = blx()->request->getSegment(5);
	    
	    $option_key = $service_key."_enabled";
	    
		blx()->duktVideos_configure->set_option($option_key, 0);

		$this->redirect('duktvideos'); 
    }
    
	// --------------------------------------------------------------------
    
    public function actionResetService()
    {
		$service_key = $_POST['service'];
		
		blx()->duktVideos_configure->reset_service($service_key);

		$this->redirect($_POST['redirect']); 
    }
    
	// --------------------------------------------------------------------
    
    public function actionCallback()
    {	    
	    $service_key = blx()->request->getSegment(5);
	    
	    $service = $this->services[$service_key];
	    
	    $service->connect_callback($this->dukt_lib, $this->dukt_videos);
    }
    
	// --------------------------------------------------------------------
    
    private function connectService($service_key)
    {		
		// get service from reloaded services
		
		$this->services = $this->dukt_videos->get_services();
		
		$service = $this->services[$service_key];
		
		
		// connect
		
		$service->connect($this->dukt_lib, $this->dukt_videos);
    }
}