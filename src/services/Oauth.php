<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\services;

use Craft;
use League\OAuth2\Client\Token\AccessToken;
use yii\base\Component;
use dukt\videos\Plugin as Videos;

/**
 * Class Oauth service.
 *
 * An instance of the Oauth service is globally accessible via [[Plugin::oauth `Videos::$plugin->getOauth()`]].
 *
 * @author Dukt <support@dukt.net>
 * @since  2.0
 */
class Oauth extends Component
{
    // Public Methods
    // =========================================================================

	/**
	 * Saves a token
	 *
	 * @param $handle
	 * @param $token
	 */
	public function saveToken($handle, AccessToken $token)
    {
        $handle = strtolower($handle);

        // get plugin
        $plugin = Craft::$app->plugins->getPlugin('videos');

        // get settings
        $settings = $plugin->getSettings();

        // get tokens
        $tokens = $settings->tokens;

        if(!is_array($tokens))
        {
            $tokens = [];
        }

        // set token ID
        $tokens[$handle] = [
            'accessToken' => $token->getToken(),
            'expires' => $token->getExpires(),
            'refreshToken' => $token->getRefreshToken(),
            'resourceOwnerId' => $token->getResourceOwnerId(),
            'values' => $token->getValues(),
        ];

        // save plugin settings
        $settings->tokens = $tokens;

        Craft::$app->plugins->savePluginSettings($plugin, $settings->getAttributes());
    }

	/**
	 * Deletes a token
	 *
	 * @param $handle
	 */
	public function deleteToken($handle)
    {
        $handle = strtolower($handle);

        // get plugin
        $plugin = Craft::$app->plugins->getPlugin('videos');

        // get settings
        $settings = $plugin->getSettings();

        // get tokens
        $tokens = $settings->tokens;

        // get token

        if(!empty($tokens[$handle]))
        {
            unset($tokens[$handle]);

            // save plugin settings
            $settings->tokens = $tokens;
            Craft::$app->plugins->savePluginSettings($plugin, $settings->getAttributes());
        }
    }
}
