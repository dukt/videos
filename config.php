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
 
/* ------ Don't change these variable definitions ------ */

if (! defined('DUKT_VIDEOS_NAME'))
{
	define('DUKT_VIDEOS_NAME', 'Dukt Videos');
	define('DUKT_VIDEOS_VERSION',  '1.0');
	define('DUKT_VIDEOS_PATH',  CRAFT_PLUGINS_PATH.'duktvideos/');
	define('DUKT_VIDEOS_UNIVERSAL_PATH',  DUKT_VIDEOS_PATH.'third_party/dukt-videos-universal/');
}

$config['name'] = DUKT_VIDEOS_NAME;
$config['version'] = DUKT_VIDEOS_VERSION;

/* ------ Edit below this line only ------ */

$config['cache_ttl'] = 60 * 60 * 24;
$config['debug'] = true;
$config['pagination_per_page'] = 40;


/* End of file config.php */
/* Location: ./system/expressionengine/third_party/dukt_videos/config.php */
