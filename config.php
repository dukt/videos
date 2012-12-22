<?php

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

if (! defined('DUKT_VIDEOS_NAME'))
{
	define('DUKT_VIDEOS_NAME', 'Dukt Videos');
	define('DUKT_VIDEOS_VERSION',  '1.0');
	define('DUKT_VIDEOS_PATH',  BLOCKS_PLUGINS_PATH.'duktvideos/');
	define('DUKT_VIDEOS_UNIVERSAL_PATH',  DUKT_VIDEOS_PATH.'third_party/dukt-videos-universal/');
}

//require_once PATH_THIRD.'videoplayer/config.php';

// NSM Addon Updater
$config['name'] = DUKT_VIDEOS_NAME;
$config['version'] = DUKT_VIDEOS_VERSION;

$config['nsm_addon_updater']['versions_xml'] = 'http://dukt.net/addons/expressionengine/videos/release-notes.rss';
