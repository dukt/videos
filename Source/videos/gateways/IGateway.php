<?php
namespace Dukt\Videos\Gateways;

interface IGateway
{
    // Public Methods
    // =========================================================================

	/**
	 * Returns the name of the gateway
	 */
    public function getName();
    
    /**
	 * Handle of the OAuth provider handle for this gateway
	 */
    public function getOauthProviderHandle();

	/**
	 * Returns the sections for the explorer
	 */
    public function getExplorerSections();
    
	/**
	 * Requests the video from the API and then returns it as video object
	 */
    public function getVideoById($id);
    
	/**
	 * Requests the videos from the API
	 */
    public function getVideos($method, $options);
    
    /**
     * Returns the URL format of the embed
     */
    public function getEmbedFormat();
    
    /**
     * Extracts the video ID from the video URL
     */
    public function extractVideoIdFromUrl($url);
}
