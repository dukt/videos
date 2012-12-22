<?php

namespace Blocks;

class DuktVideos_AjaxController extends BaseController
{
    public function actionEndpoint()
    {
		require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/dukt_videos_ajax.php');
		require_once(DUKT_VIDEOS_PATH.'libraries/dukt_videos_ajax_blocks.php');
		
		$ajax = new \DuktVideos\Dukt_videos_ajax_blocks();
		
		$method = $_POST['method'];
		
		if($method)
		{
			$ajax->{$method}();
		}
    }
}