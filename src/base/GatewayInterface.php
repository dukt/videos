<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2020, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\base;

use dukt\videos\models\Video;

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
     * Returns the OAuth provider’s instance.
     *
     * @param array $options
     */
    public function createOauthProvider(array $options);

    /**
     * Returns the OAuth provider’s API console URL.
     *
     * @return string
     */
    public function getOauthProviderApiConsoleUrl(): string;

    /**
     * Returns the name of the gateway.
     *
     * @return string
     */
    public function getName(): string;

    /**
     * Returns the sections for the explorer
     *
     * @return array
     */
    public function getExplorerSections(): array;

    /**
     * Return the icon’s alias.
     *
     * @return string
     */
    public function getIconAlias(): string;

    /**
     * Requests the video from the API and then returns it as video object.
     *
     * @param string $id
     *
     * @return Video
     */
    public function getVideoById(string $id): Video;

    /**
     * Returns the URL format of the embed.
     *
     * @return string
     */
    public function getEmbedFormat(): string;

    /**
     * Extracts the video ID from the video URL.
     *
     * @param string $url
     *
     * @return bool|string
     */
    public function extractVideoIdFromUrl(string $url);
}
