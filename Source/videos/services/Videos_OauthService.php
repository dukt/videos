<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_OauthService extends BaseApplicationComponent
{
    // Properties
    // =========================================================================

    private $tokens;

    // Public Methods
    // =========================================================================

    /**
     * Get OAuth Token
     */
    public function getToken($handle)
    {
        if(!empty($this->tokens[$handle]))
        {
            return $this->tokens[$handle];
        }
        else
        {
            // get plugin
            $plugin = craft()->plugins->getPlugin('videos');

            // get settings
            $settings = $plugin->getSettings();

            // get tokens
            $tokens = $settings['tokens'];

            if(!empty($settings['tokens'][$handle]))
            {
                // get tokenId
                $tokenId = $tokens[$handle];

                // get token

                if(isset(craft()->oauth))
                {
                    $token = craft()->oauth->getTokenById($tokenId);

                    if($token)
                    {
                        $this->tokens[$handle] = $token;
                        return $this->tokens[$handle];
                    }
                }
            }
        }
    }

    /**
     * Save OAuth Token
     */
    public function saveToken($handle, $token)
    {
        $handle = strtolower($handle);

        // get plugin
        $plugin = craft()->plugins->getPlugin('videos');

        // get settings
        $settings = $plugin->getSettings();

        // get tokens
        $tokens = $settings['tokens'];

        // get token

        if(!empty($tokens[$handle]))
        {
            // get tokenId
            $tokenId = $tokens[$handle];

            // get token
            // $model = craft()->oauth->getTokenById($tokenId);
            // $token->id = $tokenId;
            $existingToken = craft()->oauth->getTokenById($tokenId);
        }


        if(!$token)
        {
            $token = new Oauth_TokenModel;
        }

        if(isset($existingToken))
        {
            $token->id = $existingToken->id;
        }

        $token->providerHandle = $handle;
        $token->pluginHandle = 'videos';


        // save token
        craft()->oauth->saveToken($token);

        // set token ID
        $tokens[$handle] = $token->id;

        // save plugin settings
        $settings['tokens'] = $tokens;
        craft()->plugins->savePluginSettings($plugin, $settings);
    }

    /**
     * Delete Token
     */
    public function deleteToken($handle)
    {
        $handle = strtolower($handle);

        // get plugin
        $plugin = craft()->plugins->getPlugin('videos');

        // get settings
        $settings = $plugin->getSettings();

        // get tokens
        $tokens = $settings['tokens'];

        // get token

        if(!empty($tokens[$handle]))
        {
            // get tokenId
            $tokenId = $tokens[$handle];

            // get token
            $token = craft()->oauth->getTokenById($tokenId);

            if($token)
            {
                craft()->oauth->deleteToken($token);
            }

            unset($tokens[$handle]);

            // save plugin settings
            $settings['tokens'] = $tokens;
            craft()->plugins->savePluginSettings($plugin, $settings);
        }
    }
}
