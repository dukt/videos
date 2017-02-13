<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\base;

/**
 * GatewayInterface defines the common interface to be implemented by gateway classes.
 *
 * @author Dukt <support@dukt.net>
 * @since  2.0
 */
interface GatewayInterface
{
    // Public Methods
    // =========================================================================

	/**
	 * Returns the name of the gateway
	 */
    public function getName();
	
	/**
	 * Returns the sections for the explorer
	 */
    public function getExplorerSections();
    
	/**
	 * Requests the video from the API and then returns it as video object
	 */
    public function getVideoById($id);
    
    /**
     * Returns the URL format of the embed
     */
    public function getEmbedFormat();
    
    /**
     * Extracts the video ID from the video URL
     */
    public function extractVideoIdFromUrl($url);
}
