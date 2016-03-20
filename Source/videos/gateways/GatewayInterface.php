<?php
namespace Dukt\Videos\Gateways;

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
	 * Requests the videos from the API
	 */
    public function getVideos($method, $options);
    
	/**
	 * Handle of the OAuth provider handle for this gateway
	 */
    public function getOauthProviderHandle();
    
    // Protected Methods
    // =========================================================================
    
    /**
     * Extracts the video ID from the video URL
     */
    protected function extractVideoIdFromUrl($url);
    
    /**
     * Returns an authenticated Guzzle client
     */
    protected function apiCreateClient();
    
    /**
     * Returns the URL format of the embed
     */
    protected function getEmbedFormat();
}
