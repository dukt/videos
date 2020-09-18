<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2020, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\base;

use dukt\videos\Plugin as Videos;

/**
 * PluginTrait implements the common methods and properties for plugin classes.
 *
 * @property \dukt\videos\services\Videos   $videos     The videos service
 * @property \dukt\videos\services\Cache    $cache      The cache service
 * @property \dukt\videos\services\Gateways $gateways   The gateways service
 * @property \dukt\videos\services\Oauth    $oauth      The oauth service
 */
trait PluginTrait
{
    /**
     * Returns the videos service.
     *
     * @return \dukt\videos\services\Videos The videos service
     * @throws \yii\base\InvalidConfigException
     */
    public function getVideos(): \dukt\videos\services\Videos
    {
        /** @var Videos $this */
        return $this->get('videos');
    }

    /**
     * Returns the cache service.
     *
     * @return \dukt\videos\services\Cache The cache service
     * @throws \yii\base\InvalidConfigException
     */
    public function getCache(): \dukt\videos\services\Cache
    {
        /** @var Videos $this */
        return $this->get('cache');
    }

    /**
     * Returns the gateways service.
     *
     * @return \dukt\videos\services\Gateways The gateways service
     * @throws \yii\base\InvalidConfigException
     */
    public function getGateways(): \dukt\videos\services\Gateways
    {
        /** @var Videos $this */
        return $this->get('gateways');
    }

    /**
     * Returns the oauth service.
     *
     * @return \dukt\videos\services\Oauth The oauth service
     * @throws \yii\base\InvalidConfigException
     */
    public function getOauth(): \dukt\videos\services\Oauth
    {
        /** @var Videos $this */
        return $this->get('oauth');
    }

    /**
     * Returns the tokens service.
     *
     * @return \dukt\videos\services\Tokens The tokens service
     * @throws \yii\base\InvalidConfigException
     */
    public function getTokens(): \dukt\videos\services\Tokens
    {
        /** @var Videos $this */
        return $this->get('tokens');
    }
}
