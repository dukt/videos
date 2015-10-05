<?php
namespace Craft;

/**
 * The class name is the UTC timestamp in the format of mYYMMDD_HHMMSS_pluginHandle_migrationName
 */
class m140620_045459_videos_transfer_token extends BaseMigration
{
    /**
     * Any migration code in here is wrapped inside of a transaction.
     *
     * @return bool
     */
    public function safeUp()
    {
        $this->transferSystemToken('google', 'videos.google');
        $this->transferSystemToken('vimeo', 'videos.vimeo');

        return true;
    }

    private function saveToken($handle, $token)
    {
        craft()->videos_oauth->saveToken($handle, $token);
    }

    private function transferSystemToken($handle, $namespace)
    {
        try {

            if(file_exists(CRAFT_PLUGINS_PATH.'oauth/vendor/autoload.php'))
            {
                require_once(CRAFT_PLUGINS_PATH.'oauth/vendor/autoload.php');
            }

            if(class_exists('OAuth\OAuth2\Token\StdOAuth2Token'))
            {
                // get token record

                $row = craft()->db->createCommand()
                    ->select('*')
                    ->from('oauth_old_tokens')
                    ->where('namespace = :namespace', array(':namespace' => $namespace))
                    ->queryRow();

                if($row)
                {
                    // transform token

                    $token = @unserialize(base64_decode($row['token']));

                    if($token)
                    {
                        // oauth 2
                        $newToken = new \OAuth\OAuth2\Token\StdOAuth2Token();
                        $newToken->setAccessToken($token->access_token);
                        $newToken->setLifeTime($token->expires);

                        if (isset($token->refresh_token))
                        {
                            $newToken->setRefreshToken($token->refresh_token);
                        }

                        $this->saveToken($handle, $newToken);
                    }
                    else
                    {
                        Craft::log('Token error.', LogLevel::Error);
                    }
                }
                else
                {
                    Craft::log('Token record error.', LogLevel::Error);
                }
            }
            else
            {
                Craft::log('Class error.', LogLevel::Error);
            }
        }
        catch(\Exception $e)
        {
            Craft::log($e->getMessage(), LogLevel::Error);
        }
    }
}
