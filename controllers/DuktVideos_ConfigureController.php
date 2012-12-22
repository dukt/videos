<?php

namespace Blocks;

class DuktVideos_ConfigureController extends BaseController
{
	var $dukt_lib;
	var $dukt_videos;
	var $services;
	
    public function actionSaveService()
    {
    	$this->load_libs();
    	
    	// save options
    	
	    if(isset($_POST['options']))
	    {
	    	foreach($_POST['options'] as $k => $v)
	    	{
	    		$data = array(
	    			'option_name' => $k,
	    			'option_value' => $v
	    		);

	    		$option = DuktVideos_OptionRecord::model()->find('option_name=:option_name', array(':option_name' => $k));
	    		
	    		if(!$option)
	    		{
		    		// insert
		    		
		    		blx()->db->createCommand()->insert('duktvideos_options', $data);
	    		}
	    		else
	    		{
		    		// update
		    		
		    		$where = array('option_name' => $k);

		    		blx()->db->createCommand()->update('duktvideos_options', $data, $where);
	    		}
	    	}
	    }
	    
	    
	    // try to connect
	    
	    $this->connectService($_POST['service']);
	    
	    
	    // redirect

		$this->redirect($_POST['redirect']);  
    }
    
    public function actionResetService()
    {
		$service_key = $_POST['service'];
		
		$condition = "option_name LIKE :match";
		
		$params = array(':match' => $service_key."%token%%");
		
	    DuktVideos_OptionRecord::model()->deleteAll($condition, $params);
	    
	    // redirect

		$this->redirect($_POST['redirect']); 
    }
    
    public function actionCallback()
    {
	    $this->load_libs();
	    
	    $service_key = blx()->request->getSegment(5);
	    
	    $service = $this->services[$service_key];
	    
	    $service->connect_callback($this->dukt_lib, $this->dukt_videos);
    }
    
    private function load_libs()
    {
		require_once(DUKT_VIDEOS_PATH.'libraries/dukt_videos_app.php');		

		require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/dukt_lib.php');
		
		$this->dukt_lib = new \DuktVideos\Dukt_lib(array('basepath' => DUKT_VIDEOS_UNIVERSAL_PATH));;
		
		$this->dukt_videos = new \DuktVideos\Dukt_videos_app;
		
		$this->services = $this->dukt_videos->get_services();
    }
    
    private function connectService($service_key)
    {		
		$service = $this->services[$service_key];
		
		$service->connect($this->dukt_lib, $this->dukt_videos);
    }
}