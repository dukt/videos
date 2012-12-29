<?

/**
 * Dukt Videos
 *
 * @package		Dukt Videos
 * @version		Version 1.0b1
 * @author		Benjamin David
 * @copyright	Copyright (c) 2012 - DUKT
 * @link		http://dukt.net/videos/
 *
 */
 
namespace DuktVideos;

require_once(DUKT_VIDEOS_UNIVERSAL_PATH.'libraries/ajax.php');
require_once(DUKT_VIDEOS_PATH.'libraries/app.php');
 
class Ajax_blocks extends Ajax {

	public function __construct()
	{
		parent::__construct();
	}
	
	// --------------------------------------------------------------------
	
	public function field_preview()
	{
		$services = \DuktVideos\App::get_services();;
		
		$video_url = $this->lib->input_post('video_page');
		
		
		// get video
		
		$vars['video'] = \DuktVideos\App::get_video($video_url);
		
		
		// get embed
				
		$embed_options = array(
			'width' => 500,
			'height' => 282,
			'autohide' => true
		);
		
		$service = $services[$vars['video']['service_key']];
		
		$vars['embed'] = $service->get_embed($vars['video']['id'], $embed_options);
    	
		echo $this->lib->load_view('field/preview', $vars, true, 'expressionengine');
		
		exit;
	}
}