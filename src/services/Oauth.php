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
use League\OAuth2\Client\Grant\RefreshToken;

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
     * Create token from data (array)
     *
     * @param string $gatewayHandle
     * @param array $data
     * @param bool $refreshToken
     *
     * @return AccessToken
     */
    public function createTokenFromData(string $gatewayHandle, array $data, $refreshToken = true)
    {
        if (isset($data['accessToken'])) {
            $token = new AccessToken([
                'access_token' => (isset($data['accessToken']) ? $data['accessToken'] : null),
                'expires' => (isset($data['expires']) ? $data['expires'] : null),
                'refresh_token' => (isset($data['refreshToken']) ? $data['refreshToken'] : null),
                'resource_owner_id' => (isset($data['resourceOwnerId']) ? $data['resourceOwnerId'] : null),
                'values' => (isset($data['values']) ? $data['values'] : null),
            ]);

            if ($refreshToken && !empty($token->getRefreshToken()) && $token->getExpires() && $token->hasExpired()) {
                $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle);
                $provider = $gateway->getOauthProvider();
                $grant = new RefreshToken();
                $newToken = $provider->getAccessToken($grant, ['refresh_token' => $token->getRefreshToken()]);

                $token = new AccessToken([
                    'access_token' => $newToken->getToken(),
                    'expires' => $newToken->getExpires(),
                    'refresh_token' => $token->getRefreshToken(),
                    'resource_owner_id' => $newToken->getResourceOwnerId(),
                    'values' => $newToken->getValues(),
                ]);

                Videos::$plugin->getOauth()->saveToken($gateway->getHandle(), $token);
            }

            return $token;
        }
    }

    /**
     * Get token from gateway handle.
     *
     * @param $handle
     *
     * @return mixed
     */
    public function getToken($gatewayHandle)
    {
        $tokenData = $this->getTokenData($gatewayHandle);

        return $this->createTokenFromData($gatewayHandle, $tokenData);
    }

    /**
     * Returns token data from settings.
     *
     * @param $handle
     *
     * @return mixed
     */
    public function getTokenData($handle)
    {
        $plugin = Craft::$app->getPlugins()->getPlugin('videos');
        $settings = $plugin->getSettings();
        $tokens = $settings->tokens;

        if(isset($tokens[$handle])) {
            return $tokens[$handle];
        }
    }

    /**
     * Saves a token.
     *
     * @param $handle
     * @param $token
     */
    public function saveToken($handle, AccessToken $token)
    {
        $handle = strtolower($handle);

        // get plugin
        $plugin = Craft::$app->getPlugins()->getPlugin('videos');

        // get settings
        $settings = $plugin->getSettings();

        // get tokens
        $tokens = $settings->tokens;

        if (!is_array($tokens)) {
            $tokens = [];
        }

        // set token
        $tokens[$handle] = [
            'accessToken' => $token->getToken(),
            'expires' => $token->getExpires(),
            'resourceOwnerId' => $token->getResourceOwnerId(),
            'values' => $token->getValues(),
        ];

        if (!empty($token->getRefreshToken())) {
            $tokens[$handle]['refreshToken'] = $token->getRefreshToken();
        }

        // save plugin settings
        $settings->tokens = $tokens;

        Craft::$app->getPlugins()->savePluginSettings($plugin, $settings->getAttributes());
    }

    /**
     * Deletes a token.
     *
     * @param $handle
     */
    public function deleteToken($handle)
    {
        $handle = strtolower($handle);

        // get plugin
        $plugin = Craft::$app->getPlugins()->getPlugin('videos');

        // get settings
        $settings = $plugin->getSettings();

        // get tokens
        $tokens = $settings->tokens;

        // get token

        if (!empty($tokens[$handle])) {
            unset($tokens[$handle]);

            // save plugin settings
            $settings->tokens = $tokens;
            Craft::$app->getPlugins()->savePluginSettings($plugin, $settings->getAttributes());
        }
    }
}
