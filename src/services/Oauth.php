<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2018, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\services;

use Craft;
use League\OAuth2\Client\Token\AccessToken;
use yii\base\Component;
use dukt\videos\Plugin as VideosPlugin;
use League\OAuth2\Client\Grant\RefreshToken;

/**
 * Class Oauth service.
 *
 * An instance of the Oauth service is globally accessible via [[Plugin::oauth `VideosPlugin::$plugin->getOauth()`]].
 *
 * @author Dukt <support@dukt.net>
 * @since  2.0
 */
class Oauth extends Component
{
    // Public Methods
    // =========================================================================

    /**
     * Create token from data.
     *
     * @param string $gatewayHandle
     * @param array  $data
     * @param bool   $refreshToken
     *
     * @return AccessToken|null
     * @throws \yii\base\InvalidConfigException
     */
    public function createTokenFromData(string $gatewayHandle, array $data, $refreshToken = true)
    {
        if (isset($data['accessToken'])) {
            $token = new AccessToken([
                'access_token' => $data['accessToken'] ?? null,
                'expires' => $data['expires'] ?? null,
                'refresh_token' => $data['refreshToken'] ?? null,
                'resource_owner_id' => $data['resourceOwnerId'] ?? null,
                'values' => $data['values'] ?? null,
            ]);

            if ($refreshToken && !empty($token->getRefreshToken()) && $token->getExpires() && $token->hasExpired()) {
                $gateway = VideosPlugin::$plugin->getGateways()->getGateway($gatewayHandle);
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

                VideosPlugin::$plugin->getOauth()->saveToken($gateway->getHandle(), $token);
            }

            return $token;
        }

        return null;
    }

    /**
     * Get token from gateway handle.
     *
     * @param $gatewayHandle
     *
     * @return AccessToken|null
     * @throws \yii\base\InvalidConfigException
     */
    public function getToken($gatewayHandle)
    {
        $tokenData = $this->getTokenData($gatewayHandle);

        if ($tokenData) {
            return $this->createTokenFromData($gatewayHandle, $tokenData);
        }

        return null;
    }

    /**
     * Returns token data from settings.
     *
     * @param $handle
     *
     * @return array|null
     */
    public function getTokenData($handle)
    {
        $plugin = Craft::$app->getPlugins()->getPlugin('videos');
        $settings = $plugin->getSettings();
        $tokens = $settings->tokens;

        if (isset($tokens[$handle])) {
            return $tokens[$handle];
        }

        return null;
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
