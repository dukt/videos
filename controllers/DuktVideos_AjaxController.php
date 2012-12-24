<?php

namespace Blocks;

require_once(DUKT_VIDEOS_PATH.'libraries/ajax.php');

class DuktVideos_AjaxController extends BaseController
{
    public function actionEndpoint()
    {		
		$ajax = new \DuktVideos\Ajax_blocks();
		
		$method = $_POST['method'];
		
		if($method)
		{
			$ajax->{$method}();
		}
    }
}